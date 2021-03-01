import { SlidesContainer } from './SlidesContainer';
import { Slide } from './Slide';

// TODO: Move these two into Slide?
import { SlideBackground } from './SlideBackground';
import { StaticCaption } from './StaticCaption';

export function CarouselHeaderStaticContent({
  slides,
  slidesRef,
  containerRef,
  goToPrevSlide = null,
  goToNextSlide = null,
  goToSlide = null,
  currentSlide = 0,
}) {
return <SlidesContainer
    slides={slides}
    slidesRef={slidesRef}
    ref={containerRef}
    goToSlide={goToSlide}
    goToNextSlide={goToNextSlide}
    goToPrevSlide={goToPrevSlide}
    currentSlide={currentSlide}
  >
  { slides.map((slide, index) => {
    return <Slide
      key={index}
      slide={slide}
      index={index}
      active={currentSlide == index}
      ref={element => slidesRef ? slidesRef.current[index] = element : null}
      >
      <SlideBackground slide={slide}>
        <StaticCaption slide={slide} />
      </SlideBackground>
    </Slide>
  })}
</SlidesContainer>;
}
