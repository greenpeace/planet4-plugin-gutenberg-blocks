import { Component } from '@wordpress/element';
import { TextControl } from '@wordpress/components';
import { URLValidationMessage } from '../../components/URLValidationMessage/URLValidationMessage';

export class URLInput extends Component {
  render() {
    const { label, placeholder, value, onChange, disabled, help } = this.props;

    return (
      <div>
        <TextControl
          label={ label }
          placeholder={ placeholder }
          value={ value }
          onChange={ onChange }
          disabled={ disabled }
          help={ help }
        />
        { ! disabled &&
            <URLValidationMessage
              url={ value }
            />
        }
      </div>
    );
  }
}
