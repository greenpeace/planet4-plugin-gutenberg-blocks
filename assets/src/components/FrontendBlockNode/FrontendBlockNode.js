import { Component } from '@wordpress/element';

export class FrontendBlockNode extends Component {
	render() {
		return <div className={ this.props.className }
			data-attributes={ JSON.stringify( this.props.attributes ) }></div>
	}
}
