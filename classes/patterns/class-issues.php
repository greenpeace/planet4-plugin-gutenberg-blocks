<?php
/**
 * Issues class.
 *
 * @package P4GBKS
 * @since 0.1
 */

namespace P4GBKS\Patterns;

/**
 * Issues pattern includes:
 * Column, Image, Heading, Paragraph, Media & Text.
 *
 * @package P4GBKS\Patterns
 */
class Issues extends Block_Pattern {

	/**
	 * Returns the pattern name.
	 */
	public static function get_name(): string {
		return 'p4/issues';
	}

	/**
	 * Returns the template for one media-text.
	 */
	public static function get_media_text_template(): string {
		$media_link = esc_url( get_template_directory_uri() ) . '/images/placeholders/placeholder-40x40.jpg';

		return '<!-- wp:group {"style":{"border":{"radius":"4px"},"spacing":{"padding":{"top":"32px","right":"16px","bottom":"32px","left":"16px"}}},"backgroundColor":"white","layout":{"type":"flex","flexWrap":"nowrap"}} -->
		<div class="wp-block-group has-white-background-color has-background" style="border-radius:4px;padding-top:32px;padding-right:16px;padding-bottom:32px;padding-left:16px">
		<!-- wp:image {"width":40,"height":40,"sizeSlug":"thumbnail","linkDestination":"none","className":"caption-alignment-center is-style-default"} -->
		<figure class="wp-block-image size-thumbnail is-resized caption-alignment-center is-style-default">
			<img src="' . $media_link . '" alt="' . __( 'Default image', 'planet4-blocks-backend' ) . '" width="40" height="40"/>
		</figure>
		<!-- /wp:image -->
		<!-- wp:heading {"level":4,"placeholder":"' . __( 'Enter text', 'planet4-blocks-backend' ) . '","style":{"typography":{"fontSize":"1rem","fontStyle":"normal","fontWeight":"700"},"spacing":{"margin":{"left":"12px"}}},"className":"is-style-roboto-font-family is-style-default"} -->
		<h4 class="is-style-roboto-font-family is-style-default" style="font-size:1rem;font-style:normal;font-weight:700;margin-left:12px"></h4>
		<!-- /wp:heading --></div>
		<!-- /wp:group -->';
	}

	/**
	 * Returns the pattern config.
	 *
	 * @param array $params Optional array of parameters for the config.
	 */
	public static function get_config( $params = [] ): array {
		$classname         = self::get_classname();
		$title_placeholder = $params['title_placeholder'] ?? '';

		return [
			'title'      => 'Issues',
			'categories' => [ 'planet4' ],
			'content'    => '
				<!-- wp:group {"className":"' . $classname . '","align":"full","backgroundColor":"grey-05","style":{"spacing":{"padding":{"top":"80px","bottom":"80px"}}}} -->
				<div class="wp-block-group ' . $classname . ' alignfull has-grey-05-background-color has-background" style="padding-top:80px;padding-bottom:80px;">

					<!-- wp:group {"className":"container"} -->
					<div class="wp-block-group container">

						<!-- wp:heading {"textAlign":"center","level":2, "placeholder":"' . __( 'Enter title', 'planet4-blocks-backend' ) . '","style":{"spacing":{"margin":{"bottom":"24px"}}}} -->
						<h2 class="has-text-align-center" style="margin-bottom:24px">' . $title_placeholder . '</h2>
						<!-- /wp:heading -->

						<!-- wp:paragraph {"className":"mb-0","align":"center", "placeholder":"' . __( 'Enter description', 'planet4-blocks-backend' ) . '"} -->
						<p class="mb-0 has-text-align-center"></p>
						<!-- /wp:paragraph -->

						<!-- wp:group {"style":{"spacing":{"padding":{"top":"40px","bottom":"56px"}}},"className":"is-style-space-evenly","layout":{"type":"flex","allowOrientation":false}} -->
						<div class="wp-block-group is-style-space-evenly" style="padding-top:40px;padding-bottom:56px;">
						' . self::get_media_text_template() . '
						' . self::get_media_text_template() . '
						' . self::get_media_text_template() . '
						' . self::get_media_text_template() . '
						</div>
						<!-- /wp:group -->

						<!-- wp:buttons {"placeholder":"' . __( 'Enter text', 'planet4-blocks-backend' ) . '","layout":{"type":"flex","justifyContent":"center"}} -->
						<div class="wp-block-buttons">
						<!-- wp:button -->
						<div class="wp-block-button is-style-secondary"><a class="wp-block-button__link"></a></div>
						<!-- /wp:button --></div>
						<!-- /wp:buttons -->

					</div><!-- /wp:group -->
				</div><!-- /wp:group -->
			',
		];
	}
}
