import { useState, useEffect } from '@wordpress/element';

export const useCreateHubspotForm = (shortcode, targetRef) => {
  const [ submitted, setSubmitted ] = useState(false);

  const onHubspotMessageHandler = evt => {
    if(evt.data.type === 'hsFormCallback') {
      if(evt.data.eventName === 'onFormSubmit') {
        setSubmitted(false);
      }
      
      if(evt.data.eventName === 'onFormSubmitted') {
        setSubmitted(true);
    
        return () => {
          clearTimeout(timer);
        }
      }
    }
  }

  const createHubspotForm = () => {
    if(window.hbspt) {
      let portalId = ''; 
      let formId = ''; 
      
      shortcode.replace(/["'\]\[]/g,'').split(' ').forEach(value => {
        if(/portal=/.test(value)) {
          portalId = value.split('=')[1];
        }
        if(/id=/.test(value)) {
           formId = value.split('=')[1];
        }
      });

      window.hbspt.forms.create({
        portalId,
        formId,
        target: `#${targetRef.current.attributes.id.value}`,
      });
      
      window.addEventListener('message', onHubspotMessageHandler);
      
      return () => {
        window.removeEventListener('message', onHubspotMessageHandler);
      }
    }
  }

  const fetchHubspotLibrary = () => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);
    script.addEventListener('load', createHubspotForm);
  }

  useEffect(() => {
    if(shortcode) {
      if(!window.hbspt) {
        fetchHubspotLibrary();
      } else {
        createHubspotForm();
      }
    }
  }, []);

  return {
    submitted,
  };
}
