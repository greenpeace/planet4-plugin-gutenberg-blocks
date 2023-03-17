const {addFilter} = wp.hooks;

import {ImageBlockEdit} from './components/Image/ImageBlockEdit';

export const addBlockFilters = () => {
  addFileBlockFilter();
  addImageBlockFilter();
  addGravityFormsBlockFilter();
};

const addFileBlockFilter = () => {
  const setDownloadButtonToggleDefualtFalse = (settings, name) => {
    if ('core/file' !== name) {
      return settings;
    }

    settings.attributes.showDownloadButton.default = false;

    return settings;
  };

  addFilter('blocks.registerBlockType', 'planet4-blocks/filters/file', setDownloadButtonToggleDefualtFalse);
};

const addImageBlockFilter = () => addFilter('editor.BlockEdit', 'core/image/edit', ImageBlockEdit);

// Enforce "AJAX" toggle setting enabled by default, on Gravity form block.
const addGravityFormsBlockFilter = () => {
  const setAJAXToggleDefaultTrue = (settings, name) => {
    if ('gravityforms/form' !== name) {
      return settings;
    }

    settings.attributes.ajax.default = true;

    return settings;
  };

  addFilter('blocks.registerBlockType', 'planet4-blocks/filters/file', setAJAXToggleDefaultTrue);
};
