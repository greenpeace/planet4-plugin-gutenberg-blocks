import { Fragment } from '@render';

export const Arrows = ({ goToPrevSlide, goToNextSlide }) => {
  return <Fragment>
    <a onClick={goToPrevSlide} className="carousel-control-prev" on="#carousel-wrapper-header" role="button">
      <span className="carousel-control-prev-icon" aria-hidden="true"><i></i></span>
      <span className="sr-only">Prev</span>
    </a>
    <a onClick={goToNextSlide} className="carousel-control-next" href="#carousel-wrapper-header" role="button">
      <span className="carousel-control-next-icon" aria-hidden="true"><i></i></span>
      <span className="sr-only">Next</span>
    </a>
  </Fragment>;
}
