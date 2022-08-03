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

		return '<!-- wp:group {"style":{"spacing":{"padding":{"top":"32px","right":"16px","bottom":"32px","left":"16px"}}},"backgroundColor":"white"} -->
			<div class="wp-block-group d-flex jujstify-content-center has-white-background-color has-background" style="padding-top:32px;padding-right:16px;padding-bottom:32px;padding-left:16px">
			<!-- wp:media-text {"mediaLink":"' . $media_link . '","mediaType":"image","mediaWidth":15,"mediaSizeSlug":"thumbnail","isStackedOnMobile":false,"verticalAlignment":"center","imageFill":false,"className":"force-no-lightbox"} -->
			<div class="wp-block-media-text alignwide is-vertically-aligned-center force-no-lightbox" style="grid-template-columns:15% auto">
			<figure class="wp-block-media-text__media"><img src="' . $media_link . '" alt="' . __( 'Default image', 'planet4-blocks-backend' ) . '"/></figure>
			<div class="wp-block-media-text__content">
			<!-- wp:paragraph {"align":"left","placeholder":"' . __( 'Enter text', 'planet4-blocks-backend' ) . '","style":{"typography":{"fontSize":"1rem","fontStyle":"normal","fontWeight":"700"}},"className":"is-style-roboto-font-family"} -->
			<p class="mb-0 has-text-align-left is-style-roboto-font-family" style="font-size:1rem;font-style:normal;font-weight:700"></p>
			<!-- /wp:paragraph --></div></div>
			<!-- /wp:media-text --></div>
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
			'title'      => __( 'Issues', 'planet4-blocks-backend' ),
			'categories' => [ 'planet4' ],
			'content'    => '
				<!-- wp:group {"className":"' . $classname . '","align":"full","backgroundColor":"grey-05","style":{"spacing":{"padding":{"top":"80px","right":"0px","bottom":"80px","left":"0px"}}}} -->
				<div class="wp-block-group ' . $classname . ' alignfull has-grey-05-background-color has-background" style="padding-top:80px;padding-right:0px;padding-bottom:80px;padding-left:0px">

					<!-- wp:group {"className":"container"} -->
					<div class="wp-block-group container">

						<!-- wp:heading {"textAlign":"center","level":1, "placeholder":"' . __( 'Enter title', 'planet4-blocks-backend' ) . '"} -->
						<h1 class="has-text-align-center">' . $title_placeholder . '</h1>
						<!-- /wp:heading -->

						<!-- wp:paragraph {"align":"center", "placeholder":"' . __( 'Enter description', 'planet4-blocks-backend' ) . '"} -->
						<p class="mb-0 has-text-align-center"></p>
						<!-- /wp:paragraph -->

						<!-- wp:group {"style":{"spacing":{"padding":{"top":"37px","right":"0px","bottom":"56px","left":"0px"}}},"className":"is-style-space-evenly","layout":{"type":"flex","allowOrientation":false}} -->
						<div class="wp-block-group is-style-space-evenly" style="padding-top:37px;padding-right:0px;padding-bottom:56px;padding-left:0px">
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
