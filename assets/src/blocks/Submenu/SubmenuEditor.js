import { Fragment, useEffect} from '@wordpress/element';
import { Button, PanelBody } from '@wordpress/components';
import { SubmenuLevel } from './SubmenuLevel';
import { SubmenuItems } from './SubmenuItems';
import { InspectorControls } from '@wordpress/block-editor';
import { getSubmenuStyle } from './getSubmenuStyle';
import { makeHierarchical } from './makeHierarchical';
import { getHeadingsFromBlocks} from './getHeadingsFromBlocks';
import { deepClone } from '../../functions/deepClone';

const { __ } = wp.i18n;
const { RichText } = wp.blockEditor;

const renderEdit = (attributes, setAttributes) => {
  function addLevel() {
    const [previousLastLevel] = attributes.levels.slice(-1);
    const newLevel = previousLastLevel.heading + 1;
    setAttributes({ levels: attributes.levels.concat({ heading: newLevel, link: false, style: 'none' }) });
  }

  function onHeadingChange(index, value) {
    const levels = deepClone(attributes.levels);
    levels[index].heading = Number(value);
    setAttributes({ levels });
  }

  function onLinkChange(index, value) {
    const levels = deepClone(attributes.levels);
    levels[index].link = value;
    setAttributes({ levels });
  }

  function onStyleChange(index, value) {
    const levels = deepClone(attributes.levels);
    levels[index].style = value; // Possible values: "none", "bullet", "number"
    setAttributes({ levels });
  }

  function removeLevel() {
    setAttributes({ levels: attributes.levels.slice(0, -1) });
  }

  function getMinLevel(attributes, index) {
    if (index === 0) {
      return null;
    }

    return attributes.levels[index-1].heading;
  }

  return (
    <InspectorControls>
      <PanelBody title={__('Setting', 'planet4-blocks-backend')}>
        {attributes.levels.map((level, i) => (
          <SubmenuLevel
            {...level}
            onHeadingChange={onHeadingChange}
            onLinkChange={onLinkChange}
            onStyleChange={onStyleChange}
            index={i}
            key={i}
            minLevel={getMinLevel(attributes, i)}
          />
        ))}
        <Button
          isPrimary
          onClick={addLevel}
          disabled={attributes.levels.length >= 3 || attributes.levels.slice(-1)[0].heading === 0}
          style={{ marginRight: 5 }}
        >
          {__('Add level', 'planet4-blocks-backend')}
        </Button>
        <Button
          isSecondary
          onClick={removeLevel}
          disabled={attributes.levels.length <= 1}
        >
          {__('Remove level', 'planet4-blocks-backend')}
        </Button>
      </PanelBody>
    </InspectorControls>
  );
}

const renderView = (attributes, setAttributes, className) => {
  const {
    title,
    submenu_style,
    menuItems,
  } = attributes;

  const style = getSubmenuStyle(className, submenu_style);

  return (
    <section className={`block submenu-block submenu-${style} ${className ?? ''}`}>
      <RichText
        tagName="h2"
        placeholder={__('Enter title', 'planet4-blocks-backend')}
        value={title}
        onChange={title => setAttributes({ title })}
        keepPlaceholderOnFocus={true}
        withoutInteractiveFormatting
        characterLimit={60}
        multiline="false"
        allowedFormats={[]}
      />
      {!!menuItems && menuItems.length > 0 ?
        <SubmenuItems menuItems={menuItems} /> :
        <div className='EmptyMessage'>
          {__('No items match the current configuration.', 'planet4-blocks-backend')}
        </div>
      }
    </section>
  );
}

let lastHeadings = '';
export const SubmenuEditor = ({ attributes, setAttributes, isSelected, className }) => {
  const dep = JSON.stringify(attributes.levels);
  useEffect(() => {
    if (attributes.isExample) {
      // When the block is rendered as a preview in the sidebar.
      return;
    }
    const unsub = wp.data.subscribe(() => {
      const blocks = wp.data.select( 'core/block-editor' ).getBlocks();
      const headings = getHeadingsFromBlocks(blocks, attributes.levels);
      const json = JSON.stringify(headings);
      if (json !== (lastHeadings)) {
        const menuItems = makeHierarchical(headings);
        if (JSON.stringify(menuItems) === attributes.menuItems) {
          return;
        }
        lastHeadings = json;
        setAttributes({ menuItems});
      }
    });

    return () => {
      console.log(`Unsub ${ n }`, dep)
      unsub();
    };
  }, [dep]);
  return (
    <Fragment>
      { isSelected && renderEdit(attributes, setAttributes) }
      { renderView(attributes, setAttributes, className) }
    </Fragment>
  );
};
