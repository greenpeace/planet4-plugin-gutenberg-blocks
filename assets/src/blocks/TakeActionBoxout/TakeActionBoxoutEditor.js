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
  ToggleControl,
} from '@wordpress/components';
import { URLInput } from '../../components/URLInput/URLInput';
import { TakeActionBoxoutFrontend } from './TakeActionBoxoutFrontend';
import { ImagePlaceholder } from './ImagePlaceholder';
import { ImageHoverControls } from '../../components/ImageHoverControls';

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
    stickyOnMobile,
  } = attributes;

  const {
    loading,
    pageList,
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
      post_status: 'publish',
    };

    const pageList = select('core').getEntityRecords('postType', 'page', args) || [];
    const page = pageList.find(({id}) => take_action_page === id);

    // Because `useSelect` does an API call to fetch data, pageList will be empty the first time it's called.
    // Or first few times.
    if (take_action_page && !page) {
      return { loading: true };
    }
    const pageImageId = page?.featured_media;

    const customImage = customImageId && select('core').getMedia(customImageId);
    const customImageFromId = customImage?.source_url;

    const title = !take_action_page ? customTitle : page.title.raw;
    const excerpt = !take_action_page ? customExcerpt : page.excerpt.raw;
    const link = !take_action_page ? customLink : page.link;
    const linkText = !take_action_page ? customLinkText : DEFAULT_BUTTON_TEXT || __('Take action', 'planet4-blocks');

    const imageId = !take_action_page ? customImageId : pageImageId;
    const imageUrl = !take_action_page ? customImageFromId : select('core').getMedia(pageImageId)?.source_url;
    const imageAlt = !take_action_page ? customImage?.alt_text : '';

    return {
      pageList,
      title,
      excerpt,
      link,
      linkText,
      imageId,
      imageUrl,
      imageAlt,
    };
  }, [take_action_page, customTitle, customExcerpt, customLink, customLinkText, customImageId]);

  const pageSelected = take_action_page && parseInt(take_action_page) > 0;

  if (loading || !pageList.length) {
    return __("Populating block's fields...", 'planet4-blocks-backend');
  }

  const toAttribute = attributeName => value => setAttributes({
    [attributeName]: value
  });

  const removeImage = () => setAttributes({ imageId: null });

  const selectImage = ({ id }) => setAttributes({ imageId: id });

  const pageOptions = pageList.map(({title, id}) => ({ label: title.raw, value: id }));

  const postHasStickyBoxoutAlready = document.querySelector('#action-card');

  const renderEditInPlace = () => (pageSelected ?
    <TakeActionBoxoutFrontend {...attributes} {...{title, excerpt, link, linkText, imageUrl, imageAlt}} /> :
    <section
      className={`boxout ${className || ''}`}
      {...stickyOnMobile && { id: 'action-card' }}
    >
      <div className={'boxout-image-container'}>
        <MediaUploadCheck>
          <MediaUpload
            type='image'
            onSelect={ selectImage }
            value={ imageId }
            allowedTypes={ ['image'] }
            render={ ({ open }) => <ImageHoverControls
              onEdit={ open }
              onRemove={ removeImage }
              isAdd={ !imageUrl }
            />
            }
          />
        </MediaUploadCheck>
        {!imageUrl ? <ImagePlaceholder/> : <img src={imageUrl} alt={imageAlt} />}
      </div>
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
          disabled={ pageSelected }
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
        disabled={pageSelected}
        withoutInteractiveFormatting
        multiline="false"
        allowedFormats={[]}
      />
    </section>
  );

  const renderSidebar = () => (
    <Fragment>
      <InspectorControls>
        <PanelBody title={__('Styles', 'planet4-blocks-backend')}>
          <div className='sticky-boxout-checkbox'>
            <ToggleControl
              label={__('Make block stick to the bottom of the page on mobile', 'planet4-blocks-backend')}
              value={stickyOnMobile}
              checked={stickyOnMobile}
              onChange={toAttribute('stickyOnMobile')}
              disabled={!stickyOnMobile && postHasStickyBoxoutAlready}
              help={!stickyOnMobile && postHasStickyBoxoutAlready ? __('You can only have one sticky boxout per post', 'planet4-blocks-backend') : ''}
            />
          </div>
        </PanelBody>
        <PanelBody title={__('Settings', 'planet4-blocks-backend')}>
          <SelectControl
            label={__('Select Page:', 'planet4-blocks-backend')}
            value={take_action_page}
            options={[
              { label: __('None (custom)', 'planet4-blocks-backend'), value: 0 },
              ...pageOptions,
            ]}
            onChange={ page => setAttributes({ take_action_page: parseInt(page) }) }
          />
          {!pageSelected && <URLInput
            label={__('Custom link', 'planet4-blocks-backend')}
            placeholder={__('Enter custom link', 'planet4-blocks-backend')}
            value={link}
            onChange={ value => {
              if (!take_action_page) {
                setAttributes({ link: value });
              }
            } }
          />}
          {!pageSelected && <CheckboxControl
            label={__('Open in a new tab', 'planet4-blocks-backend')}
            value={newTab}
            checked={newTab}
            onChange={toAttribute('newTab')}
            disabled={pageSelected}
          />}
          {!pageSelected &&
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
                    disabled={pageSelected}
                  >
                    + { imageId ? __('Change Background Image', 'planet4-blocks-backend') : __('Select Background Image', 'planet4-blocks-backend') }
                  </Button>
                )}
              />
            </MediaUploadCheck>
          }
        </PanelBody>
      </InspectorControls>
      {!pageSelected && imageId &&
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
