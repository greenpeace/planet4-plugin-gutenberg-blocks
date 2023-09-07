<?php
/**
 * Spacer block class
 *
 * @package P4GBKS
 * @since 0.1
 */

namespace P4GBKS\Blocks;

/**
 * Class Spacer
 *
 * @package P4GBKS\Blocks
 */
class Spacer extends Base_Block {

	/**
	 * Block name.
	 *
	 * @const string BLOCK_NAME.
	 */
	const BLOCK_NAME = 'spacer';
	/**
	 * Spacer constructor.
	 */
	public function __construct() {
		add_action( 'init', [ $this, 'register_gallery_block' ] );
	}

	/**
	 * Register Gallery block.
	 */
	public function register_gallery_block() {
		register_block_type(
			self::get_full_block_name(),
			[  // - Register the block for the editor
				'editor_script' => 'planet4-blocks',  // in the PHP side.
				'render_callback' => static function ( $attributes, $content ) {
					return self::hydrate_frontend( $attributes, $content );
				},
				'attributes'    => [
					'small' => [
						'type'    => 'number',
						'default' => 10,
					],
					'medium' => [
						'type'    => 'number',
						'default' => 10,
					],
					'large' => [
						'type'    => 'number',
						'default' => 10,
					],
					'xlarge' => [
						'type'    => 'number',
						'default' => 10,
					],
				],
			]
		);

		add_action( 'enqueue_block_editor_assets', [ self::class, 'enqueue_editor_assets' ] );
		add_action( 'wp_enqueue_scripts', [ self::class, 'enqueue_frontend_assets' ] );
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
