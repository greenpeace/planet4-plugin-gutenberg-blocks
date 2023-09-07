import {renderToString} from 'react-dom/server';
import {SpacerEditor} from './SpacerEditor';
import {SpacerFrontend} from './SpacerFrontend';

const {registerBlockType} = wp.blocks;
const {RawHTML} = wp.element;
const {__} = wp.i18n;

const BLOCK_NAME = 'planet4-blocks/spacer';

export const registerSpacerBlock = () => {
  registerBlockType(BLOCK_NAME, {
    title: __('Planet 4 Spacer', 'planet4-blocks-backend'),
    icon: 'welcome-widgets-menus',
    category: 'planet4-blocks',
    supports: {
      multiple: true,
    },
    attributes: {
      small: {
        type: 'string',
        default: '16px',
      },
      medium: {
        type: 'string',
        default: '16px',
      },
      large: {
        type: 'string',
        default: '16px',
      },
      xlarge: {
        type: 'string',
        default: '16px',
      },
      xxlarge: {
        type: 'string',
        default: '16px',
      },
    },
    edit: SpacerEditor,
    save: props => {
      const {attributes} = props;
      const markup = renderToString(
        <div
          data-hydrate={BLOCK_NAME}
          data-attributes={JSON.stringify(attributes)}
        >
          <SpacerFrontend {...props} />
        </div>
      );
      return <RawHTML>{ markup }</RawHTML>;
    },
  });
};
