import {Component} from '@render';

export class FormSectionTitle extends Component {
  render() {
    return <div className='FormSectionTitle'>{this.props.children}</div>;
  }
}
