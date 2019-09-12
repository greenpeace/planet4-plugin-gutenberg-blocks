const gutenbergTag = 'planet4-blocks/media-video';

const shortCodeTag = 'shortcake_media_video';

const shortCodeAttributes = {
  video_title: {
    type: 'string',
    shortcode: ({named: {video_title = ''}}) => video_title,
  },
  description: {
    type: 'string',
    shortcode: ({named: {description = ''}}) => description,
  },
  youtube_id: {
    type: 'string',
    shortcode: ({named: {youtube_id = ''}}) => youtube_id,
  },
  video_poster_img: {
    type: 'integer',
    shortcode: ({named: {video_poster_img = ''}}) => video_poster_img,
  }
};

const gutenbergAttributes ={
  video_title: {
    type: 'string'
  },
  description: {
    type: 'string'
  },
  youtube_id: {
    type: 'string'
  },
  video_poster_img: {
    type: 'integer'
  }
};

exports.shortCodeTag = shortCodeTag;
exports.gutenbergTag = gutenbergTag;
exports.shortCodeAttributes = shortCodeAttributes;
exports.gutenbergAttributes = gutenbergAttributes;