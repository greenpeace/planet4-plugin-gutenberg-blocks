<?php
/**
 * Base class
 *
 * @package P4BKS
 * @since 0.1.0
 */

namespace P4GBKS\Controllers\Menu;

use P4GBKS\Views\View;

if ( ! class_exists( 'Controller' ) ) {

	/**
	 * Class Controller
	 *
	 * This class will control all the main functions of the plugin.
	 */
	abstract class Controller {

		private const ERROR   = 0;
		private const WARNING = 1;
		private const NOTICE  = 2;
		private const SUCCESS = 3;

		/**
		 * View object
		 *
		 * @var View $view
		 */
		protected $view;

		/**
		 * Messages array
		 *
		 * @var array $messages
		 */
		protected $messages = [];

		/**
		 * Creates the plugin's controller object.
		 * Avoid putting hooks inside the constructor, to make testing easier.
		 *
		 * @param View $view The view object.
		 */
		public function __construct( View $view ) {
			$this->view = $view;
		}

		/**
		 * Hooks the method that Creates the menu item for the current controller.
		 */
		public function load() {
			add_action( 'admin_menu', [ $this, 'create_admin_menu' ] );
		}

		/**
		 * Add the admin menu item.
		 *
		 * @return void
		 */
		abstract public function create_admin_menu();

		/**
		 * Validates and sanitizes the settings input.
		 *
		 * @param array $settings The associative array with the settings that are registered for the plugin.
		 *
		 * @return mixed Array if validation is ok, false if validation fails.
		 */
		public function valitize( $settings ): array {
			if ( $this->validate( $settings ) ) {
				$this->sanitize( $settings );
				return $settings;
			} else {
				return $settings;
			}
		}

		/**
		 * Validates the settings input.
		 *
		 * @param array $settings The associative array with the settings that are registered for the plugin.
		 *
		 * @return bool
		 */
		abstract public function validate( $settings ) : bool;

		/**
		 * Sanitizes the settings input.
		 *
		 * @param array $settings The associative array with the settings that are registered for the plugin (Call by Reference).
		 */
		abstract public function sanitize( &$settings );

		/**
		 * Display an escaped error message inside the admin panel.
		 *
		 * @param string $msg   The message to display.
		 * @param string $title The title of the message.
		 */
		public function error( $msg, $title = '' ) {
			if ( is_string( $msg ) ) {
				array_push(
					$this->messages,
					[
						'msg'     => esc_html( $msg ),
						'title'   => $title ? esc_html( $title ) : esc_html__( 'Error', 'planet4-engagingnetworks-backend' ),
						'type'    => self::ERROR,
						'classes' => 'p4en_error_message',
					]
				);
			}
		}

		/**
		 * Display an escaped warning message inside the admin panel.
		 *
		 * @param string $msg   The message to display.
		 * @param string $title The title of the message.
		 */
		public function warning( $msg, $title = '' ) {
			if ( is_string( $msg ) ) {
				array_push(
					$this->messages,
					[
						'msg'     => esc_html( $msg ),
						'title'   => $title ? esc_html( $title ) : esc_html__( 'Warning', 'planet4-engagingnetworks-backend' ),
						'type'    => self::WARNING,
						'classes' => 'p4en_warning_message',
					]
				);
			}
		}

		/**
		 * Display an escaped notice message inside the admin panel.
		 *
		 * @param string $msg   The message to display.
		 * @param string $title The title of the message.
		 */
		public function notice( $msg, $title = '' ) {
			if ( is_string( $msg ) ) {
				array_push(
					$this->messages,
					[
						'msg'     => esc_html( $msg ),
						'title'   => $title ? esc_html( $title ) : esc_html__( 'Notice', 'planet4-engagingnetworks-backend' ),
						'type'    => self::NOTICE,
						'classes' => 'p4en_notice_message',
					]
				);
			}
		}

		/**
		 * Display an escaped success message inside the admin panel.
		 *
		 * @param string $msg   The message to display.
		 * @param string $title The title of the message.
		 */
		public function success( $msg, $title = '' ) {
			if ( is_string( $msg ) ) {
				array_push(
					$this->messages,
					[
						'msg'     => esc_html( $msg ),
						'title'   => $title ? esc_html( $title ) : esc_html__( 'Success', 'planet4-engagingnetworks-backend' ),
						'type'    => self::SUCCESS,
						'classes' => 'p4en_success_message',
					]
				);
			}
		}

		/**
		 * Get underscore template from filesystem.
		 *
		 * @param string $template Template name.
		 *
		 * @return bool|string
		 */
		protected function get_template( $template ) {

			$template = P4GBKS_PLUGIN_DIR . '/admin/templates/' . $template . '.tpl.php';
			if ( file_exists( $template ) ) {
				$contents = wp_remote_get( $template );

				return false !== $contents ? $contents : '';
			}

			return '';
		}
	}
}
