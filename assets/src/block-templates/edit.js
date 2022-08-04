const el = wp.element.createElement;
const { InnerBlocks } = wp.blockEditor;

const edit = ( template, templateLock = false ) => ( props ) => {
  return el( InnerBlocks, {
    template,
    templateLock
  } );
};

export default edit;
