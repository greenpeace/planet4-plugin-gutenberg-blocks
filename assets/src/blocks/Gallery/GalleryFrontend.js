import { GalleryCarousel } from './GalleryCarousel';
import { GalleryThreeColumns } from './GalleryThreeColumns';
import { GalleryGrid } from './GalleryGrid';
import { getGalleryLayout, GALLERY_BLOCK_CLASSES } from './getGalleryLayout';
import { getCaptionWithCredits } from './getCaptionWithCredits.js';
import { Lightbox } from '../../components/Lightbox/Lightbox';
import { useLightbox } from '../../components/Lightbox/useLightbox';

const imagesToItems = images => images.map(
  image => ({
    src: image.image_src,
    w: 0,
    h: 0,
    title: getCaptionWithCredits(image)
  })
);

export const GalleryFrontend = ({
  attributes,
  renderLightbox = false,
}) => {
  const className = attributes.className ?? '';
  const layout = getGalleryLayout(className, attributes.gallery_block_style ?? '');
  const postType = document.body.getAttribute('data-post-type');
  const images = attributes.images ? attributes.images : [];
  const items = imagesToItems(images);
  const { isOpen, index, openLightbox, closeLightbox } = useLightbox();

  return (
    <section className={`block ${GALLERY_BLOCK_CLASSES[layout]} ${className}`}>
      {attributes.gallery_block_title &&
        <header>
          <h2 className="page-section-header" dangerouslySetInnerHTML={{ __html: attributes.gallery_block_title }} />
        </header>
      }
      {attributes.gallery_block_description &&
        <div className="page-section-description" dangerouslySetInnerHTML={{ __html: attributes.gallery_block_description }} />
      }
      {layout === 'slider' && <GalleryCarousel onImageClick={openLightbox} images={images} />}
      {layout === 'three-columns' && <GalleryThreeColumns onImageClick={openLightbox} images={images} postType={postType} />}
      {layout === 'grid' && <GalleryGrid onImageClick={openLightbox} images={images} />}

      {renderLightbox && <Lightbox isOpen={isOpen} index={index} items={items} onClose={closeLightbox} />}
    </section>
  );
}
