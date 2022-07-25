import contentFromLayout from './content-from-layout';
import { translateSettings, translateLayout } from './translate';
import i18nBlockPatternSchema from './block-pattern-i18n.json';
import i18nBlockAttrSchema from './block-attributes-i18n.json';

import patternList from './pattern-list';

const { getCurrentPostType } = wp.data.select('core/editor');
const { getSettings } = wp.data.select('core/block-editor');
const { updateSettings } = wp.data.dispatch('core/block-editor');

const getPatternSettings = (metadata) => {
  const props = [
    'name', 'title', 'description',
    'categories', 'keywords', 'viewportWidth',
    'blockTypes', 'postTypes', 'inserter',
  ];
  let settings = Object.fromEntries(
    Object.entries(metadata).filter(([key]) => props.includes(key))
  );

  return translateSettings(i18nBlockPatternSchema, settings, metadata.textdomain);
};

/**
 * A pattern needs
 * - metadata
 * - layout function that will be translated and converted to content
 *   - or content function
 */
export const registerBlockPatterns = () => {
  const currentPostType = getCurrentPostType();
  let settings = getSettings();

  patternList.map((pattern) => {
    const { metadata, layout, content = null } = pattern;

    if (metadata.postTypes
      && !metadata.postTypes.includes(currentPostType)
    ) {
      return null;
    }

    const patternSettings = getPatternSettings(metadata);
    const patternContent = content ? content() : contentFromLayout(
      translateLayout(
        i18nBlockAttrSchema, layout({}), metadata.textdomain
      )
    );

    settings.__experimentalBlockPatterns.push({
      content: patternContent,
      ...patternSettings
    });
  });

  updateSettings( settings );
};
