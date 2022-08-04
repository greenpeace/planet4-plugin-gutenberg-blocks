import metadata from './block.json';
import mainThemeUrl from '../main-theme-url';

const topic = ['core/column', {}, [
  ['core/image', {
    align: 'center',
    className: 'mb-0 force-no-lightbox force-no-caption',
    url: `${mainThemeUrl}/images/placeholders/placeholder-75x75.jpg`
  }],
  ['core/heading', {
    level: 2,
    style: {typography: {fontSize: '4rem'}},
    textAlign: 'center',
    className: 'mb-0',
    placeholder: 'Enter title'
  }],
  ['core/paragraph', {
    align: 'center',
    placeholder: 'Enter description'
  }],
  ['core/spacer', {height: '16px'}],
]];

const template = () => [
  ['core/columns', {className: `block ${metadata.classname}`}, [
    topic, topic, topic
  ]]
];

export default template;
