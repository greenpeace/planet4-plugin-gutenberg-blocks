import { setupMediaElementJS } from './blocks/Media/setupMediaElementJS';
import { setupLightboxForImages } from './components/Lightbox/setupLightboxForImages';
import { PortalHost } from './PortalHost';

const dataLayer = window.dataLayer || [];

dataLayer.push({ event: 'frontendIndexStart', time: performance.now()});

// Render React components
// Empty react root so we can do a single render with portals to all the blocks.
const reactRoot = document.createElement('div');
const blocks = [...document.querySelectorAll( `[data-render]` )];
wp.element.render(<PortalHost blocks={blocks} />, reactRoot);

setupMediaElementJS();
setupLightboxForImages();
dataLayer.push({ event: 'frontendIndexDone', time: performance.now() });
