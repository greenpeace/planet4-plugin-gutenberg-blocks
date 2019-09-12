const gutenbergTag = 'planet4-blocks/social-media';

const shortCodeTag = 'shortcake_social_media';

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
  embed_type: {
    type: 'string',
    shortcode: function (attributes) {
      return attributes.named.embed_type;
    }
  },
  facebook_page_tab: {
    type: 'string',
    shortcode: function (attributes) {
      return attributes.named.facebook_page_tab;
    }
  },
  social_media_url: {
    type: 'string',
    shortcode: function (attributes) {
      return attributes.named.social_media_url;
    }
  },
  alignment_class: {
    type: 'string',
    shortcode: function (attributes) {
      return attributes.named.alignment_class;
    }
  },
};

const gutenbergAttributes = {
  title: {
    type: 'string',
    default: '',
  },
  description: {
    type: 'string',
    default: '',
  },
  embed_type: {
    type: 'string',
    default: 'oembed'
  },
  facebook_page_tab: {
    type: 'string',
    default: 'timeline'
  },
  social_media_url: {
    type: 'string',
    default: ''
  },
  alignment_class: {
    type: 'string',
    default: ''
  },
};

exports.shortCodeTag = shortCodeTag;
exports.gutenbergTag = gutenbergTag;
exports.shortCodeAttributes = shortCodeAttributes;
exports.gutenbergAttributes = gutenbergAttributes;