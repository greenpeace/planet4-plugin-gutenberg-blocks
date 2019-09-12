const gutenbergTag = 'planet4-blocks/cookies';

const shortCodeTag = 'shortcake_cookies';

const shortCodeAttributes = {
  title: {
    type: 'string',
    shortcode: function (attributes) {
      return attributes.named.title;
    }
  },
  description: {
    type: 'string',
    shortcode: function (attributes) {
      return attributes.named.description;
    }
  },
  necessary_cookies_name: {
    type: 'string',
    shortcode: function (attributes) {
      return attributes.named.necessary_cookies_name;
    }
  },
  necessary_cookies_description: {
    type: 'string',
    shortcode: function (attributes) {
      return attributes.named.necessary_cookies_description;
    }
  },
  all_cookies_name: {
    type: 'string',
    shortcode: function (attributes) {
      return attributes.named.all_cookies_name;
    }
  },
  all_cookies_description: {
    type: 'string',
    shortcode: function (attributes) {
      return attributes.named.all_cookies_description;
    }
  }
};

const gutenbergAttributes = {
  title: {
    type: 'string',
  },
  description: {
    type: 'string',
  },
  necessary_cookies_name: {
    type: 'string',
  },
  necessary_cookies_description: {
    type: 'string',
  },
  all_cookies_name: {
    type: 'string',
  },
  all_cookies_description: {
    type: 'string',
  },
};

exports.shortCodeTag = shortCodeTag;
exports.gutenbergTag = gutenbergTag;
exports.shortCodeAttributes = shortCodeAttributes;
exports.gutenbergAttributes = gutenbergAttributes;