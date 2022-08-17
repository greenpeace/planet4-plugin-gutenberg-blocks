const el = wp.element.createElement;
const { InnerBlocks } = wp.blockEditor;

const save = ( props ) => el( InnerBlocks.Content, {} );

export default save;
