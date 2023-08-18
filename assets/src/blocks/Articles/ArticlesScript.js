import {ArticlesFrontend} from './ArticlesFrontend';
import {hydrateBlock} from '../../functions/hydrateBlock';
import {BLOCK_NAME} from './ArticlesBlock';
import {createRoot} from 'react-dom/client';

hydrateBlock(BLOCK_NAME, ArticlesFrontend);

// Fallback for non migrated content. Remove after migration.
document.querySelectorAll(`[data-render="${BLOCK_NAME}"]`).forEach(
  blockNode => {
    const attributes = JSON.parse(blockNode.dataset.attributes);
    const rootElement = createRoot(blockNode);
    rootElement.render(<ArticlesFrontend {...attributes.attributes} />);
  }
);
