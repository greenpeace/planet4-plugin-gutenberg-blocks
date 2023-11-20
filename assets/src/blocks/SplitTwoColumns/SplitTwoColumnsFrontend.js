import {IMAGE_SIZES} from './imageSizes';

export const SplitTwoColumnsFrontend = ({attributes}) => {
  const {
    title,
    issue_description,
    issue_link_text,
    issue_link_path,
    issue_image_src,
    issue_image_srcset,
    issue_image_title,
    focus_issue_image,
    tag_name,
    tag_description,
    tag_link,
    button_text,
    button_link,
    tag_image_src,
    tag_image_srcset,
    tag_image_title,
    focus_tag_image,
    className,
  } = attributes;
  const analytics = action => {
    return {
      'data-ga-category': 'Split Two Columns',
      'data-ga-action': action,
      'data-ga-label': 'n/a',
    };
  };

  return (
    <section className={`alignfull split-two-column ${className ?? ''}`}>
      <div className="split-two-column-item item--left">
        {issue_image_src &&
          <div className="split-two-column-item-image">
            <img src={issue_image_src}
              srcSet={issue_image_srcset}
              alt={issue_image_title}
              title={issue_image_title}
              style={{objectPosition: focus_issue_image}}
              sizes={IMAGE_SIZES.columnLeft}
            />
          </div>
        }
        <div className="split-two-column-item-content">
          {title && issue_link_path &&
            <h2 className="split-two-column-item-title">
              <a href={issue_link_path} {...analytics('Category Title')}
                dangerouslySetInnerHTML={{__html: title}}
              />
            </h2>
          }
          {title && !issue_link_path &&
            <h2 className="split-two-column-item-title">{title}</h2>
          }
          {issue_description &&
            <p className="split-two-column-item-subtitle"
              dangerouslySetInnerHTML={{__html: issue_description}}
            />
          }
          {issue_link_text && issue_link_path &&
            <a className="split-two-column-item-link"
              href={issue_link_path}
              {...analytics('Text Link')}
              dangerouslySetInnerHTML={{__html: issue_link_text}}
            />
          }
        </div>
      </div>
      <div className="split-two-column-item item--right">
        {tag_image_src &&
          <div className="split-two-column-item-image">
            <img src={tag_image_src}
              srcSet={tag_image_srcset}
              alt={tag_image_title}
              title={tag_image_title}
              style={{objectPosition: focus_tag_image}}
              sizes={IMAGE_SIZES.columnRight}
            />
          </div>
        }
        <div className="split-two-column-item-content">
          {tag_name &&
            <a className="split-two-column-item-tag"
              href={tag_link}
              {...analytics('Tag Title')}
              dangerouslySetInnerHTML={{__html: `<span aria-label="hashtag">#</span>${tag_name}`}}
            />
          }
          {tag_description &&
            <p className="split-two-column-item-subtitle"
              dangerouslySetInnerHTML={{__html: tag_description}}
            />
          }
          {button_text && button_link &&
            <a className="btn btn-primary split-two-column-item-button"
              href={button_link}
              {...analytics('Call to Action')}
              dangerouslySetInnerHTML={{__html: button_text}}
            />
          }
        </div>
      </div>
    </section>
  );
};
