<?php
/**
 * Table displaying blocks usage
 *
 * @package P4BKS\Controllers
 */

namespace P4GBKS\Search\Block;

use WP_Block_Parser;
use P4GBKS\Search\BlockSearch;

/**
 * Present block usage, using native WordPress table
 */
class BlockUsage {
	/**
	 * @var BlockSearch
	 */
	private $search;

	/**
	 * @var WP_Block_Parser
	 */
	private $parser;

	/**
	 * @var int[]
	 */
	private $posts_ids;

	/**
	 * @var WP_Post[]
	 */
	private $posts;

	/**
	 * @var array
	 */
	private $blocks;

	/**
	 * @param BlockSearch     $search Search class.
	 * @param WP_Block_Parser $parser Block parser.
	 */
	public function __construct(
		BlockSearch $search,
		WP_Block_Parser $parser
	) {
		$this->search = $search;
		$this->parser = $parser;
	}

	/**
	 * @param QueryParameters $params Query parameters.
	 * @return array
	 */
	public function get_blocks_usage( QueryParameters $params ): array {
		$this->posts_ids = $this->search->get_posts( $params );

		return $this->get_blocks( $this->posts_ids, $params );
	}

	/**
	 * @param int[]           $posts_ids Posts IDs.
	 * @param QueryParameters $params Query parameters.
	 * @return array
	 */
	private function get_blocks( $posts_ids, QueryParameters $params ) {
		$this->fetch_blocks( $posts_ids, $params );
		$this->filter_blocks( $params );
		$this->sort_blocks( $params->order() );

		return $this->blocks;
	}

	/**
	 * @param int[]           $posts_ids Posts IDs.
	 * @param QueryParameters $params Query parameters.
	 */
	private function fetch_blocks( array $posts_ids, QueryParameters $params ): void {
		$posts_args = [
			'include'     => $posts_ids,
			'orderby'     => array_fill_keys( $params->order(), 'ASC' ),
			'post_status' => $params->post_status(),
			'post_type'   => [ 'post', 'page', 'campaign' ],
		];

		$this->posts = get_posts( $posts_args ) ?? [];

		$blocks = [];
		foreach ( $this->posts as $post ) {
			$blocks = array_merge( $blocks, $this->parse_post( $post ) );
		}
		$this->blocks = $blocks;
	}

	/**
	 * Filter parsed search items
	 *
	 * @param QueryParameters $params Query parameters.
	 * @return array
	 */
	private function filter_blocks( QueryParameters $params ): void {
		if (
			empty( $params->namespace() )
			&& empty( $params->name() )
			&& empty( $params->content() )
		) {
			return;
		}

		$filtered = $this->blocks;

		$text    = $params->content();
		$filters = [
			'block_ns'   => $params->namespace(),
			'block_type' => $params->name(),
			'local_name' => false !== strpos( $params->name(), '/' )
				? explode( '/', $params->name() )[1]
				: $params->name(),
		];

		if ( ! empty( $filters['block_type'] ) ) {
			$filtered = array_filter(
				$filtered,
				function ( $i ) use ( $filters ) {
					return $i['block_type'] === $filters['block_type']
						|| $i['local_name'] === $filters['local_name'];
				}
			);
		} elseif ( ! empty( $filters['block_ns'] ) ) {
			$filtered = array_filter(
				$filtered,
				function ( $i ) use ( $filters ) {
					return $i['block_ns'] === $filters['block_ns'];
				}
			);
		}

		if ( ! empty( $text ) ) {
			$filtered = array_filter(
				$filtered,
				function ( $i ) use ( $text ) {
					return strpos( $i['block_type'], $text ) !== false
						|| strpos( serialize( $i['block_attrs'] ), $text ) !== false;
				}
			);
		}

		$this->blocks = $filtered;
	}

	/**
	 * Sort parsed blocks
	 *
	 * @param null|array $sort  Sort dimensions.
	 * @return array
	 */
	private function sort_blocks( ?array $sort = [] ): void {
		if ( empty( $sort ) ) {
			return;
		}

		$args   = [];
		$blocks = $this->blocks;
		foreach ( $sort as $name ) {
			$args[] = array_column( $blocks, $name );
			$args[] = SORT_NATURAL;
		}
		$args[] = &$blocks;

		array_multisort( ...$args );

		$this->blocks = $blocks;
	}

	/**
	 * Parse posts content to blocks.
	 *
	 * @param object $post WP_Post.
	 * @return array[]
	 */
	private function parse_post( $post ): array {
		$output = $this->parser->parse( $post->post_content );

		$blocks = array_filter(
			$output,
			function ( $block ) {
				return ! empty( $block['blockName'] );
			}
		);

		$items = [];
		foreach ( $blocks as $k => $block ) {
			$type  = $block['blockName'];
			$attrs = $block['attrs'];

			$namespace  = strpos( $type, '/' ) !== false
				? explode( '/', $type )[0] : 'core';
			$local_name = strpos( '/', $type ) !== false
				? explode( '/', $type )[1] : $type;

			$items[] = [
				'post_id'       => $post->ID,
				'post_title'    => $post->post_title
					? $post->post_title : __( '(no title)', 'planet4-blocks-backend' ),
				'post_status'   => $post->post_status,
				'post_type'     => $post->post_type,
				'post_date'     => $post->post_date,
				'post_modified' => $post->post_modified,
				'post_status'   => $post->post_status,
				'guid'          => $post->guid,
				'block_ns'      => $namespace,
				'block_type'    => $type,
				'local_name'    => $local_name,
				'block_attrs'   => $attrs,
			];
		}

		return $items;
	}

	/**
	 * Block count in search result.
	 *
	 * @return int
	 */
	public function block_count(): int {
		return count( $this->blocks );
	}

	/**
	 * Post count in search result.
	 *
	 * @return int
	 */
	public function post_count(): int {
		return count( $this->posts_ids );
	}
}
