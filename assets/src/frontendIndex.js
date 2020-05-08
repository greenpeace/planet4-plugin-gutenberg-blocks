import { SpreadsheetFrontend } from './blocks/Spreadsheet/SpreadsheetFrontend';

document.querySelectorAll('.wp-block-planet4-blocks-spreadsheet').forEach(
	spreadSheetNode => {
		const url = spreadSheetNode.dataset.url;
		wp.element.render(<SpreadsheetFrontend url={ url } />, spreadSheetNode )
	}
);
