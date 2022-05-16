<?php
/**
 * Table displaying patterns usage
 *
 * @package P4BKS\Controllers
 */

namespace P4GBKS\Search\Pattern;

use WP_Block_Parser;
use P4GBKS\Search\PatternSearch;
use P4GBKS\Search\Block\Query\Parameters;

/**
 * Prepare pattern usage, using native WordPress table
 */
class PatternUsage {
	/**
	 * @var PatternSearch
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
	private $patterns;

	/**
	 * @param PatternSearch   $search Search class.
	 * @param WP_Block_Parser $parser Block parser.
	 */
	public function __construct(
		?PatternSearch $search = null,
		?WP_Block_Parser $parser = null
	) {
		$this->search = $search ?? new PatternSearch();
		$this->parser = $parser ?? new WP_Block_Parser();
	}

}
