export const makeHierarchical = headings => {
  let previousMenuItem;

  const withParents = headings.reduce((menuItems, heading) => {
    const { level, shouldLink, anchor, content, style } = heading;
    let possibleParent = previousMenuItem || menuItems;

    while (possibleParent.level && possibleParent.level >= level) {
      possibleParent = possibleParent.parent;
    }

    const parent = possibleParent;

    const container = parent === menuItems ? menuItems : parent.children;

    const menuItem = {
      text: content,
      style,
      children: [],
      parent,
      level,
      shouldLink,
      anchor,
    };
    container.push(menuItem);

    previousMenuItem = menuItem;

    return menuItems;
  }, []);
  return removeParentsRef(withParents);
};

const removeParentsRef = items => {
  return items.map(({parent, children, ...rest}) => {
    return {
      ...rest,
      children: removeParentsRef(children),
    };
  })
}
