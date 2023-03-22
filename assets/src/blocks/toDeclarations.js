/**
 * Converts an object with CSS Variables to inline text,
 * for example, to use in a cssText property.
 *
 * @param {Object} CSSVariables
 * @return {Object} new CSS  variables
 */
export const toDeclarations = CSSVariables => {
  if (!CSSVariables) {
    return '';
  }
  return Object.entries(CSSVariables)
    .map(([key, value]) => `--${key}: ${value}`)
    .join(';'); // Using join() because React triggers an error if it finds an ending semicolon.
};
