import { _x } from '@wordpress/i18n';
import { isEmpty } from 'lodash';

function isObject( object ) {
  return object !== null && typeof object === 'object';
}

/**
 * Copy/paste of https://github.com/WordPress/gutenberg/blob/58c78ec5200a38401281c14186095bced2f6f12a/packages/blocks/src/api/registration.js#L296
 *
 * Translates block settings provided with metadata using the i18n schema.
 *
 * @param {string|string[]|Object[]} i18nSchema   I18n schema for the block setting.
 * @param {string|string[]|Object[]} settingValue Value for the block setting.
 * @param {string}                   textdomain   Textdomain to use with translations.
 *
 * @return {string|string[]|Object[]} Translated setting.
 */
function translateBlockSettingUsingI18nSchema(
  i18nSchema,
  settingValue,
  textdomain
) {
  if ( typeof i18nSchema === 'string' && typeof settingValue === 'string' ) {
    return _x( settingValue, i18nSchema, textdomain );
  }
  if (
    Array.isArray( i18nSchema ) &&
    ! isEmpty( i18nSchema ) &&
    Array.isArray( settingValue )
  ) {
    return settingValue.map( ( value ) =>
      translateBlockSettingUsingI18nSchema(
        i18nSchema[ 0 ],
        value,
        textdomain
      )
    );
  }
  if (
    isObject( i18nSchema ) &&
    ! isEmpty( i18nSchema ) &&
    isObject( settingValue )
  ) {
    return Object.keys( settingValue ).reduce( ( accumulator, key ) => {
      if ( ! i18nSchema[ key ] ) {
        accumulator[ key ] = settingValue[ key ];
        return accumulator;
      }
      accumulator[ key ] = translateBlockSettingUsingI18nSchema(
        i18nSchema[ key ],
        settingValue[ key ],
        textdomain
      );
      return accumulator;
    }, {} );
  }
  return settingValue;
}

/**
 * Simplified version of schema translation
 *
 * For each block, declare a list of properties that should be translated.
 * No structure/depth notion.
 *
 * @example
 * ```
 * {
 *   "block name": {
 *     "property name": "property context for translators"
 *   }
 * }
 * ```
 * will call
 * `_x(value of property in current block, property context, text domain)`
 */
export const translateBlock = (schema, blockDefinition, textdomain) => {
  let [ name, attributes, innerBlocks = [] ] = blockDefinition;
  let translated = attributes;

  if ( schema[name] ) {
    Object.keys(schema[name]).map((key) => {
      if ( attributes[key] ) {
        translated[key] = _x( attributes[key], schema[name][key], textdomain );
      }
    });
  }

  return [
    name,
    translated,
    innerBlocks.map((b) => translateBlock(schema, b, textdomain))
  ];
};

export const translateLayout = (schema, layout, textdomain) => {
  return layout.map((block) => translateBlock(schema, block, textdomain));
};

export const translateSettings = (schema, settings, textdomain) => {
  return translateBlockSettingUsingI18nSchema(schema, settings, textdomain);
};
