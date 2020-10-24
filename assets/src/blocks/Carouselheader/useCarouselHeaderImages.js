import { useSelect } from '@wordpress/data';

export const useCarouselHeaderImages = slides => {
  return useSelect(select => {
    let slidesCopy = slides ? JSON.parse(JSON.stringify(slides)) : [];
    slidesCopy.forEach((slide, index) => {
      if (!slide.image) {
        return slide;
      }
      const image = select('core').getMedia(slide.image);
      if (image) {
        slidesCopy[index].image_url = image.source_url;
      }
    });
    return slidesCopy;
  }, [slides]);
} 
