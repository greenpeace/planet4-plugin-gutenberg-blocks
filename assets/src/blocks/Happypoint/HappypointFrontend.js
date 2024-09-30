import {useHappypointImageData} from './useHappypointImageData';
import {HubspotEmbed} from './useHubspotEmbedCode';
import {USE_IFRAME_URL, USE_EMBED_CODE, USE_NONE} from './HappyPointConstants';

export const HappypointFrontend = ({
  focus_image,
  opacity,
  mailing_list_iframe,
  iframe_url,
  id,
  embed_code,
  override_default_content,
  local_content_provider,
  className,
}) => {
  const {imageData: happypointData} = useHappypointImageData(id);
  const {
    background_src,
    background_srcset,
    background_alt,
    background_sizes,
    default_image,
    // Settings from Planet4 > Default content
    default_content_provider,
    engaging_network_id, // default iframe url
    default_embed_code, // default embed code
  } = happypointData;

  const imgProps = {
    src: background_src || default_image,
    style: {
      objectPosition: focus_image,
      opacity: opacity ? (opacity / 100) : 0.3,
    },
    alt: background_alt,
  };

  if (background_src) {
    imgProps.srcSet = background_srcset || null;
    imgProps.sizes = background_sizes || null;
  }

  // eslint-disable-next-line no-nested-ternary
  const legacy_provider = typeof mailing_list_iframe === 'undefined' ?
    null : (mailing_list_iframe ? USE_IFRAME_URL : USE_NONE);

  const content_provider = legacy_provider || (override_default_content ? local_content_provider : default_content_provider);
  const url = iframe_url || engaging_network_id;
  const code = embed_code || default_embed_code;
  const html_code = safeHTML(code || '');

  const instanceId = 'happy-point';

  return (
    <section className={`block block-footer alignfull happy-point-block-wrap ${className ?? ''}`}>
      <picture>
        <img {...imgProps} loading="lazy" alt="HappyPoint" />
      </picture>
      <div className="container">
        <div className="row justify-content-md-center">
          {USE_IFRAME_URL === content_provider && url &&
            (
              <div className="col-md-10 happy-point" id={instanceId} data-src={url}>
                <iframe
                  src={url}
                  cellSpacing={0}
                  frameBorder={0}
                  scrolling="no"
                  width="100%"
                  loading="lazy"
                  title="Happy Point"
                />
              </div>
            )
          }
          {USE_EMBED_CODE === content_provider &&
            <div className="col-md-10 mt-5" id={instanceId} dangerouslySetInnerHTML={{__html: html_code}} />
          }
          <HubspotEmbed params={{use_embed_code: USE_EMBED_CODE === content_provider, embed_code: code, target: `#${instanceId}`}} />
        </div>
      </div>
    </section>
  );
};

/**
 * cf. https://github.com/WordPress/gutenberg/blob/wp/5.9/packages/dom/src/dom/safe-html.js
 *
 * @param {Object} html
 * @return {Object} text in html
 */
const safeHTML = html => {
  const {body} = document.implementation.createHTMLDocument('');
  body.innerHTML = html;
  const elements = body.getElementsByTagName('*');
  let elementIndex = elements.length;

  while (elementIndex--) {
    const element = elements[elementIndex];

    if (element.tagName === 'SCRIPT') {
      element.parentNode.removeChild(element);
      continue;
    }

    let attributeIndex = element.attributes.length;
    while (attributeIndex--) {
      const {name: key} = element.attributes[attributeIndex];

      if (key.startsWith('on')) {
        element.removeAttribute(key);
      }
    }
  }

  return body.innerHTML;
};
