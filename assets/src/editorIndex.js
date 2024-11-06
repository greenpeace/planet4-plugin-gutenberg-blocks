import {registerColumnsBlock} from './blocks/Columns/ColumnsBlock';
import {HappypointBlock} from './blocks/Happypoint/HappypointBlock';
import {SocialMediaCardsBlock} from './blocks/SocialMediaCards/SocialMediaCardsBlock';
import {registerTimelineBlock} from './blocks/Timeline/TimelineBlock';
import {addBlockFilters} from './BlockFilters';
import {setupImageBlockExtension} from './ImageBlockExtension';
import {replaceTaxonomyTermSelectors} from './replaceTaxonomyTermSelectors';
import {addButtonLinkPasteWarning} from './addButtonLinkPasteWarning';
import {setUpCssVariables} from './connectCssVariables';
import {SubPagesBlock} from './blocks/SubPages/SubPagesBlock';
import {blockEditorValidation} from './BlockEditorValidation';
import {registerBlock as registerShareButtonsBlock} from './blocks/ShareButtons/ShareButtonsBlock';
import {registerBlockTemplates} from './block-templates/register';

registerColumnsBlock();
new HappypointBlock();
new SocialMediaCardsBlock();
new SubPagesBlock();
registerTimelineBlock();
registerShareButtonsBlock();

addBlockFilters();
setupImageBlockExtension();
addButtonLinkPasteWarning();
replaceTaxonomyTermSelectors();
setUpCssVariables();
blockEditorValidation();
registerBlockTemplates();
