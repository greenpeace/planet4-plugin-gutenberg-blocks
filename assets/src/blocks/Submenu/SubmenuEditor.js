import { Component, Fragment } from '@wordpress/element';
import {
  Button,
  PanelBody
} from '@wordpress/components';
import { MenuLevel } from "./MenuLevel";
import { SubmenuFrontend } from './SubmenuFrontend';
import { InspectorControls } from '@wordpress/block-editor';

const { __ } = wp.i18n;
const { RichText } = wp.editor;

export class SubmenuEditor extends Component {
  constructor(props) {
    super(props);
  }

  renderEdit() {
    const { attributes } = this.props;

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title={__('Setting', 'p4ge')}>
            <h2>{__('Anchor Link Submenu', 'p4ge')}</h2>
            <p><i>{__(
              'An in-page table of contents to help users have a sense of what\'s on the page and let them jump to a topic they are interested in.',
              'p4ge'
            )}</i></p>
            <hr />
            {attributes.levels.map((heading, i) => {
              return (
                <MenuLevel
                  {...heading}
                  onHeadingChange={this.props.onHeadingChange}
                  onLinkChange={this.props.onLinkChange}
                  onStyleChange={this.props.onStyleChange}
                  index={i}
                  key={i}
                />
              );
            })}
            <Button isPrimary
              onClick={this.props.addLevel}
              disabled={attributes.levels.length >= 3 || attributes.levels.slice(-1)[0].heading === 0}
            >
              Add level
          </Button>
            <Button isDefault
              onClick={attributes.removeLevel} disabled={attributes.levels.length <= 1}
            >
              Remove level
          </Button>
          </PanelBody>
        </InspectorControls>
      </Fragment>
    );
  }

  renderView() {
    const { attributes, onTitleChange } = this.props;
    return (
      <Fragment>
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
