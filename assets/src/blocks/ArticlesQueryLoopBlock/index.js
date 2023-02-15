const { registerBlockVariation} = wp.blocks;

const MY_TEST_BLOCK = 'planet4-blocks/articles-query-loop';

export const registerArticlesQueryLoopBlock = () => {
  registerBlockVariation( 'core/query', {
    name: MY_TEST_BLOCK,
    title: 'Artcles QLB',
    isActive: ( { namespace, query } ) => {
        return (
            namespace === MY_TEST_BLOCK
            && query.postType === 'post'
        );
    },
    attributes: {
        namespace: MY_TEST_BLOCK,
        className: 'articles-query',
        query: {
            perPage: 3,
            pages: 0,
            offset: 0,
            postType: 'post',
            order: 'desc',
            orderBy: 'date',
            author: '',
            search: '',
            exclude: [],
            sticky: '',
            inherit: false,
        },
      },
      scope: ['inserter'],
      innerBlocks: [
        ['core/post-template', {}, [
          ['core/columns', {}, [
            ['core/post-featured-image'],
            ['core/group', {}, [
              ['core/post-title', {isLink: true, linkTarget: '_blank'}],
              ['core/post-excerpt'],
              ['core/group', {}, [
                ['core/post-author'],
                ['core/post-date']
              ]]
            ]],
          ]],
        ]]
      ],
    }
  );
}

