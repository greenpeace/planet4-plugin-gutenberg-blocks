const gutenbergTag = 'planet4-blocks/submenu';

const shortCodeTag = 'shortcake_submenu';

const shortCodeAttributes = {
  submenu_style: {
    type: 'integer',
    shortcode: function (attributes) {
      return Number(attributes.named.submenu_style);
    }
  },
  title: {
    type: 'string',
    shortcode: function (attributes) {
      return attributes.named.title;
    }
  },
  levels: {
    type: 'array',
    shortcode: function (attributes) {
      let levels = [];
      if (attributes.named.heading1 > 0) {
        let level = {
          heading: Number(attributes.named.heading1),
          link: attributes.named.link1 || false,
          style: attributes.named.style1 || 'none'
        };
        levels.push(Object.assign({}, level));

        if (attributes.named.heading2 > 0) {
          let level = {
            heading: Number(attributes.named.heading2),
            link: attributes.named.link2 || false,
            style: attributes.named.style2 || 'none'
          };
          levels.push(Object.assign({}, level));

          if (attributes.named.heading3 > 0) {
            let level = {
              heading: Number(attributes.named.heading3),
              link: attributes.named.link3 || false,
              style: attributes.named.style3 || 'none'
            };
            levels.push(Object.assign({}, level));
          }
        }
      }
      return levels;
    },
  }
};

const gutenbergAttributes = {
  submenu_style: {
    type: 'integer',
    default: 1
  },
  title: {
    type: 'string',
  },
  levels: {
    type: 'array',
    default: [ {heading: 0, link: false, style: 'none'}]
  },
};

exports.shortCodeTag = shortCodeTag;
exports.gutenbergTag = gutenbergTag;
exports.shortCodeAttributes = shortCodeAttributes;
exports.gutenbergAttributes = gutenbergAttributes;