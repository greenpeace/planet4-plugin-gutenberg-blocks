import { Component, Fragment } from '@wordpress/element';
const { __ } = wp.i18n;

const placeholderData = [
  { text: 'Lorem', style: 'none' },
  { text: 'Ipsum', style: 'none' },
  { text: 'Dolor', style: 'none' }
];

export class SubmenuFrontend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: placeholderData
    }
  };

  render() {
    const { title, className, isEditing } = this.props;
    const { menuItems } = this.state;

    let style = 'long';
    if (className) {
      style = className.split('is-style-')[1];
    }
    return (
      <Fragment>
        <section className={isEditing ? '' : `block submenu-block submenu-${style}`}>
          {title && !isEditing &&
            <h2>{title}</h2>
          }
          <div className="submenu-menu">
            <ul className="submenu-item">
              {menuItems.map(item => (
                <li key={item.text} className={`list-style-${item.style || 'none'} ${item.link ? "list-link" : "list-heading"}"`}>
                  {item.link ?
                    <a href={`#${item.id}`} className="icon-link submenu-link" data-hash={item.hash}>{item.text}</a>
                    :
                    <span className="submenu-heading">{item.text}</span>
                  }
                  {item.children &&
                    <span>TODO</span>
                  }
                </li>
              ))
              }
            </ul>
          </div>
          {!isEditing && <a href="#" className="back-top">&nbsp;</a>}
        </section>
      </Fragment>
    );
  }
}
