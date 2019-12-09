import { Spreadsheettable } from './Spreadsheettable';

export class SpreadsheettableBlock {
  constructor() {
    const { registerBlockType } = wp.blocks;
    const { __ } = wp.i18n;
    const { withSelect } = wp.data;

    registerBlockType('planet4-blocks/spreadsheettable', {
      title: __('Spreadsheet Table', 'p4ge'),
      icon: 'editor-table',
      category: 'planet4-blocks',

      /**
       * Transforms old 'shortcake' shortcode to new gutenberg block.
       */
      transforms: {
        from: [
          {
            type: 'shortcode',
            // Shortcode tag can also be an array of shortcode aliases
            tag: 'shortcake_declaration_table',
            attributes: {
              title: {
                type: 'string',
                shortcode: function (attributes) {
                  return attributes.named.title;
                }
              },
            },
          },
        ]
      },
      attributes: {
        url: {
          type: 'string',
          default: '',
        },
      },
      edit: ({ isSelected, attributes, setAttributes }) => {
        function onUrlChange( value ) {
          setAttributes( { url: value } );
        }

        // We pass down all the attributes to Covers as props using
        // the spread operator. Then we selectively add more
        // props.
        return <Spreadsheettable
          { ...attributes }
          isSelected={ isSelected }
          onUrlChange={ onUrlChange } />
      },
      save() {
        return null;
      }
    });
  };
}
