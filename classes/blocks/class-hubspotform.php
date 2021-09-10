<?php
/**
 * Hubspot Forms block class
 *
 * @package P4GBKS
 * @since 0.1
 */

namespace P4GBKS\Blocks;

/**
 * Class HubspotForm
 * Registers the HubspotForm block.
 *
 * @package P4BKS
 * @since 0.1
 */
class HubspotForm extends Base_Block {

	/**
	 * Block name.
	 *
	 * @const string BLOCK_NAME.
	 */
	const BLOCK_NAME = 'hubspot-form';

	/**
	 * HubspotForm constructor.
	 */
	public function __construct() {
		add_action( 'init', [ $this, 'register_hubspotform_block' ] );
	}

	/**
	 * Register HubspotForm block.
	 */
	public function register_hubspotform_block() {
		register_block_type(
			self::get_full_block_name(),
			[
				'render_callback' => [ $this, 'front_end_rendered_fallback' ],
				'attributes' => [
					'block_title'	=> [
						'type' => 'string',
					],
					'block_text'	=> [
						'type' => 'string',
					],
					'block_background_image_id'	=> [
						'type' => 'string',
					],
					'block_background_image_url' => [
						'type' => 'string',
					],
					'cta_text' => [
						'type' => 'string',
					],
					'cta_link' => [
						'type' => 'string',
					],
					'cta_new_tab' => [
						'type' => 'boolean',
						'default' => false,
					],
					'form_title' => [
						'type' => 'string',
					],
					'form_description' => [
						'type' => 'string',
					],
					'hubspot_shortcode' => [
						'type' => 'string',
					],
					'hubspot_thankyou_message' => [
						'type' => 'string',
					],
					'enable_custom_hubspot_thankyou_message' => [
						'type' => 'boolean',
						'default' => true,
					],
					'use_custom_styles' => [
						'type' => 'boolean',
						'default' => false,
					],
				],
			]
		);

		add_action( 'enqueue_block_editor_assets', [ self::class, 'enqueue_editor_assets' ] );
		add_action(
			'wp_enqueue_scripts',
			static function () {
				if ( has_block( self::get_full_block_name() ) ) {
					wp_enqueue_script(
						'hammer',
						'https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js',
						[],
						'2.0.8',
						true
					);
				}
			}
		);
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

	/**
	 * If the content is not empty, it's the new version and doesn't need any back end rendering.
	 * Otherwise, it means the block was not migrated in the editor yet. Fall back to front end rendering from scratch.
	 *
	 * @param array  $attributes Attributes of the block.
	 * @param string $content Content of the block.
	 *
	 * @return string The block's content string.
	 */
	public function front_end_rendered_fallback( $attributes, $content ) {
		if ( ! empty( $content ) ) {
			return $content;
		}

		$json = wp_json_encode( [ 'attributes' => $attributes ] );

		// Render the block using a regular front end rendered, until the block data was migrated in the editor. For
		// production sites we will do this for all occurrences of the block, right after deploy.
		return '<div data-render="' . self::get_full_block_name() . '" data-attributes="' . htmlspecialchars( $json ) . '">'
		. '</div>';
	}
}
