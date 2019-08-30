const shortCodeTag = 'shortcake_articles';

const gutenbergTag = 'planet4-blocks/articles';

const shortCodeAttributes = {
  article_heading: {
    type: 'string',
    shortcode: function (attributes) {
      return attributes.named.article_heading;
    }
  },
  articles_description: {
    type: 'string',
    shortcode: function (attributes) {
      return attributes.named.articles_description;
    }
  },
  article_count: {
    type: 'string',
    shortcode: function (attributes) {
      return attributes.named.article_count;
    }
  },
  read_more_text: {
    type: 'string',
    shortcode: function (attributes) {
      return attributes.named.read_more_text;
    }
  },
  read_more_link: {
    type: 'string',
    shortcode: function (attributes) {
      return attributes.named.read_more_link;
    }
  },
  button_link_new_tab: {
    type: 'string',
    shortcode: function (attributes) {
      return attributes.named.button_link_new_tab;
    }
  },
  ignore_categories: {
    type: 'string',
    shortcode: function (attributes) {
      return attributes.named.ignore_categories;
    }
  },
  tags: {
    type: 'string',
    shortcode: function (attributes) {
      return attributes.named.tags ? attributes.named.tags.split(',') : [];
    }
  },
  post_types: {
    type: 'string',
    shortcode: function (attributes) {
      return attributes.named.tags ? attributes.named.post_types.split(',') : [];
    }
  },
  posts: {
    type: 'string',
    shortcode: function (attributes) {
      return attributes.named.tags ? attributes.named.posts.split(',') : [];
    }
  },
};

const gutenbergAttributes = {
  article_heading: {
    type: 'string',
  },
  articles_description: {
    type: 'string',
  },
  article_count: {
    type: 'integer',
    default: 3
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
  read_more_text: {
    type: 'string'
  },
  read_more_link: {
    type: 'string',
    default: ''
  },
  button_link_new_tab: {
    type: 'boolean',
    default: false
  }
};

exports.shortCodeTag = shortCodeTag;
exports.gutenbergTag = gutenbergTag;
exports.shortCodeAttributes = shortCodeAttributes;
exports.gutenbergAttributes = gutenbergAttributes;