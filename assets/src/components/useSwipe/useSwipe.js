import { useState } from '@wordpress/element';

export const useHorizontalSwipe = () => {
  const [startX, setStartX] = useState(null);
  const [swipeDirection, setSwipeDirection] = useState(0);

  const onTouchStart = (e) => {
    setStartX(e.touches[0].clientX)
  }

  const onTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (!startX) {
      setSwipeDirection(0);
      setStartX(null);
    };

    if (startX > endX) {
      setSwipeDirection(1);
      setStartX(null);
    };

    if (startX < endX) {
      setSwipeDirection(-1);
      setStartX(null);
    };
  }

  const onMouseDown = (e) => {
    setStartX(e.clientX)
  }

  const onMouseUp = (e) => {
    const endX = e.clientX;

    if (!startX) {
      setStartX(null);
      setSwipeDirection(0);
    };

    if (startX > endX) {
      setStartX(null);
      setSwipeDirection(1);
    };

    if (startX < endX) {
      setStartX(null);
      setSwipeDirection(-1);
    };
  }

  const swipeListeners = {
    onTouchStart,
    onTouchEnd,
    onMouseDown,
    onMouseUp,
  };

  return [
    setSwipeDirection,
    swipeDirection,
    swipeListeners
  ]
}
