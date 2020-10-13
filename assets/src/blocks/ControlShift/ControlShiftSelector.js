import { InspectorControls } from '@wordpress/block-editor';
import { SelectControl, PanelBody } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { ControlShiftEvents } from './ControlShiftEvents';
import { ControlShiftPetition } from './ControlShiftPetition';

const blockTypes = [
  {label: "Events", value: "events"},
  {label: "Petition", value: "petition"}
];

export const ControlShiftSelector = () => {
  const [blockType, setBlockType] = useState('events');
  
  return (
    <>
      <InspectorControls>
        <PanelBody title="Block type">
          <SelectControl
          value={blockType}
          onChange={(type) => {setBlockType(type)}}
          options={blockTypes}
          />
        </PanelBody>
      </InspectorControls>
      {blockType === 'events' &&
        <ControlShiftEvents />
      }
      {blockType === 'petition' &&
        <ControlShiftPetition />
      }
    </>
  )
}