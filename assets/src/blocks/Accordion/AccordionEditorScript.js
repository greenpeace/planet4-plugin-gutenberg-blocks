import {AccordionEditor} from './AccordionEditor';
import {AccordionFrontend} from './AccordionFrontend';
const {registerBlockType, registerBlockStyle} = wp.blocks;

const BLOCK_NAME = 'planet4-blocks/accordion';

const attributes = {
  title: {
    type: 'string',
    default: '',
  },
  description: {
    type: 'string',
    default: '',
  },
  tabs: {
    type: 'array',
    default: [],
  },
};

const styles = [
  {
    name: 'dark',
    label: 'Dark',
    isDefault: true,
  },
  {
    name: 'light',
    label: 'Light',
  },
  {
    name: 'outline',
    label: 'Outline',
  },
];

registerBlockType(BLOCK_NAME, {
  title: 'Accordion',
  icon: 'menu',
  category: 'planet4-blocks',
  keywords: [
    'accordion',
    'faq',
    'collapsible',
  ],
  supports: {
    html: false, // Disable "Edit as HTMl" block option.
  },
  attributes,
  edit: AccordionEditor,
  save: ({attributes: saveAttributes}) => {
    if (!saveAttributes) {
      return null;
    }

    return <AccordionFrontend {...saveAttributes} />;
  },
});

// Add our custom styles
registerBlockStyle(BLOCK_NAME, styles);
