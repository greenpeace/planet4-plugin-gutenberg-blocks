import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

const { __ } = wp.i18n;

const BLOCK_NAME = 'planet4-blocks/hubspot-form-thankyou';

export const registerBlock = () => {
  return registerBlockType(BLOCK_NAME, {
    title: 'Hubspot Form Thank You Message (beta)',
    icon: 'feedback',
    category: 'planet4-blocks-beta',
    supports: {
      multiple: false,
      html: false,
    },
    edit: () => {
      const blockProps = useBlockProps( { className: 'hubspot-form-thankyou' } );
      const innerBlocksProps = useInnerBlocksProps(
        blockProps,
        {
          allowedBlocks: [ 'core/group', 'core/heading', 'core/paragraph', 'planet4-blocks/share-buttons' ],
          template: [
            [ 'core/group', {}, [
              [ 'core/heading', { className: 'stepper', placeholder: '1' } ],
              [ 'core/heading', { className: 'heading', placeholder: __('Thank you title', 'planet4-blocks-backend') } ],
              [ 'core/paragraph', { className: 'description', placeholder: __('Thank you text', 'planet4-blocks-backend') } ],
            ] ],
            [ 'core/group', {}, [
              [ 'core/heading', { className: 'stepper', placeholder: '2' } ],
              [ 'core/heading', { className: 'heading', placeholder: __('Share title', 'planet4-blocks-backend') } ],
              [ 'core/paragraph', { className: 'description', placeholder: __('Share text', 'planet4-blocks-backend') } ],
              [ 'planet4-blocks/share-buttons' ],
            ] ]
          ],
        },
      );

      return (
        <section {...innerBlocksProps} />
      );
    },
    save: () => {
      const blockProps = useBlockProps.save( { className: 'hubspot-form-thankyou ds-none' } );
      const innerBlocksProps = useInnerBlocksProps.save( blockProps );

      return <section {...innerBlocksProps} />
    },
  })
}
