import { Component, Fragment } from '@wordpress/element';
import { Preview } from '../../components/Preview';

import {
  TextControl,
  TextareaControl,
  ServerSideRender,
} from '@wordpress/components';

export class Spreadsheettable extends Component {
  constructor(props) {
    super(props);
  }

  renderEdit() {
    const { __ } = wp.i18n;

    return (
      <Fragment>
        <div>
          <TextControl
            label={__('Spreadsheet URL', 'planet4-blocks-backend')}
            placeholder={__('Enter Google Spreadsheet URL', 'planet4-blocks-backend')}
            help={__('Optional', 'planet4-blocks-backend')}
            value={this.props.url}
            onChange={this.props.onUrlChange}
          />
        </div>
      </Fragment>
    );
  }

  render() {
    return (
      <div>
        {
          this.props.isSelected
            ? this.renderEdit()
            : null
        }
        <Preview showBar={this.props.isSelected}>
          <ServerSideRender
            block={ 'planet4-blocks/spreadsheettable' }
            attributes={{
              url: this.props.url,
            }}>
          </ServerSideRender>
        </Preview>
      </div>
    );
  }
}
