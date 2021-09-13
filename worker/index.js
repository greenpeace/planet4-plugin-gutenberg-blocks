import { CoversFrontend } from '../assets/src/blocks/Covers/CoversFrontend';
import ReactDOMServer from 'react-dom/server';
import React from 'react';

// Usage: node worker/dist/index.js covers [[attributes in JSON]]
// node worker/dist/index.js covers '{"title":"Covers","description":"Example description","tags":[6,19,17],"post_types":[],"posts":[],"version":1,"className":"is-style-content","cover_type":"content","initialRowsLimit":1,"covers":[{"alt_text":"Humpback Whale in Tonga. \u00a9 Paul Hilton \/ Greenpeace","thumbnail":"https:\/\/www.planet4.test\/wp-content\/uploads\/2019\/05\/d130da2a-gp0stsjuv-300x195.jpg","srcset":"https:\/\/www.planet4.test\/wp-content\/uploads\/2019\/05\/d130da2a-gp0stsjuv.jpg 1200w, https:\/\/www.planet4.test\/wp-content\/uploads\/2019\/05\/d130da2a-gp0stsjuv-300x195.jpg 300w, https:\/\/www.planet4.test\/wp-content\/uploads\/2019\/05\/d130da2a-gp0stsjuv-1024x665.jpg 1024w, https:\/\/www.planet4.test\/wp-content\/uploads\/2019\/05\/d130da2a-gp0stsjuv-768x499.jpg 768w, https:\/\/www.planet4.test\/wp-content\/uploads\/2019\/05\/d130da2a-gp0stsjuv-510x331.jpg 510w","post_title":"Test title","post_excerpt":"Test paragraph","link":"https:\/\/www.planet4.test\/uncategorized\/46416\/test-title-2\/","date_formatted":"March 23, 2021"}]}'

const [block, encodedAttributes] = process.argv.slice(2);

const attributes = JSON.parse(encodedAttributes);

const components = {
  covers: CoversFrontend,
};

const Component = components[block];

if (!Component) {
  throw new Error(`No component for ${ block }`);
}

const element = React.createElement(
  'div',
  {
    'data-hydrate': `planet4-blocks/${ block }`,
    'data-attributes': JSON.stringify(attributes),
  },
  React.createElement(Component, attributes),
);
const markup = ReactDOMServer.renderToString(element);

console.log(markup);
