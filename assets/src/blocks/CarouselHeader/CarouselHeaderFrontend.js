import { useRef, useEffect } from '@wordpress/element';
import { useSlides } from './useSlides';
import { CarouselHeaderStaticContent } from './CarouselHeaderStaticContent';

const isRTL = document.querySelector('html').dir === 'rtl';

const { __ } = wp.i18n;

export const CarouselHeaderFrontend = ({ slides, carousel_autoplay }) => {
  const slidesRef = useRef([]);
  const containerRef = useRef(null);
  const {
    currentSlide,
    goToSlide,
    goToNextSlide,
    goToPrevSlide,
    setCarouselHeight,
    autoplayPaused,
    autoplayCancelled
  } = useSlides(slidesRef, slides.length - 1, containerRef);

  const changeSlideHandlers = [
    () => goToNextSlide(),
    () => goToPrevSlide(),
  ];

  if (isRTL) {
    changeSlideHandlers.reverse();
  }

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const carouselElement = containerRef.current;
    const carouselHeadHammer = new Hammer(carouselElement, { recognizers: [] });
    const hammer = new Hammer.Manager(carouselHeadHammer.element);
    const swipe = new Hammer.Swipe();
    // Only allow horizontal swiping (not vertical swiping)
    swipe.set({ direction: Hammer.DIRECTION_HORIZONTAL });
    hammer.add(swipe);

    hammer.on('swipeleft', changeSlideHandlers[0]);
    hammer.on('swiperight', changeSlideHandlers[1]);

    return () => {
      hammer.off('swipeleft', changeSlideHandlers[0]);
      hammer.off('swiperight', changeSlideHandlers[1]);
    }
  }, [currentSlide]);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const currentSlideRef = slidesRef.current[currentSlide];
    if (currentSlideRef) {
      setCarouselHeight(currentSlideRef);

      window.addEventListener('resize', () => setCarouselHeight(currentSlideRef));
    }

    return () => window.removeEventListener('resize', () => setCarouselHeight(currentSlideRef));
  }, []);

  // Set up the autoplay for the slides
  const timerRef = useRef(null);
  useEffect(() => {
    if (carousel_autoplay && slides.length > 1 && !autoplayPaused && !autoplayCancelled) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => changeSlideHandlers[0](true), 10000);
      return () => clearTimeout(timerRef.current);
    } else if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  }, [currentSlide, slides, carousel_autoplay, autoplayPaused, autoplayCancelled]);

  return (
    <CarouselHeaderStaticContent
      slides={slides}
      slidesRef={slidesRef}
      containerRef={containerRef}
      goToNextSlide={changeSlideHandlers[0]}
      goToPrevSlide={changeSlideHandlers[1]}
      goToSlide={goToSlide}
      currentSlide={currentSlide}
    />
  );
}
