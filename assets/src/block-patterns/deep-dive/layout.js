import metadata from './block-pattern.json';
import innerBlocks from './innerBlocks';

const layout = ({
  titlePlaceholder = 'Enter title',
  backgroundColor = 'grey-05',
}) => ([
  [
    'core/group',
    {
      className: `block ${metadata.classname}`,
      align: 'full',
      backgroundColor
    },
    innerBlocks({titlePlaceholder})
  ]
]);

export default layout;
