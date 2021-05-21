import {
  forwardRef,
} from '@compat';

export const SlideWithRef = ({
  children,
  active,
}, ref) => (
  <div
    className={`carousel-item ${active ? 'active' : ''}`}
    ref={ref}
  >
    <div className='carousel-item-mask'>
      {children}
    </div>
  </div>
);

export const Slide = forwardRef(SlideWithRef);
