import { useState, useEffect } from '@wordpress/element';

export const useHubspotForm = (shortcode, targetRef) => {
  const [ submit, setSubmit ] = useState(false);
  const [ submitted, setSubmitted ] = useState(false);
  const [ formId, setFormId ] = useState();
  const [ portalId, setPortalId ] = useState();
  const [ submittedMessage, setSubmittedMessage ] = useState();

  const createHubspotForm = () => {
    window.hbspt.forms.create({
      portalId,
      formId,
      target: `#${targetRef.current.attributes.id.value}`,
      region: "",
      onFormSubmit: () => {
        setSubmit(true);
      },
      onFormSubmitted: ($form) => {
        setSubmitted(true);
        setSubmit(false);
        if($form.length) {
          setSubmittedMessage($form[0].innerText);
        }
      }
    });
  }

  const fetchHubspotFormsLibrary = () => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);
    script.addEventListener('load', createHubspotForm);
  }

  useEffect(() => {
    if(formId && portalId) {
      console.log('formId %s portalId %s', formId, portalId);
      if(!window.hbspt.forms.create) {
        fetchHubspotFormsLibrary();
      } else {
        createHubspotForm();
      }
    }
  }, [
    formId,
    portalId,
  ]);

  /**
   * Parse the `portalId` and `formId` values from the `shortcode`.
   */
  useEffect(() => {
    if(shortcode) {
      shortcode.replace(/["'\)\(\]\[]/g,'').split(' ').forEach(value => {
        if(/portal=/.test(value)) {
          setPortalId(value.split('=')[1]);
        }
        if(/id=/.test(value)) {
          setFormId(value.split('=')[1]);
        }
      });
    }
  }, [
    shortcode,
  ]);

  return {
    submit,
    submitted,
    submittedMessage,
  };
};
