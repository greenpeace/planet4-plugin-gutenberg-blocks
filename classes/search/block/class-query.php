<?php
/**
 * Block search query
 *
 * @package P4BKS\Search\Block
 */

namespace P4GBKS\Search\Block;

/**
 * Query interface
 * Allows using SQL or Elastic implementation
 */
interface Query {
	/**
	 * Return a list of post ids
	 *
	 * @param QueryParameters ...$params_list A list of parameters.
	 * @return int[]
	 */
	public function get_posts( QueryParameters ...$params_list ): array;
}
