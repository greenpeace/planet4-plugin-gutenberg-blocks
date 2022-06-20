<?php
/**
 * Table displaying patterns usage
 *
 * @package P4BKS\Controllers
 */

namespace P4GBKS\Search\Pattern;

use InvalidArgumentException;
use WP_List_Table;
use WP_Block_Type_Registry;
use P4GBKS\Blocks\BlockList;
use P4GBKS\Search\Block\Sql\SqlQuery;
use P4GBKS\Search\Block\Query\Parameters;
use P4GBKS\Controllers\Menu\Blocks_Usage_Controller;
use P4\MasterTheme\SqlParameters;

if ( ! class_exists( 'WP_List_Table' ) ) {
	require_once ABSPATH . '/wp-admin/includes/class-wp-list-table.php';
}

/**
 * Show pattern usage, using native WordPress table
 */
class PatternUsageTable extends WP_List_Table {

	public const ACTION_NAME = 'pattern_usage';

	public const DEFAULT_GROUP_BY = 'pattern_name';

	public const DEFAULT_POST_STATUS = [ 'publish', 'private', 'draft', 'pending', 'future' ];

	/**
	 * @var PatternUsage
	 */
	private $pattern_usage;

	/**
	 * @var array
	 */
	private $pattern_registry;

	/**
	 * @var string Group column.
	 */
	private $group_by = self::DEFAULT_GROUP_BY;

	/**
	 * @var string[]|null Sort order.
	 */
	private $sort_by = [ 'post_title', 'post_id' ];

	/**
	 * @var string[]
	 */
	private $allowed_groups = [ 'pattern_name', 'post_id', 'post_title' ];

	/**
	 * @var string[]|null Columns name => title.
	 */
	private $columns = null;


	/**
	 * @param array $args Args.
	 * @throws InvalidArgumentException Throws on missing parameter.
	 * @see WP_List_Table::__construct()
	 */
	public function __construct( $args = [] ) {
		$args['plural'] = 'patterns';
		parent::__construct( $args );

		$this->pattern_usage    = $args['pattern_usage'] ?? null;
		$this->pattern_registry = $this->make_pattern_registry( $args['pattern_list'] );
	}

	/**
	 *
	 */
	public function prepare_items(): void {
		$post_ids = $this->query_by_classname(
			...array_column( $this->pattern_registry, 'classname' )
		);

		// For each searched pattern.
		$items = [];
		foreach ( $this->pattern_registry as $name => $pattern ) {
			// Get flat list of blocks.
			$list   = BlockList::parse_block_list( $pattern['content'] );
			$params = array_map(
				fn ( $b ) => Parameters::from_array( [ 'name' => $b ] ),
				$list
			);

			// Query posts with all blocks of tree.
			$query = new SqlQuery();
			$ids   = $query->get_posts( ...$params );

			// Parse content to get local tree.
			foreach ( $ids as $id ) {
				$post        = \get_post( $id );
				$post_struct = new ContentStructure();
				$post_struct->parse_content( $post->post_content ?? '' );

				// Post contains pattern shape.
				$struct_matches = substr_count(
					$post_struct->get_content_signature(),
					$pattern['signature']
				);

				if ( $struct_matches > 0 ) {
					$items[] = [
						'post_title'    => $post->post_title,
						'pattern_name'  => $name,
						'pattern_title' => $pattern['title'],
						'pattern_occ'   => $struct_matches,
						'post_date'     => $post->post_date_gmt,
						'post_modified' => $post->post_modified,
						'post_id'       => $id,
						'post_status'   => $post->post_status,
						'match_type'    => 'struct',
					];
				}

				$class_matches = $this->match_pattern_class(
					$post_struct->get_content_tree(),
					$pattern
				);

				if ( ! empty( $class_matches ) ) {
					foreach ( $class_matches as $match ) {
						echo $this->show_diff(
							json_encode( $pattern['structure']->get_content_tree()[0], \JSON_PRETTY_PRINT ),
							json_encode( $match, \JSON_PRETTY_PRINT )
						);
						$items[] = [
							'post_title'    => $post->post_title,
							'pattern_name'  => $name,
							'pattern_title' => $pattern['title'],
							'pattern_occ'   => 1,
							'post_date'     => $post->post_date_gmt,
							'post_modified' => $post->post_modified,
							'post_id'       => $id,
							'post_status'   => $post->post_status,
							'match_type'    => 'class',
						];
					}
				}
			}
		}

		$this->items = $items;

		$this->_column_headers = $this->get_column_headers();
	}

	private function match_pattern_class( $struct, $pattern ) {
		$matches        = [];
		$array_iterator = new \RecursiveArrayIterator( $struct );
		$recursive      = new \RecursiveIteratorIterator( $array_iterator );
		while ( $recursive->valid() ) {
			$node = $recursive->current();
			if ( ! is_array( $node ) || empty( $node['classes'] ) ) {
				$recursive->next();
				continue;
			}

			if ( in_array( $pattern['classname'], $node['classes'], true ) ) {
				$matches[] = $node;
			}

			$recursive->next();
		}

		return $matches;
	}

	/**
	 * Generate pattern registry.
	 *
	 * @param array $patterns_list Patterns classes.
	 */
	public function make_pattern_registry( array $patterns_list ): array {
		$patterns = [];
		foreach ( $patterns_list as $pattern ) {
			$conf = $pattern::get_config();

			$structure = new ContentStructure();
			$structure->parse_content( $conf['content'] ?? '' );
			$tree = $structure->get_content_tree();
			$tree = count( $tree ) === 1 ? $tree[0] : $tree;

			$patterns[ $pattern::get_name() ] = [
				'title'     => $conf['title'],
				'shape'     => $tree,
				'content'   => $conf['content'],
				'structure' => $structure,
				'signature' => $structure->get_content_signature(),
				'classname' => $pattern::get_classname(),
			];
		}

		return $patterns;
	}

	/**
	 * Columns list for table.
	 */
	public function get_columns() {
		if ( null !== $this->columns ) {
			return $this->columns;
		}

		$default_columns = [
			'pattern_name'  => 'Pattern',
			'post_title'    => 'Title',
			'post_date'     => 'Created',
			'post_modified' => 'Modified',
			'post_id'       => 'ID',
			'post_status'   => 'Status',
			'match_type'    => 'Match',
			'pattern_occ'   => 'Count',
		];

		$this->columns = array_merge(
			[ $this->group_by => $default_columns[ $this->group_by ] ],
			$default_columns
		);

		return $this->columns;
	}

	/**
	 * Available grouping as views.
	 */
	protected function get_views() {
		$link_tpl        = '<a href="%s">%s</a>';
		$active_link_tpl = '<a class="current" href="%s">%s</a>';
		return [
			'pattern_name' => sprintf(
				'block_type' === $this->group_by ? $active_link_tpl : $link_tpl,
				add_query_arg( 'group', 'block_type' ),
				'Group by block name'
			),
			'post_title' => sprintf(
				'post_title' === $this->group_by ? $active_link_tpl : $link_tpl,
				add_query_arg( 'group', 'post_title' ),
				'Group by post title'
			),
			'post_id'    => sprintf(
				'post_id' === $this->group_by ? $active_link_tpl : $link_tpl,
				add_query_arg( 'group', 'post_id' ),
				'Group by post ID'
			),
		];
	}

	/**
	 * All, hidden and sortable columns.
	 */
	private function get_column_headers() {
		return [
			$this->get_columns(),
			[],
			[ 'post_title', 'post_date', 'post_modified' ],
		];
	}

	/**
	 * Post title display.
	 *
	 * @param array $item Item.
	 * @return string
	 */
	public function column_post_title( $item ): string {
		$content = $item['post_title'] ?? null;
		if ( empty( $content ) ) {
			return '';
		}

		$title_tpl = '%2$s';
		$link_tpl  = '<a href="%s" title="%s">%s</a>';
		$page_uri  = get_page_uri( $item['post_id'] );

		return sprintf(
			empty( $page_uri ) ? $title_tpl : $link_tpl,
			$page_uri,
			esc_attr( $content ),
			( strlen( $content ) > 45 ? substr( $content, 0, 45 ) . '...' : $content )
		);
	}

	/**
	 * Full row display, edited for grouping functionality.
	 *
	 * @param array $item Item.
	 */
	public function single_row( $item ) {
		$cols      = $this->get_columns();
		$colspan   = count( $cols );
		$first_col = array_key_first( $cols );

		if ( $this->latest_row !== $item[ $first_col ] ) {
			echo '<tr>';
			echo sprintf(
				'<th colspan="%s"><strong>%s</strong></th>',
				esc_attr( $colspan ),
				esc_html( $item[ $first_col ] )
			);
			echo '</tr>';
		}

		$this->latest_row   = $item[ $first_col ];
		$item[ $first_col ] = '';
		parent::single_row( $item );
	}

	/**
	 * Default column value representation.
	 *
	 * @param array  $item Item.
	 * @param string $column_name Column name.
	 *
	 * @return mixed
	 */
	public function column_default( $item, $column_name ) {
		return $item[ $column_name ] ?? '';
	}

	/**
	 * Table URL
	 */
	public static function url(): string {
		return admin_url( 'admin.php?page=plugin_patterns_report' );
	}

	/**
	 * Add redirection for filter action
	 */
	public static function set_hooks(): void {
		add_action(
			'admin_action_' . self::ACTION_NAME,
			function () {
				if ( empty( $_GET['_wpnonce'] ) ) { // phpcs:ignore WordPress.Security.NonceVerification
					return;
				}

				$query = remove_query_arg(
					[ '_wp_http_referer', '_wpnonce', 'action', 'filter_action' ],
					\wp_parse_url( $_SERVER['REQUEST_URI'], PHP_URL_QUERY )
				);
				\parse_str( $query, $args );
				$args = array_filter(
					$args,
					fn( $e ) => ! empty( $e ) && '0' !== $e
				);

				wp_safe_redirect( add_query_arg( $args, self::url() ) );
				exit;
			},
			10
		);
	}

	/**
	 * Query posts by pattern classname.
	 *
	 * @param string ...$classname Pattern class name.
	 */
	private function query_by_classname( string ...$classname ): array {
		$classname = array_filter( $classname );
		if ( empty( $classname ) ) {
			return [];
		}

		global $wpdb;

		$like = array_map( fn ( $c ) => "post_content LIKE '%$c%'", $classname );
		$like = implode( ' OR ', $like );

		$params = new SqlParameters();
		$query  = 'SELECT ID
			FROM wp_posts
			WHERE ' . $like;

		$results = $wpdb->get_results(
			$wpdb->prepare( $query, $params->get_values() ) // phpcs:ignore
		);

		return array_map(
			fn ( $r ) => (int) $r->ID,
			$results
		);
	}

	public function show_diff( $left_string, $right_string, $args = [] ) {

		$defaults = array(
			'title'           => '',
			'title_left'      => '',
			'title_right'     => '',
			'show_split_view' => true,
		);
		$args     = wp_parse_args( $args, $defaults );

		if ( ! class_exists( 'WP_Text_Diff_Renderer_Table', false ) ) {
			require ABSPATH . WPINC . '/wp-diff.php';
		}

/*		$left_string  = normalize_whitespace( $left_string );
		$right_string = normalize_whitespace( $right_string );*/

		$left_lines  = explode( "\n", $left_string );
		$right_lines = explode( "\n", $right_string );
		$text_diff   = new \Text_Diff( $left_lines, $right_lines );
		$renderer    = new \WP_Text_Diff_Renderer_Table( $args );
		$diff        = $renderer->render( $text_diff );

		if ( ! $diff ) {
			return '';
		}

		$is_split_view       = ! empty( $args['show_split_view'] );
		$is_split_view_class = $is_split_view ? ' is-split-view' : '';

		$r = "<table class='diff$is_split_view_class'>\n";

		if ( $args['title'] ) {
			$r .= "<caption class='diff-title'>$args[title]</caption>\n";
		}

		if ( $args['title_left'] || $args['title_right'] ) {
			$r .= '<thead>';
		}

		if ( $args['title_left'] || $args['title_right'] ) {
			$th_or_td_left  = empty( $args['title_left'] ) ? 'td' : 'th';
			$th_or_td_right = empty( $args['title_right'] ) ? 'td' : 'th';

			$r .= "<tr class='diff-sub-title'>\n";
			$r .= "\t<$th_or_td_left>$args[title_left]</$th_or_td_left>\n";
			if ( $is_split_view ) {
				$r .= "\t<$th_or_td_right>$args[title_right]</$th_or_td_right>\n";
			}
			$r .= "</tr>\n";
		}

		if ( $args['title_left'] || $args['title_right'] ) {
			$r .= "</thead>\n";
		}

		$r .= "<tbody>\n$diff\n</tbody>\n";
		$r .= '</table>';

		return $r;
	}
}
