import { ArticlesBlock } from './blocks/Articles/ArticlesBlock';
import { CarouselHeaderBlock } from './blocks/Carouselheader/CarouselHeaderBlock';
import { ColumnsBlock } from './blocks/Columns/ColumnsBlock';
import { CookiesBlock } from './blocks/Cookies/CookiesBlock';
import { CounterBlock } from './blocks/Counter/CounterBlock';
import { CoversBlock } from './blocks/Covers/CoversBlock';
import { GalleryBlock } from './blocks/Gallery/GalleryBlock';
import { HappypointBlock } from './blocks/Happypoint/HappypointBlock';
import { registerMediaBlock } from './blocks/Media/MediaBlock';
import { SocialmediaBlock } from './blocks/Socialmedia/SocialmediaBlock';
import { SocialMediaCardsBlock } from './blocks/SocialMediaCards/SocialMediaCardsBlock';
import { SplittwocolumnsBlock } from './blocks/Splittwocolumns/SplittwocolumnsBlock';
import { registerSubmenuBlock, SubmenuBlock } from './blocks/Submenu/SubmenuBlock';
import { TakeactionboxoutBlock } from './blocks/Takeactionboxout/TakeactionboxoutBlock';
import { registerTimelineBlock } from './blocks/Timeline/TimelineBlock';
import { addBlockFilters } from './BlockFilters';
import { setupImageBlockExtension } from './ImageBlockExtension';
import { replaceTaxonomyTermSelectors } from "./replaceTaxonomyTermSelectors";
import { SpreadsheetBlock } from "./blocks/Spreadsheet/SpreadsheetBlock"
import { addButtonLinkPasteWarning } from './addButtonLinkPasteWarning';
import { setupCustomSidebar } from "./setupCustomSidebar";
import { setUpCssVariables } from './connectCssVariables';
import { SubPagesBlock } from './blocks/SubPages/SubPagesBlock';
import { blockEditorValidation } from './BlockEditorValidation';
import { ENFormBlock } from './blocks/ENForm/ENFormBlock';

blockEditorValidation();
new ArticlesBlock();
new CarouselHeaderBlock();
new ColumnsBlock();
new CookiesBlock();
new CounterBlock();
new CoversBlock();
new GalleryBlock();
new HappypointBlock();
registerMediaBlock();
new SocialmediaBlock();
new SocialMediaCardsBlock();
new SplittwocolumnsBlock();
new SpreadsheetBlock()
registerSubmenuBlock();
new SubPagesBlock();
new TakeactionboxoutBlock();
new ENFormBlock()
registerTimelineBlock();

addBlockFilters();
setupImageBlockExtension();
addButtonLinkPasteWarning();
replaceTaxonomyTermSelectors();
setupCustomSidebar();
setUpCssVariables();
blockEditorValidation();
