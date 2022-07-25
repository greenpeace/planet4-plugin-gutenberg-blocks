import * as deepDive from './deep-dive';
import * as highlightedCta from './highlighted-cta';
import * as issues from './issues';
import * as pageHeaderImgSide from './page-header-img-side';
import * as quickLinks from './quick-links';
import * as realityCheck from './reality-check';
import * as sideImgTextCta from './side-image-with-text-and-cta';

import * as highLevelTopic from './high-level-topic';

const patternList = [
  deepDive,
  highlightedCta,
  issues,
  pageHeaderImgSide.variation('right'),
  pageHeaderImgSide.variation('left'),
  quickLinks,
  realityCheck,
  sideImgTextCta,
  //
  highLevelTopic,
];

export default patternList;
