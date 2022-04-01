<?php

namespace P4GBKS\Patterns;

class WholePage extends Block_Pattern {

	/**
	 * @inheritDoc
	 */
	public static function get_name(): string {
		return 'whole-page';
	}

	/**
	 * @inheritDoc
	 */
	public static function get_config(): array {
		return [
			'title'      => __( 'An entire page', 'planet4-blocks-backend' ),
			'categories' => [ 'page-templates' ],
			'content'    => file_get_contents( P4GBKS_PLUGIN_DIR . '/classes/patterns/whole-page.html' ),
		];
	}
}
