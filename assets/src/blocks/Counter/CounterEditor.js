import { Component, Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import {
  TextControl,
  TextareaControl,
  PanelBody
} from '@wordpress/components';

import { URLInput } from "../../components/URLInput/URLInput";

import { CounterFrontend } from './CounterFrontend';

const { RichText } = wp.blockEditor;
const { __ } = wp.i18n;

export class CounterEditor extends Component {
  constructor(props) {
    super(props);

    this.toAttribute = this.toAttribute.bind(this);
  }

  toAttribute(attributeName) {
    const { setAttributes } = this.props;
    return value => {
      setAttributes({ [attributeName]: value });
    }
  }

  renderEdit() {
    const { attributes } = this.props;

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title={__('Settings', 'planet4-blocks-backend')}>
            <div>
              <TextControl
                label={__('Completed', 'planet4-blocks-backend')}
                placeholder={__('e.g. number of signatures', 'planet4-blocks-backend')}
                type="number"
                value={attributes.completed}
                onChange={value => this.toAttribute('completed')(Number(value))}
                min={0}
              />
            </div>

            <div>
              <URLInput
                label={__('Completed API URL', 'planet4-blocks-backend')}
                placeholder={__('API URL of completed number. If filled in will override the \'Completed\' field', 'planet4-blocks-backend')}
                value={attributes.completed_api}
                onChange={this.toAttribute('completed_api')}
              />
            </div>

            <div>
              <TextControl
                label={__('Target', 'planet4-blocks-backend')}
                placeholder={__('e.g. target no. of signatures', 'planet4-blocks-backend')}
                type="number"
                value={attributes.target}
                onChange={value => this.toAttribute('target')(Number(value))}
                min={0}
              />
            </div>

            <div>
              <TextareaControl
                label={__('Text', 'planet4-blocks-backend')}
                placeholder={__('e.g. "signatures collected of %target%"', 'planet4-blocks-backend')}
                value={attributes.text}
                onChange={this.toAttribute('text')}
              />
            </div>
            <div className="sidebar-blocks-help">
              {__('These placeholders can be used:', 'planet4-blocks-backend')}{' '}<code>%completed%</code>, <code>%target%</code>, <code>%remaining%</code>
            </div>
          </PanelBody>
        </InspectorControls>
      </Fragment>
    );
  }

  renderView() {
    const { attributes } = this.props;

    return <Fragment>
      <div className="counter-block">
        <header>
          <RichText
            tagName="h2"
            className="page-section-header"
            placeholder={__('Enter title', 'planet4-blocks-backend')}
            value={attributes.title}
            onChange={this.toAttribute('title')}
            withoutInteractiveFormatting
            multiline="false"
            allowedFormats={[]}
          />
        </header>
        <RichText
          tagName="p"
          className="page-section-description"
          placeholder={__('Enter description', 'planet4-blocks-backend')}
          value={attributes.description}
          onChange={this.toAttribute('description')}
          withoutInteractiveFormatting
          allowedFormats={['core/bold', 'core/italic']}
        />
      </div>
      <CounterFrontend isEditing {...attributes} />
    </Fragment>;
  }

  render() {
    return (
      <Fragment>
        {
          this.props.isSelected
            ? this.renderEdit()
            : null
        }
        {this.renderView()}
      </Fragment>
    );
  }
}
