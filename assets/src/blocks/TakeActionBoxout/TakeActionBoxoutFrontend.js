export const TakeActionBoxoutFrontend = ({
  title,
  excerpt,
  link,
  linkText,
  newTab,
  imageUrl,
  imageAlt,
  className,
  stickyOnMobile,
}) => (
  <section
    className={`boxout ${className || ''}`}
    {...stickyOnMobile && {id: 'action-card'}}
  >
    {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
    <a
      data-ga-category="Take Action Boxout"
      data-ga-action="Image"
      data-ga-label="n/a"
      className="cover-card-overlay"
      href={link}
      target={(newTab && link) ? '_blank' : ''}
      rel="noreferrer"
    />
    <img src={imageUrl} alt={imageAlt} />
    <div className="boxout-content">
      {title &&
        <a
          className="boxout-heading"
          data-ga-category="Take Action Boxout"
          data-ga-action="Title"
          data-ga-label="n/a"
          dangerouslySetInnerHTML={{__html: title}}
          href={link}
          target={(newTab && link) ? '_blank' : ''}
          rel="noreferrer"
        />
      }
      {excerpt &&
        <p className="boxout-excerpt" dangerouslySetInnerHTML={{__html: excerpt}} />
      }
    </div>
    {link && linkText &&
      <a
        className="btn btn-action btn-block cover-card-btn"
        data-ga-category="Take Action Boxout"
        data-ga-action="Call to Action"
        data-ga-label="n/a"
        href={link}
        target={(newTab && link) ? '_blank' : ''}
        rel="noreferrer"
      >
        {linkText}
      </a>
    }
  </section>
);
