import { Fragment, useContext, useRef, useEffect, useState } from '@wordpress/element';
import { HubspotFormContext, HubspotFormProvider } from './HubspotFormContext';
import { useCreateHubspotForm } from './useCreateHubspotForm';

const { __ } = wp.i18n;

const Component = () => {
  const {
    form_title,
    form_description,
    block_background_image_url,
    block_title,
    block_text,
    cta_link,
    cta_text,
    cta_new_tab,
    hubspot_shortcode,
    hubspot_thankyou_message,
    enable_custom_hubspot_thankyou_message,
  } = useContext(HubspotFormContext);
  const hubspotFormRef = useRef(null);
  const { submitted } = useCreateHubspotForm(hubspot_shortcode, hubspotFormRef);
  const [ backgroundImage, setBackgroundImage ] = useState('none');

  const renderSuccessMessage = () => (
    <div className='hubspot-form__submitted-message'>
      <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 10.4211L8.4 18L22 2" stroke="#074365" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>&nbsp;
      <span>{ hubspot_thankyou_message }</span>
    </div>
  );

  useEffect(() => {
    if(block_background_image_url) {
      setBackgroundImage(`url(${block_background_image_url})`);
    }
  }, [ block_background_image_url ]);

  return (
    <Fragment>
      <section className='hubspot-form image-full-width'>
        <div
          className='hubspot-form-wrapper block-wide'
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className='hubspot-form__content container'>
            <div
              className='hubspot-form__inner-content hubspot-form__inner-content--heading'
              style={{ backgroundImage: `url(${backgroundImage})` }}
            >
              <h1 className='hubspot-form__title'>{ block_title }</h1>
              <p
                className='hubspot-form__text'
                dangerouslySetInnerHTML={{ __html: block_text }}
              />
              {(cta_link && cta_text) && <a
                href={cta_link}
                className='hubspot-form__button'
                data-ga-category='Hubspot Forms Block'
                data-ga-action='custom form'
                data-ga-label={cta_link}
                { ...cta_new_tab && { target: '_blank' } }
              >{cta_text}</a>}
            </div>
            <div
              className={`
                hubspot-form__inner-content hubspot-form__inner-content--form
                ${submitted ? 'hubspot-form__form-wrapper--signed' : ''}
              `}
            >
              <header className='hubspot-form__form-header'>
                {!submitted ? (
                  <Fragment>
                    <h1 className='hubspot-form__form-title'>{form_title}</h1>
                    <p className='hubspot-form__form-description'>{form_description}</p>
                  </Fragment>
                ) : null}
              </header>
              <div className='hubspot-form__form-wrapper'>
                <div
                  ref={hubspotFormRef}
                  id='hubspot-api-form'
                  className={`
                    hubspot-form__api-form
                    ${submitted ? 'hubspot-form__api-form--submitted' : ''}
                    ${submitted && enable_custom_hubspot_thankyou_message ? 'hubspot-form__api-form--hide-custom-message' : ''}
                  `}>
                  <div className='hubspot-form__spinner'>{__('Loading', 'planet4-blocks-backend')}</div>
                </div>
                {submitted && enable_custom_hubspot_thankyou_message ? renderSuccessMessage() : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export const HubspotFormFrontend = (props) => (
  <HubspotFormProvider {...props}>
    <Component />
  </HubspotFormProvider>
);
