import { Fragment, useEffect, useRef } from '@wordpress/element';
import { MediaUpload, MediaUploadCheck, RichText } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { Sidebar } from './HubspotFormSidebar';
import { useToAttribute } from './hooks/useToAttribute';
import { useBackgroundImage } from './hooks/useBackgroundImage';
import { getStyleFromClassName } from '../getStyleFromClassName';

const { __ } = wp.i18n;

export const HubspotFormEditor = ({
  attributes: {
    block_background_image_id,
    block_background_image_url,
    cta_text,
    cta_link,
    cta_new_tab,
    block_text,
    block_title,
    form_description,
    form_title,
    hubspot_shortcode,
    hubspot_thankyou_message,
    enable_custom_hubspot_thankyou_message,
  },
  setAttributes,
}) => {
  const wrapperRef = useRef(null);
  const [ blockHeight ] = useDynamicHeight(wrapperRef);

  const onSelectImageHandler = ({ id, url }) => {
    if(url && id) {
      setAttributes({
        block_background_image_id: id,
        block_background_image_url: url,
      });
    }
  };

  const getImageOrButton = (openEvent) => {
    return (openEvent) ? (
      <div>
        <Button
          onClick={openEvent}
          className='button'
        >
          + {__('Select Background Image', 'planet4-blocks-backend')}
        </Button>
      </div>
    ) : null;
  };
  
  const toAttribute = (attributeName) => value => {
    if(setAttributes) {
      setAttributes({
        [attributeName]: value,
      });
    }
  };

  return (
    <Fragment>
      <Sidebar { ...{
        cta_link,
        cta_new_tab,
        enable_custom_hubspot_thankyou_message,
        setAttributes
      } } />
      <MediaUploadCheck>
        <MediaUpload
          title={__('Select Background Image', 'planet4-blocks-backend')}
          type='image'
          onSelect={onSelectImageHandler}
          value={block_background_image_id}
          allowedTypes={[ 'image' ]}
          render={({ open }) => {
            return getImageOrButton(open);
          }}
        />
      </MediaUploadCheck>
      <section className='hubspot-form image-full-width' style={{ height: blockHeight }}>
        <div
          ref={wrapperRef}
          className='hubspot-form-wrapper block-wide'
          style={{ backgroundImage: `url(${block_background_image_url ?? ''})` }}
        >
          <div className='hubspot-form__content container'>
            <div
              className='hubspot-form__inner-content--heading'
              style={{ backgroundImage: `url(${block_background_image_url ?? ''})` }}
            >
              <RichText
                tagName='h1'
                className='hubspot-form__title'
                placeholder={__('Enter description', 'planet4-blocks-backend')}
                value={block_title}
                onChange={toAttribute('block_title')}
                withoutInteractiveFormatting={true}
                allowedFormats={[]}
              />
              <RichText
                tagName='p'
                className='hubspot-form__text'
                placeholder={__('Enter description', 'planet4-blocks-backend')}
                value={block_text}
                onChange={toAttribute('block_text')}
                withoutInteractiveFormatting={true}
                allowedFormats={['core/bold', 'core/italic']}
              />
              <RichText
                tagName='div'
                className='hubspot-form__button'
                placeholder={__('Enter CTA text', 'planet4-blocks-backend')}
                value={cta_text}
                onChange={toAttribute('cta_text')}
                withoutInteractiveFormatting
                allowedFormats={[]}
              />
            </div>
            <div className='hubspot-form__inner-content--form'>
              <header className='hubspot-form__form-header'>
                <RichText
                  tagName='h1'
                  className='hubspot-form__form-title'
                  placeholder={__('Form title goes here', 'planet4-blocks-backend')}
                  value={form_title}
                  onChange={toAttribute('form_title')}
                  withoutInteractiveFormatting={true}
                  allowedFormats={[]}
                />
                <RichText
                  tagName='p'
                  className='hubspot-form__form-description'
                  placeholder={__('Enter text', 'planet4-blocks-backend')}
                  value={form_description}
                  onChange={toAttribute('form_description')}
                  withoutInteractiveFormatting={true}
                  allowedFormats={['core/bold', 'core/italic']}
                />
              </header>
              <div className='hubspot-form__form-wrapper hubspot-form__form-wrapper--editor'>
                <label className='hubspot-form__shortcode-label'>{__('Enter the Hubspot shortcode', 'planet4-blocks-backend')}</label>
                <RichText
                  tagName='p'
                  className='hubspot-form__shortcode-editor'
                  placeholder={__('[hubspot type="form" portal="XXXXXX" id="XXXX-XXXX-XXXX-XXXX"]', 'planet4-blocks-backend')}
                  value={hubspot_shortcode}
                  onChange={toAttribute('hubspot_shortcode')}
                  withoutInteractiveFormatting={true}
                  allowedFormats={[]}
                />
                {enable_custom_hubspot_thankyou_message && <Fragment>
                  <label className='hubspot-form__shortcode-label'>{__('Display a thank you message', 'planet4-blocks-backend')}</label>
                  <RichText
                    tagName='p'
                    className='hubspot-form__shortcode-editor'
                    placeholder={__('e.g. Thanks for submitting the form.', 'planet4-blocks-backend')}
                    value={hubspot_thankyou_message}
                    onChange={toAttribute('hubspot_thankyou_message')}
                    withoutInteractiveFormatting={true}
                    allowedFormats={[]}
                  />
                </Fragment>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
