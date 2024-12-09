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
use P4GBKS\Blocks\Happypoint;
use P4GBKS\Blocks\Gallery;
use P4\MasterTheme\AnalyticsValues;

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
		 * Access to transient cache for admin purposes.
		 */
		register_rest_route(
			self::REST_NAMESPACE,
			'/transient',
			[
				[
					'permission_callback' => [ Transient::class, 'permission' ],
					'methods'             => Transient::methods(),
					'callback'            => static function ( $request ) {
						$api = new Transient( $request );
						return $api->response();
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

		register_rest_route(
			self::REST_NAMESPACE,
			'/analytics-values',
			[
				[
					'methods'             => WP_REST_Server::READABLE,
					'permission_callback' => static function () {
						return current_user_can( 'edit_posts' );
					},
					'callback'            => static function ( $request ) {
						$post_id = (int) $request->get_param( 'id' );

						$analytics_values = AnalyticsValues::from_cache_or_api_or_hardcoded();

						$global_options = $analytics_values->global_projects_options( $post_id );
						$local_options  = $analytics_values->local_projects_options( $post_id );
						$basket_options = $analytics_values->basket_options();

						return rest_ensure_response(
							[
								[
									'global_projects' => array_map(
										fn ( $k, $v ) => [
											'label' => $v,
											'value' => $k,
										],
										array_keys( $global_options ),
										array_values( $global_options )
									),
									'local_projects'  => array_map(
										fn ( $k, $v ) => [
											'label' => $v,
											'value' => $k,
										],
										array_keys( $local_options ),
										array_values( $local_options )
									),
									'baskets'         => array_map(
										fn ( $k, $v ) => [
											'label' => $v,
											'value' => $k,
										],
										array_keys( $basket_options ),
										array_values( $basket_options )
									),
								],
							]
						);
					},
				],
			],
		);
	}

	/**
	 * Log API response to Sentry.
	 *
	 * @param string $message Message.
	 * @param array  $data    Data to log.
	 */
	private static function log_message( string $message, array $data = [] ): void {
		if ( ! function_exists( '\\Sentry\\withScope' ) ) {
			return;
		}

		\Sentry\withScope(
			function ( \Sentry\State\Scope $scope ) use ( $message, $data ): void {
				foreach ( $data as $key => $val ) {
					$scope->setContext( $key, $val );
				}
				\Sentry\captureMessage( $message );
			}
		);
	}
}
