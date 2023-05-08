<?php
/**
 * @package P4GBKS
 * @since 0.1
 */

namespace P4GBKS\Blocks;

/**
 * @package P4GBKS\Blocks
 * @since 0.1
 */
class TableOfContents extends Base_Block {

	/** @const string BLOCK_NAME */
	const BLOCK_NAME = 'table-of-contents';

	/**
	 * TableOfContents constructor.
	 */
	public function __construct() {
		register_block_type(
			self::get_full_block_name(),
			[
				'editor_script'   => 'planet4-blocks',
				'render_callback' => [ $this, 'render' ],
				'attributes'      => [
					'headings' => [
						'type' => 'array',
						'default' => [],
						'items' => [
								'type' => 'object'
							]
						],
						'onlyIncludeCurrentPage' => [
							'type' => 'boolean',
							'default' => false,
						]
				],
			]
		);
	}

	/**
	 * Required by the `Base_Block` class.
	 *
	 * @param array $fields Unused, required by the abstract function.
	 */
	public function prepare_data( $fields ): array {
		return [];
	}
}

