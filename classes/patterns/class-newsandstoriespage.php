<?php
/**
 * News & Stories pattern class.
 *
 * @package P4GBKS
 * @since 0.1
 */

namespace P4GBKS\Patterns;

/**
 * This class is used for returning a home page template.
 *
 * @package P4GBKS\Patterns
 */
class NewsAndStoriesPage extends Block_Pattern {

	/**
	 * @inheritDoc
	 */
	public static function get_name(): string {
		return 'p4/news-and-stories-page-pattern-layout';
	}

	/**
	 * @inheritDoc
	 *
	 * @param array $params Optional array of parameters for the config.
	 */
	public static function get_config( $params = [] ): array {
		return [
			'title'      => __( 'News & Stories', 'planet4-blocks-backend' ),
			'blockTypes' => [ 'core/post-content' ],
			'categories' => [ 'layouts' ],
			'content'    => '
				<!-- wp:group -->
				<div class="wp-block-group">
					<!-- wp:heading {"level":1,"placeholder":"' . __( 'Enter title', 'planet4-blocks-backend' ) . '","backgroundColor":"white"} -->
					<h1 class="has-white-background-color has-background">' . __( 'News & Stories', 'planet4-blocks-backend' ) . '</h1>
					<!-- /wp:heading -->
				</div>
				<!-- /wp:group -->
			',
		];
	}
}
