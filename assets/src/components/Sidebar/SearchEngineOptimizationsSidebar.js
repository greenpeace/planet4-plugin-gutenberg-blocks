import {PluginDocumentSettingPanel} from '@wordpress/edit-post';
import {useDispatch, useSelect} from '@wordpress/data';
import {URLInput} from '../URLInput/URLInput';

const CANONICAL_URL = 'p4_seo_canonical_url';

const {__} = wp.i18n;

export const SearchEngineOptimizationsSidebar = {
  getId: () => 'planet4-seo-sidebar',
  render: () => {
    const meta = useSelect(select => select('core/editor').getEditedPostAttribute('meta'), []);
    const {editPost} = useDispatch('core/editor', [meta[CANONICAL_URL]]);

    return (
      <PluginDocumentSettingPanel
        name="planet4-search-engine-optimizations"
        title={__('Search Engine Optimizations', 'planet4-blocks-backend')}
      >
        <URLInput label={__('Canonical link', 'planet4-blocks-backend')} value={meta[CANONICAL_URL]} onChange={value => editPost({meta: {[CANONICAL_URL]: value}})} />
      </PluginDocumentSettingPanel>
    );
  },
};
