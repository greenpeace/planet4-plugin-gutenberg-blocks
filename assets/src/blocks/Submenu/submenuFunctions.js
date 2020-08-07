// Map for old attribute 'submenu_style'
const SUBMENU_STYLES = {
  1: 'long',
  2: 'short',
  3: 'sidebar'
};

export const getSubmenuStyle = (className, submenu_style) => {
  if (className && className.includes('is-style-')) {
    return className.split('is-style-')[1];
  }
  return submenu_style ? SUBMENU_STYLES[submenu_style] : 'long';
};

export const addSubmenuActions = submenu => {
  if (submenu && Array.isArray(submenu)) {
    for (let i = 0; i < submenu.length; i++) {
      const menu = submenu[i];
      addTargetLinks(menu);
      addChildrenLinks(menu);
    }

    // Add "back to top" button behaviour
    const backtop = document.getElementsByClassName('back-top')[0];
    const submenuBlock = document.getElementsByClassName('submenu-block')[0];
    const cookiesBlock = document.getElementById('set-cookie');

    if (submenuBlock) {
      window.onscroll = () => {
        if (window.pageYOffset > 400) {
          backtop.style.display = 'block';
          if (cookiesBlock && cookiesBlock.style.display !== 'none') {
            backtop.style.bottom = '120px';
          } else {
            backtop.style.bottom = '50px';
          }
        } else {
          backtop.style.display = 'none';
        }
      };
    }
  }
};

/**
 * Append html links for a submenu entry children.
 *
 * @param menu Submenu entry
 */
const addChildrenLinks = menu => {
  if (menu.children && Array.isArray(menu.children)) {
    for (let k = 0; k < menu.children.length; k++) {
      const child = menu.children[k];
      addTargetLinks(child);
      addChildrenLinks(child);
    }
  }
};

/**
 * Append html links the given item.
 *
 * @param item Submenu menu item
 */
const addTargetLinks = item => {
  if (item.link) {
    const headings = getHeadings(item.type);
    if (headings) {
      headings.forEach(heading => {
        if (heading.textContent === item.text && !heading.id) {
          heading.id = item.id;
        }
      });
    }
  }
};

export const loadMenuItems = (levels, isEditing) => {
  // Get all heading tags that we need to query
  const headings = levels.map(level => `h${level.heading}`);
  const tags = getHeadings(headings, isEditing ? 'editor-styles-wrapper' : 'page-template');
  if (!tags) {
    return [];
  }
  return tags.reduce((menuItems, tag, index) => {
    const headingNumber = getHeadingNumber(tag);
    let previousHeadingNumber = 0;
    if (index > 0) {
      previousHeadingNumber = getHeadingNumber(tags[index - 1]);
    }
    // Get the properties that we need to create the new menu item
    const correspondingLevel = levels.find(level => level.heading === headingNumber);
    const id = tag.id || tag.textContent.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''); // equivalent of WP sanitize_title function
    const menuItem = {
      text: tag.textContent,
      id,
      style: correspondingLevel.style,
      link: correspondingLevel.link,
      type: `h${correspondingLevel.heading}`,
      children: []
    };
    if (previousHeadingNumber && headingNumber > previousHeadingNumber) {
      // In this case we need to add this menuItem to the children of the previous one
      menuItems[menuItems.length - 1].children.push(menuItem);
    } else {
      menuItems.push(menuItem);
    }
    return menuItems;
  }, []);
};

const getHeadings = (headings, className = 'page-template') => {
  // We need to make sure it's a div element,
  // since for 'page-template' className we have it on the body too
  const page = document.querySelector(`div.${className}`);
  return page ? [...page.querySelectorAll(headings)] : null;
};

const getHeadingNumber = tag => Number(tag.tagName.replace('H', ''));
