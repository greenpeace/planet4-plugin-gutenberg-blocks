import { SpreadsheetFrontend } from './blocks/Spreadsheet/SpreadsheetFrontend';
import { CounterFrontend } from './blocks/Counter/CounterFrontend';
import { ArticlesFrontend } from './blocks/Articles/ArticlesFrontend';
import { SubmenuFrontend } from './blocks/Submenu/SubmenuFrontend';

const COMPONENTS = {
  'planet4-blocks/spreadsheet': SpreadsheetFrontend,
  'planet4-blocks/counter': CounterFrontend,
  'planet4-blocks/articles': ArticlesFrontend,
  'planet4-blocks/submenu': SubmenuFrontend
};

document.querySelectorAll( `[data-render]` ).forEach(
  blockNode => {
    const blockName = blockNode.dataset.render;
    const BlockFrontend = COMPONENTS[ blockName ];
    const attributes = JSON.parse( blockNode.dataset.attributes );
    wp.element.render( <BlockFrontend { ...attributes.attributes } />, blockNode );
  }
);
