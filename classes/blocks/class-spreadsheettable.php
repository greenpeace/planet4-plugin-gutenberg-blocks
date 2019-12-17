<?php
/**
 * SpreadsheetTable block class
 *
 * @package P4GBKS
 * @since 0.1
 */
namespace P4GBKS\Blocks;
/**
 * Class SpreadsheetTable_Controller
 *
 * @package P4BKS
 * @since 0.1
 */
class SpreadsheetTable extends Base_Block {
	/**
	 * Block name.
	 *
	 * @const string BLOCK_NAME.
	 */
	public const BLOCK_NAME = 'spreadsheettable';
	/**
	 * SpreadsheetTable constructor.
	 */
	public function __construct() {
		register_block_type(
			'planet4-blocks/spreadsheettable',
			[
				'editor_script'   => 'planet4-blocks',
				'render_callback' => [ $this, 'render' ],
				'attributes'      => [
					'url'                      => [
						'type'    => 'string',
						'default' => '',
					],
				],
			]
		);
	}
	/**
	 * Get all the data that will be needed to render the block correctly.
	 *
	 * @param array $fields This is the array of fields of this block.
	 *
	 * @return array The data to be passed in the View.
	 */
	public function prepare_data( $fields ): array {

		// Enqueue script for table filter
		wp_enqueue_script( 'spreadsheet-table', P4GBKS_PLUGIN_URL . 'public/js/filter_spreadsheet_table.js', [ 'jquery' ], '0.2', true );

		$rows = [];
		// Firstly check if url is correct
		if (filter_var($fields['url'], FILTER_VALIDATE_URL) !== false) {
			if (strpos($fields['url'], 'output=csv') !== false) {
				if (($handle = fopen($fields['url'], "r")) !== false) {
					while (($data = fgetcsv($handle, 1000, ",")) !== false) {
						$rows[] = $data;
					}
					fclose($handle);
				}
			}
		}
		$fields['spreadsheet_data'] = $rows;

		return ['fields' => $fields];
	}
}
