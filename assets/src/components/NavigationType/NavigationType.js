/* eslint-disable jsdoc/require-param-type */
import { RadioControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const NAVIGATION_TYPE_PLANET4 = 'planet4';
const NAVIGATION_TYPE_MINIMAL = 'minimal';

/**
 * Navigation type selector
 *
 * @param  root0
 * @param  root0.value
 * @param  root0.setValue
 * @param  root0.defaultValue
 * @param  root0.options
 */
export const NavigationType = ( { value, setValue, defaultValue, options } ) => {
  const defaultOptions = [
    {
      label: __( 'Main website navigation', 'planet4-blocks-backend' ),
      value: NAVIGATION_TYPE_PLANET4,
    },
    {
      label: __( 'Minimal Navigation', 'planet4-blocks-backend' ),
      value: NAVIGATION_TYPE_MINIMAL,
    },
  ];

  return (
    <RadioControl
      label={ __( 'Navigation type', 'planet4-blocks-backend' ) }
      selected={ value || defaultValue || NAVIGATION_TYPE_PLANET4 }
      options={ options || defaultOptions }
      onChange={ ( val ) => setValue( val ) }
    />
  );
};
