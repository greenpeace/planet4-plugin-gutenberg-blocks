import { InspectorControls } from '@wordpress/block-editor';

import { ControlShiftSelector } from './ControlShiftSelector';

const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

const BLOCK_NAME = "planet4-blocks/control-shift-demo";

export const ControlShiftBlock = () => {
  return (
    <ControlShiftSelector />
  )
}

registerBlockType( BLOCK_NAME, {
  title: __('ControlShift demo', 'planet4-blocks-backend'),
  icon: 'editor-table',
  category: 'planet4-blocks',
  attributes: {},
  edit: ControlShiftBlock,
  save: () => null
});