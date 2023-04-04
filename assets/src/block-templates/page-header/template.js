import mainThemeUrl from '../main-theme-url';

const {__} = wp.i18n;

const isNewIdentity = window.p4ge_vars.planet4_options.new_identity_styles ?? false;

const template = ({
  backgroundColor = isNewIdentity ? 'beige-100' : 'grey-05',
  mediaPosition = '',
  imageFill = false,
}) => ([
  ['core/group',
    {
      align: 'full',
      backgroundColor,
      style: {
        spacing: {
          padding: {
            top: '56px',
            bottom: '56px',
          },
        },
      },
    },
    [
      ['core/group', {className: 'container'}, [
        ['core/media-text', {
          mediaType: 'image',
          mediaPosition,
          imageFill,
          className: 'is-pattern-p4-page-header is-style-parallax',
          mediaUrl: `${mainThemeUrl}/images/placeholders/placeholder-546x415.jpg`,
          isStackedOnMobile: true,
          align: 'full',
        }, [
          ['core/group', {}, [
            ['core/heading', {
              level: 1,
              backgroundColor,
              placeholder: __('Enter title', 'planet4-blocks-backend'),
            }],
          ]],
          ['core/paragraph', {
            placeholder: __('Enter description', 'planet4-blocks-backend'),
            style: {typography: {fontSize: '1.25rem'}},
          }],
          ['core/buttons', {}, [
            ['core/button', {className: 'is-style-cta'}],
          ]],
        ]],
      ]],
    ],
  ],
]);

export default template;
