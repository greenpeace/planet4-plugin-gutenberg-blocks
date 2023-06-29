import {ArticlesBlock} from './blocks/Articles/ArticlesBlock';
import {registerColumnsBlock} from './blocks/Columns/ColumnsBlock';
import {CookiesBlock} from './blocks/Cookies/CookiesBlock';
import {CounterBlock} from './blocks/Counter/CounterBlock';
import {HappypointBlock} from './blocks/Happypoint/HappypointBlock';
import {registerMediaBlock} from './blocks/Media/MediaBlock';
import {registerSocialMediaBlock} from './blocks/SocialMedia/SocialMediaBlock';
import {SocialMediaCardsBlock} from './blocks/SocialMediaCards/SocialMediaCardsBlock';
import {registerSplittwocolumnsBlock} from './blocks/Splittwocolumns/register';
import {registerSubmenuBlock} from './blocks/Submenu/SubmenuBlock';
import {registerTakeActionBoxoutBlock} from './blocks/TakeActionBoxout/TakeActionBoxoutBlock';
import {registerTimelineBlock} from './blocks/Timeline/TimelineBlock';
import {addBlockFilters} from './BlockFilters';
import {setupImageBlockExtension} from './ImageBlockExtension';
import {replaceTaxonomyTermSelectors} from './replaceTaxonomyTermSelectors';
import {registerSpreadsheetBlock} from './blocks/Spreadsheet/SpreadsheetBlock';
import {addButtonLinkPasteWarning} from './addButtonLinkPasteWarning';
import {setupCustomSidebar} from './setupCustomSidebar';
import {setUpCssVariables} from './connectCssVariables';
import {SubPagesBlock} from './blocks/SubPages/SubPagesBlock';
import {blockEditorValidation} from './BlockEditorValidation';
import {registerGuestBookBlock} from './blocks/GuestBook/GuestBookBlock';
import {registerBlock as registerShareButtonsBlock} from './blocks/ShareButtons/ShareButtonsBlock';
import {registerPageHeaderBlock} from './blocks/PageHeader/PageHeaderBlock';
import {registerBlockTemplates} from './block-templates/register';

// import {defaults} from 'lodash';

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


var frame = wp.media.view.MediaFrame.Post;

wp.media.view.MediaFrame.Post = frame.extend({
  initialize: function() {
    frame.prototype.initialize.apply(this, arguments);

    var State = wp.media.controller.State.extend({
      insert: function() {
        this.frame.close();
      }
    });

    this.states.add([
      new State({
        id: 'mediaArchive1',
        search: false,
        title: 'Media Archive',
      })
    ]);

    this.on('content:render:mediaArchive1', this.renderMediaArchive, this);
  },

  browseRouter: function(routerView) {
    routerView.set({
      upload: {
        text: wp.media.view.l10n.uploadFilesTitle,
        priority: 20
      },
      mediaArchive1: {
        text: 'Media Archive',
        priority: 30
      },
      browse: {
        text: wp.media.view.l10n.mediaLibraryTitle,
        priority: 40
      }
    });
  },

  renderMediaArchive : function() {
    var MediaArchiveContent = wp.Backbone.View.extend({
      tagName: 'div',
      className: 'media-archive-content',
      template: wp.template('mediaarcivecontent'),
      active: false,
      toolbar: null,
      frame: null,
    });

    var view = new MediaArchiveContent();

    this.content.set(view);
  }
});
