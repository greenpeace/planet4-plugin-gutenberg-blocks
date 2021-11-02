import { Fragment } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { InspectorControls } from '@wordpress/block-editor';
import {
  SelectControl,
  PanelBody,
  CheckboxControl,
  ToolbarGroup,
  ToolbarButton,
  Button,
} from '@wordpress/components';
import TagSelector from '../../components/TagSelector/TagSelector';
import { URLInput } from '../../components/URLInput/URLInput';
import { TakeActionBoxoutFrontend } from './TakeActionBoxoutFrontend';

// Planet 4 settings (Planet 4 >> Defaults content >> Take Action Covers default button text).
const DEFAULT_BUTTON_TEXT = window.p4bk_vars.take_action_covers_button_text;

const {
  RichText,
  BlockControls,
  MediaUpload,
  MediaUploadCheck
} = wp.blockEditor;
const { __ } = wp.i18n;

export const TakeActionBoxoutEditor = ({
  attributes,
  isSelected,
  setAttributes,
}) => {
  const {
    take_action_page,
    title,
    excerpt,
    link,
    linkText,
    newTab,
    tag_ids,
    imageUrl,
    imageId,
    imageAlt,
    className,
  } = attributes;

  const actPageList = useSelect(select => {
    const commonArgs = {
      per_page: -1,
      sort_order: 'asc',
      sort_column: 'post_title',
      post_status: 'publish',
    };
    const actArgs = {
      ...commonArgs,
      parent: window.p4ge_vars.planet4_options.act_page,
    };

    const actPages = select('core').getEntityRecords('postType', 'page', actArgs) || [];
    const campaignPages = select('core').getEntityRecords('postType', 'campaign', commonArgs) || [];

    return [...actPages, ...campaignPages];
  }, []);

  const tagsList = useSelect(select => {
    return select('core').getEntityRecords(
      'taxonomy',
      'post_tag',
      { hide_empty: false, per_page: -1 },
    ) || [];
  }, []);
  const tags = tag_ids.map(tagId => tagsList.find(({ id }) => id === tagId));

  const takeActionPageSelected = take_action_page && parseInt(take_action_page) > 0;

  const updateTakeActionPage = page => {
    const takeActionPageDetails = page > 0 ? actPageList.find(actPage => page === actPage.id) : null;
    setAttributes({
      take_action_page: page,
      title: takeActionPageDetails?.title.raw || '',
      excerpt: takeActionPageDetails?.excerpt.raw || '',
      link: takeActionPageDetails?.link || '',
      linkText: takeActionPageDetails ? (DEFAULT_BUTTON_TEXT || __('Take action', 'planet4-blocks')) : '',
      tag_ids: takeActionPageDetails?.tags || [],
      imageId: takeActionPageDetails?.featured_media || null,
      newTab: false,
    });
  }

  if (!actPageList.length || !tagsList.length) {
    return __("Populating block's fields...", 'planet4-blocks-backend');
  }

  const toAttribute = attributeName => value => setAttributes({
    [attributeName]: value
  });

  const removeImage = () => setAttributes({ imageId: null });

  const selectImage = ({ id, url, alt_text }) => setAttributes({
    imageId: id,
    imageUrl: url,
    imageAlt: alt_text,
  });

  const actPageOptions = actPageList.map(actPage => ({ label: actPage.title?.raw || actPage.id, value: actPage.id }));

  const renderEditInPlace = () => (takeActionPageSelected ?
    <TakeActionBoxoutFrontend {...{tags}} {...attributes} /> :
    <section
      className={`cover-card action-card ${className || ''}`}
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0)), url(${imageUrl})`
      }}
    >
      {imageUrl && <img src={imageUrl} alt={imageAlt} />}
      {tags && tags.map(tag => (
        <a
          key={tag.name}
          className="cover-card-tag"
          href={tag.link}
        >
          <span aria-label="hashtag">#</span>{tag.name}
        </a>
      ))}
      <RichText
        tagName='div'
        className='cover-card-heading'
        placeholder={__('Enter title', 'planet4-blocks-backend')}
        value={title}
        onChange={toAttribute('title')}
        disabled={true}
        keepPlaceholderOnFocus={true}
        withoutInteractiveFormatting
        multiline='false'
        allowedFormats={[]}
      />
      <RichText
        tagName='p'
        className='cover-card-excerpt'
        placeholder={__('Enter description', 'planet4-blocks-backend')}
        value={excerpt}
        onChange={toAttribute('excerpt')}
        disabled={takeActionPageSelected}
        keepPlaceholderOnFocus={true}
        withoutInteractiveFormatting
        allowedFormats={['core/bold', 'core/italic']}
      />
      <RichText
        tagName='div'
        className="btn btn-action btn-block cover-card-btn"
        placeholder={__('Button text', 'planet4-blocks-backend')}
        value={linkText}
        onChange={toAttribute('linkText')}
        disabled={takeActionPageSelected}
        keepPlaceholderOnFocus={true}
        withoutInteractiveFormatting
        multiline="false"
        allowedFormats={[]}
      />
    </section>
  );

  const renderSidebar = () => (
    <Fragment>
      <InspectorControls>
        <PanelBody title={__('Setting', 'planet4-blocks-backend')}>
          <SelectControl
            label={__('Select Take Action Page:', 'planet4-blocks-backend')}
            value={take_action_page}
            options={[
              { label: __('None', 'planet4-blocks-backend'), value: 0 },
              ...actPageOptions,
            ]}
            onChange={page => updateTakeActionPage(parseInt(page))}
          />
          <p className='help'>{__('Or customise your Take Action Boxout:', 'planet4-blocks-backend')}</p>

          <URLInput
            label={__('Custom link', 'planet4-blocks-backend')}
            placeholder={__('Enter custom link', 'planet4-blocks-backend')}
            value={link}
            onChange={toAttribute('link')}
            disabled={takeActionPageSelected}
          />
          <CheckboxControl
            label={__('Open in a new tab', 'planet4-blocks-backend')}
            value={newTab}
            checked={newTab}
            onChange={toAttribute('newTab')}
            disabled={takeActionPageSelected}
          />
          <TagSelector
            value={tag_ids}
            onChange={toAttribute('tag_ids')}
            disabled={takeActionPageSelected}
          />
          {!imageId &&
            <MediaUploadCheck>
              <MediaUpload
                title={__('Select Background Image', 'planet4-blocks-backend')}
                type='image'
                onSelect={selectImage}
                value={imageId}
                allowedTypes={['image']}
                render={({ open }) => (
                  <Button
                    onClick={open}
                    className='button'
                    disabled={takeActionPageSelected}
                  >
                    + {__('Select Background Image', 'planet4-blocks-backend')}
                  </Button>
                )}
              />
            </MediaUploadCheck>
          }
        </PanelBody>
      </InspectorControls>
      {!takeActionPageSelected && imageId &&
        <BlockControls>
          <ToolbarGroup>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={selectImage}
                allowedTypes={['image']}
                value={imageId}
                type='image'
                render={({ open }) => (
                  <ToolbarButton
                    className='components-icon-button components-toolbar__control'
                    label={__('Edit Image', 'planet4-blocks-backend')}
                    onClick={open}
                    icon='edit'
                  />
                )}
              />
            </MediaUploadCheck>
            <ToolbarButton
              className='components-icon-button components-toolbar__control'
              label={__('Remove Image', 'planet4-blocks-backend')}
              onClick={removeImage}
              icon='trash'
            />
          </ToolbarGroup>
        </BlockControls>
      }
    </Fragment>
  );

  return (
    <Fragment>
      {isSelected && renderSidebar()}
      {renderEditInPlace()}
    </Fragment>
  );
}
