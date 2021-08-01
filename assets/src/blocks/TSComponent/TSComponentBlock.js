import { TSComponentEditor } from './TSComponentEditor';
import { TSComponentFrontend } from './TSComponentFrontend';

const BLOCK_NAME = 'planet4-blocks/ts-component';

export class TSComponentBlock {
  constructor() {
    const { registerBlockType } = wp.blocks;

    registerBlockType(BLOCK_NAME, {
      title: 'Typescript',
      icon: 'dashboard',
      category: 'planet4-blocks',
      supports: {
        html: false,
      },
      attributes: {
        title: {
          type: 'string',
          default: 'Default Title',
        },
        title: {
          type: 'string',
          default: 'Default Subtitle',
        },
        message: {
          type: 'string',
          default: 'Default Message',
        },
      },
      edit: ({ isSelected, attributes }) => <TSComponentEditor {...attributes} isSelected={isSelected} />,
      save: ({ attributes }) => <TSComponentFrontend {...attributes} />,
    });
  }
}
