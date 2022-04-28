const { registerBlockVariation } = wp.blocks;
const { __ } = wp.i18n;

export const registerPageHeaderBlock = () => {

  const POS_LEFT = 'left';
  const POS_RIGHT = 'right';
  let opposite = (pos) => pos === POS_LEFT ? POS_RIGHT : POS_LEFT;
  let classname = 'is-pattern-p4_page-header';

  let scope = ['inserter'];

  let attributes = {
      className: classname,
      mediaType: 'image',
      mediaUrl: `${window.p4bk_vars.themeUrl}/images/placeholders/placeholder-546x415.jpg`,
      imageFill: false,
      align:'full'
  };

  let innerBlocks = (imgPosition) => [
    ['core/group', {}, [
      ['core/heading', {
        level: 1,
        backgroundColor: 'white',
        //textAlign: opposite(imgPosition),
        placeholder: __('Enter title', 'planet4-blocks-backend')
      }]
    ]],
    ['core/paragraph', {
      //align: opposite(imgPosition),
      placeholder: __('Enter description', 'planet4-blocks-backend'),
      style: { typography: { fontSize: '1.25rem'} }
    }],
    ['core/buttons', {
      //layout: { type:"flex", justifyContent: opposite(imgPosition) }
    }, [
      ['core/button', {className: 'is-style-cta'}]
    ]],
  ];

  registerBlockVariation('core/media-text', {
    name: 'page-header-img-right',
    title: __('Page header with image on the right', 'planet4-blocks-backend'),
    description: __('Page header with image on the right', 'planet4-blocks-backend'),
    scope: scope,
    attributes: { mediaPosition: POS_RIGHT, ...attributes },
    innerBlocks: innerBlocks(POS_RIGHT),
    isActive: (blockAttributes) => {
      return blockAttributes.className === classname
        && blockAttributes.mediaPosition === POS_RIGHT;
    }
  });

  registerBlockVariation('core/media-text', {
    name: 'page-header-img-left',
    title: __('Page header with image on the left', 'planet4-blocks-backend'),
    description: __('Page header with image on the left', 'planet4-blocks-backend'),
    scope: scope,
    attributes: { mediaPosition: POS_LEFT, ...attributes },
    innerBlocks: innerBlocks(POS_LEFT),
    isActive: (blockAttributes) => {
      return blockAttributes.className === classname
        && blockAttributes.mediaPosition === POS_LEFT;
    }
  });
}
