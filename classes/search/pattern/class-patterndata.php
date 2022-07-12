<?php
/**
 * Pattern search
 *
 * @package P4BKS\Search
 */

namespace P4GBKS\Search\Pattern;

use P4GBKS\Blocks\BlockList;
use WP_Block_Patterns_Registry;

/**
 * Container class for pattern data
 */
class PatternData {

	// Native properties.
	// Cf. WP_Block_Patterns_Registry::register().

	/**
	 * @var string
	 */
	public $name;

	/**
	 * @var string
	 */
	public $title;

	/**
	 * @var string
	 */
	public $content;

	/**
	 * @var ?string
	 */
	public $description;

	/**
	 * @var ?int
	 */
	public $viewport_width;

	/**
	 * @var ?string[]
	 */
	public $block_types;

	/**
	 * @var ?string[]
	 */
	public $post_types;

	/**
	 * @var string[]
	 */
	public $keywords;

	// Extended properties.

	/**
	 * @var string Specific class name for the pattern
	 */
	public $classname;

	/**
	 * @var array Pattern structure
	 */
	public $structure;

	/**
	 * @var string Pattern signature
	 */
	public $signature;

	/**
	 * @var string[] Unique blocks in pattern
	 */
	public $block_list;

	/**
	 * @param string $name Pattern name.
	 */
	public static function from_name( string $name ): self {
		return self::from_pattern(
			( WP_Block_Patterns_Registry::get_instance() )->get_registered( $name )
		);
	}

	/**
	 * @param array $pattern Pattern data from registry.
	 */
	public static function from_pattern( array $pattern ): self {
		$data = new self();

		$data->name    = $pattern['name'];
		$data->title   = $pattern['title'];
		$data->content = $pattern['content'] ?? '';

		$data->description    = $pattern['description'] ?? null;
		$data->viewport_width = $pattern['viewportWidth'] ?? null;
		$data->block_types    = $pattern['blockTypes'] ?? null;
		$data->post_types     = $pattern['postTypes'] ?? null;
		$data->keywords       = $pattern['keywords'] ?? null;

		$struct = new ContentStructure();
		$struct->parse_content( $data->content );

		$data->structure  = $struct->get_content_tree();
		$data->signature  = $struct->get_content_signature();
		$data->block_list = BlockList::parse_block_list( $data->content );
		$data->classname  = self::make_classname( $data->name );

		return $data;
	}

	/**
	 * @param string $name Pattern name.
	 */
	public static function make_classname( string $name ): string {
		return 'is-pattern-' . preg_replace( '#[^_a-zA-Z0-9-]#', '-', $name );
	}
}
