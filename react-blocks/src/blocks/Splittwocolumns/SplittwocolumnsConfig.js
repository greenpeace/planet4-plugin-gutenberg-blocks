const gutenbergTag = 'planet4-blocks/split-two-columns';

const shortCodeTag = 'shortcake_split_two_columns';

const shortCodeAttributes = {
  select_issue: {
    type: 'integer',
    shortcode: ({named: {select_issue = ''}}) => select_issue,
  },
  title: {
    type: 'string',
    shortcode: ({named: {title = ''}}) => title,
  },
  issue_description: {
    type: 'string',
    shortcode: ({named: {issue_description = ''}}) => issue_description,
  },
  issue_link_text: {
    type: 'string',
    shortcode: ({named: {issue_link_text = ''}}) => issue_link_text,
  },
  issue_link_path: {
    type: 'string',
    shortcode: ({named: {issue_link_path = ''}}) => issue_link_path,
  },
  issue_image: {
    type: 'integer',
    shortcode: ({named: {issue_image = ''}}) => issue_image,
  },
  focus_issue_image: {
    type: 'string',
    shortcode: ({named: {focus_issue_image = ''}}) => focus_issue_image,
  },
  select_tag: {
    type: 'integer',
    shortcode: ({named: {select_tag = ''}}) => select_tag,
  },
  tag_description: {
    type: 'string',
    shortcode: ({named: {tag_description = ''}}) => tag_description,
  },
  button_text: {
    type: 'string',
    shortcode: ({named: {button_text = ''}}) => button_text,
  },
  button_link: {
    type: 'string',
    shortcode: ({named: {button_link = ''}}) => button_link,
  },
  tag_image: {
    type: 'integer',
    shortcode: ({named: {tag_image = ''}}) => tag_image,
  },
  focus_tag_image: {
    type: 'string',
    shortcode: ({named: {focus_tag_image = ''}}) => focus_tag_image,
  },
};

const gutenbergAttributes = {
  select_issue: {
    type: 'number',
    default: 0,
  },
  title: {
    type: 'string',
  },
  issue_description: {
    type: 'string',
  },
  issue_link_text: {
    type: 'string',
  },
  issue_link_path: {
    type: 'string',
  },
  issue_image: {
    type: 'number',
  },
  focus_issue_image: {
    type: 'string',
  },
  select_tag: {
    type: 'number',
    default: 0,
  },
  tag_description: {
    type: 'string',
  },
  button_text: {
    type: 'string',
  },
  button_link: {
    type: 'string',
  },
  tag_image: {
    type: 'number',
  },
  focus_tag_image: {
    type: 'string',
  },
};

exports.shortCodeTag = shortCodeTag;
exports.gutenbergTag = gutenbergTag;
exports.shortCodeAttributes = shortCodeAttributes;
exports.gutenbergAttributes = gutenbergAttributes;