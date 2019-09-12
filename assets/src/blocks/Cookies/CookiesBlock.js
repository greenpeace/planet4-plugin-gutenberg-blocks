import {Cookies} from './Cookies.js';

export class CookiesBlock {
  constructor() {
    const {registerBlockType} = wp.blocks;

    registerBlockType(cookiesConfig.gutenbergTag, {
      title: 'Cookies',
      icon: 'welcome-view-site',
      category: 'planet4-blocks',
      supports: {
        multiple: false, // Use the block just once per post.
      },

      // Transform the shortcode into a Gutenberg block
      // this is used when a user clicks "Convert to blocks"
      // on the "Classic Editor" block
      transforms: {
        from: [
          {
            type: 'shortcode',
            // Shortcode tag can also be an array of shortcode aliases
            tag: cookiesConfig.shortCodeTag,
            attributes: cookiesConfig.shortCodeAttributes,
          },
        ]
      },
      attributes: cookiesConfig.gutenbergAttributes,
      edit: ({ isSelected, attributes, setAttributes }) => {
        function onTitleChange(value) {
          setAttributes({title: value});
        }

        function onDescriptionChange(value) {
          setAttributes({description: value});
        }

        function onNecessaryCookiesNameChange(value) {
          setAttributes({necessary_cookies_name: value});
        }

        function onNecessaryCookiesDescriptionChange(value) {
          setAttributes({necessary_cookies_description: value});
        }

        function onAllCookiesNameChange(value) {
          setAttributes({all_cookies_name: value});
        }

        function onAllCookiesDescriptionChange(value) {
          setAttributes({all_cookies_description: value});
        }

        return <Cookies
          {...attributes}
          isSelected={isSelected}
          onTitleChange={onTitleChange}
          onDescriptionChange={onDescriptionChange}
          onNecessaryCookiesNameChange={onNecessaryCookiesNameChange}
          onNecessaryCookiesDescriptionChange={onNecessaryCookiesDescriptionChange}
          onAllCookiesNameChange={onAllCookiesNameChange}
          onAllCookiesDescriptionChange={onAllCookiesDescriptionChange}
        />
      },
      save() {
        return null;
      }
    });
  };
}
