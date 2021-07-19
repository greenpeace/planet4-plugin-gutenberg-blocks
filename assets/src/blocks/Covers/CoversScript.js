import { render } from '@render';

import { CoversFrontend } from './CoversFrontend';

document.querySelectorAll( `[data-render='planet4-blocks/covers']` ).forEach(
  blockNode => {
    const attributes = JSON.parse( blockNode.dataset.attributes );
    render( <CoversFrontend { ...attributes.attributes } />, blockNode );
  }
);
