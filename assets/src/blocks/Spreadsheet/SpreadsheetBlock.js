import {SpreadsheetEditor} from './SpreadsheetEditor';
import {CSS_VARIABLES_ATTRIBUTE} from '../CssVariablesAttribute';
import {frontendRendered} from '../frontendRendered';
import {SpreadsheetFrontend} from './SpreadsheetFrontend';
import {renderToString} from 'react-dom/server';

const BLOCK_NAME = 'planet4-blocks/spreadsheet';

const attributes = {
  url: {
    type: 'string',
    default: '',
  },
  color: {
    type: 'string',
    default: 'grey',
  },
};

export const registerSpreadsheetBlock = () => {
  const {registerBlockType} = wp.blocks;
  const {RawHTML} = wp.element;

  registerBlockType(BLOCK_NAME, {
    title: 'Spreadsheet',
    icon: 'editor-table',
    category: 'planet4-blocks',
    attributes,
    edit: SpreadsheetEditor,
    save: props => {
      const markup = renderToString(<div
        data-hydrate={BLOCK_NAME}
        data-attributes={JSON.stringify(props.attributes)}
      >
        <SpreadsheetFrontend {...props.attributes} />
      </div>);
      return <RawHTML>{markup}</RawHTML>;
    },
    deprecated: [
      {
        attributes,
        save: frontendRendered(BLOCK_NAME),
      },
      {
        attributes: {
          url: {
            type: 'string',
            default: '',
          },
          css_variables: CSS_VARIABLES_ATTRIBUTE,
        },
        save() {
          return null;
        },
      },
    ],
  });
};
