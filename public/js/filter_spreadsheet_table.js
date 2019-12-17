jQuery(function ($) {
  'use strict';

  	// Filter Spreadsheet table by entered value in search field
	$('.spreadsheet-table-search').change(function() {
		var value = $(this).val().toLowerCase();
		$('.spreadsheet-table .table-row:not(:eq(0))').filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
		});
	});
});
