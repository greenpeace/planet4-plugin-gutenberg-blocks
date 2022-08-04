import metadata from './block.json';
import template from './template';

const { name } = metadata;
const templateLock = 'all'; // 'all', 'insert', false

export { name, metadata, template, templateLock };

