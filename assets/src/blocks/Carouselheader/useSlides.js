import { useState } from '@wordpress/element';

export const useSlides = (slides, slidesRef) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliding, setSliding] = useState(false);

  const lastSlide = slides.length - 1;
  const goToNextSlide = () => goToSlide(currentSlide === lastSlide ? 0 : currentSlide + 1);
  const goToPrevSlide = () => goToSlide(currentSlide === 0 ? lastSlide : currentSlide - 1);

  const getOrder = (currentSlide, newSlide, lastSlide) => {
    let order = newSlide < currentSlide ? 'prev' : 'next';
    if (newSlide === lastSlide && currentSlide === 0 && order !== 'prev') {
      order = 'prev';
    } else if (newSlide === 0 && currentSlide === lastSlide && order !== 'next') {
      order = 'next';
    }
    return order;
  }

  const goToSlide = (newSlide, forceCurrentSlide = false) => {
    const nextElement = slidesRef.current[newSlide];
    const activeElement = slidesRef.current[currentSlide];

    if (newSlide !== currentSlide && nextElement && activeElement && !sliding) {
      setSliding(true);

      const isRTL = false;
      const shrinkClass = isRTL ? 'shrink-to-left' : 'shrink-to-right';
      const orderClass = getOrder(currentSlide, newSlide, lastSlide);

      activeElement.classList.add(shrinkClass);
      nextElement.classList.add(orderClass);

      function unsetTransitionClasses() {
        activeElement.classList.remove(shrinkClass);
        nextElement.classList.remove(orderClass);
        activeElement.removeEventListener('transitionend', unsetTransitionClasses);
        setSliding(false);
        setCurrentSlide(newSlide);
      }
      activeElement.addEventListener('transitionend', unsetTransitionClasses);

      // This hack is used to force what happens
      // on transitionEnd when the active slide was removed in the editor
      if (forceCurrentSlide) {
        unsetTransitionClasses();
      }
    }
  }

  return {
    currentSlide,
    sliding,
    goToSlide,
    goToNextSlide,
    goToPrevSlide,
  };
}
