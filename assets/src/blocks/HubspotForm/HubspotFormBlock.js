import ReactDOMServer from 'react-dom/server';
import { RawHTML, Fragment, renderToString } from '@wordpress/element';
import { Tooltip } from '@wordpress/components';
import { HubspotFormEditor } from './HubspotFormEditor';
import { HubspotFormFrontend } from './HubspotFormFrontend';
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

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

    /**
      The belowed function works correctly without using innerBlocks.
    */
    // edit: (props) => {
    //   return (
    //     <Fragment>
    //       <HubspotFormEditor {...props} />
    //     </Fragment>
    //   )
    // },

    /**
      The belowed function works correctly using innerBlocks.
    */
    edit: () => {
      const blockProps = useBlockProps();
      const ALLOWED_BLOCKS = [ 'core/heading', 'core/paragraph', 'core/shortcode' ];
      const TEMPLATE = [
        [ 'core/heading', { placeholder: 'Block title' } ],
        [ 'core/paragraph', { placeholder: 'Block description' } ],
        [ 'core/shortcode', {} ],
      ];
      return (
        <div {...blockProps}>
          <InnerBlocks template={TEMPLATE} allowedBlocks={ ALLOWED_BLOCKS } />
        </div>
      )
    },

    /**
      The belowed function works correctly without using innerBlocks.
    */
    // save: (props) => {
    //   const markup = ReactDOMServer.renderToString(
    //     <div
    //       data-hydrate={BLOCK_NAME}
    //       data-attributes={JSON.stringify({...props.attributes})}
    //       data-innerblocks={JSON.stringify({...props.innerBlocks})}
    //     >
    //       <HubspotFormFrontend {...props} />
    //     </div>
    //   );
    //   return <wp.element.RawHTML>{ markup }</wp.element.RawHTML>;
    // },

    /**
      The belowed function works correctly using innerBlocks but without hydrate.
    */
    // save: () => {
    //   const blockProps = useBlockProps.save();
    //   return (
    //     <div { ...blockProps }>
    //       <InnerBlocks.Content />
    //     </div>
    //   );
    // },

    /**
      The belowed function use innerBlocks and hydrate but doesn't work.
    */
    save: (props) => {
      const blockProps = useBlockProps.save();
      const element = (
        <div
          { ...blockProps }
          data-hydrate={BLOCK_NAME}
          data-attributes={JSON.stringify({...props.attributes})}
        >
          <InnerBlocks.Content />
        </div>
      )
      const markup = ReactDOMServer.renderToString(element);
      return <wp.element.RawHTML>{ markup }</wp.element.RawHTML>;
    },
  })
}
