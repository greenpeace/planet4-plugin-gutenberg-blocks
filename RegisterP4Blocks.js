const articlesConfig = require('./react-blocks/src/blocks/Articles/ArticlesConfig.js');

const blockDefinitions = [
  articlesConfig
];

function registerP4Blocks(wpblocks) {
  console.log(articlesConfig);
  wpblocks.registerBlockType(articlesConfig.gutenbergTag, {
    title: 'Foo', // Title and icon are mandatory
    icon: 'bar',  // but not really needed
    category: 'planet4-blocks',

    // Transform the shortcode into a Gutenberg block
    // this is used when a user clicks "Convert to blocks"
    // on the "Classic Editor" block
    transforms: {
      from: [
        {
          type: 'shortcode',
          // Shortcode tag can also be an array of shortcode aliases
          tag: articlesConfig.shortCodeTag,
          attributes: articlesConfig.shortCodeAttributes
        },
      ]
    },
    // This attributes definition mimics the one in the PHP side.
    attributes: articlesConfig.gutenbergAttributes,
    edit: function() {
      return 'Articles Blocks';
    },
    save: function() {
      return null;
    }
  });
}

exports.registerP4Blocks = registerP4Blocks;