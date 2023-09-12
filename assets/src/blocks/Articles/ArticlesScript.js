import {ArticlesFrontend} from './ArticlesFrontend';
import {hydrateBlock} from '../../functions/hydrateBlock';
import {createRoot} from 'react-dom/client';

hydrateBlock('planet4-blocks/articles', ArticlesFrontend);

// Fallback for non migrated content. Remove after migration.
document.querySelectorAll('[data-render="planet4-blocks/articles"]').forEach(
  blockNode => {
    const attributes = JSON.parse(blockNode.dataset.attributes);
    const rootElement = createRoot(blockNode);
    rootElement.render(<ArticlesFrontend {...attributes.attributes} />);
  }
);
