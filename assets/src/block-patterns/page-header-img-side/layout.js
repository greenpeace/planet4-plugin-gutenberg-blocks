import mediaTextVariation from './media-text-variation';

const layout = (attrs) => {
  const [ blockname, props ] = mediaTextVariation(attrs);

  return [
    [ blockname, props.attributes, props.innerBlocks ]
  ];
};

export default layout;
