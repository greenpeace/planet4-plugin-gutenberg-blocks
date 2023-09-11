import {CounterEditor} from './CounterEditor';
import {frontendRendered} from '../frontendRendered';
import {CounterFrontend} from './CounterFrontend';
import {renderToString} from 'react-dom/server';

export const BLOCK_NAME = 'planet4-blocks/counter';

const attributes = {
  title: {
    type: 'string',
    default: '',
  },
  description: {
    type: 'string',
    default: '',
  },
  completed: {
    type: 'integer',
    default: '',
  },
  completed_api: {
    type: 'string',
    default: '',
  },
  target: {
    type: 'integer',
    default: '',
  },
  text: {
    type: 'string',
    default: '',
  },
  style: { // Needed to convert existing blocks
    type: 'string',
    default: '',
  },
};

export const registerCounterBlock = () => {
  const {registerBlockType, unregisterBlockStyle, registerBlockStyle} = wp.blocks;
  const {RawHTML} = wp.element;

  registerBlockType(BLOCK_NAME, {
    title: 'Counter',
    icon: 'dashboard',
    category: 'planet4-blocks',
    attributes,
    supports: {
      html: false, // Disable "Edit as HTMl" block option.
    },
    // eslint-disable-next-line no-shadow
    edit: CounterEditor,
    save: ({attributes: saveAttributes}) => {
      const markup = renderToString(
        <div
          data-hydrate={BLOCK_NAME}
          data-attributes={JSON.stringify(saveAttributes)}
        >
          <CounterFrontend {...saveAttributes} />
        </div>
      );
      return <RawHTML>{markup}</RawHTML>;
    },
    deprecated: [
      {
        attributes,
        save: frontendRendered(BLOCK_NAME),
      },
      {
        attributes,
        save() {
          return null;
        },
      },
    ],
  });

  // Remove the default style since it's the same as "text only"
  unregisterBlockStyle(BLOCK_NAME, 'default');

  const styles = [
    {
      name: 'plain',
      label: 'Text Only',
      isDefault: true,
    },
    {
      name: 'bar',
      label: 'Progress Bar',
    },
    {
      name: 'arc',
      label: 'Progress Dial',
    },

  ];

  if (window.p4ge_vars.features.feature_engaging_networks) {
    styles.push({
      name: 'en-forms-bar',
      label: 'Progress Bar inside EN Form',
    });
  }
  // Add our custom styles
  registerBlockStyle(BLOCK_NAME, styles);
};
