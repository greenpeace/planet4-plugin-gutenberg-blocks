import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { TextSidebarField } from '../SidebarFields/TextSidebarField';
import { getSidebarFunctions } from './getSidebarFunctions';
const CANONICAL_URL = 'p4_seo_canonical_url';

const { __ } = wp.i18n;

 export const SearchEngineOptimizationsSidebar = {
  getId: () => 'planet4-seo-sidebar',
  render: () => {
    const { getParams } = getSidebarFunctions();

    return (
      <PluginDocumentSettingPanel
        name='planet4-search-engine-optimizations'
        title={ __( 'Search Engine Optimizations', 'planet4-blocks-backend' ) }
      >
        <TextSidebarField label={__( 'Canonical link', 'planet4-blocks-backend' )} type="url" {...getParams(CANONICAL_URL)} />
      </PluginDocumentSettingPanel>
    );
  }
}
