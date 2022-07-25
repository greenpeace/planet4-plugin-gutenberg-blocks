import {
  serialize,
  createBlock,
  createBlocksFromInnerBlocksTemplate
} from '@wordpress/blocks';

const contentFromLayout = ( layout ) => serialize(
  layout.map( ( [name, attributes, innerBlocks] ) => createBlock(
    name,
    attributes,
    createBlocksFromInnerBlocksTemplate( innerBlocks || [] )
  ) )
);

export default contentFromLayout;
