<?php
/**
 * Loader class
 *
 * @package P4GBKS
 * @since 0.1.0
 */

namespace P4GBKS;

use P4\MasterTheme\Features;
use P4\MasterTheme\MigrationLog;
use P4GBKS\Controllers;
use P4GBKS\Patterns\Block_Pattern;
use P4GBKS\Views\View;
use WP_CLI;
use P4GBKS\Command\Controller;

/**
 * Class Loader
 *
 * Loads required files.
 * Starts services.
 * Loads commands.
 * Checks requirements and if all are met.
 * Hooks plugin and loads assets.
 */
final class Loader {

	/**
	 * A static instance of Loader.
	 *
	 * @var Loader $instance
	 */
	private static $instance;

	/**
	 * Singleton pattern.
	 *
	 * @return Loader
	 */
	public static function get_instance() : Loader {
		if ( ! isset( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Creates the plugin's loader object.
	 * Checks requirements and if its ok it hooks the hook_plugin method on the 'init' action which fires
	 * after WordPress has finished loading but before any headers are sent.
	 * Most of WP is loaded at this stage (but not all) and the user is authenticated.
	 */
	private function __construct() {

		$this->setup_autoload();
		$this->load_services();
		$this->load_commands();
		$this->check_requirements();

		// During PLANET-6373 transition, priority between theme and plugin matters.
		add_action( 'init', [ static::class, 'add_blocks' ], 30 );
		// Load parallax library for Media & Text block.
		add_action(
			'wp_enqueue_scripts',
			static function () {
				if ( has_block( 'core/media-text' ) ) {
					wp_enqueue_script(
						'rellax',
						'https://cdnjs.cloudflare.com/ajax/libs/rellax/1.12.1/rellax.min.js',
						[],
						'1.12.1',
						true
					);
				}
			}
		);
	}

	/**
	 * Load required files. The plugins namespaces should:
	 * a. include P4GBKS string
	 * b. follow the names of the sub-directories of the current __DIR__ (classes/)
	 *    - if not, then proper replacements should be added like below
	 */
	private function setup_autoload() {
		try {
			spl_autoload_register(
				function ( $class_name ) {
					if ( false !== strpos( $class_name, 'P4GBKS' ) ) {
						$class_name_parts = explode( '\\', $class_name );
						$real_class_name  = array_pop( $class_name_parts );
						$file_name        = 'class-' . str_ireplace( '_', '-', strtolower( $real_class_name ) );

						$namespace = implode( '\\', $class_name_parts );
						$path      = str_ireplace(
							[ 'P4GBKS', 'Blocks', 'Controllers', 'Views', '_', '\\' ],
							[ '', 'blocks', 'controller', 'view', '-', '/' ],
							strtolower( $namespace )
						);
						require_once __DIR__ . '/' . $path . '/' . $file_name . '.php';
					}
				}
			);
		} catch ( \Exception $e ) {
			echo esc_html( $e->getMessage() );
		}
	}

	/**
	 * Add some admin pages.
	 */
	public function load_services(): void {
		$services = [
			Controllers\Menu\Archive_Import::class,
		];

		$view = new View();
		foreach ( $services as $service ) {
			( new $service( $view ) )->load();
		}
	}

	/**
	 * Load blocks from Plugin.
	 */
	public static function add_blocks(): void {
		new Blocks\Accordion();
		new Blocks\CarouselHeader();
		new Blocks\Columns();
		new Blocks\Cookies();
		new Blocks\Gallery();
		new Blocks\Happypoint();
		new Blocks\Spreadsheet();
		new Blocks\SubPages();
		new Blocks\Timeline();
		new Blocks\SocialMediaCards();
		new Blocks\GuestBook();

		/**
		 * Create Planet 4 block patterns categories.
		*/
		if ( ! function_exists( 'register_block_pattern_category' ) ) {
			return;
		}

		register_block_pattern_category(
			'planet4',
			[ 'label' => 'Planet 4' ],
		);

		register_block_pattern_category(
			'layouts',
			[ 'label' => 'Layouts' ],
		);

		// Load block patterns.
		Block_Pattern::register_all();
	}

	/**
	 * Registers commands for Blocks plugin.
	 */
	public function load_commands() {
		if ( defined( 'WP_CLI' ) && WP_CLI ) {
			try {
				WP_CLI::add_command(
					'p4-gblocks',
					Controller::class
				);
			} catch ( \Exception $e ) {
				WP_CLI::log( 'Exception: ' . $e->getMessage() );
			}
		}
	}

	/**
	 * Checks if blocks are loaded via the master theme or not.
	 */
	public function planet4_blocks_is_active(): bool {
		return ( get_option( 'planet4_features' )['planet4_blocks'] ?? null ) === 'on';
	}

	/**
	 * Hooks the plugin.
	 */
	private function hook_plugin() {
		add_action( 'admin_menu', [ $this, 'load_i18n' ] );
		// Load the editor scripts only enqueuing editor scripts while in context of the editor.
		add_action( 'enqueue_block_editor_assets', [ $this, 'enqueue_editor_scripts' ] );

		// Setup image sizes.
		add_action( 'admin_init', [ $this, 'setup_image_sizes' ] );

		// Reset block list cache on post modification.
		add_action( 'save_post', [ Blocks\BlockList::class, 'cache_delete' ], 10, 1 );

		// Provide hook for other plugins.
		do_action( 'p4gbks_plugin_loaded' );
	}

	/**
	 * Checks plugin requirements.
	 * If requirements are met then hook the plugin.
	 */
	private function check_requirements(): void {

		// Preserving the way this works for now, though it makes little sense. We probably don't need to check this
		// over and over at runtime on each request, but at build time instead.
		if ( ! is_admin() ) {
			add_action( 'plugins_loaded', [ $this, 'load_i18n' ] );
			add_filter( 'style_loader_tag', [ $this, 'enqueue_deferred_assets' ], 10, 3 );
			add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_public_assets' ] );

			return;
		}

		// If we are on the admin panel.
		// Run the version check. If it is successful, continue with hooking under 'init' the initialization of this plugin.
		$this->check_required_php();
		$this->hook_plugin();
	}

	/**
	 * Check if the server's php version is less than the required php version. Die if not ok.
	 */
	private function check_required_php(): void {
		if ( version_compare( PHP_VERSION, P4GBKS_REQUIRED_PHP, '>=' ) ) {
			return;
		}

		deactivate_plugins( P4GBKS_PLUGIN_BASENAME );
		// phpcs:disable Generic.Strings.UnnecessaryStringConcat
		wp_die( // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			'<div class="error fade">' . '<strong>' . esc_html__(
				'PHP Requirements Error',
				'planet4-blocks-backend'
			) . '</strong><br /><br />' . esc_html(
				P4GBKS_PLUGIN_NAME . __( ' requires a newer version of PHP.', 'planet4-blocks-backend' )
			) . '<br />' . '<br/>' . esc_html__(
				'Minimum required version of PHP: ',
				'planet4-blocks-backend'
			) . '<strong>' . esc_html( P4GBKS_REQUIRED_PHP ) . '</strong>' . '<br/>' . esc_html__(
				'Running version of PHP: ',
				'planet4-blocks-backend'
			) . '<strong>' . esc_html( PHP_VERSION ) . '</strong>' . '</div>',
			'Plugin Requirements Error',
			[
				'response'  => \WP_Http::OK, // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
				'back_link' => true,
			]
		);
		// phpcs:enable Generic.Strings.UnnecessaryStringConcat
	}

	/**
	 * Load assets only on the admin pages of the plugin.
	 *
	 * @param string $hook The slug name of the current admin page.
	 */
	public function enqueue_editor_scripts( $hook ) {

		wp_enqueue_style( 'wp-components' );

		// These styles from the master theme are enqueued on the frontend
		// but not in the admin side.
		wp_enqueue_style(
			'planet4-blocks-editor-style',
			P4GBKS_PLUGIN_URL . 'assets/build/editorStyle.min.css', // - Bundled CSS for the blocks
			[],
			self::file_ver( P4GBKS_PLUGIN_DIR . '/assets/build/editorStyle.min.css' )
		);

		self::enqueue_local_script( 'p4gbks_admin_script', 'admin/js/editor.js' );

		// Enqueue editor script for all Blocks in this Plugin.
		self::enqueue_local_script(
			'planet4-blocks-editor-script',
			'assets/build/editorIndex.js',
			[
				'wp-blocks',      // Helpers for registering blocks.
				'wp-components',  // Wordpress components.
				'wp-element',     // WP React wrapper.
				'wp-data',        // WP data helpers.
				'wp-i18n',        // Exports the __() function.
				'wp-editor',
				'wp-edit-post',
			]
		);

		// Variables reflected from PHP to JS.
		$option_values = get_option( 'planet4_options' );

		// Variables reflected from PHP to JS.
		$reflection_vars = [
			'dateFormat'                     => get_option( 'date_format' ),
			'siteUrl'                        => site_url(),
			'themeUrl'                       => get_template_directory_uri(),
			'enable_analytical_cookies'      => $option_values['enable_analytical_cookies'] ?? '',
			'take_action_covers_button_text' => $option_values['take_action_covers_button_text'] ?? '',
			'cookies_default_copy'           => self::get_cookies_default_copy(),
		];
		wp_localize_script( 'planet4-blocks-editor-script', 'p4bk_vars', $reflection_vars );

		// Sets translated strings for a JS script.
		wp_set_script_translations( 'planet4-blocks-editor-script', 'planet4-blocks-backend', P4GBKS_PLUGIN_DIR . '/languages' );
	}

	/**
	 * Load assets for the frontend.
	 */
	public function enqueue_public_assets() {
		// Add master theme's main css as dependency for blocks css.
		wp_enqueue_style(
			'planet4-blocks-style',
			P4GBKS_PLUGIN_URL . 'assets/build/style.min.css',
			[
				'bootstrap',
				'parent-style',
			],
			self::file_ver( P4GBKS_PLUGIN_DIR . '/assets/build/style.min.css' )
		);

		// Include React in the Frontend.
		self::enqueue_local_script(
			'planet4-blocks-script',
			'assets/build/frontendIndex.js',
			[
				// WP React wrapper.
				'wp-element',
				// Exports the __() function.
				'wp-i18n',
			],
			true
		);

		// Variables reflected from PHP to JS.
		$option_values   = get_option( 'planet4_options' );
		$reflection_vars = [
			'dateFormat'                 => get_option( 'date_format' ),
			'siteUrl'                    => site_url(),
			'themeUrl'                   => get_template_directory_uri(),
			'enable_analytical_cookies'  => $option_values['enable_analytical_cookies'] ?? '',
			'enable_google_consent_mode' => $option_values['enable_google_consent_mode'] ?? '',
			'cookies_default_copy'       => self::get_cookies_default_copy(),
			'cookies_field'              => $option_values['cookies_field'] ?? '',
			'page_text_404'              => $option_values['404_page_text'] ?? '',
			'page_bg_image_404'          => $option_values['404_page_bg_image'] ?? '',
		];
		wp_localize_script( 'planet4-blocks-script', 'p4bk_vars', $reflection_vars );

		// Sets translated strings for a JS script.
		wp_set_script_translations( 'planet4-blocks-script', 'planet4-blocks', P4GBKS_PLUGIN_DIR . '/languages' );
	}

	/**
	 * Get the cookies default copy from the settings (Planet 4 > Cookies)
	 *
	 * @return array The various cookies text fields.
	 */
	private static function get_cookies_default_copy(): array {
		$option_values = get_option( 'planet4_options' );

		$cookies_default_copy = [
			'necessary_cookies_name'         => $option_values['necessary_cookies_name'] ?? '',
			'necessary_cookies_description'  => $option_values['necessary_cookies_description'] ?? '',
			'analytical_cookies_name'        => $option_values['analytical_cookies_name'] ?? '',
			'analytical_cookies_description' => $option_values['analytical_cookies_description'] ?? '',
			'all_cookies_name'               => $option_values['all_cookies_name'] ?? '',
			'all_cookies_description'        => $option_values['all_cookies_description'] ?? '',
		];

		return $cookies_default_copy;
	}

	/**
	 * Load non-blocking CSS resources
	 *
	 * @param string $html The tag's HTML.
	 * @param string $handle The tag's handle/name.
	 * @param string $href The source URL.
	 *
	 * @return array
	 */
	public function enqueue_deferred_assets( $html, $handle, $href ) {
		$deferred_style_handles = [ 'photoswipe' ];

		if ( in_array( $handle, $deferred_style_handles, true ) ) {
			// phpcs:disable WordPress.WP.EnqueuedResources.NonEnqueuedStylesheet
			// An explanation of this technique can be found here: https://www.filamentgroup.com/lab/load-css-simpler/.
			$html = <<<DEFERREDCSS
			<link rel="stylesheet" href="$href" media="print" onload="this.media='all'">
DEFERREDCSS;
		}
		return $html;
	}

	/**
	 * Add sizes to the image size selector in the Image block's settings sidebar
	 */
	public function setup_image_sizes() {
		// These array keys should match the image sizes added
		// through add_image_size (search for them in the master theme).
		$custom_sizes['articles-medium-large'] = 'Articles Medium Large';
		$custom_sizes['retina-large']          = 'Retina Large';
		add_filter(
			'image_size_names_choose',
			function( $sizes ) use ( $custom_sizes ) {
				return array_merge( $sizes, $custom_sizes );
			}
		);
	}

	/**
	 * Load internationalization (i18n) for this plugin.
	 * References: http://codex.wordpress.org/I18n_for_WordPress_Developers
	 */
	public function load_i18n() {
		load_plugin_textdomain( 'planet4-blocks', false, P4GBKS_PLUGIN_DIRNAME . '/languages/' );
		load_plugin_textdomain( 'planet4-blocks-backend', false, P4GBKS_PLUGIN_DIRNAME . '/languages/' );
	}

	/**
	 * @param string $filepath Absolute path to the file.
	 * @return int timestamp of file creation
	 */
	public static function file_ver( string $filepath ): int {
		$ctime = filectime( $filepath );
		if ( $ctime ) {
			return $ctime;
		}

		return time();
	}

	/**
	 * Enqueue a local, publicly accessible script.
	 *
	 * @see wp_enqueue_script()
	 *
	 * @param string   $handle    Name of the script. Should be unique.
	 * @param string   $rel_path  Path to the script, relative to P4GBKS_PLUGIN_DIR.
	 * @param string[] $deps      Optional. An array of registered script handles this script depends on. Default empty array.
	 * @param bool     $in_footer Optional. Whether to enqueue the script before </body> instead of in the <head>.
	 *                                Default 'false'.
	 */
	public static function enqueue_local_script(
		string $handle,
		string $rel_path,
		array $deps = [],
		bool $in_footer = true
	): void {
		wp_enqueue_script(
			$handle,
			trailingslashit( P4GBKS_PLUGIN_URL ) . $rel_path,
			$deps,
			self::file_ver( trailingslashit( P4GBKS_PLUGIN_DIR ) . $rel_path ),
			$in_footer
		);
	}
}

