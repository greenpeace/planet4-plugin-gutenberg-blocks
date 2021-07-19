import { render } from '@render';
import { Lightbox } from './Lightbox';

const setupImageAndCaption = (lightBoxNode, imageSelector = 'img', captionSelector = null) => {
  // Returns the callback for `forEach`
  return (imageBlock, index) => {
    const image = imageBlock.querySelector(imageSelector);

    if (!image) {
      return;
    }

    const item = {
      src: image.src ? image.src : image.dataset.src,
      w: 0,
      h: 0
    };

    const caption = imageBlock.querySelector(captionSelector);
    if (caption) {
      item.title = caption.innerHTML;
    }

    imageBlock.querySelector('img').addEventListener('click', () => render(
        <Lightbox isOpen={true} index={index} items={[item]} />,
        lightBoxNode
      )
    );
  }
}

export const setupLightboxForImages = function() {
  // We can't use `createPortal` outside `render()`,
  // `React.render()` needs a node, even if it ends up being empty.
  // See: https://github.com/facebook/react/issues/12653#issuecomment-382851495
  const lightBoxNode = document.createElement('div');
  lightBoxNode.style.position = 'fixed';

  document.body.appendChild(lightBoxNode);

  const imageBlocks = document.querySelectorAll('.wp-block-image:not(.force-no-lightbox)');
  imageBlocks.forEach(setupImageAndCaption(lightBoxNode, 'img', 'figcaption'));

  const imagesWithCaptions = document.querySelectorAll('.post-content .wp-caption, .page-template .wp-caption');
  imagesWithCaptions.forEach(setupImageAndCaption(lightBoxNode, 'img', '.wp-caption-text'));

  const imagesInParagraphs = document.querySelectorAll('.post-content p:not(.wp-caption), .page-template p:not(.wp-caption)');
  imagesInParagraphs.forEach(setupImageAndCaption(lightBoxNode, 'img'));
}
