import {Component} from '@render';

export class URLValidationMessage extends Component {
  constructor(props) {
    super(props);
  }

  isValid( url ) {
    if ( !url ) {
      return true;
    }

    if ( ! url.toLowerCase().startsWith('https://') ) {
      return false;
    }

    return true;
  }

  render() {

    const {__} = wp.i18n;
    const { url } = this.props

    if ( this.isValid( url ) ) {
        return null;
    }

    return (
        <span className='input_error'>{ __('The URL must start with "https://"', 'planet4-blocks-backend') }</span>
    )
  }
}
