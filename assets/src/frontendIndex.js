import { SpreadsheetFrontend } from './blocks/Spreadsheet/SpreadsheetFrontend';

document.querySelectorAll('.wp-block-planet4-blocks-spreadsheet').forEach(
	spreadSheetNode => {
		const attributes = JSON.parse( spreadSheetNode.dataset.attributes );
		wp.element.render(<SpreadsheetFrontend url={ attributes.attributes.url } />, spreadSheetNode )
	}
);
