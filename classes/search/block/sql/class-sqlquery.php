<?php
/**
 * Block search SQL query
 *
 * @package P4BKS\Search\Block
 */

namespace P4GBKS\Search\Block\Sql;

use P4GBKS\Search\Block\Query;
use P4GBKS\Search\Block\QueryParameters;
use wpdb;

/**
 * SQL implementation of Query interface
 */
class SqlQuery implements Query {
	/**
	 * @var wpdb
	 */
	private $db;

	/**
	 * @param wpdb $wpdb Database singleton.
	 */
	public function __construct( wpdb $wpdb ) {
		$this->db = $wpdb;
	}

	/**
	 * @param QueryParameters ...$params_list Query parameters.
	 * @return int[] List of posts IDs.
	 */
	public function get_posts( QueryParameters ...$params_list ): array {
		$query   = $this->get_sql_query( ...$params_list );
		$results = $this->db->get_results( $query );

		return array_map(
			function ( $r ) {
				return (int) $r->ID;
			},
			$results
		);
	}

	/**
	 * @param QueryParameters ...$params_list Query parameters.
	 * @return string SQL query string
	 * @throws \UnexpectedValueException Empty prepared query.
	 */
	private function get_sql_query( QueryParameters ...$params_list ): string {
		$regexes = [];
		$order   = [];
		foreach ( $params_list as $params ) {
			$regexes[] = ( new Regex( $params ) )->__toString();
			$order     = array_merge( $order, $params->order() );
		}
		$order = array_filter( array_unique( $this->parse_order( $order ) ) );

		$conditions = array_fill( 0, count( $regexes ), 'AND post_content REGEXP %s' );
		$base       = sprintf(
			'SELECT ID
				FROM wp_posts
				WHERE post_status IN (%s)
				%s
				%s
			',
			"'" . implode( "','", $params->post_status() ) . "'",
			implode( ' ', $conditions ),
			$order ? 'ORDER BY %s' : ''
		);

		$query_vars = array_filter(
			array_merge(
				$regexes,
				[ $order ? implode( ', ', $order ) : null ]
			)
		);
		$query      = $this->db->prepare( $base, $query_vars );
		if ( empty( $query ) ) {
			throw new \UnexpectedValueException( 'Search query is invalid' );
		}

		return $query;
	}

	/**
	 * Parse and filter order parameter
	 *
	 * @param string[] $order List of sort columns.
	 * @return string[]
	 */
	private function parse_order( array $order ): array {
		$parsed = [];
		foreach ( $order as $k ) {
			switch ( $k ) {
				case 'block_type':
					break;
				case 'post_id':
					$parsed[] = 'ID';
					break;
				default:
					$parsed[] = $k;
			}
		}
		return $parsed;
	}
}
