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
        postId
      }) => {

        function addLevel() {
          setAttributes({ levels: attributes.levels.concat({ heading: 0, link: false, style: 'none' }) });
        }

        function onTitleChange(title) {
          setAttributes({ title });
        }

        function onHeadingChange(index, value) {
          let levels = JSON.parse(JSON.stringify(attributes.levels));
          levels[index].heading = Number(value);
          setAttributes({ levels });
        }

        function onLinkChange(index, value) {
          let levels = JSON.parse(JSON.stringify(attributes.levels));
          levels[index].link = value;
          setAttributes({ levels });
        }

        function onStyleChange(index, value) {
          let levels = JSON.parse(JSON.stringify(attributes.levels));
          levels[index].style = value; // Possible values: "none", "bullet", "number"
          setAttributes({ levels });
        }

        function removeLevel() {
          setAttributes({ levels: attributes.levels.slice(0, -1) });
        }

        return <SubmenuEditor
          attributes={attributes}
          isSelected={isSelected}
          onTitleChange={onTitleChange}
          onHeadingChange={onHeadingChange}
          onLinkChange={onLinkChange}
          onStyleChange={onStyleChange}
          addLevel={addLevel}
          removeLevel={removeLevel}
          postId={postId}
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

