import { SubmenuEditor } from './SubmenuEditor.js';
import { frontendRendered } from '../frontendRendered';

const { __ } = wp.i18n;

const BLOCK_NAME = 'planet4-blocks/submenu';

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
      edit: (({
        isSelected,
        attributes,
        setAttributes
      }) => {

        function addLevel() {
          setAttributes({ levels: attributes.levels.concat({ heading: 0, link: false, style: 'none' }) });
        }

        function onTitleChange(value) {
          setAttributes({ title: value });
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
          levels[index].style = value;
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
        />
      }),
      save: frontendRendered(BLOCK_NAME)
    });

    registerBlockStyle(
      BLOCK_NAME,
      [
        {
          name: 'long',
          label: __( 'Long full-width', 'planet4-blocks' ),
          // help: __('Use: on long pages (more than 5 screens) when list items are long (+ 10 words)<br>No max items<br>recommended.')
          isDefault: true
        },
        {
          name: 'short',
          label: __( 'Short full-width', 'planet4-blocks' )
          // help: __('Use: on long pages (more than 5 screens) when list items are short (up to 5 words)<br>No max items<br>recommended.'),
        },
        {
          name: 'sidebar',
          label: __( 'Short sidebar', 'planet4-blocks' )
          // help: __('Use: on long pages (more than 5 screens) when list items are short (up to 10 words)<br>Max items<br>recommended: 9')
        }
      ]
    );
  };
}

