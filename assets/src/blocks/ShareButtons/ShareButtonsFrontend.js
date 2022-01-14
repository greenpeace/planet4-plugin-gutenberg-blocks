import { WhatsappShare } from './ShareProviders/WhatsappShare';
import { FacebookShare } from './ShareProviders/FacebookShare';
import { TwitterShare } from './ShareProviders/TwitterShare';
import { EmailShare } from './ShareProviders/EmailShare';

const { __ } = wp.i18n;

export const ShareButtonsFrontend = ({
  url,
  utmMedium,
  utmContent,
  utmCampaign,
  gaEvent,
  gaEventCategory,
  gaCategory,
  gaAction,
  gaLabel,
  whatsapp,
  facebook,
  twitter,
  email,
}) => (
  <nav className='share-buttons'>
    {whatsapp.showInMenu && (
      <WhatsappShare {...{
        url,
        utmMedium,
        utmContent,
        utmCampaign,
        gaEvent,
        gaEventCategory,
        gaCategory,
        gaAction,
        gaLabel,
        openInNewTab: whatsapp.openInNewTab,
        baseSharedUrl: whatsapp.baseSharedUrl,
      }}
      />
    )}
    {facebook.showInMenu && (
      <FacebookShare {...{
        url,
        utmMedium,
        utmContent,
        utmCampaign,
        gaEvent,
        gaEventCategory,
        gaCategory,
        gaAction,
        gaLabel,
        openInNewTab: facebook.openInNewTab,
        baseSharedUrl: facebook.baseSharedUrl,
      }}
      />
    )}
    {twitter.showInMenu && (
      <TwitterShare {...{
        url,
        utmMedium,
        utmContent,
        utmCampaign,
        gaEvent,
        gaEventCategory,
        gaCategory,
        gaAction,
        gaLabel,
        openInNewTab: twitter.openInNewTab,
        baseSharedUrl: twitter.baseSharedUrl,
        text: twitter.text,
        description: twitter.description,
        account: twitter.account,
      }}
      />
    )}
    {email.showInMenu && (
      <EmailShare {...{
        url,
        utmMedium,
        utmContent,
        utmCampaign,
        gaEvent,
        gaEventCategory,
        gaCategory,
        gaAction,
        gaLabel,
        openInNewTab: email.openInNewTab,
        title: email.title,
        body: email.body,
      }}
      />
    )}
  </nav>
);
