<?php
/**
 * Homepage pattern layout class.
 *
 * @package P4GBKS
 * @since 0.1
 */

namespace P4GBKS\Patterns;

use P4GBKS\Patterns\Templates\Covers;
use P4GBKS\Patterns\Templates\TwoColumnsGravityForms;

/**
 * This class is used for returning a homepage pattern layout template.
 *
 * @package P4GBKS\Patterns
 */
class Homepage extends Block_Pattern {

	/**
	 * @inheritDoc
	 */
	public static function get_name(): string {
		return 'p4/homepage-pattern-layout';
	}

	/**
	 * @inheritDoc
	 *
	 * @param array $params Optional array of parameters for the config.
	 */
	public static function get_config( $params = [] ): array {
		return [
			'title'      => __( 'Homepage pattern layout', 'planet4-blocks-backend' ),
			'blockTypes' => [ 'core/post-content' ],
			'categories' => [ 'layouts' ],
			'content'    => '
			<!-- wp:group -->
			<div class="wp-block-group">

				<!-- wp:planet4-blocks/carousel-header -->
				<div class="wp-block-planet4-blocks-carousel-header">
					<div data-hydrate="planet4-blocks/carousel-header" data-attributes="{&quot;carousel_autoplay&quot;:false,&quot;slides&quot;:[{&quot;image&quot;:null,&quot;focal_points&quot;:{},&quot;header&quot;:&quot;&quot;,&quot;description&quot;:&quot;&quot;,&quot;link_text&quot;:&quot;&quot;,&quot;link_url&quot;:&quot;&quot;,&quot;link_url_new_tab&quot;:false}]}" data-reactroot="">
						<section class="block block-header alignfull carousel-header ">
							<div class="carousel-wrapper-header">
								<div class="carousel-inner" role="listbox">
									<div class="carousel-item active">
										<div class="carousel-item-mask">
											<div class="background-holder">
												<img style="object-position:NaN% NaN%"/>
											</div>
											<div class="carousel-caption">
												<div class="caption-overlay"></div>
												<div class="container main-header">
													<div class="carousel-captions-wrapper">
														<h2></h2>
														<p></p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
				<!-- /wp:planet4-blocks/carousel-header -->

				' . Issues::get_config( [ 'title_placeholder' => __( 'The issues we work on', 'planet4-blocks-backend' ) ] )['content'] . '

				<!-- wp:spacer {"height":"88px"} -->
				<div style="height:88px" aria-hidden="true" class="wp-block-spacer"></div>
				<!-- /wp:spacer -->

				<!-- wp:planet4-blocks/articles {
					"article_heading":"' . __( 'Read our Stories', 'planet4-blocks' ) . '"
				} /-->

				<!-- wp:spacer {"height":"56px"} -->
				<div style="height:56px" aria-hidden="true" class="wp-block-spacer"></div>
				<!-- /wp:spacer -->

				' . SideImageWithTextAndCta::get_config( [ 'title_placeholder' => __( 'Get to know us', 'planet4-blocks-backend' ) ] )['content'] . '

				<!-- wp:spacer {"height":"30px"} -->
				<div style="height:30px" aria-hidden="true" class="wp-block-spacer"></div>
				<!-- /wp:spacer -->

				' . SideImageWithTextAndCta::get_config(
					[
						'media_position'    => 'right',
						'title_placeholder' => __(
							'We win campaigns',
							'planet4-blocks-backend'
						),
					]
				)['content'] . '

				<!-- wp:spacer {"height":"56px"} -->
				<div style="height:56px" aria-hidden="true" class="wp-block-spacer"></div>
				<!-- /wp:spacer -->

				' . Covers::get_content( [ 'cover_type' => 'take-action' ] ) . '

				<!-- wp:spacer {"height":"72px"} -->
				<div style="height:72px" aria-hidden="true" class="wp-block-spacer"></div>
				<!-- /wp:spacer -->

				' . TwoColumnsGravityForms::get_content() . '

			</div>
			<!-- /wp:group -->
			',
		];
	}
}
