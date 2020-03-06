import {Component} from '@wordpress/element';

export class BaseBlock extends Component {
  constructor(props) {
    super(props);
    this.bindAll();
  }

  bindAll() {
    const subClassMembers = Object.getOwnPropertyNames( Object.getPrototypeOf( this ) );
    const toBeBoundMembers = subClassMembers.filter( member =>
      !(['constructor'].includes( member ))
    );
    toBeBoundMembers.forEach( member => {
      this[member] = this[member].bind(this);
    } );
  }
}
