import { SubmenuEditor } from './SubmenuEditor.js';
import { Tooltip } from '@wordpress/components';
import {example} from './example';
import { SubmenuFrontend } from './SubmenuFrontend';

const { __ } = wp.i18n;

const BLOCK_NAME = 'planet4-blocks/submenu';

const getStyleLabel = (label, help) => {
  if (help) {
    return (
      <Tooltip text={ help }>
        <span>{label}</span>
      </Tooltip>
    );
  }
  return label;
}
export const registerSubmenuBlock = () => {
  const { registerBlockType } = wp.blocks;

  registerBlockType(BLOCK_NAME, {
    title: 'Submenu',
    icon: 'welcome-widgets-menus',
    category: 'planet4-blocks',
    attributes: {
      title: {
        type: 'string',
        default: ''
      },
      submenu_style: { // Needed for old blocks conversion
        type: 'integer',
        default: 0
      },
      levels: {
        type: 'array',
        default: [{ heading: 2, link: false, style: 'none' }]
      },
      isExample: {
        type: 'boolean',
        default: false,
      },
      menuItems: { // Used for the block's preview, which can't extract items from anything.
        type: 'array',
        default: [],
      },
    },
    supports: {
      multiple: false, // Use the block just once per post.
      html: false,
    },
    styles: [
      {
        name: 'long',
        label: getStyleLabel(
          __('Long full-width', 'planet4-blocks-backend'),
          __('Use: on long pages (more than 5 screens) when list items are long (+ 10 words). No max items recommended.', 'planet4-blocks-backend'),
        ),
        isDefault: true
      },
      {
        name: 'short',
        label: getStyleLabel(
          __('Short full-width', 'planet4-blocks-backend'),
          __('Use: on long pages (more than 5 screens) when list items are short (up to 5 words). No max items recommended.', 'planet4-blocks-backend'),
        )
      },
      {
        name: 'sidebar',
        label: getStyleLabel(
          __('Short sidebar', 'planet4-blocks-backend'),
          __('Use: on long pages (more than 5 screens) when list items are short (up to 10 words). Max items recommended: 9', 'planet4-blocks-backend'),
        )
      }
    ],
    edit: SubmenuEditor,
    save: ({attributes}) => {
      if (!attributes.menuItems) {
        return null;
      }
      return <SubmenuFrontend { ...attributes }/>;
    },
    example,
    deprecated: [
      {
        attributes: {
          title: {
            type: 'string',
            default: ''
          },
          submenu_style: { // Needed for old blocks conversion
            type: 'integer',
            default: 0
          },
          levels: {
            type: 'array',
            default: [{ heading: 2, link: false, style: 'none' }]
          },
          isExample: {
            type: 'boolean',
            default: false,
          },
          exampleMenuItems: { // Used for the block's preview, which can't extract items from anything.
            type: 'array',
          },
        },
        save: () => {
          return null;
        }
      }
    ],
  });
}
