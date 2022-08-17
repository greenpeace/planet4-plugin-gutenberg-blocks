const el = wp.element.createElement;
const { InnerBlocks } = wp.blockEditor;

const edit = ( template, templateLock = false ) => ( props ) => {
  return el( InnerBlocks, {
    template: template( props.attributes ?? {} ),
    templateLock
  } );
};

export default edit;
