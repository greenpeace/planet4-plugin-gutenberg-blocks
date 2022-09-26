import ReactDOMServer from 'react-dom/server';
import { frontendRendered } from '../frontendRendered';
import { GuestBookFrontend } from './GuestBookFrontend';
const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

const BLOCK_NAME = 'planet4-blocks/guestbook';

export const registerGuestBookBlock = () =>
  registerBlockType(BLOCK_NAME, {
    title: '50 Years GuestBook',
    icon: 'admin-site-alt2',
    category: 'planet4-blocks',
    supports: {
      html: false, // Disable "Edit as HTMl" block option.
      multiple: false, // Use the block just once per post.
    },
    edit: () => (
      <p className='EmptyMessage'>
        {__('This block only renders in the frontend', 'planet4-blocks-backend')}
      </p>
    ),
    save: (props) => {
      const attributes = {...props.attributes};
      const markup = ReactDOMServer.renderToString(
        <div
          data-hydrate={BLOCK_NAME}
          data-attributes={JSON.stringify(attributes)}
        >
          <GuestBookFrontend {...props} />
        </div>
      );
      return <wp.element.RawHTML>{ markup }</wp.element.RawHTML>;
    },
    deprecated: [
      {
        save: frontendRendered(BLOCK_NAME),
      }
    ],
  }
);
