<?php
/**
 * Counter block class
 *
 * @package P4GBKS
 * @since 0.1
 */

namespace P4GBKS\Blocks;

/**
 * Class Counter
 *
 * @package P4GBKS\Blocks
 */
class Counter extends Base_Block {

	/**
	 * Block name.
	 *
	 * @const string BLOCK_NAME.
	 */
	const BLOCK_NAME = 'counter';

	/**
	 * Register the block.
	 */
	public static function register(): void {
		register_block_type(
			'planet4-blocks/counter',
			[  // - Register the block for the editor
				'editor_script' => 'planet4-blocks',  // in the PHP side.
				'attributes'    => [
					'title'         => [
						'type'    => 'string',
						'default' => '',
					],
					'description'   => [
						'type'    => 'string',
						'default' => '',
					],
					'completed'     => [
						'type'    => 'integer',
						'default' => '',
					],
					'completed_api' => [
						'type' => 'string',
					],
					'target'        => [
						'type'    => 'integer',
						'default' => '',
					],
					'text'          => [
						'type'    => 'text',
						'default' => '',
					],
					'style'         => [ // Needed to convert existing blocks.
						'type'    => 'string',
						'default' => '',
					],
				],
			]
		);
	}

	/**
	 * Required by the `Base_Block` class.
	 *
	 * @param array $fields Unused, required by the abstract function.
	 */
	public static function prepare_data( $fields ): array {
		return [];
	}
}
