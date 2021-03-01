<?php
/**
 * @package P4GBKS\Rest
 */

namespace P4GBKS\Rest;

use P4GBKS\Blocks\Base_Block;
use P4GBKS\Blocks\NotImplemented;
use WP_Error;
use WP_REST_Request;
use WP_REST_Server;
use P4GBKS\Blocks\Spreadsheet;
use P4GBKS\Blocks\Articles;
use P4GBKS\Blocks\SplitTwoColumns;
use P4GBKS\Blocks\Happypoint;
use P4GBKS\Blocks\Gallery;

/**
 * This class is just a place for add_endpoints to live.
 */
class Rest_Api {
	private const REST_NAMESPACE = 'planet4/v1';

	/**
	 * Add custom endpoints.
	 */
	public static function add_endpoints(): void {
		add_action( 'rest_api_init', [ __CLASS__, 'endpoints' ] );
	}

	/**
	 * Register custom rest API endpoints.
	 */
	public static function endpoints(): void {
		/**
		 * A lightweight endpoint to get all posts with only id and title.
		 */
		register_rest_route(
			self::REST_NAMESPACE,
			'/all-published-posts',
			[
				[
					'permission_callback' => static function () {
						return current_user_can( 'edit_pages' ) || current_user_can( 'edit_campaigns' );
					},
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => static function () {
						global $wpdb;

						if ( is_plugin_active( 'sitepress-multilingual-cms/sitepress.php' ) ) {
							// This is public data, no nonce needed.
							// phpcs:ignore WordPress.Security.NonceVerification.Recommended
							if ( ! isset( $_GET['post_language'] ) ) {
								return new \WP_REST_Response(
									'WPML is active so you need to query posts with the `post_language` query parameter.',
									400
								);
							}
							// This is public data, no nonce needed.
							// phpcs:ignore WordPress.Security.NonceVerification.Recommended
							$query = self::get_wpml_posts_query( $_GET['post_language'] );
						} else {
							$query = "SELECT id, post_title FROM wp_posts WHERE post_status = 'publish' AND post_type = 'post' ORDER BY post_date DESC";
						}
						// The query is prepared, just not in this line.
						// phpcs:ignore WordPress.DB.PreparedSQL.NotPrepared
						$result = $wpdb->get_results( $query );

						return rest_ensure_response( $result );
					},
				],
			]
		);
		/**
		 * Save meta to the preview of the current user.
		 */
		register_rest_route(
			self::REST_NAMESPACE,
			'/save-preview-meta',
			[
				[
					'permission_callback' => static function () {
						return current_user_can( 'edit_posts' );
					},
					'methods'             => WP_REST_Server::CREATABLE,
					'callback'            => static function ( $request ) {
						/**
						 * @var WP_REST_Request $request
						 */
						$post_id = $request['post_id'];

						$post = get_post( $post_id );

						if ( ! $post ) {
							return new \WP_REST_Response(
								'No such post exists.',
								400
							);
						}

						if ( ! current_user_can( 'edit_post', $post_id ) ) {
							return new \WP_REST_Response(
								'You do not have permission to edit this post.',
								403
							);

						}

						$old_autosave = wp_get_post_autosave( $post_id, get_current_user_id() );

						if ( ! $old_autosave ) {
							// No existing autosave, so let's create one. Should only happen once for each user.
							// @see \P4_Loader::do_not_delete_autosave The filter that ensures that.
							$revision_id = _wp_put_post_revision( $post, true );
						} else {
							$revision_id = $old_autosave->ID;
						}

						foreach ( $request['meta'] as $key => $value ) {
							update_metadata( 'post', $revision_id, $key, $value );
						}

						return rest_ensure_response( 'Saved all meta to the autosave revision.' );
					},
				],
			]
		);
		/**
		 * Endpoint to retrieve a Spreadsheet data and cache it.
		 */
		register_rest_route(
			self::REST_NAMESPACE,
			'/get-spreadsheet-data',
			[
				[
					'permission_callback' => static function () {
						return true;
					},
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => static function () {
						$sheet_id = filter_input(
							INPUT_GET,
							'sheet_id',
							FILTER_VALIDATE_REGEXP,
							[
								'options' => [
									'regexp' => '/[\w\d\-]+/',
								],
							]
						);

						$sheet_data = Spreadsheet::get_sheet( $sheet_id, false );

						return rest_ensure_response( $sheet_data );
					},
				],
			]
		);

		/**
		 * Endpoint to retrieve the posts for the Articles block
		 */
		register_rest_route(
			self::REST_NAMESPACE,
			'/get-posts',
			[
				[
					'permission_callback' => static function () {
						return true;
					},
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => static function ( $fields ) {
						$to_return = Articles::get_posts( $fields );
						return rest_ensure_response( $to_return );
					},
				],
			]
		);

		register_rest_route(
			self::REST_NAMESPACE,
			'/update_block/(?P<blockname>[a-z0-9-/]*)',
			[
				[
					'permission_callback' => static function () {
						return current_user_can( 'edit_pages' );
					},
					'methods'             => WP_REST_Server::CREATABLE,
					'callback'            => static function ( WP_REST_Request $request ) {
						$blocks     = [
							\P4GBKS\Blocks\Base_Block::BLOCK_NAMESPACE_PREFIX . '/' . SplitTwoColumns::BLOCK_NAME => SplitTwoColumns::class,
						];
						$block_name = $request->get_param( 'blockname' );
						/**
						 * @var Base_Block $block_class
						 */
						$block_class = $blocks[ $block_name ] ?? null;

						if ( null === $block_class ) {
							return new WP_Error( 'error', 'Unknown block ' . ( $block_name ?? 'unspecified' ) );
						}

						try {
							$response = $block_class::update_data( $request->get_params() );
						} catch ( NotImplemented $exception ) {
							return new WP_Error( 'error', $exception->getMessage() );
						}

						return rest_ensure_response( $response );
					},
				],
			]
		);

		/**
		 * Endpoint to retrieve the data for the Happypoint block
		 */
		register_rest_route(
			self::REST_NAMESPACE,
			'/get-happypoint-data',
			[
				[
					'permission_callback' => static function () {
						return true;
					},
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => static function ( $fields ) {
						$to_return = Happypoint::get_data( $fields['id'] );
						return rest_ensure_response( $to_return );
					},
				],
			]
		);

		/**
		 * Endpoint to retrieve the images for the Gallery block
		 */
		register_rest_route(
			self::REST_NAMESPACE,
			'/get-gallery-images',
			[
				[
					'permission_callback' => static function () {
						return true;
					},
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => static function ( $fields ) {
						$images = Gallery::get_images( $fields );
						return rest_ensure_response( $images );
					},
				],
			]
		);
	}

	/**
	 * Create a query for all posts with a certain language code.
	 *
	 * @param string $language_code Return posts with this language code.
	 * @return string The prepared query.
	 */
	private static function get_wpml_posts_query( string $language_code ): string {
		global $wpdb;

		return $wpdb->prepare(
			"SELECT p.id,p.post_title
				FROM wp_posts p
         		JOIN wp_icl_translations t
              		ON p.ID = t.element_id AND t.element_type = 'post_post'
				WHERE p.post_type = 'post'
  					AND p.post_status = 'publish'
  					AND t.language_code = %s
				ORDER BY p.post_date DESC; ",
			$language_code
		);
	}
}
