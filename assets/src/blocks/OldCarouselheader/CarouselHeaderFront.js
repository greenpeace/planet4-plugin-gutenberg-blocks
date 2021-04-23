import { FullWidthCarouselHeader } from './FullWidthCarouselHeader';

export const initializeCarouselHeader = function() {
  const $CarouselHeaderWrapper = $('#old-carousel-wrapper-header');
  if ($CarouselHeaderWrapper.length > 0) {
    FullWidthCarouselHeader.setup();
  }
};
