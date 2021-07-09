<?php
/**
 * Block search
 *
 * @package P4BKS\Controllers
 */

namespace P4GBKS\Search;

use P4GBKS\Search\Block\Query;
use P4GBKS\Search\Block\QueryParameters;

/**
 * Search for posts containing specific blocks
 */
class BlockSearch {
	/**
	 * @var Query
	 */
	private $query;

	/**
	 * @param Query $query implementation of Query interface.
	 */
	public function __construct( Query $query ) {
		$this->query = $query;
	}

	/**
	 * @param QueryParameters $params Query parameters.
	 * @return int[] list of posts IDs.
	 */
	public function get_posts( QueryParameters $params ): array {
		return $this->query->get_posts( $params );
	}

	/**
	 * @param string $block_name Query parameters.
	 * @return int[] list of posts IDs.
	 */
	public function get_posts_with_block( string $block_name ): array {
		return $this->get_posts(
			new QueryParameters( null, $block_name )
		);
	}
}
