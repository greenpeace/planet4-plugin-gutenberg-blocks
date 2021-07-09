import {Component} from '@render';

export class InlineFormFeedback extends Component {
  render() {
    return <div className='InlineFormFeedback'>{this.props.children}</div>;
  }
}
