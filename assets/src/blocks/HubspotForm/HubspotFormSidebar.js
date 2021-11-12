import { CheckboxControl, PanelBody, PanelRow, TextControl } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';
import { URLInput } from '../../components/URLInput/URLInput';
import { useToAttribute } from './hooks/useToAttribute';

const { __ } = wp.i18n;

export const Sidebar = ({
  cta_link,
  cta_new_tab,
  enable_custom_hubspot_thankyou_message,
  hubspot_thankyou_message,
  setAttributes,
}) => {
  const [ toAttribute ] = useToAttribute(setAttributes);

  return <InspectorControls>
    <PanelBody title={__('Settings', 'planet4-blocks-backend')}>
      <PanelRow>
        <URLInput
          label={__('Call to action', 'planet4-blocks-backend')}
          placeholder={__('Enter the button link', 'planet4-blocks-backend')}
          value={cta_link}
          onChange={toAttribute('cta_link')}
        />
      </PanelRow>
      <PanelRow>
        <CheckboxControl
          label={__('Open in a new tab', 'planet4-blocks-backend')}
          value={cta_new_tab}
          checked={cta_new_tab}
          onChange={toAttribute('cta_new_tab')}
        />
      </PanelRow>
      <PanelRow>
        <CheckboxControl
          label={__('Enable custom thank you message', 'planet4-blocks-backend')}
          help={__('This functionality overrides the default thank you message set to the Form on Hubspot', 'planet4-blocks-backend')}
          value={enable_custom_hubspot_thankyou_message}
          checked={enable_custom_hubspot_thankyou_message}
          onChange={toAttribute('enable_custom_hubspot_thankyou_message')}
        />
      </PanelRow>
      {enable_custom_hubspot_thankyou_message && <PanelRow>
        <TextControl
          label={__('Custom thank you message', 'planet4-blocks-backend')}
          placeholder={__('e.g. Thanks for submitting the form.', 'planet4-blocks-backend')}
          value={hubspot_thankyou_message}
          onChange={toAttribute('hubspot_thankyou_message')}
          disabled={false}
        />
      </PanelRow>}
    </PanelBody>
  </InspectorControls>
};
