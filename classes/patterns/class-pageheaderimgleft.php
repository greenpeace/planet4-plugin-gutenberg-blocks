<?php
/**
 * Page Header pattern class.
 *
 * @package P4GBKS
 * @since 0.1
 */

namespace P4GBKS\Patterns;

/**
 * Class Page Header.
 *
 * @package P4GBKS\Patterns
 */
class PageHeaderImgLeft extends Block_Pattern {

	/**
	 * Returns the pattern name.
	 */
	public static function get_name(): string {
		return 'p4/page-header-img-left';
	}

	/**
	 * Returns the pattern config.
	 *
	 * @param array $params Optional array of parameters for the config.
	 */
	public static function get_config( $params = [] ): array {
		$params['media_position'] = 'left';

		$config          = PageHeader::get_config( $params );
		$config['title'] = __(
			'Page Header with image on the left',
			'planet4-blocks-backend'
		);

		return $config;
	}
}
