import { InspectorControls } from '@wordpress/block-editor';
import { InnerBlocks} from '@wordpress/block-editor';
import { PanelBody} from '@wordpress/components';
const { __ } = wp.i18n;

function HubspotFormThankyouEdit() {
  return <div
    style={{ outline: '2px dotted gray'}}
  >
    <h3
      style={{color: 'gray'}}
    ><i>Hubspot Form Thank You message</i></h3>
    <InnerBlocks/>
    <InspectorControls>
      <PanelBody title={__('Info', 'planet4-blocks-backend')}>
        <p>This block is hidden on the front end until the Hubspot form is submitted. Currently there's a button
          in case you don't have a form to submit.
        </p>
      </PanelBody>
    </InspectorControls>
  </div>;
}

export default HubspotFormThankyouEdit;
