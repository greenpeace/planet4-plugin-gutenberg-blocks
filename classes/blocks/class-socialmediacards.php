<?php
/**
 * SocialMediaCards block class
 *
 * @package P4GBKS
 * @since 0.1
 */

namespace P4GBKS\Blocks;

/**
 * @since 0.1
 */
class SocialMediaCards extends Base_Block {

	/**
	 * Block name.
	 *
	 * @const string BLOCK_NAME.
	 */
	public const BLOCK_NAME = 'social-media-cards';

	/**
	 * SocialMediaCards constructor.
	 */
	public function __construct() {
		register_block_type(
			self::BLOCK_NAMESPACE_PREFIX . '/' . self::BLOCK_NAME,
			[
				'editor_script'   => 'planet4-blocks',
				'render_callback' => [ $this, 'render' ],
				'attributes'      => [
					'title'       => [
						'type'    => 'string',
						'default' => '',
					],
					'description' => [
						'type'    => 'string',
						'default' => '',
					],
					'cards'       => [
						'type'    => 'array',
						'default' => [],
						'items'   => [
							'type'       => 'object',
							'properties' => [
								'image_id'     => [
									'type' => 'int',
								],
								'message'      => [
									'type' => 'string',
								],
								'social_url'   => [
									'type' => 'string',
								],
								'focal_points' => [
									'type' => 'string',
								],
							],
						],
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
		// Enqueue js for the frontend.
		if ( ! $this->is_rest_request() ) {
			\P4GBKS\Loader::enqueue_local_script( 'social-media-cards', 'public/js/social_media_cards.js' );
		}
		$image_size = 'retina-large';

		$images = [];

		foreach ( $fields['cards'] as $card ) {
			$image_data = [];

			$image_id = $card['image_id'];

			$image_data_array           = wp_get_attachment_image_src( $image_id, $image_size );
			$image_data['image_src']    = $image_data_array ? $image_data_array[0] : '';
			$image_data['image_srcset'] = wp_get_attachment_image_srcset(
				$image_id,
				$image_size,
				wp_get_attachment_metadata( $image_id )
			);
			$image_data['image_sizes']  = wp_calculate_image_sizes( $image_size, null, null, $image_id );
			$image_data['alt_text']     = get_post_meta( $image_id, '_wp_attachment_image_alt', true );
			$image_data['caption']      = wp_get_attachment_caption( $image_id );
			$image_data['focus_image']  = $card['focal_points'] ?? '';
			$image_data['message']      = $card['message'] ?? '';
			$image_data['social_url']   = $card['social_url'] ?? '';
			$attachment_fields          = get_post_custom( $image_id );
			$image_data['credits']      = '';

			if ( isset( $attachment_fields['_credit_text'][0] ) && ! empty( $attachment_fields['_credit_text'][0] ) ) {
				$image_data['credits'] = $attachment_fields['_credit_text'][0];
				if ( ! is_numeric( strpos( $attachment_fields['_credit_text'][0], '©' ) ) ) {
					$image_data['credits'] = '© ' . $image_data['credits'];
				}
			}

			$images[] = $image_data;
		}

		return [
			'post_url' => get_permalink(),
			'fields'   => $fields,
			'cards'    => $images,
		];
	}
}
