import { SpreadsheetFrontend } from './blocks/Spreadsheet/SpreadsheetFrontend';

const PLANET4_BLOCK_PREFIX = 'wp-block-planet4-blocks-';
const COMPONENTS = {
	spreadsheet: SpreadsheetFrontend
};

const getFrontendBlockComponent = blockNode => COMPONENTS[
	Array.from(blockNode.classList)
		.find( className => className.includes( PLANET4_BLOCK_PREFIX ))
		.replace( PLANET4_BLOCK_PREFIX, '' )
];

document.querySelectorAll(`[class*=${PLANET4_BLOCK_PREFIX}]`).forEach(
	blockNode => {
		const BlockFrontend = getFrontendBlockComponent( blockNode );
		const attributes = JSON.parse( blockNode.dataset.attributes );
		wp.element.render( <BlockFrontend { ...attributes.attributes } />, blockNode )
	}
);
