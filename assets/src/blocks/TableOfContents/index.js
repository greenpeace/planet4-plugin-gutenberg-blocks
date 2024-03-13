/**
 * Internal dependencies
 */
import metadata from './block.json';
import edit from './edit';
import icon from './icon';
import save from './save';

const {registerBlockType} = wp.blocks;

const {name} = metadata;

export {metadata, name};

export const settings = {
  icon,
  edit,
  save,
  title: 'Table of Contents',
};

export const registerTableOfContentsBlock = () => registerBlockType({ name, ...metadata }, settings);
