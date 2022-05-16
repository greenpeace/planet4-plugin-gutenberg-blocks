<?php
/**
 * Table displaying patterns usage
 *
 * @package P4BKS\Controllers
 */

namespace P4GBKS\Search\Pattern;

use WP_Block_Parser;

/**
 * Prepare pattern usage, using native WordPress table
 */
class ContentStructure {
	/**
	 * @var WP_Block_Parser
	 */
	private $parser;

	/**
	 * @var array
	 */
	private $tree;

	/**
	 * @var string
	 */
	private $signature;

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->parser = new WP_Block_Parser();
	}

	/**
	 * Parse content as structure.
	 *
	 * @param string $content Post content.
	 */
	public function parse_content( string $content ): void {
		$this->make_content_tree( $content );
		$this->make_structure_signature( $this->tree );
	}

	public function get_content_tree(): array {
		return $this->tree;
	}

	public function get_content_signature(): string {
		return $this->signature;
	}

	/**
	 * Make tree structure from content.
	 *
	 * @param string $content Post content.
	 */
	public function make_content_tree( string $content ): void {
		$parsed = $this->parser->parse( $content );
		$tree   = [];
		while ( ! empty( $parsed ) ) {
			$block  = array_shift( $parsed );
			$tree[] = $this->make_tree( $block );
		}

		$this->tree = array_values( array_filter( $tree ) );
	}

	/**
	 * Make signature from tree structure.
	 *
	 * @param array $tree Tree.
	 */
	public function make_structure_signature( array $tree ): void {
		$this->normalize_tree( $tree );
		$signature = json_encode( $tree );

		$this->signature = trim( $signature, '[]' );
	}

	public function normalize_tree( array &$tree ) {
		foreach ( $tree as $key => &$node ) {
			if ( ! is_array( $node['children'] ) ) {
				continue;
			}

			if ( 'core/columns' === $node['name'] ) {
				$columns_count  = count( $node['children'] );
				$unique_columns = array_unique( $node['children'], \SORT_REGULAR );
				$unique_count   = count( $unique_columns );

				if ( 1 === $unique_count && $columns_count > $unique_count ) {
					$node['children'] = $unique_columns;
				}
			}

			if ( 'core/group' === $node['name'] ) {
				$subgroups_count  = count( $node['children'] );
				$unique_subgroups = array_unique( $node['children'], \SORT_REGULAR );
				$unique_count     = count( $unique_subgroups );

				if ( 1 === $unique_count && $subgroups_count > $unique_count ) {
					$node['children'] = $unique_subgroups;
				}
			}

			if ( ! empty( $node['children'] ) ) {
				$this->normalize_tree( $node['children'] );
			}
		}
	}

	/**
	 * Make blocks tree
	 *
	 * @param array $block Block.
	 *
	 * @return null|array Tree representation of block content.
	 */
	public function make_tree( $block ): ?array {
		if ( empty( $block['blockName'] ) ) {
			return null;
		}

		return [
			'name'     => $block['blockName'],
			'children' => empty( $block['innerBlocks'] )
				? null
				: array_values( array_filter( array_map(
					fn ( $b ) => $this->make_tree( $b ),
					$block['innerBlocks']
				) ) ),
		];
	}
}
