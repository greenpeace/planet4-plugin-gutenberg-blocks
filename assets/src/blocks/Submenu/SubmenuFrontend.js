import { Component, Fragment } from '@wordpress/element';
import { getSubmenuStyle } from './getSubmenuStyle';
import { addSubmenuActions } from './addSubmenuActions';
const { __ } = wp.i18n;
const { apiFetch } = wp;
const { addQueryArgs } = wp.url;

export class SubmenuFrontend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: []
    }

    this.postId = null;
    this.loadMenuItems = this.loadMenuItems.bind(this);
  };

  componentDidMount() {
    // Set the post id and load the menu items
    // If in the editor, the post id will be in the props
    // Otherwise, we need to retrieve it from the body classnames
    let postId = this.props.postId || null;
    if (!postId) {
      const bodyClassNames = [...document.body.classList];
      const idClassName = bodyClassNames.find(c => c.match(/page-id-/));
      postId = Number(idClassName.replace('page-id-', ''));
    }
    this.postId = postId;
    this.loadMenuItems(postId);
  }

  componentDidUpdate({ levels: prevLevels }) {
    const { levels } = this.props;
    if (JSON.stringify(levels) !== JSON.stringify(prevLevels)) {
      this.loadMenuItems(this.postId);
    }
  }

  async loadMenuItems(postId) {
    const { levels, isEditing } = this.props;
    const queryArgs = {
      path: addQueryArgs('/planet4/v1/get-submenu-items', {
        levels,
        post_id: postId
      })
    };

    try {
      const menuItems = await apiFetch(queryArgs);
      if (menuItems && menuItems.length > 0) {
        this.setState({ menuItems });
        // This takes care of adding the "back to top" button,
        // and also the submenu links behavior if needed
        if (!isEditing) {
          addSubmenuActions(menuItems);
        }
      } else {
        this.setState({ menuItems: [] });
      }
    } catch (e) {
      console.log(e);
      this.setState({ menuItems: [] });
    }
  }

  getMenuItems(items) {
    return items.map(item => (
      <li key={item.text} className={`list-style-${item.style || 'none'} ${item.link ? "list-link" : "list-heading"}`}>
        {item.link ?
          <a href={`#${item.id}`} className="icon-link submenu-link" data-hash={item.hash}>{item.text}</a>
          :
          <span className="submenu-heading">{item.text}</span>
        }
        {item.children && item.children.length > 0 &&
          <ul>
            {this.getMenuItems(item.children)}
          </ul>
        }
      </li>
    ));
  }

  render() {
    const { title, className, isEditing, submenu_style } = this.props;
    const { menuItems } = this.state;

    const style = getSubmenuStyle(className, submenu_style);

    return (
      <Fragment>
        {(isEditing || menuItems.length > 0) && (
          <section className={isEditing ? '' : `block submenu-block submenu-${style}`}>
            {title && !isEditing &&
              <h2>{title}</h2>
            }
            {menuItems.length > 0 &&
              <div className="submenu-menu">
                <ul className="submenu-item">
                  {this.getMenuItems(menuItems)}
                </ul>
              </div>
            }
            {isEditing && menuItems.length === 0 &&
              <div className='EmptyMessage'>{__('The submenu block produces no output on the editor.', 'planet4-blocks-backend')}</div>
            }
            {!isEditing && <a href="#" className="back-top">&nbsp;</a>}
          </section>
        )}
      </Fragment>
    );
  }
}
