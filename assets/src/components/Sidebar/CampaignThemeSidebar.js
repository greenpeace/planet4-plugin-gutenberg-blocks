import {PluginSidebar, PluginSidebarMoreMenuItem} from '@wordpress/edit-post';
import {Component} from '@wordpress/element';
import {resolveField} from '../fromThemeOptions/fromThemeOptions';
import isShallowEqual from '@wordpress/is-shallow-equal';
import {savePreviewMeta} from '../../saveMetaToPreview';
import {PostParentLink} from './PostParentLink';
import {ThemeSettings} from './ThemeSettings';
import {applyChangesToDom, LocalThemeSettings, themeJsonUrl} from './LocalThemeSettings';

const {__} = wp.i18n;

const isLegacy = theme => [
  'default',
  'antarctic',
  'arctic',
  'climate',
  'oceans',
  'oil',
  'plastic',
  'forest',
].includes(theme) || !theme;

const loadOptions = async value => {
  if (value === '' || !value) {
    value = 'default';
  }
  const withoutNew = value.replace(/-new$/, '');
  const name = isLegacy(withoutNew) ? withoutNew : 'default';
  const baseUrl = window.location.href.split('/wp-admin')[0];
  const optionsJsonUrl = `${baseUrl}/wp-content/themes/planet4-master-theme/theme_options/${name}.json`;

  const response = await fetch(optionsJsonUrl);
  return await response.json();
};
const makeDefaultOrNull = (result, field) => {
  // Adding this check to prevent a crash. Probably the previous code can be rewritten to not produce null, but
  // that would probably cascade into many changes and this is code we'll probably remove soon.
  if (!field) {
    return result;
  }
  return {
    ...result,
    [field.id]: field.default || null,
  };
};

// Check if the field has a value in the current post meta that is not allowed anymore by the new options.
const gotInvalidated = (field, options, meta) => {
  const resolvedField = resolveField(options, field.id, meta);

  const currentValue = meta[field.id];

  // Either the field does not exist on the new theme, or it has no options.
  if (!resolvedField || !resolvedField.options) {
    return !!currentValue;
  }

  return !(resolvedField.options.some(option => option.value === currentValue));
};

export class CampaignThemeSidebar extends Component {
  static getId() {
    return 'planet4-campaign-theme-sidebar';
  }

  static getIcon() {
    return 'admin-appearance';
  }

  constructor(props) {
    super(props);
    this.state = {
      options: null,
      meta: null,
      parent: null,
    };
    this.handleThemeSwitch = this.handleThemeSwitch.bind(this);
  }

  // When theme switches, we need to check if any options were previously chosen that are not allowed in the new theme.
  // For each of these, we either set them to the default value
  async handleThemeSwitch(metaKey, newThemeName, meta) {
    const prevOptions = this.state.options;
    const options = await loadOptions(newThemeName);
    this.setState({options});

    // Loop through the new theme's fields, and check whether any of the already chosen options has a value that is not
    // available anymore.
    const invalidatedFields = prevOptions?.fields.filter(field => gotInvalidated(field, options, meta)) || [];

    // Set each of the invalidated fields to their default value, or unset them.
    return invalidatedFields
      .map(field => resolveField(options, field.id, meta))
      .reduce(makeDefaultOrNull, {[metaKey]: newThemeName});
  }

  componentDidMount() {
    wp.data.subscribe(async () => {
      const meta = wp.data.select('core/editor').getEditedPostAttribute('meta');

      if (!meta) {
        return;
      }
      let themeName = meta.theme;
      if (themeName === '') {
        themeName = 'default';
      }
      // This part currently also detects non-related changes to the meta. Not changing that for now, we should put
      // these values in a single meta key, or even store them in a block in post_content.
      if (isShallowEqual(this.state.meta, meta)) {
        return;
      }
      this.setState({meta});
      savePreviewMeta();
      if (
        this.state.options === null
      ) {
        const options = await loadOptions(themeName);
        this.setState({options});
        if (themeName) {
          try {
            const response = await fetch(`${themeJsonUrl + themeName.replace('-new', '')}.json`);
            const theme = await response.json();
            applyChangesToDom(theme, []);
          } catch (e) {
            // eslint-disable-next-line no-console
            console.error(`Failed loading config for ${themeName}`);
          }
        }
      }
    });
    wp.data.subscribe(() => {
      const parentId = wp.data.select('core/editor').getEditedPostAttribute('parent') || null;
      if (
        (!this.state.parent && parentId !== null) ||
        (this.state.parent && parentId !== this.state.parent.id)
      ) {
        const parentPage = parentId ? wp.data.select('core').getEntityRecord('postType', 'campaign', parentId) : null;
        this.setState({parent: parentPage});
      }
    });
  }

  render() {
    const {parent, options, meta} = this.state;

    const isLegacyTheme = !options || isLegacy(options.id);

    return (
      <>
        <PluginSidebarMoreMenuItem
          target={CampaignThemeSidebar.getId()}
          icon={CampaignThemeSidebar.getIcon()}>
          { __('Theme Options', 'planet4-blocks-backend') }
        </PluginSidebarMoreMenuItem>
        <PluginSidebar
          name={CampaignThemeSidebar.getId()}
          title={__('Theme Options', 'planet4-blocks-backend')}
        >
          { !!parent && <PostParentLink parent={parent} /> }
          { !parent && meta && <LocalThemeSettings currentTheme={meta.theme} onChange={async value => {
            this.handleThemeSwitch('theme', value, meta);
          }} /> }
          { !parent && <ThemeSettings
            theme={options}
            handleThemeSwitch={this.handleThemeSwitch}
            isLegacyTheme={isLegacyTheme}
          /> }
        </PluginSidebar>
      </>
    );
  }
}
