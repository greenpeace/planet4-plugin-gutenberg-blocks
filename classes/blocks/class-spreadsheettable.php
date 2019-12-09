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
	const BLOCK_NAME = 'spreadsheettable';
	/**
	 * Register shortcake shortcode.
	 *
	 * @param array  $attributes Shortcode attributes.
	 * @param string $content   Content.
	 *
	 * @return mixed
	 */
	public function add_block_shortcode( $attributes, $content ) {
		$attributes['id'] = $attributes['background'];
		$attributes = shortcode_atts(
			[
				'url'                      => '',
			],
			$attributes,
			'shortcake_spreadsheet_table'
		);
		return $this->render( $attributes );
	}
	/**
	 * SpreadsheetTable constructor.
	 */
	public function __construct() {
		add_shortcode( 'shortcake_spreadsheet_table', [ $this, 'add_block_shortcode' ] );
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
		$fields['url']       = '' !== $fields['url'] ? $fields['url'] : '';

		// Enqueue script for table filter
		wp_enqueue_script( 'spreadsheet-table', P4GBKS_PLUGIN_URL . 'public/js/filter_spreadsheet_table.js', [ 'jquery' ], '0.2', true );

		$spreadsheet_data = [];
		// Firstly check if url is correct
		if (strpos($fields['url'], 'output=csv') !== false) {
			if (($handle = fopen($fields['url'], "r")) !== FALSE) {
				while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
					$spreadsheet_data[] = $data;
				}
				fclose($handle);
			}
		}
		$fields['spreadsheet_data'] = $spreadsheet_data;

		$data = [
			'fields' => $fields,
		];

		return $data;
	}
}
