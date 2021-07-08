import { useEffect } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import {
  RadioControl,
  SelectControl,
  PanelBody,
} from '@wordpress/components';
import { SocialMediaEmbed } from './SocialMediaEmbed';
import { URLInput } from '../../components/URLInput/URLInput';
import { HTMLSidebarHelp } from '../../components/HTMLSidebarHelp/HTMLSidebarHelp';
import { fetchJson } from '../../functions/fetchJson';
import {
  OEMBED_EMBED_TYPE,
  FACEBOOK_EMBED_TYPE,
  FACEBOOK_PAGE_TAB_TIMELINE,
  FACEBOOK_PAGE_TAB_EVENTS,
  FACEBOOK_PAGE_TAB_MESSAGES,
  ALLOWED_OEMBED_PROVIDERS,
} from './SocialMediaConstants.js';

const FB_API_BASE_URL  = 'https://graph.facebook.com/v9.0';
const INSTAGRAM_OEMBED = `${FB_API_BASE_URL}/instagram_oembed`;
const FB_ACCESS_TOKEN = window.p4ge_vars.planet4_options.fb_app_access_token;

const { RichText } = wp.blockEditor;
const { __ } = wp.i18n;
const { apiFetch } = wp;
const { addQueryArgs } = wp.url;

const loadScriptAsync = uri => {
  return new Promise((resolve, reject) => {
    let tag = document.createElement('script');
    tag.src = uri;
    tag.async = true;
    tag.onload = () => {
      resolve();
    };
    const body = document.getElementsByTagName('body')[0];
    body.appendChild(tag);
  });
};

const initializeTwitterEmbeds = () => {
  setTimeout(() => {
    if ('undefined' !== window.twttr) {
      window.twttr.widgets.load();
    }
  }, 2000);
}

const initializeInstagramEmbeds = () => {
  setTimeout(() => {
    if ('undefined' !== window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, 3000);
}

const initializeFacebookEmbeds = () => {
  setTimeout(() => {
    if ('undefined' !== window.FB) {
      window.FB.XFBML.parse();
    }
  }, 3000);
}

const PROVIDER_SCRIPT_DATA = {
  twitter: {
    script: 'https://platform.twitter.com/widgets.js',
    initFunction: initializeTwitterEmbeds,
  },
  facebook: {
    script: 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0',
    initFunction: initializeFacebookEmbeds,
  },
  instagram: {
    script: 'https://www.instagram.com/embed.js',
    initFunction: initializeInstagramEmbeds,
  },
};

export const SocialMediaEditor = ({
  attributes,
  isSelected,
  setAttributes,
}) => {
  const {
    social_media_url,
    facebook_page_tab,
    description,
    title,
    embed_type,
    alignment_class,
    embed_code,
    className,
  } = attributes;

  const toAttribute = attributeName => value => setAttributes({
    [attributeName]: value
  });

  /**
   * Check if social media corresponding embeds script is loaded and initiliaze it.
   * Can be used for Facebook, Twitter and Instagram depending on the parameter.
   */
  const checkProviderScript = provider => {
    const providerData = PROVIDER_SCRIPT_DATA[provider];
    const script = document.querySelector(`body > script[src="${providerData.script}"]`);
    if (script === null) {
      const scriptLoaded = loadScriptAsync(providerData.script);
      scriptLoaded.then(providerData.initFunction);
    } else {
      providerData.initFunction();
    }
  }

  const updateEmbed = async (url, provider) => {
    if (!url || provider === 'facebook') {
      setAttributes({ embed_code: '' });
      return;
    }
    let embedCode;
    try {
      if (provider === 'twitter') {
        const twitterEmbedData = await apiFetch({ path: addQueryArgs('/oembed/1.0/proxy', { url }) });
        embedCode = twitterEmbedData ? twitterEmbedData.html : '';
      } else if (provider === 'instagram') {
        const instagramEmbedData = await fetchJson(`${INSTAGRAM_OEMBED}?url=${url}&access_token=${FB_ACCESS_TOKEN}`);
        embedCode = instagramEmbedData ? instagramEmbedData.html : '';
      }
    } catch (error) {
      embedCode = '';
    }
    setAttributes({ embed_code: embedCode });
  };

  useEffect(() => {
    ALLOWED_OEMBED_PROVIDERS.forEach(provider => {
      if (social_media_url.includes(provider)) {
        checkProviderScript(provider);
        // For Facebook we don't need the embed HTML code since we use an iframe
        if (provider !== 'facebook') {
          updateEmbed(social_media_url, provider);
        }
      } else {
        setAttributes({ embed_code: '' });
      }
    });
  }, [social_media_url]);

  const embed_type_help = __('Select oEmbed for the following types of social media<br>- Twitter: tweet, profile, list, collection, likes, moment<br>- Facebook: post, activity, photo, video, media, question, note<br>- Instagram: image', 'planet4-blocks-backend');

  const renderEditInPlace = () => (
    <>
      <header>
        <RichText
          tagName='h2'
          className='page-section-header'
          placeholder={__('Enter title', 'planet4-blocks-backend')}
          value={title}
          onChange={toAttribute('title')}
          keepPlaceholderOnFocus={true}
          withoutInteractiveFormatting
          multiline='false'
          allowedFormats={[]}
        />
      </header>
      <RichText
        tagName='p'
        className='page-section-description'
        placeholder={__('Enter description', 'planet4-blocks-backend')}
        value={description}
        onChange={toAttribute('description')}
        keepPlaceholderOnFocus={true}
        withoutInteractiveFormatting
        allowedFormats={['core/bold', 'core/italic']}
      />
    </>
  );

  const renderSidebar = () => (
    <InspectorControls>
      <PanelBody title={__('Setting', 'planet4-blocks-backend')}>
        <RadioControl
          label={__('Embed type', 'planet4-blocks-backend')}
          options={[
            { label: __('oEmbed', 'planet4-blocks-backend'), value: OEMBED_EMBED_TYPE },
            { label: __('Facebook page', 'planet4-blocks-backend'), value: FACEBOOK_EMBED_TYPE },
          ]}
          selected={embed_type}
          onChange={toAttribute('embed_type')}
        />
        <HTMLSidebarHelp>{embed_type_help}</HTMLSidebarHelp>
        {embed_type === FACEBOOK_EMBED_TYPE &&
          <>
            <label>
              {__('What Facebook page content would you like to display?', 'planet4-blocks-backend')}
            </label>
            <SelectControl
              value={facebook_page_tab}
              options={[
                { label: __('Timeline', 'planet4-blocks-backend'), value: FACEBOOK_PAGE_TAB_TIMELINE },
                { label: __('Events', 'planet4-blocks-backend'), value: FACEBOOK_PAGE_TAB_EVENTS },
                { label: __('Messages', 'planet4-blocks-backend'), value: FACEBOOK_PAGE_TAB_MESSAGES },
              ]}
              onChange={toAttribute('facebook_page_tab')}
            />
          </>
        }
        <URLInput
          label={__('URL', 'planet4-blocks-backend')}
          placeholder={__('Enter URL', 'planet4-blocks-backend')}
          value={social_media_url}
          onChange={toAttribute('social_media_url')}
        />
        <SelectControl
          label={__('Alignment', 'planet4-blocks-backend')}
          value={alignment_class}
          options={[
            { label: __('None', 'planet4-blocks-backend'), value: '' },
            { label: __('Left', 'planet4-blocks-backend'), value: 'alignleft' },
            { label: __('Center', 'planet4-blocks-backend'), value: 'aligncenter' },
            { label: __('Right', 'planet4-blocks-backend'), value: 'alignright' },
          ]}
          onChange={toAttribute('alignment_class')}
        />
      </PanelBody>
    </InspectorControls>
  );

  return (
    <section className={`block social-media-block ${className ?? ''}`}>
      {isSelected && renderSidebar()}
      {renderEditInPlace()}
      <SocialMediaEmbed
        embedCode={embed_code || ''}
        facebookPageTab={facebook_page_tab}
        facebookPageUrl={social_media_url}
        alignmentClass={alignment_class}
        embedType={embed_type}
      />
    </section>
  );
}
