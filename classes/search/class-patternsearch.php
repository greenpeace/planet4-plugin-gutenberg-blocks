<?php
/**
 * Block search
 *
 * @package P4BKS\Controllers
 */

namespace P4GBKS\Search;

use P4GBKS\Search\Block\Query;
use P4GBKS\Search\Block\Sql\SqlQuery;
use P4GBKS\Search\Block\Query\Parameters;

/**
 * Search for posts containing specific blocks
 */
class PatternSearch {
	/**
	 * @var Query
	 */
	private $query;

	/**
	 * @param null|Query $query implementation of Query interface.
	 */
	public function __construct( ?Query $query = null ) {
		$this->query = $query ?? new SqlQuery();
	}

	/**
	 * @param Parameters $params Query parameters.
	 * @return int[] list of posts IDs.
	 */
	public function get_posts( Parameters $params ): array {
		return $this->query->get_posts( $params );
	}

	/**
	 * @param string $pattern_name Pattern.
	 * @return int[] list of posts IDs.
	 */
	public function get_posts_with_pattern( string $pattern_name ): array {
		return $this->get_posts(
			( new Parameters() )->with_name( $block_name )
		);
	}
}
