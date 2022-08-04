import metadata from './block.json';
import mainThemeUrl from '../main-theme-url';

const mediaText = [
  'core/media-text', {
    mediaWidth: 15,
    mediaUrl: `${mainThemeUrl}/images/placeholders/placeholder-40x40.jpg`,
    mediaType: 'image',
    mediaSizeSlug: 'thumbnail',
    isStackedOnMobile: false,
    verticalAlignment: 'center',
    imageFille: false,
    backgroundColor: 'white',
    className: 'is-style-large-padding force-no-lightbox',
  }, [
    ['core/paragraph', {
      align: 'left',
      placeholder: 'Enter text',
      style:{typography: {fontSize:'1rem', fontStyle:'normal', 'fontWeight': 700}},
      className: 'is-style-roboto-font-family',
    }]
  ]
]

const template = () => [
  [
    'core/group',
    {
      className: `${metadata.classname}`,
      align: 'full',
      backgroundColor: 'grey-05',
    },
    [
      ['core/group', {className: 'container'}, [
        ['core/spacer', {height: '60px'}],
        ['core/heading', {
          level: 1,
          textAlign: 'center',
          placeholder: 'Enter title',
        }],
        ['core/paragraph', {
          align: 'center',
          placeholder: 'Enter description',
        }],
        ['core/spacer', {height: '37px'}],
        ['core/group', {
          className: 'is-style-space-evenly',
          layout: {type: 'flex', allowOrientation: false}
        }, [
          mediaText, mediaText, mediaText, mediaText
        ]],
        ['core/spacer', {height: '37px'}],
        ['core/buttons', {
          layout: {type: 'flex', justifyContent: 'center'}
        }, [
          ['core/button']
        ]],
        ['core/spacer', {height: '69px'}],
      ]],
    ]
  ]
];

export default template;
