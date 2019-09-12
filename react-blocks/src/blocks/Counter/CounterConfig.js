const gutenbergTag = 'planet4-blocks/counter';

const shortCodeTag = 'shortcake_counter';

const shortCodeAttributes = {
  style: {
    type: 'string',
    shortcode: ( { named: { style = 'plain' } } ) => style,
  },
  title: {
    type: 'string',
    shortcode: ( { named: { title = '' } } ) => title,
  },
  description: {
    type: 'string',
    shortcode: ( { named: { description = '' } } ) => description,
  },
  completed: {
    type: 'integer',
    shortcode: ( { named: { completed = 0 } } ) => completed,
  },
  completed_api: {
    type: 'string',
    shortcode: ( { named: { completed_api = '' } } ) => completed_api,
  },
  target: {
    type: 'integer',
    shortcode: ( { named: { target = 0 } } ) => target,
  },
  text: {
    type: 'string',
    shortcode: ( { named: { text = '' } } ) => text,
  }
};

const gutenbergAttributes = {
  title: {
    type: 'string',
  },
  description: {
    type: 'string',
  },
  style: {
    type: 'string',
    default: 'plain'
  },
  completed: {
    type: 'integer',
  },
  completed_api: {
    type: 'string',
  },
  target: {
    type: 'integer',
  },
  text: {
    type: 'string',
  }
};

exports.shortCodeTag = shortCodeTag;
exports.gutenbergTag = gutenbergTag;
exports.shortCodeAttributes = shortCodeAttributes;
exports.gutenbergAttributes = gutenbergAttributes;