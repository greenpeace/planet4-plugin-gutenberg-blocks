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
use P4GBKS\Search\RowActions;
use P4GBKS\Search\Block\Query\Parameters;
use P4GBKS\Controllers\Menu\Blocks_Usage_Controller;

if ( ! class_exists( 'WP_List_Table' ) ) {
	require_once ABSPATH . '/wp-admin/includes/class-wp-list-table.php';
}

/**
 * Show block usage, using native WordPress table
 */
class BlockUsageTable extends WP_List_Table {

	public const ACTION_NAME = 'block_usage';

	public const DEFAULT_GROUP_BY = 'block_type';

	public const DEFAULT_POST_STATUS = [ 'publish', 'private', 'draft', 'pending', 'future' ];

	public const PLURAL = 'blocks';

	/**
	 * @var BlockUsage
	 */
	private $block_usage;

	/**
	 * @var WP_Block_Type_Registry
	 */
	private $block_registry;

	/**
	 * @var string[] Search filters requested.
	 */
	private $search_params = [];

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
	private $allowed_groups = [ 'block_type', 'post_id', 'post_title' ];

	/**
	 * @var string[]|null Columns name => title.
	 */
	private $columns = null;

	/**
	 * @var string|null Latest row content displayed.
	 */
	private $latest_row = null;

	/**
	 * @var string[]|null Blocks namespaces.
	 */
	private $blocks_ns = null;

	/**
	 * @var string[]|null Blocks types.
	 */
	private $blocks_types = null;

	/**
	 * @var string[]|null Blocks registered.
	 */
	private $blocks_registered = null;

	/**
	 * @var string[]|null Blocks allowed.
	 */
	private $blocks_allowed = null;

	/**
	 * @var ?string Special filter.
	 */
	private $special = null;

	/**
	 * @param array $args Args.
	 * @throws InvalidArgumentException Throws on missing parameter.
	 * @see WP_List_Table::__construct()
	 */
	public function __construct( $args = [] ) {
		$args['plural'] = self::PLURAL;
		parent::__construct( $args );

		$this->block_usage    = $args['block_usage'] ?? null;
		$this->block_registry = $args['block_registry'] ?? null;

		if ( ! ( $this->block_usage instanceof BlockUsage ) ) {
			throw new InvalidArgumentException(
				'Table requires a BlockUsage instance.'
			);
		}
		if ( ! ( $this->block_registry instanceof WP_Block_Type_Registry ) ) {
			throw new InvalidArgumentException(
				'Table requires a WP_Block_Type_Registry instance.'
			);
		}
	}

	/**
	 * Prepares table data.
	 *
	 * @param Parameters $search_params Search parameters.
	 * @param string     $group_by      Grouping dimension.
	 * @param ?string    $special  Unregistered blocks only.
	 */
	public function prepare_items(
		?Parameters $search_params = null,
		?string $group_by = null,
		?string $special = null
	): void {
		if ( in_array( $group_by, $this->allowed_groups, true ) ) {
			$this->group_by = $group_by;
		}

		$this->search_params = $search_params
			->with_post_status( self::DEFAULT_POST_STATUS )
			->with_post_type(
				array_filter(
					\get_post_types( [ 'show_in_rest' => true ] ),
					fn ( $t ) => \post_type_supports( $t, 'editor' )
				)
			)
			->with_order( array_merge( [ $this->group_by ], $this->sort_by ) );

		$items = $this->block_usage->get_blocks( $this->search_params );

		$this->special = $special;
		if ( 'unregistered' === $this->special ) {
			$items = $this->filter_for_unregistered( $items );
		}
		if ( 'unallowed' === $this->special ) {
			$items = $this->filter_for_unallowed( $items );
		}

		// Pagination handling.
		$total_items  = count( $items );
		$per_page     = 50;
		$current_page = $this->get_pagenum();
		$this->items  = array_slice( $items, ( ( $current_page - 1 ) * $per_page ), $per_page );
		$this->set_pagination_args(
			[
				'total_items' => $total_items,
				'per_page'    => $per_page,
				'total_pages' => ceil( $total_items / $per_page ),
			]
		);

		$this->set_block_filters();
		$this->_column_headers = $this->get_column_headers();
	}

	/**
	 * Filter items to keep unregistered blocks only.
	 *
	 * @param array $items Blocks not registered.
	 */
	private function filter_for_unregistered( array $items ): array {
		$this->set_registered_blocks();
		return array_filter(
			$items,
			fn ( $i ) => ! in_array( $i['block_type'], $this->blocks_registered, true ) && 'core-embed' !== $i['block_ns']
		);
	}

	/**
	 * Filter items to keep unallowed blocks only.
	 *
	 * @param array $items Blocks not registered.
	 */
	private function filter_for_unallowed( array $items ): array {
		$this->set_allowed_blocks();
		return array_filter(
			$items,
			fn ( $i ) => ! in_array( $i['block_type'], $this->blocks_allowed, true )
		);
	}

	/**
	 * Set dropdown filters content.
	 */
	private function set_block_filters(): void {
		$this->set_registered_blocks();
		$this->set_allowed_blocks();
		$this->blocks_types = array_unique(
			array_merge(
				$this->blocks_registered,
				$this->blocks_allowed
			)
		);

		$namespaces = array_filter(
			array_unique(
				array_map(
					static function ( string $name ) {
						return explode( '/', $name )[0] ?? null;
					},
					$this->blocks_types
				)
			)
		);
		sort( $namespaces );
		$this->blocks_ns = $namespaces;
	}

	/**
	 * Set the registered blocks list.
	 */
	private function set_registered_blocks() {
		$names = array_keys(
			$this->block_registry->get_all_registered()
		);
		sort( $names );
		$this->blocks_registered = $names;
	}

	/**
	 * Set the allowed blocks list.
	 */
	private function set_allowed_blocks() {
		$post_types = array_filter(
			get_post_types( [ 'show_in_rest' => true ] ),
			fn ( $t ) => post_type_supports( $t, 'editor' )
		);

		$allowed = [];
		foreach ( $post_types as $type ) {
			$context = new \WP_Block_Editor_Context(
				[ 'post' => (object) [ 'post_type' => $type ] ]
			);
			$on_type = get_allowed_block_types( $context );
			if ( ! is_array( $on_type ) ) {
				$on_type = $on_type ? $this->blocks_registered : [];
			}
			$allowed = array_merge( $allowed, array_values( $on_type ) );
		}

		$allowed = array_unique( $allowed );
		sort( $allowed );
		$this->blocks_allowed = $allowed;
	}

	/**
	 * Columns list for table.
	 */
	public function get_columns() {
		if ( null !== $this->columns ) {
			return $this->columns;
		}

		$default_columns = [
			'post_title'    => 'Title',
			'block_type'    => 'Block',
			'block_styles'  => 'Style',
			'block_attrs'   => 'Attributes',
			'post_date'     => 'Created',
			'post_modified' => 'Modified',
			'post_id'       => 'ID',
			'post_status'   => 'Status',
		];

		$this->columns = array_merge(
			[ $this->group_by => $default_columns[ $this->group_by ] ],
			$default_columns
		);

		return $this->columns;
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
	 * Available grouping as views.
	 */
	protected function get_views() {
		$link_tpl        = '<a href="%s">%s</a>';
		$active_link_tpl = '<a class="current" href="%s">%s</a>';
		return [
			'block_type' => sprintf(
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
	 * Displays the list of views available on this table.
	 */
	public function views() {
		parent::views();

		$link_tpl        = '<a href="%s">%s</a>';
		$active_link_tpl = '<a class="current" href="%s">%s</a>';
		$unique_views    = [
			'unregistered' => sprintf(
				'unregistered' === $this->special ? $active_link_tpl : $link_tpl,
				'unregistered' === $this->special
					? self::url()
					: add_query_arg( [ 'unregistered' => '' ], self::url() ),
				'Not registered'
			),
			'unallowed'    => sprintf(
				'unallowed' === $this->special ? $active_link_tpl : $link_tpl,
				'unallowed' === $this->special
					? self::url()
					: add_query_arg( [ 'unallowed' => '' ], self::url() ),
				'Not allowed'
			),
		];

		$views = [];
		echo '<div style="clear: both;"><ul class="subsubsub" style="margin: 0;">';
		foreach ( $unique_views as $class => $view ) {
			$views[ $class ] = "\t<li class='$class'>$view";
		}
		// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		echo implode( " |</li>\n", $views ) . "</li>\n";
		echo '</ul></div>';
	}

	/**
	 * Select blocks namespaces.
	 */
	private function blockns_dropdown() {
		sort( $this->blocks_ns );
		$filter = $this->search_params->namespace() ?? null;

		echo '<select name="namespace" id="filter-by-ns" onchange="filterBlockNames();">';
		echo '<option value="">- All namespaces -</option>';
		foreach ( $this->blocks_ns as $ns ) {
			echo sprintf(
				'<option value="%s" %s>%s</option>',
				esc_attr( $ns ),
				esc_attr( $filter === $ns ? 'selected' : '' ),
				esc_html( $ns )
			);
		}
		echo '</select>';
	}

	/**
	 * Select blocks types.
	 */
	private function blocktype_dropdown() {
		sort( $this->blocks_types );
		$filter = $this->search_params->name() ?? null;

		echo '<select name="name" id="filter-by-name">';
		echo '<option value="">- All blocks -</option>';
		foreach ( $this->blocks_types as $type ) {
			echo sprintf(
				'<option value="%s" %s>%s</option>',
				esc_attr( $type ),
				esc_attr( $filter === $type ? 'selected' : '' ),
				esc_html( $type )
			);
		}
		echo '</select>';

		echo "<script>
			const filterBlockNames = () => {
				let selectedNs = document.getElementById('filter-by-ns').selectedOptions[0].value;
				let select = document.getElementById('filter-by-name');
				for (let option of select.options) {
					let display = selectedNs.length <= 0
						|| option.value.length <= 0
						|| option.value.startsWith(`\${selectedNs}/`);
					option.style.display = display ? 'inline' : 'none';
				}
				if ( selectedNs.length >= 1 ) {
					select.value = '';
				}
			}
			filterBlockNames();
		</script>";
	}

	/**
	 * Add filters to table.
	 *
	 * @param string $which Tablenav identifier.
	 */
	protected function extra_tablenav( $which ) {
		echo '<div class="actions">';
		$this->blockns_dropdown();
		$this->blocktype_dropdown();
		submit_button(
			__( 'Filter', 'planet4-blocks-backend' ),
			'',
			'filter_action',
			false,
			[ 'id' => 'block-query-submit' ]
		);
		echo '</div>';
	}

	/**
	 * Add pagination information to table.
	 *
	 * @param string $which Tablenav identifier.
	 */
	protected function pagination( $which ) {
		echo esc_html( parent::pagination( 'top' ) );
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
	 * Block option display.
	 *
	 * @param array $item Item.
	 * @return string
	 */
	public function column_block_attrs( $item ): string {
		$content = $item['block_attrs'] ?? null;
		if ( empty( $content ) ) {
			return '';
		}

		//phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_print_r
		$content = print_r( $content, true );
		$content = trim( substr( $content, 5, strlen( $content ) ) );

		return sprintf(
			'<span title="%s">%s</span>',
			esc_attr( $content ),
			esc_html(
				strlen( $content ) > 30
				? substr( $content, 0, 30 ) . '...'
				: $content
			)
		);
	}

	/**
	 * Block styles display.
	 *
	 * @param array $item Item.
	 * @return string
	 */
	public function column_block_styles( $item ): string {
		return sprintf(
			'%s',
			implode( ',', $item['block_styles'] )
		);
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
	 * Post ID display.
	 *
	 * @param array $item Item.
	 * @return string
	 */
	public function column_post_id( $item ): string {
		return sprintf(
			'<a href="%s">%s</a>',
			get_edit_post_link( $item['post_id'] ),
			$item['post_id']
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
	 * Add action links to a row
	 *
	 * @param array  $item        Item.
	 * @param string $column_name Current column name.
	 * @param string $primary     Primary column name.
	 *
	 * phpcs:disable WordPress.WP.I18n.TextDomainMismatch
	 */
	protected function handle_row_actions( $item, $column_name, $primary ) {
		return $this->row_actions(
			( new RowActions() )->get_post_actions( $item, $column_name, $primary )
		);
	}

	/**
	 * Show only top tablenav (duplicate form post bug)
	 *
	 * @param string $which Tablenav identifier.
	 */
	protected function display_tablenav( $which ) {
		if ( 'bottom' === $which ) {
			echo '<div class="tablenav bottom">';
			echo esc_html( parent::pagination( $which ) );
			echo '</div>';
			return;
		}
		parent::display_tablenav( $which );
	}

	/**
	 * Search parameters
	 */
	public function get_search_params(): Parameters {
		return $this->search_params;
	}

	/**
	 * Table URL
	 */
	public static function url(): string {
		return admin_url( 'admin.php?page=plugin_blocks_report_beta' );
	}

	/**
	 * Set table hooks
	 */
	public static function set_hooks(): void {
		// Add redirection for filter action.
		add_action(
			'admin_action_' . self::ACTION_NAME,
			function () {
				$nonce = $_GET['_wpnonce'] ?? null;
				if ( ! wp_verify_nonce( $nonce, 'bulk-' . self::PLURAL ) ) {
					wp_safe_redirect( self::url() );
					exit;
				}

				$redirect_query = remove_query_arg(
					[ '_wp_http_referer', '_wpnonce', 'action', 'filter_action' ],
					\wp_parse_url( $_SERVER['REQUEST_URI'], PHP_URL_QUERY )
				);
				\parse_str( $redirect_query, $args );
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
}
