const gutenbergTag = 'planet4-blocks/timeline';

const shortCodeTag = 'shortcake_timeline';

const shortCodeAttributes = {
  timeline_title: {
    type: 'string',
    shortcode: function (attributes) {
      return attributes.named.timeline_title;
    }
  },
  description: {
    type: 'string',
    shortcode: function (attributes) {
      return attributes.named.description;
    }
  },
  google_sheets_url: {
    type: 'string',
    shortcode: function (attributes) {
      return attributes.named.google_sheets_url;
    }
  },
  language: {
    type: 'array',
    shortcode: function (attributes) {
      return attributes.named.language;
    }
  },
  timenav_position: {
    type: 'array',
    shortcode: function (attributes) {
      return attributes.named.timenav_position;
    }
  },
  start_at_end: {
    type: 'boolean',
    shortcode: function (attributes) {
      return attributes.named.start_at_end;
    }
  }
};

const gutenbergAttributes = {
  timeline_title: {
    type: 'string',
  },
  description: {
    type: 'string',
  },
  google_sheets_url: {
    type: 'string',
  },
  language: {
    type: 'string',
    default: 'en',
  },
  timenav_position: {
    type: 'string',
  },
  start_at_end: {
    type: 'boolean',
  },
};

exports.shortCodeTag = shortCodeTag;
exports.gutenbergTag = gutenbergTag;
exports.shortCodeAttributes = shortCodeAttributes;
exports.gutenbergAttributes = gutenbergAttributes;

