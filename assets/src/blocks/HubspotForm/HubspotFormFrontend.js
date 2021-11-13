import { useRef, useEffect, useState } from '@wordpress/element';
import { useHubspotForm } from './hooks/useHubspotForm';
import { useBackgroundImage } from './hooks/useBackgroundImage';

const { __ } = wp.i18n;

export const HubspotFormFrontend = ({
  form_title,
  form_text,
  block_background_image_url,
  block_title,
  block_text,
  block_style,
  cta_link,
  cta_text,
  cta_new_tab,
  hubspot_shortcode,
  hubspot_thankyou_message,
  enable_custom_hubspot_thankyou_message,
}) => {
  const hubspotFormRef = useRef(null);
  const [ styleClass, setStyleClass ] = useState('');
  const { submitted, submittedMessage } = useHubspotForm(hubspot_shortcode, hubspotFormRef);
  const [ backgroundImage ] = useBackgroundImage(block_background_image_url);

  const renderSuccessMessage = (submittedMessage) => (
    <div className='submitted-message'>
      <svg className='icon-tick' width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 10.4211L8.4 18L22 2" stroke="#074365" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span>{ enable_custom_hubspot_thankyou_message ? hubspot_thankyou_message : submittedMessage }</span>
    </div>
  );

  useEffect(() => {
    if(block_style) {
      setStyleClass(block_style);
    }
  }, [ block_style ]);

  return (
    <section className={`hubspot-form ${styleClass}`}>
      <div className='hubspot-form-wrapper block-wide' style={{...backgroundImage}}>
        <div className='hubspot-form-content container'>
          <div
            className='hubspot-form-inner-content-heading' style={{...backgroundImage}}>
            <h1 className='block-title'>{ block_title }</h1>
            <p className='block-text'>{block_text}</p>
            {(cta_link && cta_text) && <a
              href={cta_link}
              className='block-button'
              data-ga-category='Hubspot Forms Block'
              data-ga-action='custom form'
              data-ga-label={cta_link}
              { ...cta_new_tab && { target: '_blank' } }
            >{cta_text}</a>}
          </div>
          <div className={`hubspot-form-inner-content-form ${submitted ? 'submitted-form' : ''}`}>
            {!submitted && <header className='form-header'>
              <h1 className='form-title'>{form_title}</h1>
              <p className='form-text'>{form_text}</p>
            </header>}
            {!submitted ? <div className='form-wrapper'>
              <div id='hubspot-api-form' ref={hubspotFormRef} />
            </div> : renderSuccessMessage(submittedMessage)}
          </div>
        </div>
      </div>
    </section>
  );
};
