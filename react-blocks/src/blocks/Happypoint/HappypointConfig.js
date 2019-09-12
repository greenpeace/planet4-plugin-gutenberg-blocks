const gutenbergTag = 'planet4-blocks/happypoint';

const shortCodeTag = 'shortcake_happy_point';

const shortCodeAttributes = {
  opacity: {
    type: 'integer',
    shortcode: ({named: {opacity = ''}}) => opacity,
  },
  id: {
    type: 'integer',
    shortcode: ({named: {id = ''}}) => id,
  },
  focus_image: {
    type: 'string',
    shortcode: ({named: {focus_image = ''}}) => focus_image,
  },
  mailing_list_iframe: {
    type: 'string',
    shortcode: ({named: {mailing_list_iframe = ''}}) => mailing_list_iframe,
  },
  iframe_url: {
    type: 'string',
    shortcode: ({named: {iframe_url = ''}}) => iframe_url,
  },
};

const gutenbergAttributes = {
  focus_image: {
    type: 'string',
  },
  opacity: {
    type: 'number',
    default: 60
  },
  mailing_list_iframe: {
    type: 'boolean',
  },
  iframe_url: {
    type: 'string',
  },
  id: {
    type: 'number',
  },
  load_iframe: {
    type: 'boolean',
    default: false
  }
};

exports.shortCodeTag = shortCodeTag;
exports.gutenbergTag = gutenbergTag;
exports.shortCodeAttributes = shortCodeAttributes;
exports.gutenbergAttributes = gutenbergAttributes;