import { Component, Fragment } from '@wordpress/element';
const { __ } = wp.i18n;
const { apiFetch } = wp;
const { addQueryArgs } = wp.url;

export class SubmenuFrontend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: []
    }

    this.loadMenuItems = this.loadMenuItems.bind(this);
  };

  componentDidMount() {
    if (this.props.postId) {
      this.loadMenuItems();
    }
  }

  componentDidUpdate({ levels: prevLevels, postId: prevPostId }) {
    const { levels, postId } = this.props;
    if (JSON.stringify(levels) !== JSON.stringify(prevLevels) || postId !== prevPostId) {
      this.loadMenuItems();
    }
  }

  async loadMenuItems() {
    const { levels, postId } = this.props;
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
      } else {
        this.setState({ menuItems: [] });
      }
    } catch (e) {
      console.log(e);
      this.setState({ menuItems: [] });
    }
  }

  render() {
    const { title, className, isEditing } = this.props;
    const { menuItems } = this.state;

    let style = 'long';
    if (className) {
      style = className.split('is-style-')[1];
    }

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
                  {menuItems.map(item => (
                    <li key={item.text} className={`list-style-${item.style || 'none'} ${item.link ? "list-link" : "list-heading"}"`}>
                      {item.link ?
                        <a href={`#${item.id}`} className="icon-link submenu-link" data-hash={item.hash}>{item.text}</a>
                        :
                        <span className="submenu-heading">{item.text}</span>
                      }
                      {item.children && item.children.length > 0 &&
                        <span>TODO</span>
                      }
                    </li>
                  ))
                  }
                </ul>
              </div>
            }
            {isEditing && menuItems.length === 0 &&
              <div className='EmptyMessage'>{__('The submenu block produces no output on the editor.', 'p4ge')}</div>
            }
            {!isEditing && <a href="#" className="back-top">&nbsp;</a>}
          </section>
        )}
      </Fragment>
    );
  }
}
