//-----------Load config----------------------------
const config = require('./config.json');

//-----------Load External dependencies-------------
const fs = require('fs').promises;
const path = require('path');
const pixelmatch = require('pixelmatch');
const PNG = require('pngjs').PNG;
const puppeteer = require('puppeteer');
const Window = require('window');

async function setupGlobals() {
  // const wpCli = require('wpcli').default;
  const window = new Window();
  // Registering objects in global namespace.
  global.window = window;  // like in the browser
  global.document = window.document;
  global.navigator = window.navigator;

  //-------START Define fake functions/objects--------------
  Object.defineProperty(window, 'stopCallback', {
    value: () => {
      return false;
    }
  });

  Object.defineProperty(window, 'matchMedia', {
    value: () => {
        return {
            matches: false,
            addListener: () => {
            },
            removeListener: () => {
            }
        };
    }
  });

  Object.defineProperty(window, 'getComputedStyle', {
    value: () => {
        return {
            getPropertyValue: () => {
            }
        };
    }
  });

  // Fake wp global object to allow freeform block registration.
  let wp = {};
  wp.oldEditor = {};

  const element = require('@wordpress/element');
  wp.element = element;

  console.log({element});

  window.wp = wp;


  // Fake Mousetrap needed by wordpress libs.
  let Mousetrap = require('mousetrap');
  Mousetrap.stopCallback = function (e, element, combo) {
      return false;
  };
  global.Mousetrap = Mousetrap;

  return;
}

//

console.log("Here");

console.log("Here 2");

//-----------------END define fake functions/objects-------------------------------------------

async function setupBlocks() {
  console.log("Here 4");

  //-------------Load WordPress dependencies-----------------------------
  const wpblocks = require('@wordpress/blocks');
  const block_library = require('@wordpress/block-library');

  // Register gutenberg core blocks.
  block_library.registerCoreBlocks();

  console.log("Here 5");

  // Get blocks categories.
  // Register planet4 category.
  let cat = wpblocks.getCategories();
  cat.push({slug: config.planet4_blocks_category, name: 'Planet4 Blocks'});
  wpblocks.setCategories(cat);

  require('./react-blocks/build/editorIndex.js');

  return wpblocks;
  // const eddd = require('./editorIndex');
}

async function saveScreenshot({ url, width, height, path }) {
  // Create new page.
  // Navigate to post.
  // Take a screenshot of the post.
  let page = await browser.newPage();
  await page.goto(url);
  await page.setViewport({ width, height });  // may need to adjust that for posts with much content.
  await page.screenshot({ path: path.resolve(path) });
}

//-------------Script start--------------------

// Initiliaze puppeteer instance.
let browser;
(async () => {
  // const browser = await puppeteer.launch();
  browser = await puppeteer.launch(
    {
      ignoreHTTPSErrors: true,
      headless: true
    }
  );
})();


// Get registered blocks.
//wpblocks.getBlockTypes().forEach((block) => {console.log(block.name)});

const exec = require('child_process').exec;

// Get one page using wp cli wrapper and process post.
// { cwd: config.wordpress_path }
exec('/bin/zsh /usr/local/bin/wpAlias post list --post_type=page --posts_per_page=5 --format=json --fields=ID,post_title,post_name,post_status,url,post_content', process_posts);

//-------------Script end--------------------

//-----------START functions------------------//
async function process_posts(error, stdout) {
  await setupGlobals();
  const wpBlocks = await setupBlocks();
  console.log(stdout);
  let posts = JSON.parse(stdout);
  posts.forEach(async (post) => {
    process_post(post, wpBlocks)
  });
  return;
}


/**
 * Process each post
 *
 * Take screenshot
 * Retrieve post content
 * Convert post content
 * Take screenshot after conversion
 * Compare screenshots.
 *
 * @param post
 */
async function process_post(post, wpblocks) {

  console.log("____POST____:");
  console.log(post);

  // Grab post content.
  let HTML = post.post_content;

  // console.log(HTML);

  if (HTML.indexOf('wp:') > -1) {
    console.log("Saliendo....");
    console.log("\n\n\n");
    return;
  }

    // await saveScreenshot({
    // 	url:`${config.wordpress_url}/?p=${post.ID}`,
    // 	width: 1366,
    // 	height: 1400,
    // 	path: `./screenshots/before/${post.post_name}.png`
    // });

  // console.log("page -> ALL DONE");

  // Force post_content into a core/freeform block.
  let temp = '<!-- wp:core/freeform --> \n' + HTML + '\n <!-- /wp:core/freeform -->';

  // Convert post content enclosed in `freeform` block to blocks.
  // This is happening to emulate the wordpress gutenberg editor that converts the whole post content to a single freeform block.
  // Assuming that there is no other gutenberg block in the post content,
  // this will output a single core/freeform block.
  let blocks = wpblocks.rawHandler({HTML: temp});

  // Then pass the freeform block content to rawHandler again to convert the content to individual blocks
  // and transform our shortcodes to gutenberg blocks.
  blocks = wpblocks.rawHandler({HTML: wpblocks.getBlockContent(blocks[0])});

  // Debug blocks object.
  // blocks.forEach((block) => {
  //     if (block.name.includes('planet4-blocks')) {
  //         console.log(block);
  //         block1 = block;
  //     }
  // });

  // Serialize blocks to html output.
  // wpblocks.serialize(blocks);

  console.log(wpblocks.serialize(blocks));

    /*
  await fs.writeFile("temp_converted_" + post.ID, wpblocks.serialize(blocks))
    .then(async () => {
      console.log("Successfully Written to File: " + post.ID);

      // Save converted post content to temp file.
      var absolutePath = path.resolve(config.wordpress_path + "/temp_converted_" + post.ID);

      async function takeAfterScreenshot(error, stdout) {
        // Navigate to post and take screenshot after the update of post content.
        console.log("Successfully updated post content: " + post.ID);
        console.log("Error:", error);
        console.log("STDOUT:", stdout);

        await page.goto('https://www.planet4.test/?p='+ post.ID);
        await page.screenshot({path: path.resolve(`./screenshots/after/${post.post_name}.png`)});

        // Compare before/after post screenshots.
        const diffPixels = await compareScreenshots(post.post_name);
        console.log("Pixel diff: " + diffPixels);
        resolve(diffPixels);
      }

      // Use temp file to update the post content using wp cli wrapper.
      await exec('/bin/zsh /usr/local/bin/wpAlias post update ' + post.ID + ' ' + absolutePath, takeAfterScreenshot);

    })
    .catch(er => {
      console.log(er);
        });
      */

    console.log("After write");
    return;
}


/**
 * Compare screenshots on pixel level.
 *
 * @param fileName
 * @returns {Promise<unknown>}
 */
function compareScreenshots(fileName) {
  return new Promise((resolve, reject) => {
    const img1 = fs.createReadStream(`./screenshots/before/${fileName}.png`).pipe(new PNG()).on('parsed', doneReading);
    const img2 = fs.createReadStream(`./screenshots/after/${fileName}.png`).pipe(new PNG()).on('parsed', doneReading);

    let filesRead = 0;

    function doneReading() {
      // Wait until both files are read.
      if (++filesRead < 2) return;

      // Do the visual diff.
      const diff = new PNG({width: img1.width, height: img2.height});
      const numDiffPixels = pixelmatch(
        img1.data, img2.data, diff.data, img1.width, img1.height,
        {threshold: 0.1});

      fs.writeFileSync('diff.png', PNG.sync.write(diff));
      resolve(numDiffPixels);
    }
  });
}
//-----------END functions------------------//
