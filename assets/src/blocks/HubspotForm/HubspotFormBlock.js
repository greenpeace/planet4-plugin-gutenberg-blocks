import ReactDOMServer from 'react-dom/server';
import { RawHTML, Fragment } from '@wordpress/element';
import { Tooltip } from '@wordpress/components';
import { HubspotFormEditor } from './HubspotFormEditor';
import { HubspotFormFrontend } from './HubspotFormFrontend';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

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
      form_description: {
        type: 'string',
      },
      hubspot_shortcode: {
        type: 'string',
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
        name: 'imageFullWidth',
        label: getStyleLabel(
          __('Image full width', 'planet4-blocks-backend'),
          __('Image full width version', 'planet4-blocks-backend'),
        ),
        isDefault: true,
      },
    ],
    edit: (props) => (
      <Fragment>
        <HubspotFormEditor {...props} />
      </Fragment>
    ),
    save: ({
      attributes,
    }) => {
      const markup = ReactDOMServer.renderToString(
        <div
          data-hydrate={BLOCK_NAME}
          data-attributes={JSON.stringify({...attributes})}
        >
          <HubspotFormFrontend {...attributes} />
        </div>
      );
      return <RawHTML>{ markup }</RawHTML>;
    },
  })
}
