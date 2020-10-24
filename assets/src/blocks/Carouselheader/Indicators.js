export const Indicators = ({slides, currentSlide}) => (
  slides?.length > 1 &&
  <ol className="carousel-indicators">
    {
      slides.map((slide, index) =>
        <li key={index} className={index === currentSlide ? 'active' : ''}></li>
      )
    }
  </ol>
);
