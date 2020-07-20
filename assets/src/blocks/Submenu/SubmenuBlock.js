import { SubmenuEditor } from './SubmenuEditor.js';
import { frontendRendered } from '../frontendRendered';
import { Tooltip } from '@wordpress/components';
import { withSelect } from '@wordpress/data';

const { __ } = wp.i18n;

const BLOCK_NAME = 'planet4-blocks/submenu';

const getStyleLabel = (label, help) => {
  if (help) {
    return (
      <Tooltip text={__(help, 'planet4-blocks')}>
        <span>{__(label, 'planet4-blocks')}</span>
      </Tooltip>
    );
  }
  return label;
}

export class SubmenuBlock {
  constructor() {
    const { registerBlockType, registerBlockStyle } = wp.blocks;

    const attributes = {
      title: {
        type: 'string',
      },
      levels: {
        type: 'array',
        default: [{ heading: 0, link: false, style: 'none' }]
      },
    };

    registerBlockType(BLOCK_NAME, {
      title: 'Submenu',
      icon: 'welcome-widgets-menus',
      category: 'planet4-blocks',
      attributes,
      deprecated: [
        {
          attributes,
          save() {
            return null;
          },
        }
      ],
      supports: {
        multiple: false, // Use the block just once per post.
      },
      edit: withSelect(select => {
        const postId = select('core/editor').getCurrentPostId();
        return { postId };
      })(({
        isSelected,
        attributes,
        setAttributes,
        postId,
        className
      }) => {
        return <SubmenuEditor
          attributes={attributes}
          isSelected={isSelected}
          postId={postId}
          className={className}
          setAttributes={setAttributes}
        />
      }),
      save: frontendRendered(BLOCK_NAME)
    });

    registerBlockStyle(
      BLOCK_NAME,
      [
        {
          name: 'long',
          label: getStyleLabel(
            'Long full-width',
            'Use: on long pages (more than 5 screens) when list items are long (+ 10 words). No max items recommended.'
          ),
          isDefault: true
        },
        {
          name: 'short',
          label: getStyleLabel(
            'Short full-width',
            'Use: on long pages (more than 5 screens) when list items are short (up to 5 words). No max items recommended.'
          )
        },
        {
          name: 'sidebar',
          label: getStyleLabel(
            'Short sidebar',
            'Use: on long pages (more than 5 screens) when list items are short (up to 10 words). Max items recommended: 9'
          )
        }
      ]
    );
  };
}

