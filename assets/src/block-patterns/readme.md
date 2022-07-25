# Block patterns in javascript

This code uses Gutenberg functions to generate valid HTML code for the editor from raw blocks declaration `[block name, block attributes, inner blocks]`.

- [`createBlock( name, attributes = {}, innerBlocks = [] )`](https://github.com/WordPress/gutenberg/blob/c81fb68193ef25fb42a05f3f004a0c0921fd1643/packages/blocks/src/api/factory.js#L35-L61) returns a Block object given its attributes
- [`createBlocksFromInnerBlocksTemplate( innerBlocksOrTemplate = [] )`](https://github.com/WordPress/gutenberg/blob/c81fb68193ef25fb42a05f3f004a0c0921fd1643/packages/blocks/src/api/factory.js#L63-L91) recursively creates Block object from inner blocks
- [`serialize( blocks, options )`](https://github.com/WordPress/gutenberg/blob/c81fb68193ef25fb42a05f3f004a0c0921fd1643/packages/blocks/src/api/serializer.js#L396-L407) serializes the block objects as valid HTML for the editor, including the delimiter comments `<!-- wp -->`.

## Creating a new block pattern

Create a directory named after your pattern, with 3 files in it:
- `block-pattern.json` is a direct transposition of the [`block.json` metadata file encouraged by WordPress](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/); it allows to share basic data between client and server in a format readable by both. It has to be valid JSON.
- `layout.js` describes in the simplest template format the blocks used and their position.
- `index.js` exports all relevant data (name, metadata, layout), allowing for more data process if needed.

A simple block pattern as an example:

_my-pattern/block-pattern.json_
```json
{
  "name": "p4/my-pattern",
  "title": "My Pattern",
  "description": "My Pattern",
  "categories": ["planet4"],
  "classname": "is-pattern-p4-my-pattern",
  "textdomain": "planet4-blocks-backend"
}
```

_my-pattern/layout.js_
```js
import metadata from './block-pattern.json';

const layout = () => ([
    ['core/heading', {level: 2, placeholder: 'Enter title'}]
    ['core/group', {}, [
        ['core/paragraph', {align: 'center', placeholder: 'Paragraph 1 in group'}],
        ['core/paragraph', {content: 'Paragraph 2 content'}]
    ]]
]);

export default layout;
```

_my-pattern/index.js_
```js
import metadata from './block-pattern.json';
import layout from './layout';

const { name } = metadata;

export { name, metadata, layout };
```
_Instead of a `layout()` function, you can also export a `content()` function that will replace the "translate and generate content from layout" process_

## Registering block pattern and generating HTML code

Include your block pattern in `pattern-list.js`.

`register.js` takes all patterns declared in `patternList` and
1. extracts pattern settings from `block-pattern.json`
2. translates those settings according to `block-pattern-i18n.js` schema
3. translates the blocks properties according to `block-attributes-i18n.js` schema
4. generates the HTML content with `content-from-layout.js`
5. registers the block pattern by pushing it to the editor settings

## Translations

Translation is based on https://github.com/WordPress/wordpress-develop/blob/ee26676d5029ca5dedc1e5de1be849cfff7c5cbf/src/wp-includes/l10n.php#L1751 used for blocks settings declaration.
Given a schema of data to translate and [a text domain](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#text-domain), the function will return translated content.
