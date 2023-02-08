import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { SelectControl, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { getSidebarFunctions } from './getSidebarFunctions';

export const AnalyticsTrackingSidebar = {
  getId: () => 'planet4-analytics-sidebar',
  render: () => {
    const { getParams } = getSidebarFunctions();

    return (
      <>
        <PluginDocumentSettingPanel
          name='page-header-panel'
          title={ __( 'Analytics & Tracking', 'planet4-blocks-backend' ) }
        >
          <SelectControl
            label="Global Project"
            hideLabelFromVision={true}
            options={[
              {label: __('- Select Global Project -', 'planet4-master-theme-backend')}
            ]}/>
          <SelectControl
            label="Local Project"
            hideLabelFromVision={true}
            options={[
              {label: __('- Select Local Project -', 'planet4-master-theme-backend')}
            ]}/>
          <SelectControl
            label="Basket"
            hideLabelFromVision={true}
            options={[
              {label: __('- Select Basket -', 'planet4-master-theme-backend')}
            ]}/>
          <TextControl
            label="Department"
            hideLabelFromVision={true}>
          </TextControl>
        </PluginDocumentSettingPanel>
      </>
    );
  }
}
