import { render } from '@render';
import { TimelineFrontend } from './TimelineFrontend';

document.addEventListener( 'DOMContentLoaded', () => {
  const timelineBlocks = [...document.querySelectorAll('[data-render="planet4-blocks/timeline"]')];

  timelineBlocks.forEach(blockNode => {
    const attributes = JSON.parse( blockNode.dataset.attributes );
    render( <TimelineFrontend { ...attributes.attributes } />, blockNode );
  });
});
