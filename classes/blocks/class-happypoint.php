<?php
/**
 * Happypoint block class
 *
 * @package P4GBKS
 * @since 0.1
 */

namespace P4GBKS\Blocks;

use WP_Block_Type_Registry;

/**
 * Class Happypoint_Controller
 *
 * @package P4BKS
 * @since 0.1
 */
class Happypoint extends Base_Block {

	/**
	 * Block name.
	 *
	 * @const string BLOCK_NAME.
	 */
	const BLOCK_NAME = 'happypoint';

	/**
	 * Happypoint constructor.
	 */
	public function __construct() {
		if ( WP_Block_Type_Registry::get_instance()->is_registered( self::get_full_block_name() ) ) {
			return;
		}

		register_block_type(
			self::get_full_block_name(),
			[
				'editor_script'   => 'planet4-blocks',
				// todo: Remove when all content is migrated.
				'render_callback' => [ self::class, 'render_frontend' ],
				'attributes'      => [
					'id'                       => [
						'type' => 'integer',
					],
					'focus_image'              => [
						'type' => 'string',
					],
					'opacity'                  => [
						'type'    => 'integer',
						'default' => 30,
					],
					'iframe_url'               => [
						'type'    => 'string',
						'default' => '',
					],
					'use_embed_code'           => [
						'type' => 'boolean',
					],
					'embed_code'               => [
						'type'    => 'string',
						'default' => '',
					],
					'override_default_content' => [
						'type'    => 'boolean',
						'default' => 'false',
					],
					'local_content_provider'   => [
						'type'    => 'string',
						'default' => 'none',
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
	public function prepare_data( $fields ): array {
		return [];
	}

	/**
	 * Get the required data for the frontend.
	 *
	 * @param integer $id Image id.
	 */
	public static function get_data( $id ) {
		$data                    = [];
		$options                 = get_option( 'planet4_options' );
		$p4_happy_point_bg_image = $options['happy_point_bg_image_id'] ?? '';
		$image_id                = $id ? $id : $p4_happy_point_bg_image;
		$img_meta                = wp_get_attachment_metadata( $image_id );
		$image_alt               = get_post_meta( $image_id, '_wp_attachment_image_alt', true );

		$data['background_src']           = wp_get_attachment_image_src( $image_id, 'retina-large' )[0] ?? false;
		$data['background_srcset']        = wp_get_attachment_image_srcset( $image_id, 'retina-large', $img_meta );
		$data['background_sizes']         = wp_calculate_image_sizes( 'retina-large', null, null, $image_id );
		$data['default_content_provider'] = $options['happy_point_content_provider'] ?? 'iframe_url';
		$data['engaging_network_id']      = $options['engaging_network_form_id'] ?? '';
		$data['default_image']            = get_bloginfo( 'template_directory' ) . '/images/happy-point-block-bg.jpg';
		$data['background_alt']           = empty( $image_alt ) ? __( 'Background image', 'planet4-blocks' ) : $image_alt;
		$data['default_embed_code']       = $options['happy_point_embed_code'] ?? '';

		return $data;
	}
}
