import metadata from './block-pattern.json';
import innerBlocks from './innerBlocks';
import mainThemeUrl from '../main-theme-url';

const blockAttributes = {
  className: metadata.classname,
  align: 'full',
  mediaType: 'image',
  mediaUrl: `${mainThemeUrl}/images/placeholders/placeholder-546x415.jpg`,
  imageFill: false,
};

const mediaTextVariation = ({
  mediaPosition = 'right'
}) => ([
  'core/media-text',
  {
    name: `${metadata.name}-${mediaPosition}`,
    title: `${metadata.title} on the ${mediaPosition}`,
    description: `${metadata.description} on the ${mediaPosition}`,
    scope: ['inserter'],
    attributes: { ...blockAttributes, mediaPosition },
    innerBlocks,
    isActive: (blockAttributes) => (
      blockAttributes.className === metadata.classname
      && blockAttributes.mediaPosition === mediaPosition
    )
  }
]);

export default mediaTextVariation;
