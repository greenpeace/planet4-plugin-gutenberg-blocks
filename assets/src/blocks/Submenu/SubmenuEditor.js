import {Fragment} from '@wordpress/element';
import {Button, PanelBody} from '@wordpress/components';
import {SubmenuLevel} from './SubmenuLevel';
import {SubmenuItems} from './SubmenuItems';
import {InspectorControls, RichText} from '@wordpress/block-editor';
import {getSubmenuStyle} from './getSubmenuStyle';
import {makeHierarchical} from './makeHierarchical';
import {getHeadingsFromBlocks} from './getHeadingsFromBlocks';
import {useSelect} from '@wordpress/data';
import {deepClone} from '../../functions/deepClone';

const {__} = wp.i18n;

const renderEdit = (attributes, setAttributes) => {
  function addLevel() {
    const [previousLastLevel] = attributes.levels.slice(-1);
    const newLevel = previousLastLevel.heading + 1;
    setAttributes({levels: attributes.levels.concat({heading: newLevel, link: false, style: 'none'})});
  }

  function onHeadingChange(index, value) {
    const levels = deepClone(attributes.levels);
    levels[index].heading = Number(value);
    setAttributes({levels});
  }

  function onLinkChange(index, value) {
    const levels = deepClone(attributes.levels);
    levels[index].link = value;
    setAttributes({levels});
  }

  function onStyleChange(index, value) {
    const levels = deepClone(attributes.levels);
    levels[index].style = value; // Possible values: "none", "bullet", "number"
    setAttributes({levels});
  }

  function removeLevel() {
    setAttributes({levels: attributes.levels.slice(0, -1)});
  }

  function getMinLevel(attr, index) {
    if (index === 0) {
      return null;
    }

    return attr.levels[index - 1].heading;
  }

  return (
    <InspectorControls>
      <PanelBody title={__('Settings', 'planet4-blocks-backend')}>
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
          style={{marginRight: 5}}
        >
          {__('Add level', 'planet4-blocks-backend')}
        </Button>
        <Button
          variant="secondary"
          onClick={removeLevel}
          disabled={attributes.levels.length <= 1}
        >
          {__('Remove level', 'planet4-blocks-backend')}
        </Button>
      </PanelBody>
    </InspectorControls>
  );
};

const renderView = (attributes, setAttributes, className) => {
  const {
    title,
    levels,
    submenu_style,
    isExample,
    exampleMenuItems,
  } = attributes;

  const blocks = useSelect(select => select('core/block-editor').getBlocks(), null);

  const flatHeadings = getHeadingsFromBlocks(blocks, levels);

  const menuItems = isExample ? exampleMenuItems : makeHierarchical(flatHeadings);

  const style = getSubmenuStyle(className, submenu_style);

  return (
    <section className={`block submenu-block submenu-${style} ${className ?? ''}`}>
      <RichText
        tagName="h2"
        placeholder={__('Enter title', 'planet4-blocks-backend')}
        value={title}
        onChange={titl => setAttributes({title: titl})}
        withoutInteractiveFormatting
        multiline="false"
        allowedFormats={[]}
      />
      {menuItems.length > 0 ?
        <SubmenuItems menuItems={menuItems} /> :
        <div className="EmptyMessage">
          {__('The submenu block produces no output on the editor.', 'planet4-blocks-backend')}
        </div>
      }
    </section>
  );
};

export const SubmenuEditor = ({attributes, setAttributes, isSelected, className}) => (
  <Fragment>
    {isSelected && renderEdit(attributes, setAttributes)}
    {renderView(attributes, setAttributes, className)}
  </Fragment>
);
