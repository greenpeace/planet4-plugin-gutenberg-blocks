import { registerBlockVariation } from '@wordpress/blocks';
import metadata from './block.json';
import template from './template';
import mediaTextVariation from './media-text-variation';

[ 'left', 'right' ].map(
  (imgSide) => registerBlockVariation(
    ...mediaTextVariation({mediaPosition: imgSide})
  )
);

const { name } = metadata;
const templateLock = 'all';
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
    template: (attrs = {}) => template({mediaPosition: imgSide, ...attrs}),
    templateLock
  }
};

const defaultTemplate = variation().template;

export { name, metadata, defaultTemplate as template, templateLock, variation };
