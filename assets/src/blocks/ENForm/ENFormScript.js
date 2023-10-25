import {createRoot} from 'react-dom/client';
import {ENFormFrontend} from './ENFormFrontend';
import {hydrateBlock} from '../../functions/hydrateBlock';

hydrateBlock('planet4-blocks/enform', ENFormFrontend);

// Fallback for non migrated content. Remove after migration.
document.querySelectorAll('planet4-blocks/enform').forEach(
  blockNode => {
    const attributes = JSON.parse(blockNode.dataset.attributes);
    const rootElement = createRoot(blockNode);
    rootElement.render(<ENFormFrontend {...attributes} />);
  }
);
