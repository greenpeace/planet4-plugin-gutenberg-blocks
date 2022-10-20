import ReactDOMServer from 'react-dom/server';
import { CarouselHeaderFrontend } from '../CarouselHeaderFrontend';

export const carouselHeaderV2 = {
  save: () => ({ attributes }) => {
    const markup = ReactDOMServer.renderToString(<div
      data-hydrate={'planet4-blocks/carousel-header'}
      data-attributes={JSON.stringify(attributes)}
    >
      <CarouselHeaderFrontend { ...attributes } />
    </div>);
    return <wp.element.RawHTML>{ markup }</wp.element.RawHTML>;
  },
}
