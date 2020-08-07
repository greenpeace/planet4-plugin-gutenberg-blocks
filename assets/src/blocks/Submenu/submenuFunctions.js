// Map for old attribute 'submenu_style'
const SUBMENU_STYLES = {
  1: 'long',
  2: 'short',
  3: 'sidebar'
};

export const getSubmenuStyle = (className, submenu_style) => {
  let style = submenu_style ? SUBMENU_STYLES[submenu_style] : 'long';
  if (className && className.includes('is-style-')) {
    style = className.split('is-style-')[1];
  }
  return style;
};

export const addSubmenuActions = submenu => {
  if (submenu && Array.isArray(submenu)) {
    for (let i = 0; i < submenu.length; i++) {
      const menu = submenu[i];
      addTargetLinks(menu);
      addChildrenLinks(menu);
    }

    // Add "back to top" button behavior
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
    const headings = getTags(item.type);
    if (headings) {
      headings.forEach(heading => {
        if (heading.innerText === item.text) {
          let targetLink = document.createElement('a');
          targetLink.id = item.id;
          targetLink.setAttribute('data-hash-target', item.hash);
          heading.appendChild(targetLink);
        }
      });
    }
  }
};

export const loadMenuItems = levels => {
  const menuItems = [];
  levels.forEach(({ heading, link, style }) => {
    const tagElements = getTags(`h${heading}`);
    if (tagElements) {
      tagElements.forEach(({ innerText }, index) => {
        const id = innerText.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,''); // equivalent of WP sanitize_title function
        menuItems.push({
          text: innerText,
          id,
          style,
          link,
          type: `h${heading}`,
          hash: `${id}-h${heading}-${index}`,
          children: [] // TODO
        });
      });
    }
  });
  return menuItems;
};

const getTags = tagName => {
  // We need to get the div and not the body, since they both have this class
  const page = [...document.getElementsByClassName('page-template')].find(element => element.tagName === 'DIV');
  if (page) {
    return [...page.getElementsByTagName(tagName)];
  }
  return null;
}
