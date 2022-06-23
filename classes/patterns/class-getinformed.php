<?php
/**
 * Get Informed pattern class.
 *
 * @package P4GBKS
 * @since 0.1
 */

namespace P4GBKS\Patterns;

/**
 * Class Get Informed.
 *
 * @package P4GBKS\Patterns
 */
class GetInformed extends Block_Pattern {

	/**
	 * Returns the pattern name.
	 */
	public static function get_name(): string {
		return 'p4/get-informed';
	}

	/**
	 * Returns the pattern config.
	 *
	 * @param array $params Optional array of parameters for the config.
	 */
	public static function get_config( $params = [] ): array {
		return [
			'title'      => __( 'Get Informed', 'planet4-blocks-backend' ),
			'categories' => [ 'pages' ],
			'content'    => '
				<!-- wp:group {"className":"block"} -->
					<div class="wp-block-group">
						' . QuickLinks::get_config()['content'] . '
						' . SideImageWithTextAndCta::get_config()['content'] . '
						' . SideImageWithTextAndCta::get_config( [ 'media_position' => 'right' ] )['content'] . '
						' . SideImageWithTextAndCta::get_config()['content'] . '
						' . Issues::get_config()['content'] . '
						<!-- wp:planet4-blocks/articles --><!-- /wp:planet4-blocks/articles -->
						<!-- wp:planet4-blocks/gallery {"className":"is-style-grid"} --><!-- /wp:planet4-blocks/gallery -->
						<!-- wp:planet4-blocks/articles --><!-- /wp:planet4-blocks/articles -->
						<!-- wp:gravityforms/form /-->
					</div>
				<!-- /wp:group -->
			',
		];
	}
}
