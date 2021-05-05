import { Fragment, useEffect } from '@wordpress/element';
import { SpreadsheetFrontend } from './blocks/Spreadsheet/SpreadsheetFrontend';
import { CounterFrontend } from './blocks/Counter/CounterFrontend';
import { ArticlesFrontend } from './blocks/Articles/ArticlesFrontend';
import { CookiesFrontend } from './blocks/Cookies/CookiesFrontend';
import { SplittwocolumnsFrontend } from './blocks/Splittwocolumns/SplittwocolumnsFrontend';
import { HappypointFrontend } from './blocks/Happypoint/HappypointFrontend';
import { GalleryFrontend } from './blocks/Gallery/GalleryFrontend';
import { TimelineFrontend } from './blocks/Timeline/TimelineFrontend';
import { SubmenuFrontend } from './blocks/Submenu/SubmenuFrontend';
import { MediaFrontend } from './blocks/Media/MediaFrontend';
import { ColumnsFrontend } from './blocks/Columns/ColumnsFrontend';

// Render React components
const COMPONENTS = {
  'planet4-blocks/spreadsheet': SpreadsheetFrontend,
  'planet4-blocks/counter': CounterFrontend,
  'planet4-blocks/articles': ArticlesFrontend,
  'planet4-blocks/cookies': CookiesFrontend,
  'planet4-blocks/split-two-columns': SplittwocolumnsFrontend,
  'planet4-blocks/happypoint': HappypointFrontend,
  'planet4-blocks/gallery': GalleryFrontend,
  'planet4-blocks/timeline': TimelineFrontend,
  'planet4-blocks/submenu': SubmenuFrontend,
  'planet4-blocks/media-video': MediaFrontend,
  'planet4-blocks/columns': ColumnsFrontend,
};

export const PortalHost = ({blocks}) => {
  useEffect(() => {
    const time = performance.now();
    const event = {event: 'blocksRendered', time };
    dataLayer in window && dataLayer.push(event)
    console.log(event);
  }, []);

  return <Fragment>
    {blocks.map(block=> {
      const blockName = block.dataset.render;
      const BlockFrontend = COMPONENTS[ blockName ];
      if (!BlockFrontend) {
        return null;
      }
      const attributes = JSON.parse( block.dataset.attributes );

      return wp.element.createPortal(<BlockFrontend {...attributes.attributes } />, block);
    })}
  </Fragment>
}
