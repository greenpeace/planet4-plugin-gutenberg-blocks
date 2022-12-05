import { Component } from '@wordpress/element';

export class ValidationMessage extends Component {
  render() {
    return <div className="ValidationMessage">
      <ul>
        { this.props.message.map( ( validation_message, key ) =>
          <li key={ key }> { validation_message } </li>
        ) }
      </ul>
    </div>;
  }
}
