import { Component } from '@render';

export class Preview extends Component {
	render() {
		return <div className='Preview'>
			{
				this.props.showBar
				? <div className='PreviewBar'>Preview</div>
				: null
			}
			{ this.props.children }
		</div>
	}
}