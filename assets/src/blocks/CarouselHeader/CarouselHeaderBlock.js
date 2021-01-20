import {CarouselHeaderEditor} from './CarouselHeaderEditor.js';
import {CarouselHeaderStaticContent} from './CarouselHeaderStaticContent.js';
import { carouselHeaderV1 } from './deprecated/carouselHeaderV1.js';

const BLOCK_NAME = 'planet4-blocks/carousel-header';

const attributes = {
  carousel_autoplay: {
    type: 'boolean',
    default: true,
  },
  slides: {
    type: 'array',
    default: [
      {
        image: null,
        focal_points: {},
        header: '',
        header_size: 'h1',
        description: '',
        link_text: '',
        link_url: '',
        link_url_new_tab: false,
      }
    ],
    validation: slides => {
      // const invalidSlides = slides.filter(slide => slide.image === null);

      // const isValid = invalidSlides.length === 0;
      // const messages = invalidSlides.map( invalidSlide => {
      //   return `Carousel Header Block: Slide ${ slides.findIndex( slide => slide === invalidSlide ) + 1 } has no image`
      // });

      // return { isValid, messages };
      return { isValid: true, messages: [] };
    },
  },
};

export const CarouselHeaderBlock = () => {
  const {registerBlockType} = wp.blocks;

  registerBlockType(BLOCK_NAME, {
    title: 'Carousel Header',
    icon: 'welcome-widgets-menus',
    category: 'planet4-blocks',
    supports: {
      multiple: false, // Use the block just once per post.
    },
    attributes: attributes,
    edit: ({ attributes, setAttributes, isSelected, className }) => {
      return <CarouselHeaderEditor
        attributes={attributes}
        setAttributes={setAttributes}
        isSelected={isSelected}
      />
    },
    save: ({attributes}) => {
      return <CarouselHeaderStaticContent
        slides={attributes.slides}
        currentSlide={0}
        goToNextSlide={()=>null}
        goToPrevSlide={()=>null}
        slidesRef={null}
      />
    },
    deprecated: [
      { ...attributes, ...carouselHeaderV1 }
    ]
  });
}
