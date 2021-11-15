import { Tooltip } from '@wordpress/components';
import { InnerBlocks } from '@wordpress/block-editor';
import HubspotFormThankyouEdit from './edit';

const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

const BLOCK_NAME = 'planet4-blocks/hubspot-form-thankyou';

const getStyleLabel = (label, help) => (
  (help)
    ? <Tooltip text={ help }>
      <span>{ label }</span>
    </Tooltip>
    : label
);

function registerHubspotFormThankyouBlock() {
  return registerBlockType(BLOCK_NAME, {
    title: 'Hubspot Form Thankyou (beta)',
    icon: 'feedback',
    category: 'planet4-blocks-beta',
    supports: {
      multiple: false,
      html: false,
    },
    attributes: {},
    styles: [ ],
    edit: HubspotFormThankyouEdit,
    save: (props) => {
      /**
       * This parser is added cause the Hubspot plugin takes the shortcode, by a hook,
       * and converts it into a <script>. In consequence, it fails when it is parsed to json through the hydration.
       *
       * This parser is only affected to the hydration.
       *
       * Ideally, we should use innerBlocks but it has various reported conflicts using SSR.
       */
      // const attributes = { ...props.attributes };
      return <div className={ 'hubspot-thankyou d-none' }>
        <InnerBlocks.Content/>
      </div>;
    },
  });
}

export default registerHubspotFormThankyouBlock;
