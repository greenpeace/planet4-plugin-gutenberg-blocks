import { FrontendRichText } from '../../components/FrontendRichText/FrontendRichText';

const { __ } = wp.i18n;

export const Caption = ({ slide, index, setAttributes, isSelected, slides }) => {
  const changeSlideAttribute = (slideAttributeName, index, value, slides) => {
    let slidesCopy = JSON.parse(JSON.stringify(slides));
    slidesCopy[index][slideAttributeName] = value;
    setAttributes({slides: slidesCopy});
  }

  return <div className="carousel-caption">
    <div className="caption-overlay"></div>
    <div className="container main-header">
      <div className="carousel-captions-wrapper">
        <FrontendRichText
          tagName={slide.header_size}
          className=""
          placeholder={__('Enter title', 'planet4-blocks-backend')}
          value={slide.header}
          onChange={value => changeSlideAttribute('header', index, value, slides)}
          keepPlaceholderOnFocus={true}
          withoutInteractiveFormatting
          characterLimit={32}
          multiline="false"
          editable={isSelected}
        />
        <FrontendRichText
          tagName="p"
          className=""
          placeholder={__('Enter description', 'planet4-blocks-backend')}
          value={slide.description}
          onChange={value => changeSlideAttribute('description', index, value, slides)}
          keepPlaceholderOnFocus={true}
          withoutInteractiveFormatting
          characterLimit={200}
          editable={isSelected}
        />
      </div>

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
          <FrontendRichText
            tagName="span"
            className=""
            placeholder={__('Enter CTA text', 'planet4-blocks-backend')}
            value={slide.link_text}
            onChange={value => changeSlideAttribute('link_text', index, value, slides)}
            keepPlaceholderOnFocus={true}
            withoutInteractiveFormatting
            characterLimit={40}
            editable={isSelected}
          />
        </a>
      </div>
    </div>
  </div>;
}
