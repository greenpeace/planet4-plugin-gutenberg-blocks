import { Component, Fragment } from '@wordpress/element';
import { Button, PanelBody } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { SubmenuLevel } from "./SubmenuLevel";
import { SubmenuFrontend } from './SubmenuFrontend';
import { InspectorControls } from '@wordpress/block-editor';
import { getSubmenuStyle } from './getSubmenuStyle';

const { __ } = wp.i18n;
const { RichText } = wp.editor;

const renderEdit = (attributes, setAttributes) => {
  function addLevel() {
    setAttributes({ levels: attributes.levels.concat({ heading: 0, link: false, style: 'none' }) });
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

  return (
    <Fragment>
      <InspectorControls>
        <PanelBody title={__('Setting', 'p4ge')}>
          {attributes.levels.map((level, i) => (
            <SubmenuLevel
              {...level}
              onHeadingChange={onHeadingChange}
              onLinkChange={onLinkChange}
              onStyleChange={onStyleChange}
              index={i}
              key={i}
            />
          )
          )}
          <Button
            isPrimary
            onClick={addLevel}
            disabled={attributes.levels.length >= 3 || attributes.levels.slice(-1)[0].heading === 0}
            style={{ marginRight: 5 }}
          >
            Add level
        </Button>
          <Button
            isSecondary
            onClick={removeLevel} disabled={attributes.levels.length <= 1}
          >
            Remove level
        </Button>
        </PanelBody>
      </InspectorControls>
    </Fragment>
  );
}

const renderView = (attributes, setAttributes) => {

  const { postId } = useSelect(select => ({
    postId: select('core/editor').getCurrentPostId()
  }), []);

  const style = getSubmenuStyle(attributes.className, attributes.submenu_style);

  return (
    <Fragment>
      <section className={`block submenu-block submenu-${style}`}>
        <RichText
          tagName="h2"
          placeholder={__('Enter title', 'p4ge')}
          value={attributes.title}
          onChange={title => setAttributes({ title })}
          keepPlaceholderOnFocus={true}
          withoutInteractiveFormatting
          characterLimit={60}
          multiline="false"
        />
        <SubmenuFrontend isEditing postId={postId} {...attributes} />
      </section>
    </Fragment>
  );
}

export const SubmenuEditor = ({ attributes, setAttributes, isSelected, className }) => (
  <Fragment>
    {isSelected && renderEdit(attributes, setAttributes)}
    {renderView({ className, ...attributes }, setAttributes)}
  </Fragment>
);
