import { SpreadsheetTable } from './Spreadsheettable';

export class SpreadsheettableBlock {
  constructor() {
    const { registerBlockType } = wp.blocks;
    const { __ } = wp.i18n;
    const { withSelect } = wp.data;

    registerBlockType('planet4-blocks/spreadsheettable', {
      title: __('Spreadsheet Table', 'p4ge'),
      icon: 'editor-table',
      category: 'planet4-blocks',
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

        return <SpreadsheetTable
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
