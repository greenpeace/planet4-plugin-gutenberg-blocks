import mainThemeUrl from '../main-theme-url';

const {__} = wp.i18n;

const topic = ['core/column', {}, [
  ['core/group', {className: 'group-stretched-link'}, [
    ['core/image', {
      align: 'center',
      className: 'force-no-lightbox force-no-caption is-style-rounded-180',
      url: `${mainThemeUrl}/images/placeholders/placeholder-180x180.jpg`,
    }],
    ['core/heading', {
      level: 5,
      textAlign: 'center',
      style: {typography: {fontSize: '1rem'}},
      className: 'is-style-chevron',
      placeholder: __('Enter topic', 'planet4-blocks-backend'),
    }],
    ['core/spacer', {height: '16px'}],
  ]],
]];

const innerBlocks = ({
  title = '',
}) => ([
  ['core/group', {className: 'container'}, [
    ['core/spacer', {height: '24px'}],
    ['core/heading', {
      textAlign: 'center',
      placeholder: __('Enter title', 'planet4-blocks-backend'),
      content: title,
    }],
    ['core/columns', {}, [...Array(4).keys()].map(() => topic)],
  ]],
]);

const template = ({
  title = '',
}) => ([
  [
    'core/group',
    {
      className: 'block',
      align: 'full',
    },
    innerBlocks({title}),
  ],
]);

export default template;
