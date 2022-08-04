import templateList from './template-list';
import edit from './edit';
import save from './save';
import { registerBlockPatterns } from '../block-patterns/register';

const { registerBlockType } = wp.blocks;
const { getCurrentPostType } = wp.data.select('core/editor');

export const registerBlockTemplates = ( blockTemplates ) => {
  const templates = blockTemplates || templateList;

  let registerContentOnly = [];
  templates.map( (blockTemplate) => {
    const { name, metadata, template, templateLock = false } = blockTemplate;

    if (metadata.postTypes && !metadata.postTypes.includes(currentPostType) ) {
      return null;
    }

    registerBlockType( metadata, {
      edit: edit( template({}), templateLock ),
      save: save,
    });

    if ( metadata.pattern && metadata.pattern.contentOnly ) {
      registerContentOnly.push( blockTemplate );
    }
  } );

  // register block pattern
  //registerBlockPatterns( registerContentOnly );
};
