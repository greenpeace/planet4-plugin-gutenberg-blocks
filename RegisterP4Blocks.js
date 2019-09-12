const articlesConfig = require('./react-blocks/src/blocks/Articles/ArticlesConfig.js');
const columnsConfig = require('./react-blocks/src/blocks/Columns/ColumnsConfig.js');
const cookiesConfig = require('./react-blocks/src/blocks/Cookies/CookiesConfig.js');
const counterConfig = require('./react-blocks/src/blocks/Counter/CounterConfig.js');
const coversConfig = require('./react-blocks/src/blocks/Covers/CoversConfig.js');
const galleryConfig = require('./react-blocks/src/blocks/Gallery/GalleryConfig.js');
const happypointConfig = require('./react-blocks/src/blocks/Happypoint/HappypointConfig.js');
const mediaConfig = require('./react-blocks/src/blocks/Media/MediaConfig.js');
const socialMediaConfig = require('./react-blocks/src/blocks/Socialmedia/SocialMediaConfig.js');
const splitTwoColumnsConfig = require('./react-blocks/src/blocks/Splittwocolumns/SplittwocolumnsConfig.js');
const submenuConfig = require('./react-blocks/src/blocks/Submenu/SubmenuConfig.js');
const timelineConfig = require('./react-blocks/src/blocks/Timeline/TimelineConfig.js');

const blockDefinitions = [
  articlesConfig,
  columnsConfig,
  cookiesConfig,
  counterConfig,
  coversConfig,
  galleryConfig,
  happypointConfig,
  mediaConfig,
  socialMediaConfig,
  splitTwoColumnsConfig,
  submenuConfig,
  timelineConfig,
];

function registerP4Blocks(wpblocks) {
  blockDefinitions.forEach(blockDefinition => {
    console.log(`Registering ${blockDefinition.shortCodeTag}...`)

    wpblocks.registerBlockType(blockDefinition.gutenbergTag, {
      title: blockDefinition.gutenbergTag + ' Block', // Title and icon are mandatory
      icon: blockDefinition.shortCodeTag + '-icon',  // but not really needed
      category: 'planet4-blocks',

      // Transform the shortcode into a Gutenberg block
      // this is used when a user clicks "Convert to blocks"
      // on the "Classic Editor" block
      transforms: {
        from: [
          {
            type: 'shortcode',
            // Shortcode tag can also be an array of shortcode aliases
            tag: blockDefinition.shortCodeTag,
            attributes: blockDefinition.shortCodeAttributes
          },
        ]
      },
      // This attributes definition mimics the one in the PHP side.
      attributes: blockDefinition.gutenbergAttributes,
      edit: function() {
        return null;
      },
      save: function() {
        return null;
      }
    });
  });
}

exports.registerP4Blocks = registerP4Blocks;