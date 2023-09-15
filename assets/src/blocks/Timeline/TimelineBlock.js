import {renderToString} from 'react-dom/server';
import {frontendRendered} from '../frontendRendered';
import {TimelineEditor} from './TimelineEditorScript';
import {TimelineFrontend} from './TimelineFrontend';

const BLOCK_NAME = 'planet4-blocks/timeline';

const attributes = {
  timeline_title: {
    type: 'string',
    default: '',
  },
  description: {
    type: 'string',
    default: '',
  },
  google_sheets_url: {
    type: 'string',
    default: '',
  },
  language: {
    type: 'string',
    default: 'en',
  },
  timenav_position: {
    type: 'string',
    default: '',
  },
  start_at_end: {
    type: 'boolean',
    default: false,
  },
};

export const registerTimelineBlock = () => {
  const {registerBlockType} = wp.blocks;
  const {RawHTML} = wp.element;

  registerBlockType(BLOCK_NAME, {
    title: 'Timeline',
    icon: 'clock',
    category: 'planet4-blocks',
    supports: {
      html: false, // Disable "Edit as HTMl" block option.
    },
    attributes,
    edit: TimelineEditor,
    save: props => {
      const markup = renderToString(
        <div
          data-hydrate={BLOCK_NAME}
          data-attributes={JSON.stringify(props.attributes)}
        >
          <TimelineFrontend {...props} />
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
};
