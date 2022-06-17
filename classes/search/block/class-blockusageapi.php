<?php
/**
 * Table displaying blocks usage
 *
 * @package P4BKS\Controllers
 */

namespace P4GBKS\Search\Block;

use InvalidArgumentException;
use WP_List_Table;
use WP_Block_Type_Registry;
use P4GBKS\Search\Block\Query\Parameters;
use P4GBKS\Controllers\Menu\Blocks_Usage_Controller;

/**
 * Block usage API
 */
class BlockUsageApi {

	public const DEFAULT_POST_STATUS = [ 'publish' ];

	/**
	 * @var BlockUsage
	 */
	private $usage;

	/**
	 * @var Parameters
	 */
	private $params;

	/**
	 * @var array[] Blocks.
	 */
	private $items;

	/**
	 * Constructor
	 */
	public function __construct() {
		$this->usage  = new BlockUsage();
		$this->params = ( new Parameters() )
			->with_post_status( self::DEFAULT_POST_STATUS );
	}

	/**
	 * Count by block type
	 */
	public function get_type_count(): array {
		if ( null === $this->items ) {
			$this->fetch_items();
		}

		$types_count = array_count_values(
			array_column( $this->items, 'block_type' )
		);
		ksort( $types_count );

		return $types_count;
	}

	/**
	 * Count by block type and style
	 *
	 * If style is not specified, an empty key '' is used.
	 */
	public function get_style_count(): array {
		if ( null === $this->items ) {
			$this->fetch_items();
		}

		$types    = array_column( $this->items, 'block_type' );
		$by_style = array_fill_keys( $types, [] );
		ksort( $by_style );

		foreach ( $this->items as $item ) {
			$styles = empty( $item['block_styles'] ) ? [ '' ] : $item['block_styles'];
			foreach ( $styles as $style ) {
				if ( ! isset( $by_style[ $item['block_type'] ][ $style ] ) ) {
					$by_style[ $item['block_type'] ][ $style ] = 0;
				}
				$by_style[ $item['block_type'] ][ $style ]++;
			}
			ksort( $by_style[ $item['block_type'] ] );
		}

		return $by_style;
	}

	/**
	 * Fetch parsed blocks
	 */
	private function fetch_items(): void {
		$this->items = $this->usage->get_blocks( $this->params );
	}
}
