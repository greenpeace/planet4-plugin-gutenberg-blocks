import {registerColumnsBlock} from './blocks/Columns/ColumnsBlock';
import {HappypointBlock} from './blocks/Happypoint/HappypointBlock';
import {registerSocialMediaBlock} from './blocks/SocialMedia/SocialMediaBlock';
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
registerSocialMediaBlock();
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

const {registerBlockVariation} = wp.blocks;
const {__} = wp.i18n;

registerBlockVariation('core/group', {
  name: 'group-stretched-link',
  title: __('Stretched Link', 'planet4-blocks-backend'),
  description: __('Make the entire block contents clickable, using the first link inside.', 'planet4-blocks-backend'),
  attributes: {className: 'group-stretched-link'},
  scope: ['inserter', 'transform'],
  isActive: blockAttributes => {
    return blockAttributes.className === 'group-stretched-link';
  },
  icon: 'admin-links',
});

registerBlockTemplates();
