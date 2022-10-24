const el = wp.element.createElement;
const { InnerBlocks } = wp.blockEditor;

const save = () => el( InnerBlocks.Content, {} );

export default save;
