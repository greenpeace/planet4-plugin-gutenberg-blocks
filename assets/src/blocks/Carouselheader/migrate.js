const React = require('react');
const ReactDOMServer = require('react-dom/server');

const { CarouselHeaderStaticContent } = require('./CarouselHeaderStaticContent');

const slides = [
  {
    image: null,
    focal_points: {},
    header: 'Header 1',
    header_size: 'h1',
    description: 'Description 1',
    link_text: 'CTA 1',
    link_url: '',
    link_url_new_tab: false,
  },
  {
    image: null,
    focal_points: {},
    header: 'Header 2',
    header_size: 'h1',
    description: 'Description 2',
    link_text: 'CTA 2',
    link_url: '',
    link_url_new_tab: false,
  },
];

const renderedCarousel = ReactDOMServer.renderToString(React.createElement(
  CarouselHeaderStaticContent,
  {
    slides: slides
  }
));

console.log(renderedCarousel);
