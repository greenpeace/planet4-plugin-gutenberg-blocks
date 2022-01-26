<?php

namespace P4GBKS\Blocks;

use P4\MasterTheme\Context;
use P4\MasterTheme\Post;

/**
 * A block with the base template from master theme, inside which you can put post content.
 */
class Framework extends Base_Block {

	public function __construct() {
		register_block_type( 'planet4-blocks/framework', [
			'editor_script'   => 'planet4-blocks',
			'attributes'      => [],
			'render_callback' => [ $this, 'render_it' ],
		] );
	}

	public function prepare_data( $fields ): array {
		return [];
	}

	public function render_it( $attributes, $content, $block ) {
		$inner_blocks_html = '';
		foreach ( $block->inner_blocks as $inner_block ) {
			$inner_blocks_html .= $inner_block->render();
		}

		\Timber::$locations = P4GBKS_PLUGIN_DIR . '../../themes/planet4-master-theme/templates';

		$post           = new Post(); // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
		$data_layer = $post->get_data_layer();
		$page_meta_data = get_post_meta( $post->ID );

		$context = \Timber::get_context();
		Context::set_header( $context, $page_meta_data, $post->title );
		Context::set_background_image( $context );
		Context::set_og_meta_fields( $context, $post );
		Context::set_campaign_datalayer( $context, $page_meta_data );

		$context['post']                = $post;
		$context['social_accounts']     = $post->get_social_accounts( $context['footer_social_menu'] );
		$context['page_category']       = $data_layer['page_category'] ?? null;
		$context['post_tags']           = implode( ', ', $post->tags() );
		$context['custom_body_classes'] = 'brown-bg ';

		return \Timber::compile(
			'base.twig',
			array_merge( $context, [
				'raw_content'   => $inner_blocks_html,
			] )
		);
	}
}
