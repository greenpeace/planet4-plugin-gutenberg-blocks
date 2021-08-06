import { CheckboxControl, PanelBody, PanelRow } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';
import { URLInput } from '../../components/URLInput/URLInput';

const { __ } = wp.i18n;

export const Sidebar = ({
  cta_link,
  cta_new_tab,
  enable_custom_hubspot_thankyou_message,
  setAttributes,
}) => (
  <InspectorControls>
    <PanelBody title={__('Settings', 'planet4-blocks-backend')}>
      <PanelRow>
        <URLInput
          label={__('Call to action', 'planet4-blocks-backend')}
          placeholder={__('Enter the button link', 'planet4-blocks-backend')}
          value={cta_link}
          onChange={value => {
            setAttributes({ cta_link: value });
          }}
        />
      </PanelRow>
      <PanelRow>
        <CheckboxControl
          label={__('Open in a new tab', 'planet4-blocks-backend')}
          value={cta_new_tab}
          checked={cta_new_tab}
          onChange={value => setAttributes({ cta_new_tab: value })}
        />
      </PanelRow>
      <PanelRow>
        <CheckboxControl
          label={__('Enable custom thank you message', 'planet4-blocks-backend')}
          help={__('This functionality overrides the default thank you message set to the Form on Hubspot', 'planet4-blocks-backend')}
          value={enable_custom_hubspot_thankyou_message}
          checked={enable_custom_hubspot_thankyou_message}
          onChange={value => setAttributes({ enable_custom_hubspot_thankyou_message: value })}
        />
      </PanelRow>
    </PanelBody>
  </InspectorControls>
);
