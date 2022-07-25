import { registerBlockVariation } from '@wordpress/blocks';
import metadata from './block-pattern.json';
import layout from './layout';
import mediaTextVariation from './media-text-variation';

[ 'left', 'right' ].map(
  (imgSide) => registerBlockVariation(
    ...mediaTextVariation({mediaPosition: imgSide})
  )
);

const variation = (imgSide = 'right') => {
  const [ blockname, props ] = mediaTextVariation({mediaPosition: imgSide});

  return {
    name: props.name,
    metadata: {
      ...metadata,
      name: props.name,
      title: props.title,
      description: props.description
    },
    layout: (attrs = {}) => layout({mediaPosition: imgSide, ...attrs}),
  }
};

const { name } = metadata;
const defaultLayout = variation().layout;

export { name, metadata, defaultLayout as layout, variation };
