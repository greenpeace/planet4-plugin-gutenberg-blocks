import metadata from './block-pattern.json';
import * as deepDive from '../deep-dive';
import * as highlightedCta from '../highlighted-cta';
import * as pageHeaderImgSide from '../page-header-img-side';
import * as quickLinks from '../quick-links';
import * as realityCheck from '../reality-check';
import * as sideImgTextCta from '../side-image-with-text-and-cta';

const layout = () => [
  [
    'core/group',
    {
      className: `block ${metadata.classname}`,
    },
    [
      ...pageHeaderImgSide.variation('right').layout(),
      ...realityCheck.layout(),
      ...sideImgTextCta.layout({
        titlePlaceholder: 'The problem',
        backgroundColor: 'grey-05',
        alignFull: true,
      }),
      ...deepDive.layout({
        titlePlaceholder: 'Better understand the issues [deep dive topics]',
        backgroundColor: 'white',
      }),
      ...sideImgTextCta.layout({
        titlePlaceholder: 'What we do',
        mediaPosition: 'right',
        backgroundColor: 'grey-05',
        alignFull: true,
      }),
      ...highlightedCta.layout({
        titlePlaceholder: 'Featured action title',
      }),
      ['planet4-blocks/covers', {'cover_type': 'take-action'}],
      ['planet4-blocks/articles', {}],
      ['planet4-blocks/covers', {'cover_type': 'content'}],
      // two columns gravity forms
      ...quickLinks.layout({
        titlePlaceholder: 'Explore by topics',
        backgroundColor: 'white',
      })
    ]
  ]
];

export default layout;
