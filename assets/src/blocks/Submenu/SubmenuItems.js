const renderMenuItems = (items) => {
  return items.map(({ anchor, text, style, shouldLink, children }) => (
    <li
      key={anchor}
      data-anchor={anchor}
      className={`list-style-${style || 'none'} ${shouldLink ? "list-link" : "list-heading"}`}
    >
      {shouldLink ?
        <a
          className="icon-link submenu-link"
          href={`#${anchor}`}
        >
          {text}
        </a>
        :
        <span className="submenu-heading">{text}</span>
      }
      {children && children.length > 0 &&
      <ul>
        {renderMenuItems(children)}
      </ul>
      }
    </li>
  ));
}

export const SubmenuItems = ({ menuItems }) => {

  return !!menuItems && ( menuItems.length > 0) && (
    <div className="submenu-menu">
      <ul className="submenu-item">
        {renderMenuItems(menuItems)}
      </ul>
    </div>
  );
}
