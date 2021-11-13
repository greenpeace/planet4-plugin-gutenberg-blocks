import ReactDOMServer from 'react-dom/server';
import { Tooltip } from '@wordpress/components';
import { HubspotFormEditor } from './HubspotFormEditor';
import { HubspotFormFrontend } from './HubspotFormFrontend';
const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

const BLOCK_NAME = 'planet4-blocks/hubspot-form';

const getStyleLabel = (label, help) => (
  (help)
    ? <Tooltip text={help}>
        <span>{label}</span>
      </Tooltip>
    : label
);

export const registerHubspotFormBlock = () => {
  return registerBlockType(BLOCK_NAME, {
    title: 'Hubspot Form (beta)',
    icon: 'feedback',
    category: 'planet4-blocks-beta',
    supports: {
      multiple: false,
      html: false,
    },
    attributes: {
      block_title: {
        type: 'string',
      },
      block_text: {
        type: 'string',
      },
      block_background_image_id: {
        type: 'integer',
      },
      block_background_image_url: {
        type: 'string',
      },
      block_style: {
        type: 'string',
        default: 'image-full-width',
      },
      cta_text: {
        type: 'string',
      },
      cta_link: {
        type: 'string',
      },
      cta_new_tab: {
        type: 'boolean',
        default: false,
      },
      form_title: {
        type: 'string',
      },
      form_text: {
        type: 'string',
      },
      hubspot_shortcode: {
        type: 'string',
        default: '',
      },
      hubspot_thankyou_message: {
        type: 'string',
      },
      enable_custom_hubspot_thankyou_message: {
        type: 'boolean',
        default: true,
      },
      version: {
        type: 'integer',
        default: 1,
      },
    },
    styles: [
      {
        name: 'image-full-width',
        label: getStyleLabel(
          __('Image full width', 'planet4-blocks-backend'),
          __('https://p4-designsystem.greenpeace.org/05f6e9516/p/213df0-hubspot-forms/b/99e047', 'planet4-blocks-backend'),
        ),
        isDefault: true,
      },
    ],
    edit: (props) => <HubspotFormEditor {...props} />,
    save: (props) => {
      /**
       * This parser is added cause the Hubspot plugin takes the shortcode, by a hook,
       * and converts it into a <script>. In consequence, it fails when it is parsed to json through the hydration.
       *
       * This parser is only affected to the hydration.
       *
       * Ideally, we should use innerBlocks but it has various reported conflicts using SSR.
       */
      const attributes = {...props.attributes};
      attributes.hubspot_shortcode = props.attributes.hubspot_shortcode.replace('[', '').replace(']', '');

      const markup = ReactDOMServer.renderToString(
        <div
          data-hydrate={BLOCK_NAME}
          data-attributes={JSON.stringify(attributes)}
        >
          <HubspotFormFrontend {...props} />
        </div>
      );
      return <wp.element.RawHTML>{ markup }</wp.element.RawHTML>;
    },
  })
}
