import {Lightbox} from './Lightbox';
import {createRoot} from 'react-dom/client';

const setupImageAndCaption = (lightBoxNode, captionSelector = null) => {
  // Returns the callback for `forEach`
  return (imageBlock, index) => {
    const image = imageBlock.querySelector('img');

    if (!image) {
      return;
    }

    const item = {
      src: image.src ? image.src : image.dataset.src,
      w: 0,
      h: 0,
    };

    const caption = imageBlock.querySelector(captionSelector);
    if (caption) {
      item.title = caption.innerHTML;
    }
    const rootElement = createRoot(lightBoxNode);

    imageBlock.querySelector('img').addEventListener(
      'click',
      () => rootElement.render(<Lightbox isOpen={true} index={index} items={[item]} />)
    );
  };
};

export const setupLightboxForImages = function() {
  // We can't use `createPortal` outside `render()`,
  // `React.render()` needs a node, even if it ends up being empty.
  // See: https://github.com/facebook/react/issues/12653#issuecomment-382851495
  const lightBoxNode = document.createElement('div');
  lightBoxNode.style.position = 'fixed';

  document.body.appendChild(lightBoxNode);

  const imagesWithCaptions = document.querySelectorAll('.post-content .wp-caption, .page-content .wp-caption');
  imagesWithCaptions.forEach(setupImageAndCaption(lightBoxNode, '.wp-caption-text'));

  const imagesInParagraphs = document.querySelectorAll('.post-content p:not(.wp-caption), .page-content p:not(.wp-caption)');
  imagesInParagraphs.forEach(setupImageAndCaption(lightBoxNode));

  const mediaAndTextImages = document.querySelectorAll('.wp-block-media-text:not(.force-no-lightbox)');
  mediaAndTextImages.forEach(setupImageAndCaption(lightBoxNode));
};
