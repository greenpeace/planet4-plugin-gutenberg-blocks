import {
  forwardRef,
} from '@wordpress/element';

export const SlideWithRef = ({
  children,
  active,
}, ref) => (
  <div
    className={`carousel-item ${active ? 'active' : ''}`}
    ref={ref}
  >
    {children}
  </div>
);

export const Slide = forwardRef(SlideWithRef);
