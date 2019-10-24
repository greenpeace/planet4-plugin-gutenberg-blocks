import {Socialmedia} from './Socialmedia.js';

export class SocialmediaBlock {
  constructor() {
    const {registerBlockType} = wp.blocks;
    const {__} = wp.i18n;

    registerBlockType(socialMediaConfig.gutenbergTag, {
      title: __('Social Media', 'p4ge'),
      icon: 'share',
      category: 'planet4-blocks',

      // Transform the shortcode into a Gutenberg block
      // this is used when a user clicks "Convert to blocks"
      // on the "Classic Editor" block
      transforms: {
        from: [
          {
            type: 'shortcode',
            // Shortcode tag can also be an array of shortcode aliases
            tag: socialMediaConfig.shortCodeTag,
            attributes: socialMediaConfig.shortCodeAttributes
          },
        ]
      },
      // This attributes definition mimics the one in the PHP side.
      attributes: socialMediaConfig.gutenbergAttributes,
      // withSelect is a "Higher Order Component", it works as
      // a Decorator, it will provide some basic API functionality
      // through `select`.
      edit: ({isSelected, attributes, setAttributes}) => {

        // These methods are passed down to the
        // Socialmedia component, they update the corresponding attribute.

        function onTitleChange(value) {
          setAttributes({title: value});
        }

        function onDescriptionChange(value) {
          setAttributes({description: value});
        }

        function onEmbedTypeChange(value) {
          setAttributes({embed_type: value});
        }

        function onFacebookPageTabChange(value) {
          setAttributes({facebook_page_tab: value});
        }

        function onSocialMediaUrlChange(value) {
          setAttributes({social_media_url: value});
        }

        function onAlignmentChange(value) {
          setAttributes({alignment_class: value});
        }


        // We pass down all the attributes to Socialmedia as props using
        // the spread operator. Then we selectively add more
        // props.
        return <Socialmedia
          {...attributes}
          isSelected={isSelected}
          onTitleChange={onTitleChange}
          onDescriptionChange={onDescriptionChange}
          onEmbedTypeChange={onEmbedTypeChange}
          onFacebookPageTabChange={onFacebookPageTabChange}
          onSocialMediaUrlChange={onSocialMediaUrlChange}
          onAlignmentChange={onAlignmentChange} />
      },
      save() {
        return null;
      }
    });
  };
}

