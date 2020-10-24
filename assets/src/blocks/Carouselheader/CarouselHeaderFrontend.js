import { useRef } from '@wordpress/element';
import { useSlides } from './useSlides';
import { CarouselHeaderStaticContent } from './CarouselHeaderStaticContent';

const {__} = wp.i18n;

export function CarouselHeaderFrontend({ attributes }) {
  const { slides, carousel_autoplay } = attributes;

  const slidesRef = useRef([]);
  const { currentSlide, sliding, goToSlide } = useSlides(slides, slidesRef);

  const lastSlide = slides.length - 1;
  const goToNextSlide = () => goToSlide(currentSlide === lastSlide ? 0 : currentSlide + 1);
  const goToPrevSlide = () => goToSlide(currentSlide === 0 ? lastSlide : currentSlide - 1);

  return <CarouselHeaderStaticContent
    slides={slides}
    slidesRef={slidesRef}
    goToNextSlide={goToNextSlide}
    goToPrevSlide={goToPrevSlide}
    currentSlide={currentSlide}
  />;
}
