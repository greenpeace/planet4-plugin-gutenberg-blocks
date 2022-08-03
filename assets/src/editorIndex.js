import { ArticlesBlock } from './blocks/Articles/ArticlesBlock';
import { registerColumnsBlock } from './blocks/Columns/ColumnsBlock';
import { CookiesBlock } from './blocks/Cookies/CookiesBlock';
import { CounterBlock } from './blocks/Counter/CounterBlock';
import { HappypointBlock } from './blocks/Happypoint/HappypointBlock';
import { registerMediaBlock } from './blocks/Media/MediaBlock';
import { registerSocialMediaBlock } from './blocks/SocialMedia/SocialMediaBlock';
import { SocialMediaCardsBlock } from './blocks/SocialMediaCards/SocialMediaCardsBlock';
import { registerSplittwocolumnsBlock } from './blocks/Splittwocolumns/register';
import { registerSubmenuBlock } from './blocks/Submenu/SubmenuBlock';
import { registerTakeActionBoxoutBlock } from './blocks/TakeActionBoxout/TakeActionBoxoutBlock';
import { registerTimelineBlock } from './blocks/Timeline/TimelineBlock';
import { addBlockFilters } from './BlockFilters';
import { setupImageBlockExtension } from './ImageBlockExtension';
import { replaceTaxonomyTermSelectors } from './replaceTaxonomyTermSelectors';
import { registerSpreadsheetBlock } from './blocks/Spreadsheet/SpreadsheetBlock';
import { addButtonLinkPasteWarning } from './addButtonLinkPasteWarning';
import { setupCustomSidebar } from './setupCustomSidebar';
import { setUpCssVariables } from './connectCssVariables';
import { SubPagesBlock } from './blocks/SubPages/SubPagesBlock';
import { blockEditorValidation } from './BlockEditorValidation';
import { registerGuestBookBlock } from './blocks/GuestBook/GuestBookBlock';
import { registerBlock as registerShareButtonsBlock } from './blocks/ShareButtons/ShareButtonsBlock';

import { registerBlockPatterns } from './block-patterns/register';

blockEditorValidation();
new ArticlesBlock();
registerColumnsBlock();
new CookiesBlock();
new CounterBlock();
new HappypointBlock();
registerMediaBlock();
registerSocialMediaBlock();
new SocialMediaCardsBlock();
registerSplittwocolumnsBlock();
registerSpreadsheetBlock();
registerSubmenuBlock();
new SubPagesBlock();
registerTakeActionBoxoutBlock();
registerTimelineBlock();
registerGuestBookBlock();
registerShareButtonsBlock();

addBlockFilters();
setupImageBlockExtension();
addButtonLinkPasteWarning();
replaceTaxonomyTermSelectors();
setupCustomSidebar();
setUpCssVariables();
blockEditorValidation();

const { registerBlockVariation } = wp.blocks;
const { __ } = wp.i18n;

registerBlockVariation('core/group', {
  name: 'group-stretched-link',
  title: __('Stretched Link', 'planet4-blocks-backend'),
  description: __('Make the entire block contents clickable, using the first link inside.', 'planet4-blocks-backend'),
  attributes: { className: 'group-stretched-link' },
  scope: ['inserter', 'transform'],
  isActive: (blockAttributes) => {
    return blockAttributes.className === 'group-stretched-link';
  },
  icon: 'admin-links',
});

window.onload = function() {
  let obs = new MutationObserver((o, m) => {
    let button = document.querySelector('.edit-post-header-toolbar__inserter-toggle');
    if (button) {
      button.addEventListener('click', () => registerBlockPatterns());
      m.disconnect();
      return;
    }
  });
  obs.observe(document, { childList: true, subtree: true });
};
