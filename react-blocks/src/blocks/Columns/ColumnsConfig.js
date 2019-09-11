const gutenbergTag = 'planet4-blocks/columns';

const shortCodeTag = 'shortcake_columns';

const shortCodeAttributes = {
  columns_block_style: {
    type: 'string',
    shortcode: ({named: {columns_block_style = ''}}) => columns_block_style,
  },
  columns_title: {
    type: 'string',
    shortcode: ({named: {columns_title = ''}}) => columns_title,
  },
  columns_description: {
    type: 'string',
    shortcode: ({named: {columns_description = ''}}) => columns_description,
  },
  columns: {
    type: 'array',
    shortcode: function (attributes) {
      let columns = [];
      if (attributes.named.title_1) {
        let column = {
          title: attributes.named.title_1,
          description: attributes.named.description_1 || '',
          cta_link: attributes.named.link_1 || '',
          cta_text: attributes.named.cta_text_1 || '',
          link_new_tab: attributes.named.link_new_tab_1 || false
        };
        if (attributes.named.columns_block_style != 'no_image')
          column.attachment = attributes.named.attachment_1 || false;
        columns.push(Object.assign({}, column));

        if (attributes.named.title_2) {
          let column = {
            title: attributes.named.title_2,
            description: attributes.named.description_2 || '',
            cta_link: attributes.named.link_2 || '',
            cta_text: attributes.named.cta_text_2 || '',
            link_new_tab: attributes.named.link_new_tab_2 || false
          };
          if (attributes.named.columns_block_style != 'no_image')
            column.attachment = attributes.named.attachment_2 || false;
          columns.push(Object.assign({}, column));

          if (attributes.named.title_3) {
            let column = {
              title: attributes.named.title_3,
              description: attributes.named.description_3 || '',
              cta_link: attributes.named.link_3 || '',
              cta_text: attributes.named.cta_text_3 || '',
              link_new_tab: attributes.named.link_new_tab_3 || false
            };
            if (attributes.named.columns_block_style != 'no_image')
              column.attachment = attributes.named.attachment_3 || false;
            columns.push(Object.assign({}, column));

            if (attributes.named.title_4) {
              let column = {
                title: attributes.named.title_4,
                description: attributes.named.description_4 || '',
                cta_link: attributes.named.link_4 || '',
                cta_text: attributes.named.cta_text_4 || '',
                link_new_tab: attributes.named.link_new_tab_4 || false
              };
              if (attributes.named.columns_block_style != 'no_image')
                column.attachment = attributes.named.attachment_4 || false;
              columns.push(Object.assign({}, column));
            }
          }
        }
      }
      return columns;
    },
  }
};

const gutenbergAttributes = {
  columns_block_style: {
    type: 'string',
  },
  columns_title: {
    type: 'string'
  },
  columns_description: {
    type: 'string'
  },
  columns: {
    type: "array",
    default: [],
    title:{
      type: 'string'
    },
    description:{
      type: 'string'
    },
    attachment:{
      type: 'string'
    },
    cta_link:{
      type: 'string'
    },
    link_new_tab:{
      type: 'string'
    },
    cta_text:{
      type: 'string'
    },
  }
};

exports.shortCodeTag = shortCodeTag;
exports.gutenbergTag = gutenbergTag;
exports.shortCodeAttributes = shortCodeAttributes;
exports.gutenbergAttributes = gutenbergAttributes;
