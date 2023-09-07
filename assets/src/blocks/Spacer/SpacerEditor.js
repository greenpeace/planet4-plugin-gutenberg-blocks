import {
  TextControl,
  PanelBody,
} from '@wordpress/components';
import {InspectorControls} from '@wordpress/block-editor';
import { SpacerFrontend } from './SpacerFrontend';

export const SpacerEditor = ({attributes, isSelected, setAttributes}) => {
  const toAttribute = attributeName => value => {
    if (isSelected) {
      setAttributes({[attributeName]: value});
    }
  };

  const renderEdit = () => (
    <InspectorControls>
      <PanelBody title={__('Settings', 'planet4-blocks-backend')}>
        <TextControl
          label={__('Small', 'planet4-blocks-backend')}
          help={__('Viewport width up to 768px', 'planet4-blocks-backend')}
          type="number"
          value={attributes.small}
          onChange={value => toAttribute('small')(Number(value))}
        />
        <TextControl
          label={__('Medium', 'planet4-blocks-backend')}
          help={__('Viewport width higher than 768px', 'planet4-blocks-backend')}
          type="number"
          value={attributes.medium}
          onChange={value => toAttribute('medium')(Number(value))}
        />
        <TextControl
          label={__('Large', 'planet4-blocks-backend')}
          help={__('Viewport width higher than 992px', 'planet4-blocks-backend')}
          type="number"
          value={attributes.large}
          onChange={value => toAttribute('large')(Number(value))}
        />
        <TextControl
          label={__('XLarge', 'planet4-blocks-backend')}
          help={__('Viewport width higher than 1200px', 'planet4-blocks-backend')}
          type="number"
          value={attributes.xlarge}
          onChange={value => toAttribute('xlarge')(Number(value))}
        />
      </PanelBody>
    </InspectorControls>
  );

  const renderView = () => (
    <SpacerFrontend attributes={attributes} />
  )

  return (
    <>
      {isSelected && renderEdit()}
      {renderView()}
    </>
  );
};

