const OLD_COVER_TYPES = {
  '1': 'take-action',
  '2': 'campaign',
  '3': 'content',
};

export const coversV1 = {
  attributes: {
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
    },
  },
  isEligible({ covers_view, cover_type }) {
    return covers_view || !isNaN(cover_type);
  },
  migrate( { covers_view, cover_type, ...attributes } ) {
    attributes.version = 1;
    attributes.initialRowsLimit = covers_view === '3' ? 0 : Number(covers_view);

    if (!isNaN(cover_type)) {
      attributes.cover_type = OLD_COVER_TYPES[cover_type];
    } else {
      attributes.cover_type = cover_type;
    }

    return attributes;
  },
  save: () => null
};
