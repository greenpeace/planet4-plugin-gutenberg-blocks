import { Spreadsheet } from './Spreadsheet';
import { FrontendBlockNode } from '../../components/FrontendBlockNode/FrontendBlockNode';
import { CSS_VARIABLES_ATTRIBUTE } from '../CssVariablesAttribute';
import { frontendRendered } from '../frontendRendered';

export class SpreadsheetBlock {
  constructor() {
    const { registerBlockType } = wp.blocks;
    const { __ } = wp.i18n;
    const attributes = {
      url: {
        type: 'string',
        default: '',
      },
      css_variables: CSS_VARIABLES_ATTRIBUTE,
    };

    registerBlockType( 'planet4-blocks/spreadsheet', {
      title: __( 'Spreadsheet', 'planet4-blocks-backend' ),
      icon: 'editor-table',
      category: 'planet4-blocks-beta',
      attributes,
      deprecated: [
        {
          attributes,
          save() {
            return null;
          },
        }
      ],
      edit: ( { isSelected, attributes, setAttributes } ) => {
        return <Spreadsheet
          attributes={attributes}
          setAttributes={setAttributes}
          isSelected={ isSelected }
        />
      },
      save: frontendRendered('spreadsheet')
    } );
  };
}
