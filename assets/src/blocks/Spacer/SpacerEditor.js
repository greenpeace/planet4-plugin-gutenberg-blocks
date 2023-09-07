import {useCallback, useMemo} from '@wordpress/element';
import {InspectorControls} from '@wordpress/block-editor';
import {SpacerFrontend} from './SpacerFrontend';

const {__} = wp.i18n;
const {
  PanelBody,
  __experimentalUnitControl: UnitControl,
} = wp.components;


export const SpacerEditor = ({attributes, isSelected, setAttributes}) => {

  const toAttribute = useCallback(attributeName => value => {
    if (isSelected) {
      setAttributes({[attributeName]: value});
    }
  }, [isSelected, setAttributes]);

  const renderEdit = useCallback(() => (
    <InspectorControls>
      <PanelBody title={__('Settings', 'planet4-blocks-backend')}>
        <UnitControl
          label={__('Small', 'planet4-blocks-backend')}
          help={__('Apply to screens up to 768px', 'planet4-blocks-backend')}
          value={attributes.small}
          onChange={value => toAttribute('small')(value)}
        />
        <UnitControl
          label={__('Medium', 'planet4-blocks-backend')}
          help={__('Apply to screens that are more than 768px', 'planet4-blocks-backend')}
          value={attributes.medium}
          onChange={value => toAttribute('medium')(value)}
        />
        <UnitControl
          label={__('Large', 'planet4-blocks-backend')}
          help={__('Apply to screens that are more than 992px', 'planet4-blocks-backend')}
          value={attributes.large}
          onChange={value => toAttribute('large')(value)}
        />
        <UnitControl
          label={__('XLarge', 'planet4-blocks-backend')}
          help={__('Apply to screens that are more than 1200px', 'planet4-blocks-backend')}
          value={attributes.xlarge}
          onChange={value => toAttribute('xlarge')(value)}
        />
        <UnitControl
          label={__('XXLarge', 'planet4-blocks-backend')}
          help={__('Apply to screens that are more than 1600px', 'planet4-blocks-backend')}
          value={attributes.xxlarge}
          onChange={value => toAttribute('xxlarge')(value)}
        />
      </PanelBody>
    </InspectorControls>
  ), [attributes, toAttribute]);

  const renderView = useCallback(() => {
    return <SpacerFrontend attributes={attributes} />;
  }, [attributes]);

  return useMemo(() => (
    <>
      {isSelected && renderEdit()}
      {renderView()}
    </>
  ), [isSelected, renderEdit, renderView]);
};

