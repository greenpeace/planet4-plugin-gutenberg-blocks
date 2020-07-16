import { Component, Fragment } from '@wordpress/element';
import { Button, PanelBody } from '@wordpress/components';
import { SubmenuLevel } from "./SubmenuLevel";
import { SubmenuFrontend } from './SubmenuFrontend';
import { InspectorControls } from '@wordpress/block-editor';

const { __ } = wp.i18n;
const { RichText } = wp.editor;

export class SubmenuEditor extends Component {
  constructor(props) {
    super(props);
  }

  renderEdit() {
    const {
      attributes,
      onHeadingChange,
      onLinkChange,
      addLevel,
      onStyleChange,
      removeLevel
    } = this.props;

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title={__('Setting', 'p4ge')}>
            {attributes.levels.map((heading, i) => (
              <SubmenuLevel
                {...heading}
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
              isDefault
              onClick={removeLevel} disabled={attributes.levels.length <= 1}
            >
              Remove level
          </Button>
          </PanelBody>
        </InspectorControls>
      </Fragment>
    );
  }

  renderView() {
    const { attributes, onTitleChange, className } = this.props;
    let style = 'long';
    if (className) {
      style = className.split('is-style-')[1];
    }
    return (
      <Fragment>
        <section className={`block submenu-block submenu-${style}`}>
          <RichText
            tagName="h2"
            placeholder={__('Enter title', 'p4ge')}
            value={attributes.title}
            onChange={onTitleChange}
            keepPlaceholderOnFocus={true}
            withoutInteractiveFormatting
            characterLimit={60}
            multiline="false"
          />
          <SubmenuFrontend isEditing {...attributes} />
        </section>
      </Fragment>
    );
  }

  render() {
    return (
      <Fragment>
        {this.props.isSelected && this.renderEdit()}
        {this.renderView()}
      </Fragment>
    );
  };
}
