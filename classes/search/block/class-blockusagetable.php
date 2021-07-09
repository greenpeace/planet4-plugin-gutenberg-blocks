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

/**
 * Show block usage, using native WordPress table
 */
class BlockUsageTable extends WP_List_Table {
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
	private $group_by = 'block_type';

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
	 * @param array $args Args.
	 * @throws InvalidArgumentException Throws on missing parameter.
	 * @see WP_List_Table::__construct()
	 */
	public function __construct( $args = [] ) {
		$args['plural'] = 'blocks';
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
	 * @param ?array  $search_params Search parameters.
	 * @param ?string $group_by    Grouping dimension.
	 */
	public function prepare_items(
		?array $search_params = null,
		?string $group_by = null
	): void {
		$this->search_params = $search_params;
		$this->normalize_search_params();

		$this->group_by = in_array( $group_by, $this->allowed_groups, true )
			? $group_by : $this->allowed_groups[0];

		$this->items = $this->block_usage->get_blocks_usage(
			new QueryParameters(
				$this->search_params['block_ns'] ?? null,
				$this->search_params['block_type'] ?? null,
				null,
				$this->search_params['text_search'] ?? null,
				[ 'publish', 'private', 'draft', 'pending', 'future' ],
				array_merge( [ $this->group_by ], $this->sort_by )
			)
		);

		$this->set_block_filters();
		$this->_column_headers = $this->get_column_headers();
	}

	/**
	 * Resolve search parameters conflicts
	 */
	public function normalize_search_params() {
		if ( ! empty( $this->search_params['block_type'] ) ) {
			$this->search_params['block_ns'] = null;
		}
	}

	/**
	 * Set dropdown filters content.
	 */
	private function set_block_filters(): void {
		$names = array_keys(
			$this->block_registry->get_all_registered()
		);
		sort( $names );
		$this->blocks_types = $names;

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
		// @todo WP 5.8 : parse blocks variations
		// core-embed/* are not in all registered, probably variations
		$namespaces[] = 'core-embed';
		sort( $namespaces );
		$this->blocks_ns = $namespaces;
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
				'Group by block type'
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
	 * Select blocks namespaces.
	 */
	private function blockns_dropdown() {
		sort( $this->blocks_ns );
		$filter = $this->search_params['block_ns'] ?? null;

		echo '<select name="ns" id="filter-by-ns">';
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
		$filter = $this->search_params['block_type'] ?? null;

		echo '<select name="type" id="filter-by-type">';
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
	}

	/**
	 * Add filters to table.
	 *
	 * @param string $which Tablenav identifier.
	 */
	protected function extra_tablenav( $which ) {
		$this->blockns_dropdown();
		$this->blocktype_dropdown();
		submit_button(
			__( 'Filter', 'planet4-blocks-backend' ),
			'',
			'filter_action',
			false,
			[ 'id' => 'block-query-submit' ]
		);
	}

	/**
	 * Add pagination information to table.
	 *
	 * @param string $which Tablenav identifier.
	 */
	protected function pagination( $which ) {
		echo sprintf(
			'<div class="tablenav-pages">
			<span class="displaying-num">%d blocks, %d posts</span>
			</div>',
			esc_html( $this->block_count() ),
			esc_html( $this->post_count() )
		);
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

		$content = print_r( $content, true );
		$content = trim( substr( $content, 5, strlen( $content ) ) );

		return sprintf(
			'<span title="%s">%s</span>',
			htmlentities( $content ),
			( strlen( $content ) > 30 ? substr( $content, 0, 30 ) . '...' : $content )
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
			htmlentities( $content ),
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
		if ( $column_name !== $primary ) {
			return '';
		}

		$actions = [];
		$id      = (int) $item['post_id'];
		$title   = $item['post_title'];

		$actions['edit'] = sprintf(
			'<a href="%s" aria-label="%s">%s</a>',
			get_edit_post_link( $item['post_id'] ),
			/* translators: %s: Post title. */
			esc_attr( sprintf( __( 'Edit &#8220;%s&#8221;', 'default' ), $title ) ),
			__( 'Edit', 'default' )
		);

		if ( in_array( $item['post_status'], [ 'pending', 'draft', 'future' ], true ) ) {
			$preview_link    = get_preview_post_link( $id );
			$actions['view'] = sprintf(
				'<a href="%s" rel="bookmark" aria-label="%s">%s</a>',
				esc_url( $preview_link ),
				/* translators: %s: Post title. */
				esc_attr( sprintf( __( 'Preview &#8220;%s&#8221;', 'default' ), $title ) ),
				__( 'Preview', 'default' )
			);
		} elseif ( 'trash' !== $item['post_status'] ) {
			$actions['view'] = sprintf(
				'<a href="%s" rel="bookmark" aria-label="%s">%s</a>',
				get_permalink( $item['post_id'] ),
				/* translators: %s: Post title. */
				esc_attr( sprintf( __( 'View &#8220;%s&#8221;', 'default' ), $title ) ),
				__( 'View', 'default' )
			);
		}

		$actions['clone'] = '<a href="' . duplicate_post_get_clone_post_link( $id, 'display', false ) .
			'" aria-label="' . esc_attr(
			/* translators: %s: Post title. */
				sprintf( __( 'Clone &#8220;%s&#8221;', 'duplicate-post' ), $title )
			) . '">' .
			esc_html_x( 'Clone', 'verb', 'duplicate-post' ) . '</a>';

		$actions['edit_as_new_draft'] = '<a href="' . duplicate_post_get_clone_post_link( $id ) .
			'" aria-label="' . esc_attr(
			/* translators: %s: Post title. */
				sprintf( __( 'New draft of &#8220;%s&#8221;', 'duplicate-post' ), $title )
			) . '">' .
			esc_html__( 'New Draft', 'duplicate-post' ) .
			'</a>';

		return $this->row_actions( $actions );
	}

	/**
	 * Show only top tablenav (duplicate form post bug)
	 *
	 * @param string $which Tablenav identifier.
	 */
	protected function display_tablenav( $which ) {
		if ( 'bottom' === $which ) {
			return;
		}
		parent::display_tablenav( $which );
	}

	/**
	 * Block count in search result.
	 *
	 * @return int
	 */
	public function block_count(): int {
		return count( $this->items );
	}

	/**
	 * Post count in search result.
	 *
	 * @return int
	 */
	public function post_count(): int {
		return count(
			array_unique(
				array_column(
					$this->items,
					'post_id'
				)
			)
		);
	}

	/**
	 * Search parameters
	 */
	public function get_search_params(): array {
		return $this->search_params;
	}
}
