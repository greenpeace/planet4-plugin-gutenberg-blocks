const gutenbergTag =  'planet4-blocks/covers';
const shortCodeTag = 'shortcake_newcovers';
const shortCodeAttributes = {
  cover_type: {
    type: 'integer',
    // This `shortcode` definition will be used as a callback,
    // it is a function which expects an object with at least
    // a `named` key with `cover_type` property whose default value is 1.
    // See: https://simonsmith.io/destructuring-objects-as-function-parameters-in-es6
    shortcode: ({named: {cover_type = '1'}}) => cover_type,
  },
  title: {
    type: 'string',
    shortcode: ({named: {title = null}}) => title,
  },
  description: {
    type: 'string',
    shortcode: ({named: {description = null}}) => description,
  },
  covers_view: {
    type: 'string',
    shortcode: ({named: {covers_view = null}}) => covers_view,
  },
  tags: {
    type: 'array',
    shortcode: ({named: {tags = null}}) => tags ? tags.split(',') : null,
  },
  post_types: {
    type: 'array',
    shortcode: ({named: {post_types = null}}) => post_types ? post_types.split(',') : null,
  },
  posts: {
    type: 'array',
    shortcode: ({named: {posts = null}}) => posts ? posts.split(',') : null,
  },
};

const gutenbergAttributes = {
  title: {
    type: 'string',
  },
  description: {
    type: 'string',
  },
  tags: {
    type: 'array',
    default: []
  },
  posts: {
    type: 'array',
    default: []
  },
  post_types: {
    type: 'array',
    default: []
  },
  covers_view: {
    type: 'string',
    default: '1'
  },
  cover_type: {
    type: 'string',
  }
};

exports.shortCodeTag = shortCodeTag;
exports.gutenbergTag = gutenbergTag;
exports.shortCodeAttributes = shortCodeAttributes;
exports.gutenbergAttributes = gutenbergAttributes;
