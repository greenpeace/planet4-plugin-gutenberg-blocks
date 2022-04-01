<?php

namespace P4GBKS\Patterns;

class WholePageLarge extends Block_Pattern {

	/**
	 * @inheritDoc
	 */
	public static function get_name(): string {
		return 'whole-page-large';
	}

	/**
	 * @inheritDoc
	 */
	public static function get_config(): array {
		return [
			'title'      => __( 'An entire page, large (3x)', 'planet4-blocks-backend' ),
			'categories' => [ 'page-templates' ],
			'content'    => file_get_contents( P4GBKS_PLUGIN_DIR . '/classes/patterns/whole-page-large.html' ),
		];
	}
}
