import {renderToString} from 'react-dom/server';
import {SpacerEditor} from './SpacerEditor';
import { SpacerFrontend } from './SpacerFrontend';

const {registerBlockType} = wp.blocks;
const {RawHTML} = wp.element;
const {__} = wp.i18n;

const BLOCK_NAME = 'planet4-blocks/spacer';

export const registerSpacerBlock = () => {
  console.log('registerSpacerBlock')
  registerBlockType(BLOCK_NAME, {
    title: __('Planet 4 Spacer', 'planet4-blocks-backend'),
    icon: 'format-image',
    category: 'planet4-blocks',
    supports: {
      multiple: true,
    },
    attributes: {
      small: {
        type: 'number',
        default: 10,
      },
      medium: {
        type: 'number',
        default: 10,
      },
      large: {
        type: 'number',
        default: 10,
      },
      xlarge: {
        type: 'number',
        default: 10,
      },
    },
    edit: SpacerEditor,
    save: props => {
      const {attributes} = props;
      console.log(attributes)
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
}
