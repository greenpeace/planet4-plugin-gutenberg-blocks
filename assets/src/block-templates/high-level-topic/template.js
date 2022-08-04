import metadata from './block.json';
import * as deepDive from '../deep-dive';
import * as highlightedCta from '../highlighted-cta';
import * as pageHeaderImgSide from '../page-header-img-side';
import * as quickLinks from '../quick-links';
import * as realityCheck from '../reality-check';
import * as sideImgTextCta from '../side-image-with-text-and-cta';

const template = () => [
  [
    'core/group',
    {
      className: `block ${metadata.classname}`,
    },
    [
      ...pageHeaderImgSide.variation('right').template(),
      ...realityCheck.template(),
      ...sideImgTextCta.template({
        titlePlaceholder: 'The problem',
        backgroundColor: 'grey-05',
        alignFull: true,
      }),
      ...deepDive.template({
        titlePlaceholder: 'Better understand the issues [deep dive topics]',
        backgroundColor: 'white',
      }),
      ...sideImgTextCta.template({
        titlePlaceholder: 'What we do',
        mediaPosition: 'right',
        backgroundColor: 'grey-05',
        alignFull: true,
      }),
      ...highlightedCta.template({
        titlePlaceholder: 'Featured action title',
      }),
      ['planet4-blocks/covers', {'cover_type': 'take-action'}],
      ['planet4-blocks/articles', {}],
      ['planet4-blocks/covers', {'cover_type': 'content'}],
      // two columns gravity forms
      ...quickLinks.template({
        titlePlaceholder: 'Explore by topics',
        backgroundColor: 'white',
      })
    ]
  ]
];

export default template;
