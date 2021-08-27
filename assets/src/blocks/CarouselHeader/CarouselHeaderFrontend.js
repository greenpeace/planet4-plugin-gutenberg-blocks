import { useRef, useEffect, useState } from '@wordpress/element';
import { useSlides } from './useSlides';
import { Slide } from './Slide';
import { CarouselControls } from './CarouselControls';
import { SlideBackground } from './SlideBackground';
import { StaticCaption } from './StaticCaption';

const isRTL = document.querySelector('html').dir === 'rtl';

const usePageLoaded = () => {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    window.addEventListener('load', (event) => {
      setPageLoaded(true);
    });
  }, []);

  return pageLoaded;
}

export const CarouselHeaderFrontend = ({ slides, carousel_autoplay, className }) => {
  const pageLoaded = usePageLoaded();
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  const slidesRef = useRef([]);
  const containerRef = useRef(null);
  const {
    currentSlide,
    goToSlide,
    goToNextSlide,
    goToPrevSlide,
    setCarouselHeight,
    autoplayCancelled
  } = useSlides(slidesRef, slides.length - 1, containerRef);

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

    hammer.on('swipeleft', isRTL ? goToPrevSlide : goToNextSlide);
    hammer.on('swiperight', isRTL ? goToNextSlide : goToPrevSlide);

    return () => {
      hammer.off('swipeleft', isRTL ? goToPrevSlide : goToNextSlide);
      hammer.off('swiperight', isRTL ? goToNextSlide : goToPrevSlide);
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
    if (!pageLoaded) {
      return;
    }
    if (carousel_autoplay && slides.length > 1 && !autoplayPaused && !autoplayCancelled) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => goToNextSlide(true), 10000);
      return () => clearTimeout(timerRef.current);
    } else if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  }, [currentSlide, slides, carousel_autoplay, autoplayPaused, autoplayCancelled, pageLoaded]);

  return (
    <section
      className={`block block-header block-wide carousel-header-beta ${className ?? ''}`}
      ref={containerRef}
      onMouseEnter={() => setAutoplayPaused(true)}
      onMouseLeave={() => setAutoplayPaused(false)}
    >
      <div className='carousel-wrapper-header'>
        <div className='carousel-inner' role='listbox'>
          {slides.map((slide, index) => (
            <Slide
              key={index}
              active={currentSlide == index}
              ref={element => slidesRef ? slidesRef.current[index] = element : null}
            >
              <SlideBackground slide={pageLoaded ? slide : slides[0]} />
              <StaticCaption slide={slide} />
            </Slide>
          ))}
          <CarouselControls
            goToPrevSlide={goToPrevSlide}
            goToNextSlide={goToNextSlide}
            goToSlide={goToSlide}
            slides={slides}
            currentSlide={currentSlide}
          />
        </div>
      </div>
    </section>
  );
}
