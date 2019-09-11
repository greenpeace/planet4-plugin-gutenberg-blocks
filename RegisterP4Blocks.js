const articlesConfig = require('./react-blocks/src/blocks/Articles/ArticlesConfig.js');
const coversConfig = require('./react-blocks/src/blocks/Covers/CoversConfig.js');

const blockDefinitions = [
  articlesConfig,
  coversConfig
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