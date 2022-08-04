import metadata from './block.json';
import mainThemeUrl from '../main-theme-url';

const category = ['core/column', {}, [
  ['core/group', {className: 'group-stretched-link'}, [
    ['core/image', {
      align: 'center',
      className: 'is-style-rounded-90 force-no-lightbox force-no-caption mb-0',
      url: `${mainThemeUrl}/images/placeholders/placeholder-90x90.jpg`
    }],
    ['core/spacer', {height: '16px'}],
    ['core/heading', {
      level: 5,
      style: {typography: {fontSize: '1rem'}},
      textAlign: 'center',
      placeholder: 'Category'
    }]
  ]]
]];

const template = ({
  titlePlaceholder = 'Enter title',
  backgroundColor = 'grey-05',
}) => ([
  ['core/group', {
    className: `block ${metadata.classname}`,
    align: 'full',
    backgroundColor
  }, [
    ['core/group', {className: 'container'}, [
      ['core/spacer', {height: '24px'}],
      ['core/heading', {level: 4, placeholder: titlePlaceholder}],
      ['core/columns', {
        isStackedOnMobile: false,
        className: 'is-style-mobile-carousel'
      }, [
        category, category, category, category, category
      ]]
    ]]
  ]]
]);

export default template;
