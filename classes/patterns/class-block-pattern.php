<?php
/**
 * Base pattern class.
 *
 * @package P4GBKS
 */

namespace P4GBKS\Patterns;

use P4GBKS\Search\Pattern\PatternData;

/**
 * Class Base_Pattern
 *
 * @package P4GBKS\Patterns
 */
abstract class Block_Pattern {

	/**
	 * Returns the pattern name.
	 */
	abstract public static function get_name(): string;

	/**
	 * Returns the pattern config.
	 *
	 * @param array $params Optional array of parameters for the config.
	 */
	abstract public static function get_config( $params = [] ): array;

	/**
	 * Returns the pattern classname used for tracking patterns.
	 */
	public static function get_classname(): string {
		return PatternData::make_classname( static::get_name() );
	}

	/**
	 * Patterns list.
	 */
	public static function get_list(): array {
		return [
			'deep-dive',
			'highlighted-cta',
			'issues',
			'page-header-img-side/left',
			'page-header-img-side/right',
			'quick-links',
			'reality-check',
			'side-image-with-text-and-cta',
			// Content layout.
			'high-level-topic',
		];
	}

	/**
	 * Pattern constructor.
	 */
	public static function register_all() {
		if ( ! function_exists( 'register_block_pattern' ) ) {
			return;
		}

		$tpl_list = self::get_list();

		foreach ( $tpl_list as $tpl_dir ) {
			$metadata_file = sprintf(
				'%s/assets/src/block-templates/%s/block.json',
				P4GBKS_PLUGIN_DIR,
				$tpl_dir
			);

			if ( ! file_exists( $metadata_file ) ) {
				continue;
			}

			$metadata = wp_json_file_decode(
				$metadata_file,
				[ 'associative' => true ]
			);

			if ( ! isset( $metadata['pattern'] )
				|| ( $metadata['pattern']['contentOnly'] ?? false )
			) {
				continue;
			}

			register_block_pattern(
				$metadata['name'],
				[
					'title'      => $metadata['title'],
					'categories' => $metadata['pattern']['categories'] ?? [],
					'content'    => sprintf(
						'<!-- wp:%s /-->',
						$metadata['name']
					),
				]
			);
		}
	}
}
