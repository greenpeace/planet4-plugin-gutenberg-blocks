/**
 * @deprecated Blocks should not attach any further logic to WP's block style mechanism. It leads
 * to infinite loops, performance issues, buggy editor previews, and more.
 *
 * Get the name of the block style used from the classname string
 * given by Gutenberg
 *
 * @example
 * getStyleFromClassName('is-style-foo') => 'foo'
 * getStyleFromClassName('bar is-style-foo baz') => 'foo'
 * getStyleFromClassName('bar baz') => null
 *
 * @param {string} className
 * @returns string|null
 */
export const getStyleFromClassName = className => {
  if (!className || className.trim().length <= 9) {
    return null;
  }

  const styleClass = className.split(' ').filter((c) => c.startsWith('is-style-'))[0];
  if (!styleClass) {
    return null;
  }

  return styleClass.replace(/^is-style-/, '');
};
