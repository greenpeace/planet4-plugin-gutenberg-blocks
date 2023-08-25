import {renderToString} from 'react-dom/server';
import {SplittwocolumnsEditor} from './SplittwocolumnsEditor';
import {SplittwocolumnsFrontend} from './SplittwocolumnsFrontend';
import {splitTwoColumnsV1} from './deprecated/SplittwocolumnsV1';
import {splitTwoColumnsV2} from './deprecated/SplittwocolumnsV2';

export const BLOCK_NAME = 'planet4-blocks/split-two-columns';
export const VERSION = 2;
export const attributes = {
  version: {type: 'number', default: VERSION},
  select_issue: {type: 'number', default: 0},
  title: {type: 'string', default: ''},
  issue_description: {type: 'string', default: ''},
  issue_link_text: {type: 'string', default: ''},
  issue_link_path: {type: 'string', default: ''},
  issue_image_id: {type: 'number', default: 0},
  issue_image_src: {type: 'string', default: ''},
  issue_image_srcset: {type: 'string', default: ''},
  issue_image_title: {type: 'string', default: ''},
  focus_issue_image: {type: 'string', default: '50% 50%'},
  select_tag: {type: 'number', default: 0},
  tag_name: {type: 'string', default: ''},
  tag_description: {type: 'string', default: ''},
  tag_link: {type: 'string', default: ''},
  button_text: {type: 'string', default: ''},
  button_link: {type: 'string', default: ''},
  tag_image_id: {type: 'number', default: 0},
  tag_image_src: {type: 'string', default: ''},
  tag_image_srcset: {type: 'string', default: ''},
  tag_image_title: {type: 'string', default: ''},
  focus_tag_image: {type: 'string', default: '50% 50%'},
  edited: {type: 'object', default: {
    title: false,
    issue_description: false,
    issue_link_text: false,
    tag_description: false,
    button_text: false,
    issue_image_id: false,
    tag_image_id: false,
  }},
};

export const registerSplitTwoColumnsBlock = () => {
  const {registerBlockType} = wp.blocks;
  const {RawHTML} = wp.element;

  registerBlockType(BLOCK_NAME, {
    title: 'Split Two Columns',
    icon: 'editor-table',
    category: 'planet4-blocks',
    supports: {
      html: false, // Disable "Edit as HTMl" block option.
    },
    attributes,
    edit: SplittwocolumnsEditor,
    save: props => {
      const markup = renderToString(<div
        data-hydrate={BLOCK_NAME}
        data-attributes={JSON.stringify(props.attributes)}
      >
        <SplittwocolumnsFrontend {...props} />
      </div>);
      return <RawHTML>{markup}</RawHTML>;
    },
    deprecated: [
      splitTwoColumnsV2,
      splitTwoColumnsV1,
    ],
  });
};
