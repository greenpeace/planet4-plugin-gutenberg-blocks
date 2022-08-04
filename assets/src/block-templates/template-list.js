import * as deepDive from './deep-dive';
import * as highlightedCta from './highlighted-cta';
import * as issues from './issues';
import * as pageHeaderImgSide from './page-header-img-side';
import * as quickLinks from './quick-links';
import * as realityCheck from './reality-check';
import * as sideImgTextCta from './side-image-with-text-and-cta';

import * as highLevelTopic from './high-level-topic';

const templateList = [
  deepDive,
  highlightedCta,
  issues,
  pageHeaderImgSide.variation('right'), // registered as block variation
  pageHeaderImgSide.variation('left'), // registered as block variation
  quickLinks,
  realityCheck,
  sideImgTextCta,
  // Content layout.
  highLevelTopic,
];

export default templateList;
