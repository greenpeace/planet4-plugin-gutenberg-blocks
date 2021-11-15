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
import { ENFormBlock } from './blocks/OldENForm/ENFormBlock';
import { registerGuestBookBlock } from './blocks/GuestBook/GuestBookBlock';
import registerHubspotFormThankyouBlock from './blocks/HubspotFormThankyou';

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
new ENFormBlock();
registerTimelineBlock();
registerGuestBookBlock();

addBlockFilters();
setupImageBlockExtension();
addButtonLinkPasteWarning();
replaceTaxonomyTermSelectors();
setupCustomSidebar();
setUpCssVariables();
blockEditorValidation();
registerHubspotFormThankyouBlock();
