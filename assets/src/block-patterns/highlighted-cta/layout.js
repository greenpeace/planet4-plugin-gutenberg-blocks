import metadata from './block-pattern.json';
import mainThemeUrl from '../main-theme-url';

const layout = ({
  titlePlaceholder = 'Enter title'
}) => [
  [
    'core/columns',
    {
      className: `block ${metadata.classname}`,
      textColor: 'white',
      backgroundColor: 'dark-blue',
    },
    [
      ['core/column', {}, [
        ['core/image', {
          align: 'center',
          className: 'force-no-lightbox force-no-caption',
          url: `${mainThemeUrl}/images/placeholders/placeholder-80x80.jpg`,
        }],
        ['core/heading', {
          textAlign: 'center',
          level: 3,
          placeholder: titlePlaceholder
        }],
        ['core/spacer', {height: '16px'}],
        ['core/buttons', {layout: {type: 'flex', justifyContent: 'center'}}, [
          ['core/button', {className: 'is-style-transparent'}]
        ]],
        ['core/spacer', {height: '16px'}],
      ]]
    ]
  ]
];

export default layout;
