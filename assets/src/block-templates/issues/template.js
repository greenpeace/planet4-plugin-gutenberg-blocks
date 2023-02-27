import mainThemeUrl from '../main-theme-url';

const item = ['core/group', {
  backgroundColor: '',
  style: {
    border: { radius: '4px' },
    spacing: {
      padding: {
        top: '32px',
        right: '16px',
        bottom: '32px',
        left: '16px',
      }
    },
  },
  layout: {
    type: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'left',
    orientation: 'horizontal',
  },
}, [
  ['core/image', {
    className: 'force-no-lightbox force-no-caption my-0 square-40',
    url: `${mainThemeUrl}/images/placeholders/placeholder-40x40.jpg`,
    alt: __('Enter text', 'planet4-blocks-backend'),
  }],
  ['core/heading', {
    level: 5,
    className: 'w-auto',
    style: {
      typography: { fontSize: '1rem' },
      spacing: {
        margin: { top: '0px', bottom: '0px', left: '16px' },
      },
    },
    textAlign: 'left',
    placeholder: __('Enter text', 'planet4-blocks-backend')
  }]
]];

const template = () => ([
  [ 'core/group', {
      align: 'full',
      className: 'block',
      style: {
        spacing: {
          padding: {
            top: '80px',
            bottom: '80px',
          },
        },
      },
    },
    [
      [ 'core/group', {
          className: 'container',
        }, [
          [ 'core/heading', {
              level: 2,
              placeholder: __( 'Enter title', 'planet4-blocks-backend' ),
              style: {
                spacing: {
                  margin: {
                    bottom: '24px',
                  },
                },
              },
              textAlign: 'center',
            }
          ],
          [ 'core/paragraph', {
              className: 'my-0',
              placeholder: __( 'Enter description', 'planet4-blocks-backend' ),
              align: 'center',
            },
          ],
          [ 'core/group', {
              className: 'is-style-space-evenly',
              layout: {
                type: 'flex',
                allowOrientation: false,
              },
              style: {
                spacing: {
                  padding: {
                    top: '40px',
                    bottom: '56px',
                  },
                },
              },
            },
            [...Array(4).keys()].map(() => item)
          ],
          [ 'core/buttons', {
              layout: {
                type: 'flex',
                justifyContent: 'center',
              },
            }, [
            [ 'core/button', { placeholder: __( 'Enter text', 'planet4-blocks-backend' ) } ]]],
          ],
        ],
      ],
    ],
  ]
);

export default template;
