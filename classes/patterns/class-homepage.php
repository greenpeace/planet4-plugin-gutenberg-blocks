<?php
/**
 * HomePage pattern class.
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
class HomePage extends Block_Pattern {

/**
 * @inheritDoc
 */
public static function get_name(): string {
	return 'p4/home-page';
}

/**
 * @inheritDoc
 *
 * @param array $params Optional array of parameters for the config.
 */
public static function get_config( $params = [] ): array {
	return [
		'title'      => __( 'Homepage', 'planet4-blocks-backend' ),
		'blockTypes' => [ 'core/post-content' ],
		'categories' => [ 'pages' ],
		'content'    => '
			<!-- wp:group -->
			<div class="wp-block-group">
				<!-- wp:planet4-blocks/carousel-header /-->
				' . Issues::get_config( )['content'] . '
				<!-- wp:planet4-blocks/articles {
					"article_heading":"' . __( 'Read our Stories', 'planet4-blocks' ) . '"
				} /-->
				' . SideImageWithTextAndCta::get_config( [ ] )['content'] . '
				' . SideImageWithTextAndCta::get_config( [ 'media_position' => 'right' ] )['content'] . '
				<!-- wp:planet4-blocks/covers {
					"cover_type":"take-action",
					"className":"is-style-take-action",
					"title":"' . __( "Join the movement", "planet4-blocks" ) . '"
				} /-->
				<!-- wp:group {"align":"full","backgroundColor":"grey-05"} -->
				<div class="wp-block-group alignfull has-grey-05-background-color has-background">
				<!-- wp:group {"className":"container"} -->
				<div class="wp-block-group container">
					<!-- wp:gravityforms/form {className:"two-columns"} /-->
				</div>
				<!-- /wp:group -->
				</div>
				<!-- /wp:group -->
			</div>
			<!-- /wp:group -->
			',
		];
	}
}

