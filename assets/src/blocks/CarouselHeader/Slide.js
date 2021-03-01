import {
  forwardRef,
} from '@wordpress/element';

export const SlideWithRef = ({
  children,
  active,
}, ref) => {
  return <div className={ `carousel-item ${active ? 'active' : ''}` }
      ref={ref}
    >
    <div className="carousel-item-mask">
      { children }
    </div>
  </div>;
}

export const Slide = forwardRef(SlideWithRef);
