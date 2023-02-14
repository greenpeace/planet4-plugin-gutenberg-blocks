const { registerBlockVariation, registerBlockStyle } = wp.blocks;

export const registerCoversQueryLoop = () => {
  const blockVariations = [
    {
      name: 'planet4-variations/query-loop-content-covers',
      title: 'Content Covers Query Loop',
      className: 'query-loop-cover query-loop-content-cover',
      attributes: {
        query: {
          perPage: 4,
          postType: 'post',
        },
      },
      innerBlocks: [
        [ 'core/heading' ],
        [ 'core/paragraph' ],
        [
          'core/post-template',
          {},
          [
            [ 'core/post-featured-image' ],
            [ 'core/group', {}, [
              [ 'core/post-title', { isLink: true, rel: 'Action link', linkTarget: '_blank' } ],
              [ 'core/post-date' ],
              [ 'core/post-excerpt' ],
            ] ],
          ],
        ],
        [ 'core/buttons', { className: 'carousel-query-controls' }, [
          [ 'core/button', { className: 'carousel-query-control-prev', text: 'Prev'} ],
          [ 'core/button', { className: 'carousel-query-control-next', text: 'Next' } ],
        ] ],
        [ 'core/query-pagination' ],
      ],
    },
    {
      name: 'planet4-variations/query-loop-action-covers',
      title: 'Action Covers Query Loop',
      className: 'query-loop-cover query-loop-action-cover',
      attributes: {
        query: {
          perPage: 3,
          postType: 'p4_action',
        },
      },
      innerBlocks: [
        [ 'core/heading' ],
        [ 'core/paragraph' ],
        [
          'core/post-template',
          {},
          [
            [ 'core/post-featured-image' ],
            [ 'core/group', {}, [
              [ 'core/post-terms', { term: 'post_tag' } ],
              [ 'core/post-title', { isLink: true, rel: 'Action link', linkTarget: '_blank' } ],
              [ 'core/post-excerpt' ],
              [ 'core/buttons', {}, [
                [ 'core/button', { className: 'is-style-cta', text: 'Take action'} ],
              ] ],
            ] ],
          ],
        ],
        [ 'core/buttons', { className: 'carousel-query-controls' }, [
          [ 'core/button', { className: 'carousel-query-control-prev', text: 'Prev'} ],
          [ 'core/button', { className: 'carousel-query-control-next', text: 'Next' } ],
        ] ],
        [ 'core/query-pagination' ],
      ],
    },
  ];

  const variationStyles = [{
    name: 'grid',
    label: 'Grid',
  }, {
    name: 'carousel',
    label: 'Carousel',
  }];

  for (const style of variationStyles) {
    registerBlockStyle('core/query', style);
  }

  for (const variation of blockVariations) {
    registerBlockVariation(
      'core/query',
      [
        {
          name: variation.name,
          title: variation.title,
          attributes: {
            className: variation.className,
            namespace: variation.name,
            query: {
              pages: 0,
              offset: 0,
              order: 'desc',
              orderBy: 'date',
              author: '',
              search: '',
              exclude: [],
              sticky: '',
              inherit: false,
              perPage: 4,
              postType: 'post',
              ...variation.attributes.query,
            },
            displayLayout: {
              ...variation.attributes.displayLayout,
              type: 'flex',
              columns: variation.attributes.query.perPage,
            },
          },
          innerBlocks: [ ...variation.innerBlocks ],
          allowedControls: [ 'inherit', 'order', 'taxQuery', 'search' ],
          scope: [ 'inserter' ],
          isActive: ( { namespace, query } ) => (
            namespace === variation.name
            && query.postType === variation.attributes.query.postType
          ),
        }
      ],
    );
  }
}
