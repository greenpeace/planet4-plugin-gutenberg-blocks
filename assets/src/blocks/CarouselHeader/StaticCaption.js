export const StaticCaption = ({ slide }) => {
  const HeaderTag = slide.header_size;
  return <div className="carousel-caption">
    <div className="caption-overlay"></div>
    <div className="container main-header">
      <div className="carousel-captions-wrapper">
        <HeaderTag>
          {slide.header}
        </HeaderTag>
        <p>
          {slide.description}
        </p>
      </div>

      {
        slide.link_url &&
        <div className="col-xs-12 col-sm-8 col-md-4 action-button">
          <a href={ slide.link_url }
            target={ slide.link_url_new_tab ? '_blank' : "_self" }
            className="btn btn-primary btn-block"
            data-ga-category="Carousel Header"
            data-ga-action="Call to Action"
            rel="noopener noreferrer"
            data-ga-label={ slide.index }
            onClick={e => e.preventDefault()}
            >
              <span>
                {slide.link_text}
              </span>
          </a>
        </div>
      }
    </div>
  </div>;
}
