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

wp.blocks.registerBlockVariation('core/media-text', {
  name: 'side-image-with-text-and-cta',
  title: 'Side Image with Text and CTA',
  // Scope "block" only does something for blocks that support it (query and columns).
  // Scope "transform" only changes the attributes (this variation has none) and not inner blocks.
  scope: [
    'inserter',
    // 'block',
    // 'transform',
  ],
  innerBlocks: [
    ['core/heading', { placeHolder: 'Enter title' }],
    ['core/paragraph', { placeHolder: 'Enter description' }],
    ['core/buttons', {}, [
      ['core/button', { className: 'is-style-cta', placeHolder: 'Enter description' }]
    ]],
  ],
});
