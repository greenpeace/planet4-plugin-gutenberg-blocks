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
import { registerPageHeaderBlock } from './blocks/PageHeader/PageHeaderBlock';
import { registerBlockTemplates } from './block-templates/register';

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
registerPageHeaderBlock();

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

const MY_VARIATION_NAME = 'planet4-blocks/test-block';

registerBlockVariation( 'core/query', {
    name: MY_VARIATION_NAME,
    title: 'Test Block',
    description: 'Displays Query Article',
    isActive: ( { namespace, query } ) => {
        return (
            namespace === MY_VARIATION_NAME
            && query.postType === 'post'
        );
    },
    attributes: {
        namespace: MY_VARIATION_NAME,
        query: {
            perPage: 3,
            pages: 0,
            offset: 0,
            postType: 'post',
            order: 'desc',
            orderBy: 'date',
            author: '',
            search: '',
            exclude: [],
            sticky: '',
            inherit: false,
        },
    },
    innerBlocks: [
      ['core/post-template', {className: 'test-code'}, [
        ['core/columns', {className: 'open-width'}, [
          ['core/post-featured-image', {}],
          ['core/group', {}, [
            ['core/post-title', {}],
            ['core/post-excerpt', {}],
            ['core/group', {}, [
              ['core/post-author', {}],
              ['core/post-date', {}]
            ]]
          ]],
        ]],
      ]]
    ],
  }
);

registerBlockTemplates();
