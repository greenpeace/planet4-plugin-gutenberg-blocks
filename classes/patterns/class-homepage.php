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
		return 'p4/home-page-pattern-layout';
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

				' . Issues::get_config()['content'] . '

				<!-- wp:spacer {"height":"80px"} -->
				<div style="height:80px" aria-hidden="true" class="wp-block-spacer"></div>
				<!-- /wp:spacer -->

				<!-- wp:planet4-blocks/articles {
					"article_heading":"' . __( 'Read our Stories', 'planet4-blocks' ) . '"
				} /-->

				<!-- wp:spacer {"height":"104px"} -->
				<div style="height:104px" aria-hidden="true" class="wp-block-spacer"></div>
				<!-- /wp:spacer -->

				' . SideImageWithTextAndCta::get_config( [] )['content'] . '

				' . SideImageWithTextAndCta::get_config( [ 'media_position' => 'right' ] )['content'] . '

				<!-- wp:spacer {"height":"104px"} -->
				<div style="height:104px" aria-hidden="true" class="wp-block-spacer"></div>
				<!-- /wp:spacer -->

				<!-- wp:planet4-blocks/covers {"cover_type":"take-action","className":"is-style-take-action"} -->
				<div class="wp-block-planet4-blocks-covers is-style-take-action" data-render="planet4-blocks/covers" data-attributes="{&quot;attributes&quot;:{&quot;cover_type&quot;:&quot;take-action&quot;,&quot;initialRowsLimit&quot;:1,&quot;title&quot;:&quot;&quot;,&quot;description&quot;:&quot;&quot;,&quot;tags&quot;:[],&quot;post_types&quot;:[],&quot;posts&quot;:[],&quot;version&quot;:2,&quot;layout&quot;:&quot;grid&quot;,&quot;isExample&quot;:false,&quot;readMoreText&quot;:&quot;Load more&quot;,&quot;className&quot;:&quot;is-style-take-action&quot;},&quot;innerBlocks&quot;:[]}"></div>
				<!-- /wp:planet4-blocks/covers -->

				<!-- wp:spacer {"height":"104px"} -->
				<div style="height:104px" aria-hidden="true" class="wp-block-spacer"></div>
				<!-- /wp:spacer -->

				<!-- wp:group {"align":"full","backgroundColor":"grey-05"} -->
				<div class="wp-block-group alignfull has-grey-05-background-color has-background">
					<!-- wp:spacer {"height":"80px"} -->
					<div style="height:80px" aria-hidden="true" class="wp-block-spacer"></div>
					<!-- /wp:spacer -->

					<!-- wp:group {"className":"container"} -->
					<div class="wp-block-group container">

					<!-- wp:columns -->
					<div class="wp-block-columns">

						<!-- wp:column -->
						<div class="wp-block-column">

							<!-- wp:heading {"level":2,"style":{"typography":{"fontSize":"40px"}},"placeholder":"' . __( 'Enter title', 'planet4-blocks-backend' ) . '"} -->
							<h2 style="font-size:40px;"></h2>
							<!-- /wp:heading -->

							<!-- wp:paragraph {"placeholder":"' . __( 'Enter text', 'planet4-blocks-backend' ) . '"} -->
							<p></p>
							<!-- /wp:paragraph -->

						</div>
						<!-- /wp:column -->

						<!-- wp:column -->
						<div class="wp-block-column">
							<!-- wp:gravityforms/form {"title":false,"description":false} /-->
						</div>
						<!-- /wp:column -->

					</div>
					<!-- /wp:columns -->

					</div>
					<!-- /wp:group -->

					<!-- wp:spacer {"height":"80px"} -->
					<div style="height:80px" aria-hidden="true" class="wp-block-spacer"></div>
					<!-- /wp:spacer -->
				</div>
				<!-- /wp:group -->

			</div>
			<!-- /wp:group -->
			',
		];
	}
}
