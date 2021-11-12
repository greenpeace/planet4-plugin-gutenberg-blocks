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
    block_text,
    block_title,
    block_style,
    cta_text,
    cta_link,
    cta_new_tab,
    form_text,
    form_title,
    hubspot_shortcode,
    hubspot_thankyou_message,
    enable_custom_hubspot_thankyou_message,
    className,
  },
  setAttributes,
}) => {
  const wrapperRef = useRef(null);
  const [ backgroundImage ] = useBackgroundImage(block_background_image_url);
  const [ toAttribute ] = useToAttribute(setAttributes);

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

  useEffect(() => {
    if(className) {
      setAttributes({ block_style: getStyleFromClassName(className) });
    }
  }, [ className ]);

  return (
    <Fragment>
      <Sidebar {...{
        cta_link,
        cta_new_tab,
        enable_custom_hubspot_thankyou_message,
        hubspot_thankyou_message,
        setAttributes
      }} />
      <MediaUploadCheck>
        <MediaUpload
          title={__('Select Background Image', 'planet4-blocks-backend')}
          type='image'
          onSelect={onSelectImageHandler}
          value={block_background_image_id}
          allowedTypes={[ 'image' ]}
          render={({ open }) => getImageOrButton(open)}
        />
      </MediaUploadCheck>
      <section className={`hubspot-form ${block_style}`}>
        <div
          ref={wrapperRef}
          className='hubspot-form-wrapper block-wide'
          style={{...backgroundImage}}
        >
          <div className='hubspot-form-content container'>
            <div
              className='hubspot-form-inner-content-heading'
              style={{...backgroundImage}}
            >
              <RichText
                tagName='h1'
                className='block-title'
                placeholder={__('Enter title', 'planet4-blocks-backend')}
                value={block_title}
                onChange={toAttribute('block_title')}
                withoutInteractiveFormatting={true}
                allowedFormats={[]}
              />
              <RichText
                tagName='p'
                className='block-text'
                placeholder={__('Enter description', 'planet4-blocks-backend')}
                value={block_text}
                onChange={toAttribute('block_text')}
                withoutInteractiveFormatting={true}
                allowedFormats={['core/bold', 'core/italic']}
              />
              <RichText
                tagName='div'
                className='block-button'
                placeholder={__('Enter CTA text', 'planet4-blocks-backend')}
                value={cta_text}
                onChange={toAttribute('cta_text')}
                withoutInteractiveFormatting
                allowedFormats={[]}
              />
            </div>
            <div className='hubspot-form-inner-content-form'>
              <header className='form-header'>
                <RichText
                  tagName='h1'
                  className='form-title'
                  placeholder={__('Enter form title', 'planet4-blocks-backend')}
                  value={form_title}
                  onChange={toAttribute('form_title')}
                  withoutInteractiveFormatting={true}
                  allowedFormats={[]}
                />
                <RichText
                  tagName='p'
                  className='form-text'
                  placeholder={__('Enter form description', 'planet4-blocks-backend')}
                  value={form_text}
                  onChange={toAttribute('form_text')}
                  withoutInteractiveFormatting={true}
                  allowedFormats={['core/bold', 'core/italic']}
                />
              </header>
              <div className='form-wrapper form-wrapper-editor'>
                <div className='form-wrapper-field'>
                  <label>{__('Paste the Hubspot shortcode here', 'planet4-blocks-backend')}</label>
                  <RichText
                    tagName='p'
                    className='hubspot-form-shortcode-editor'
                    placeholder={__('[hubspot type="form" portal="XXXXXX" id="XXXX-XXXX-XXXX-XXXX"]', 'planet4-blocks-backend')}
                    value={hubspot_shortcode}
                    onChange={toAttribute('hubspot_shortcode')}
                    withoutInteractiveFormatting={true}
                    allowedFormats={[]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
