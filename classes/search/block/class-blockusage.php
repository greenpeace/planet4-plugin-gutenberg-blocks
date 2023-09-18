<?php
/**
 * Table displaying blocks usage
 *
 * @package P4BKS\Controllers
 */

namespace P4GBKS\Search\Block;

use WP_Block_Parser;
use P4GBKS\Search\BlockSearch;
use P4GBKS\Search\Block\Query\Parameters;

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
		?BlockSearch $search = null,
		?WP_Block_Parser $parser = null
	) {
		$this->search = $search ?? new BlockSearch();
		$this->parser = $parser ?? new WP_Block_Parser();
	}

	/**
	 * @param Parameters $params Query parameters.
	 * @return array
	 */
	public function get_blocks( Parameters $params ): array {
		$this->posts_ids = $this->search->get_posts( $params );

		return $this->get_filtered_blocks( $this->posts_ids, $params );
	}

	/**
	 * @param Parameters $params Query parameters.
	 * @return int[]
	 */
	public function get_posts( Parameters $params ): array {
		$block_list = $this->get_blocks( $this->posts_ids, $params );

		return array_unique( array_column( $block_list, 'post_id' ) );
	}

	/**
	 * @param int[]      $posts_ids Posts IDs.
	 * @param Parameters $params Query parameters.
	 * @return array
	 */
	private function get_filtered_blocks( $posts_ids, Parameters $params ) {
		$this->fetch_blocks( $posts_ids, $params );
		$this->filter_blocks( $params );
		$this->sort_blocks( $params->order() );

		return $this->blocks;
	}

	/**
	 * @param int[]      $posts_ids Posts IDs.
	 * @param Parameters $params Query parameters.
	 */
	private function fetch_blocks( array $posts_ids, Parameters $params ): void {
		$posts_args = [
			'include'     => $posts_ids,
			'orderby'     => empty( $params->order() ) ? null : array_fill_keys( $params->order(), 'ASC' ),
			'post_status' => $params->post_status(),
			'post_type'   => $params->post_type(),
		];

		$this->posts = get_posts( $posts_args ) ?? [];

		$block_listblock_list = [];
		foreach ( $this->posts as $post ) {
			$block_listblock_list = array_merge( $block_listblock_list, $this->parse_post( $post ) );
		}
		$this->blocks = $block_listblock_list;
	}

	/**
	 * Filter parsed search items
	 *
	 * @param Parameters $params Query parameters.
	 * @return array
	 */
	private function filter_blocks( Parameters $params ): void {
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
						//phpcs:ignore WordPress.PHP.DiscouragedPHPFunctions.serialize_serialize
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

		$args       = [];
		$block_list = $this->blocks;
		foreach ( $sort as $name ) {
			$args[] = array_column( $block_list, $name );
			$args[] = SORT_NATURAL;
		}
		$args[] = &$block_list;

		array_multisort( ...$args );

		$this->blocks = $block_list;
	}

	/**
	 * Parse posts content to blocks.
	 *
	 * @param object $post WP_Post.
	 * @return array[]
	 */
	private function parse_post( $post ): array {
		$output = $this->parser->parse( $post->post_content );

		$block_list = array_filter(
			$output,
			function ( $block ) {
				return ! empty( $block['blockName'] );
			}
		);

		$items = [];
		while ( ! empty( $block_list ) ) {
			$block   = array_shift( $block_list );
			$items[] = $this->format_block_data( $block, $post );

			if ( ! empty( $block['innerBlocks'] ) ) {
				$block_list = array_merge( $block_list, $block['innerBlocks'] );
			}
		}

		return $items;
	}

	/**
	 * Format block information.
	 *
	 * @param array  $block A block.
	 * @param object $post  WP_Post.
	 * @return array[]
	 */
	private function format_block_data( array $block, $post ): array {
		$type   = $block['blockName'];
		$attrs  = $block['attrs'] ?? [];
		$has_ns = strpos( $type, '/' ) !== false;

		[ $namespace, $local_name ] = $has_ns ? explode( '/', $type ) : [ 'core', $type ];

		$classes = empty( $attrs['className'] ) ? [] : explode( ' ', $attrs['className'] );
		$styles  = array_filter(
			array_map(
				function ( $c ): ?string {
					return 'is-style-' === substr( $c, 0, 9 ) ? substr( $c, 9 ) : null;
				},
				$classes
			)
		);

		return [
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
			'block_styles'  => $styles,
		];
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
