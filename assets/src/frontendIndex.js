// This ESLint error is disabled since 'regenerator-runtime/runtime' has already been added by another package.
// There is no need to explicitly include it in the list of dependencies in the package.json file.
// eslint-disable-next-line import/no-extraneous-dependencies
import 'regenerator-runtime/runtime';

import {ColumnsFrontend} from './blocks/Columns/ColumnsFrontend';
import {setupLightboxForImages} from './components/Lightbox/setupLightboxForImages';
import {setupParallax} from './components/Parallax/setupParallax';

import {createRoot} from 'react-dom/client';

// Render React components
const COMPONENTS = {
  'planet4-blocks/columns': ColumnsFrontend,
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-render]').forEach(
    blockNode => {
      const blockName = blockNode.dataset.render;
      if (!COMPONENTS[blockName]) {
        return;
      }

      const BlockFrontend = COMPONENTS[blockName];
      if (!BlockFrontend) {
        return;
      }
      const attributes = JSON.parse(blockNode.dataset.attributes);
      const rootElement = createRoot(blockNode);
      rootElement.render(<BlockFrontend {...attributes.attributes} />);
    }
  );

  setupLightboxForImages();
  setupParallax();
});
