import edit from './edit';
import save from './save';
import templateList from './template-list';

const { registerBlockType } = wp.blocks;
const { getCurrentPostType } = wp.data.select('core/editor');

export const registerBlockTemplates = ( blockTemplates ) => {
  const templates = blockTemplates || templateList;
  const postType = getCurrentPostType();

  let registerContentOnly = [];
  templates.map( (blockTemplate) => {
    const { metadata, template, templateLock = false } = blockTemplate;

    if ( metadata.postTypes && ! metadata.postTypes.includes(postType) ) {
      return null;
    }

    registerBlockType( metadata, {
      edit: edit( template, templateLock ),
      save: save,
    });
  } );
};
