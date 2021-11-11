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
    title: customTitle,
    excerpt: customExcerpt,
    link: customLink,
    linkText: customLinkText,
    newTab,
    imageId: customImageId,
    className,
  } = attributes;

  const {
    loading,
    actPageList,
    title,
    excerpt,
    link,
    linkText,
    imageId,
    imageUrl,
    imageAlt,
  } = useSelect(select => {
    const args = {
      per_page: -1,
      sort_order: 'asc',
      sort_column: 'post_title',
      parent: window.p4ge_vars.planet4_options.act_page,
      post_status: 'publish',
    };

    const actPageList = select('core').getEntityRecords('postType', 'page', args) || [];
    const actPage = actPageList.find(actPage => take_action_page === actPage.id);

    // Because `useSelect` does an API call to fetch data, the actPageList will be empty the first time it's called.
    // Or first few times.
    if (take_action_page && !actPage) {
      return { loading: true };
    }
    const actPageImageId = actPage?.featured_media;

    const customImage = customImageId && select('core').getMedia(customImageId);
    const customImageFromId = customImage?.source_url;

    const title = !take_action_page ? customTitle : actPage.title.raw;
    const excerpt = !take_action_page ? customExcerpt : actPage.excerpt.raw;
    const link = !take_action_page ? customLink : actPage.link;
    const linkText = !take_action_page ? customLinkText : DEFAULT_BUTTON_TEXT || __('Take action', 'planet4-blocks');

    const imageId = !take_action_page ? customImageId : actPageImageId;
    const imageUrl = !take_action_page ? customImageFromId : select('core').getMedia(actPageImageId)?.source_url;
    const imageAlt = !take_action_page ? customImage?.alt_text : '';

    return {
      actPageList,
      title,
      excerpt,
      link,
      linkText,
      imageId,
      imageUrl,
      imageAlt,
    };
  }, [take_action_page, customTitle, customExcerpt, customLink, customLinkText, customImageId]);

  const takeActionPageSelected = take_action_page && parseInt(take_action_page) > 0;

  if (loading || !actPageList.length) {
    return __("Populating block's fields...", 'planet4-blocks-backend');
  }

  const toAttribute = attributeName => value => setAttributes({
    [attributeName]: value
  });

  const removeImage = () => setAttributes({ imageId: null });

  const selectImage = ({ id }) => setAttributes({ imageId: id });

  const actPageOptions = actPageList.map(actPage => ({ label: actPage.title.raw, value: actPage.id }));

  const renderEditInPlace = () => (takeActionPageSelected ?
    <TakeActionBoxoutFrontend {...attributes} {...{title, excerpt, link, linkText, imageUrl, imageAlt}} /> :
    <section
      className={`boxout ${className || ''}`}
    >
      {imageUrl && <img src={imageUrl} alt={imageAlt} />}
      <div className="boxout-content">
        <RichText
          tagName="div"
          className="boxout-heading"
          placeholder={ __('Enter title', 'planet4-blocks-backend') }
          value={ title }
          onChange={ toAttribute('title') }
          disabled={ true }
          withoutInteractiveFormatting
          multiline="false"
          allowedFormats={ [] }
        />
        <RichText
          tagName="p"
          className="boxout-excerpt"
          placeholder={ __('Enter description', 'planet4-blocks-backend') }
          value={ excerpt }
          onChange={ toAttribute('excerpt') }
          disabled={ takeActionPageSelected }
          withoutInteractiveFormatting
          allowedFormats={ ['core/bold', 'core/italic'] }
        />
      </div>
      <RichText
        tagName='div'
        className="btn btn-action btn-block cover-card-btn"
        placeholder={__('Button text', 'planet4-blocks-backend')}
        value={linkText}
        onChange={toAttribute('linkText')}
        disabled={takeActionPageSelected}
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
              { label: __('None (custom)', 'planet4-blocks-backend'), value: 0 },
              ...actPageOptions,
            ]}
            onChange={ page => setAttributes({ take_action_page: parseInt(page) }) }
          />
          {!takeActionPageSelected && <URLInput
            label={__('Custom link', 'planet4-blocks-backend')}
            placeholder={__('Enter custom link', 'planet4-blocks-backend')}
            value={link}
            onChange={ value => {
              if (!take_action_page) {
                setAttributes({ link: value });
              }
            } }
          />}
          {!takeActionPageSelected && <CheckboxControl
            label={__('Open in a new tab', 'planet4-blocks-backend')}
            value={newTab}
            checked={newTab}
            onChange={toAttribute('newTab')}
            disabled={takeActionPageSelected}
          />}
          {!takeActionPageSelected &&
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
                    + { imageId ? __('Change Background Image', 'planet4-blocks-backend') : __('Select Background Image', 'planet4-blocks-backend') }
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
