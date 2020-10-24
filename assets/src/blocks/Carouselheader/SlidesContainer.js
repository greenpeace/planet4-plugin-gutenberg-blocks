import { ArrowsAndIndicators } from "./ArrowsAndIndicators";

import {
  Children,
  cloneElement
} from '@wordpress/element';

export function SlidesContainer({
  children,
  goToSlide = null,
  currentSlide = null,
  goToPrevSlide = null,
  goToNextSlide = null,
  slides = [],
 }) {
  const renderChildSlides = (passedProps) => {
    return Children.map(children, child => {
      return child && cloneElement(child, passedProps)
    })
  };

  return <section className="block block-header block-wide carousel-header_full-width-classic">
    <div className="carousel-wrapper-header">
        <div className="carousel-inner" role="listbox">
          { renderChildSlides({currentSlide, goToSlide}) }

          <ArrowsAndIndicators
            goToPrevSlide={goToPrevSlide}
            goToNextSlide={goToNextSlide}
            goToSlide={goToSlide}
            slides={slides}
            currentSlide={currentSlide}
          />
        </div>;
    </div>
  </section>
}
