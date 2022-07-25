import { createBlock } from '@wordpress/blocks';
import mainThemeUrl from '../main-theme-url';

const column = ['core/column', {}, [
  ['core/group', {className: 'group-stretched-link'}, [
    ['core/image', {
      align: 'center',
      className: 'force-no-lightbox force-no-caption is-style-rounded-180',
      url: `${mainThemeUrl}/images/placeholders/placeholder-180x180.jpg`
    }],
    ['core/heading', {
      level: 5,
      textAlign: 'center',
      style: {typography:{fontSize:'1rem'}},
      className: 'is-style-chevron',
      placeholder: 'Enter topic'
    }],
    ['core/spacer', { height: '16px' }]
  ]]
]];

const innerBlocks = ({
  titlePlaceholder = 'Enter title'
}) => ([
  ['core/group', {className: 'container'}, [
    ['core/spacer', { height: '24px' }],
    ['core/heading', {
      textAlign: 'center',
      placeholder: titlePlaceholder
    }],
    ['core/columns', {}, [
      column, column, column, column
    ]]
  ]]
]);

export default innerBlocks;
