<?php
/**
 * Deep Dive Topic pattern class.
 *
 * @package P4GBKS
 */

namespace P4GBKS\Patterns;

use P4GBKS\Patterns\Templates\Covers;

/**
 * Class Deep Dive.
 *
 * @package P4GBKS\Patterns
 */
class DeepDiveTopic extends Block_Pattern {

	/**
	 * Returns the pattern name.
	 */
	public static function get_name(): string {
		return 'p4/deep-dive-topic';
	}

	/**
	 * Returns the pattern config.
	 * We start with 4 columns, but editors can easily remove and/or duplicate them.
	 * This pattern should have grey 5% background by default.
	 *
	 * @param array $params Optional array of parameters for the config.
	 */
	public static function get_config( $params = [] ): array {
		$classname = self::get_classname();

		return [
			'title'      => __( 'Deep Dive Topic', 'planet4-blocks-backend' ),
			'categories' => [ 'layouts' ],
			'blockTypes' => [ 'core/post-content' ],
			'content'    => '
				<!-- wp:group {"className":"block ' . $classname . '"} -->
					<div class="wp-block-group ' . $classname . '">
					' . PageHeader::get_config(
						[ 'title_placeholder' => __( 'Page header title', 'planet4-blocks' ) ]
					)['content'] . '
					<!-- wp:spacer {"height":"64px"} -->
						<div style="height:64px" aria-hidden="true" class="wp-block-spacer"></div>
					<!-- /wp:spacer -->
					' . SideImageWithTextAndCta::get_config(
						[
							'title_placeholder' => __( 'The problem', 'planet4-blocks' ),
							'media_position'    => 'left',
						]
					)['content'] . '
					' . SideImageWithTextAndCta::get_config(
						[
							'title_placeholder' => __( 'What can be done', 'planet4-blocks' ),
							'media_position'    => 'right',
						]
					)['content'] . '
					' . Covers::get_content(
						[
							'title_placeholder' => __( 'How you can help', 'planet4-blocks' ),
							'cover_type'        => 'take-action',
						]
					) . '
					<!-- wp:planet4-blocks/articles {"article_heading":"' . __( 'Latest news & stories', 'planet4-blocks' ) . '"} /-->
					' . DeepDive::get_config(
						[ 'title_placeholder' => __( 'Keep learning about', 'planet4-blocks' ) ]
					)['content'] . '
					' . QuickLinks::get_config(
						[
							'title_placeholder' => __( 'Explore other topics', 'planet4-blocks' ),
							'background_color'  => 'white',
						]
					)['content'] . '
					</div>
				<!-- /wp:group -->
			',
		];
	}
}
