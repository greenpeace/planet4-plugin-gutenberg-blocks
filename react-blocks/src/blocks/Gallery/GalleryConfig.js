const gutenbergTag = 'planet4-blocks/gallery';

const shortCodeTag = 'shortcake_gallery';

const shortCodeAttributes = {
  gallery_block_style: {
    type: 'integer',
    shortcode: ({named: {gallery_block_style = ''}}) => gallery_block_style,
  },
  gallery_block_title: {
    type: 'string',
    shortcode: ({named: {gallery_block_title = ''}}) => gallery_block_title,
  },
  gallery_block_description: {
    type: 'string',
    shortcode: ({named: {gallery_block_description = ''}}) => gallery_block_description,
  },
  multiple_image: {
    type: 'string',
    shortcode: ({named: {multiple_image = ''}}) => multiple_image,
  },
  gallery_block_focus_points: {
    type: 'string',
    shortcode: ({named: {gallery_block_focus_points = ''}}) => gallery_block_focus_points,
  },
};

const gutenbergAttributes = {
  gallery_block_style: {
    type: 'number',
    default: 1
  },
  gallery_block_title: {
    type: 'string',
  },
  gallery_block_description: {
    type: 'string',
  },
  multiple_image: {
    type: 'string',
  },
  gallery_block_focus_points: {
    type: 'string',
  },
  image_data: {
    type: 'object',
    default: []
  },
};

exports.shortCodeTag = shortCodeTag;
exports.gutenbergTag = gutenbergTag;
exports.shortCodeAttributes = shortCodeAttributes;
exports.gutenbergAttributes = gutenbergAttributes;