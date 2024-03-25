<?php
/**
 * Plugin Name: Planet4 - Gutenberg Blocks
 * Description: Contains the Gutenberg blocks that are used by Planet4 project.
 * Plugin URI: http://github.com/greenpeace/planet4-plugin-gutenberg-blocks
 * Php Version: 7.0
 *
 * Author: Greenpeace International
 * Author URI: http://www.greenpeace.org/
 * Text Domain: planet4-blocks
 *
 * License:     GPLv3
 * Copyright (C) 2018 Greenpeace International
 *
 * @package P4GBKS
 */

// Exit if accessed directly.
use P4\MasterTheme\Features;
use P4\MasterTheme\MigrationLog;
use P4\MasterTheme\Migrations\M001EnableEnFormFeature;

defined( 'ABSPATH' ) || die( 'Direct access is forbidden !' );


$qmlog = function($hook_name) {
    return function() use ($hook_name) {
        $now = DateTime::createFromFormat('U.u', microtime(true));
        do_action('qm/debug', sprintf('%s :: %s', $now->format('H:i:s:u'), $hook_name));
    };
};
$qmlog('loading_p4_plugin')();
add_action('admin_bar_menu', $qmlog('admin_bar_menu'));
add_action('wp_head', $qmlog('wp_head'));
add_action('wp_footer', $qmlog('wp_footer'));
add_action('shutdown', $qmlog('shutdown'));
add_action('plugins_loaded', $qmlog('plugins_loaded start'), -PHP_INT_MAX);
add_action('plugins_loaded', $qmlog('plugins_loaded end'), PHP_INT_MAX);
add_action('setup_theme', $qmlog('setup_theme start'), -PHP_INT_MAX);
add_action('setup_theme', $qmlog('setup_theme end'), PHP_INT_MAX);
add_action('after_setup_theme', $qmlog('after_setup_theme start'), -PHP_INT_MAX);
add_action('after_setup_theme', $qmlog('after_setup_theme end'), PHP_INT_MAX);
add_action('init', $qmlog('init start'), -PHP_INT_MAX);
add_action('init', $qmlog('init -1000'), -1000);
add_action('init', $qmlog('init -100'), -100);
add_action('init', $qmlog('init -10'), -10);
add_action('init', $qmlog('init -1'), -1);
add_action('init', $qmlog('init 2'), 2);
add_action('init', $qmlog('init 5'), 5);
add_action('init', $qmlog('init 9'), 9);
add_action('init', $qmlog('init 10'), 10);
add_action('init', $qmlog('init 11'), 11);
add_action('init', $qmlog('init 12'), 12);
add_action('init', $qmlog('init 16'), 16);
add_action('init', $qmlog('init 25'), 25);
add_action('init', $qmlog('init 35'), 35);
add_action('init', $qmlog('init 100'), 100);
add_action('init', $qmlog('init 1001'), 1001);
add_action('init', $qmlog('init 1600'), 1600);
add_action('init', $qmlog('init 10000'), 10000);
add_action('init', $qmlog('init end'), PHP_INT_MAX);
add_action('wp_loaded', $qmlog('wp_loaded start'), -PHP_INT_MAX);
add_action('wp_loaded', $qmlog('wp_loaded end'), PHP_INT_MAX);
add_action('wp', $qmlog('wp'));


add_action('wpml_multilingual_options', $qmlog('wpml_multilingual_options start'), -PHP_INT_MAX);
add_action('wpml_multilingual_options', $qmlog('wpml_multilingual_options end'), PHP_INT_MAX);

add_action('wpml_element_type', $qmlog('wpml_element_type'));
add_action('wpml_setting', $qmlog('wpml_setting'));
add_action('wpml_sub_setting', $qmlog('wpml_sub_setting'));
add_action('wpml_editor_cf_to_display', $qmlog('wpml_editor_cf_to_display'));
add_action('wpml_tm_save_translation_cf', $qmlog('wpml_tm_save_translation_cf'));
add_action('wpml_tm_xliff_export_translated_cf', $qmlog('wpml_tm_xliff_export_translated_cf'));
add_action('wpml_tm_xliff_export_original_cf', $qmlog('wpml_tm_xliff_export_original_cf'));
add_action('wpml_duplicate_generic_string', $qmlog('wpml_duplicate_generic_string'));
// add_action('wpml_translatable_user_meta_fields', $qmlog('wpml_translatable_user_meta_fields'), -1);
add_action('wpml_cross_domain_language_data', $qmlog('wpml_cross_domain_language_data'));
add_action('wpml_get_cross_domain_language_data', $qmlog('wpml_get_cross_domain_language_data'));
add_action('wpml_loaded', $qmlog('wpml_loaded'));
add_action('wpml_st_loaded', $qmlog('wpml_st_loaded'));
add_action('wpml_tm_loaded', $qmlog('wpml_tm_loaded'));
add_action('wpml_hide_management_column', $qmlog('wpml_hide_management_column'));
//add_action('wpml_ls_directories_to_scan', $qmlog('wpml_ls_directories_to_scan'));
//add_action('wpml_ls_model_css_classes', $qmlog('wpml_ls_model_css_classes'));
//add_action('wpml_ls_model_language_css_classes', $qmlog('wpml_ls_model_language_css_classes'));
add_action('wpml_tf_feedback_open_link', $qmlog('wpml_tf_feedback_open_link'));
add_action('wpml_sync_custom_field', $qmlog('wpml_sync_custom_field'));
add_action('wpml_sync_all_custom_fields', $qmlog('wpml_sync_all_custom_fields'));
add_action('wpml_is_redirected', $qmlog('wpml_is_redirected'));
add_action('wpml_post_edit_meta_box_context', $qmlog('wpml_post_edit_meta_box_context'));
add_action('wpml_sync_custom_field_copied_value', $qmlog('wpml_sync_custom_field_copied_value'));
//add_action('wpml_ls_enable_ajax_navigation', $qmlog('wpml_ls_enable_ajax_navigation'));
//add_action('icl_ls_languages', $qmlog('icl_ls_languages'));

add_action('wpml_get_element_translations', $qmlog('wpml_get_element_translations'));
add_action('wpml_update_active_languages', $qmlog('wpml_update_active_languages'));
//add_action('wpml_ls_exclude_in_menu', $qmlog('wpml_ls_exclude_in_menu'));
add_action('wpml_must_translate_canonical_url', $qmlog('wpml_must_translate_canonical_url'));
add_action('wpml_alternate_hreflang', $qmlog('wpml_alternate_hreflang'));
add_action('wpml_head_langs', $qmlog('wpml_head_langs'));
add_action('wpml_decode_custom_field', $qmlog('wpml_decode_custom_field'));
add_action('wpml_encode_custom_field', $qmlog('wpml_encode_custom_field'));
add_action('wpml_enqueued_browser_redirect_language', $qmlog('wpml_enqueued_browser_redirect_language'));
add_action('wpml_enqueue_browser_redirect_language', $qmlog('wpml_enqueue_browser_redirect_language'));
add_action('wpml_browser_redirect_language_params', $qmlog('wpml_browser_redirect_language_params'));
add_action('wpml_language_switcher', $qmlog('wpml_language_switcher'));
//add_action('wpml_active_languages', $qmlog('wpml_active_languages'));
add_action('wpml_element_trid', $qmlog('wpml_element_trid'));
add_action('wpml_language_has_switched', $qmlog('wpml_language_has_switched'), -1);
add_action('wpml_is_rtl', $qmlog('wpml_is_rtl'));
add_action('wpml_language_is_active', $qmlog('wpml_language_is_active'));
add_action('wpml_add_language_form_field', $qmlog('wpml_add_language_form_field'));
add_action('wpml_footer_language_selector', $qmlog('wpml_footer_language_selector'));
add_action('wpml_add_language_selector', $qmlog('wpml_add_language_selector'));
add_action('wpml_default_language', $qmlog('wpml_default_language'));
add_action('wpml_current_language', $qmlog('wpml_current_language'));
add_action('wpml_translated_language_name', $qmlog('wpml_translated_language_name'));
add_action('wpml_display_language_names', $qmlog('wpml_display_language_names'));
add_action('wpml_post_language_details', $qmlog('wpml_post_language_details'));
add_action('wpml_switch_language', $qmlog('wpml_switch_language'));
add_action('wpml_element_language_code', $qmlog('wpml_element_language_code'));
add_action('wpml_element_language_details', $qmlog('wpml_element_language_details'));
add_action('wpml_switch_language_for_email', $qmlog('wpml_switch_language_for_email'));
add_action('wpml_restore_language_from_email', $qmlog('wpml_restore_language_from_email'));
add_action('wpml_home_url', $qmlog('wpml_home_url'));
add_action('wpml_element_link', $qmlog('wpml_element_link'));
add_action('wpml_object_id', $qmlog('wpml_object_id'));
add_action('wpml_translate_single_string', $qmlog('wpml_translate_single_string'));
add_action('wpml_translate_string', $qmlog('wpml_translate_string'));
add_action('wpml_unfiltered_admin_string', $qmlog('wpml_unfiltered_admin_string'));
add_action('wpml_permalink', $qmlog('wpml_permalink'));
add_action('wpml_elements_without_translations', $qmlog('wpml_elements_without_translations'));
add_action('wpml_get_translated_slug', $qmlog('wpml_get_translated_slug'));
add_action('wpml_element_translation_type', $qmlog('wpml_element_translation_type'));
add_action('wpml_element_has_translations', $qmlog('wpml_element_has_translations'));
add_action('wpml_master_post_from_duplicate', $qmlog('wpml_master_post_from_duplicate'));
add_action('wpml_post_duplicates', $qmlog('wpml_post_duplicates'));
add_action('wpml_is_translated_post_type', $qmlog('wpml_is_translated_post_type'));
add_action('wpml_is_translated_taxonomy', $qmlog('wpml_is_translated_taxonomy'));
add_action('wpml_admin_make_post_duplicates', $qmlog('wpml_admin_make_post_duplicates'));
add_action('wpml_make_post_duplicates', $qmlog('wpml_make_post_duplicates'));
add_action('wpml_register_single_string', $qmlog('wpml_register_single_string'));
add_action('wpml_register_string', $qmlog('wpml_register_string'));
add_action('wpml_delete_package_action', $qmlog('wpml_delete_package_action'));
add_action('wpml_show_package_language_ui', $qmlog('wpml_show_package_language_ui'));
add_action('wpml_set_element_language_details', $qmlog('wpml_set_element_language_details'));
add_action('wpml_delete_package', $qmlog('wpml_delete_package'));
add_action('wpml_copy_post_to_language', $qmlog('wpml_copy_post_to_language'));

add_action('icl_after_set_default_language', $qmlog('icl_after_set_default_language'), -1);
add_action('wpml_before_init', $qmlog('wpml_before_init'), -1);
add_action('wpml_after_init', $qmlog('wpml_after_init'), -1);
add_action('wpml_load_dependencies', $qmlog('wpml_load_dependencies'), -1);



/*
========================
	C O N S T A N T S
========================
*/
if ( ! defined( 'P4GBKS_REQUIRED_PHP' ) ) {
	define( 'P4GBKS_REQUIRED_PHP', '7.0' );
}
if ( ! defined( 'P4GBKS_REQUIRED_PLUGINS' ) ) {
	define(
		'P4GBKS_REQUIRED_PLUGINS',
		[
			'timber' => [
				'min_version' => '1.9.0',
				'rel_path'    => 'timber-library/timber.php',
			],
		]
	);
}
if ( ! defined( 'P4GBKS_PLUGIN_BASENAME' ) ) {
	define( 'P4GBKS_PLUGIN_BASENAME', plugin_basename( __FILE__ ) );
}
if ( ! defined( 'P4GBKS_PLUGIN_DIRNAME' ) ) {
	define( 'P4GBKS_PLUGIN_DIRNAME', dirname( P4GBKS_PLUGIN_BASENAME ) );
}
if ( ! defined( 'P4GBKS_PLUGIN_DIR' ) ) {
	define( 'P4GBKS_PLUGIN_DIR', WP_PLUGIN_DIR . '/' . P4GBKS_PLUGIN_DIRNAME );
}
if ( ! defined( 'P4GBKS_PLUGIN_URL' ) ) {
	define( 'P4GBKS_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
}
if ( ! defined( 'P4GBKS_PLUGIN_NAME' ) ) {
	define( 'P4GBKS_PLUGIN_NAME', 'Planet4 - Gutenberg Blocks' );
}
if ( ! defined( 'P4GBKS_PLUGIN_SHORT_NAME' ) ) {
	define( 'P4GBKS_PLUGIN_SHORT_NAME', 'Blocks' );
}
if ( ! defined( 'P4GBKS_PLUGIN_SLUG_NAME' ) ) {
	define( 'P4GBKS_PLUGIN_SLUG_NAME', 'plugin_blocks_report' );
}
if ( ! defined( 'P4GBKS_INCLUDES_DIR' ) ) {
	define( 'P4GBKS_INCLUDES_DIR', P4GBKS_PLUGIN_DIR . '/templates/' );
}
if ( ! defined( 'P4GBKS_TEMPLATE_OVERRIDE_SUBDIR' ) ) {
	define( 'P4GBKS_TEMPLATE_OVERRIDE_SUBDIR', '/templates/plugins/planet4-plugin-gutenberg-blocks/includes/' );
}
if ( ! defined( 'P4GBKS_ADMIN_DIR' ) ) {
	define( 'P4GBKS_ADMIN_DIR', plugins_url( P4GBKS_PLUGIN_DIRNAME . '/admin/' ) );
}
if ( ! defined( 'P4GBKS_LANGUAGES' ) ) {
	define(
		'P4GBKS_LANGUAGES',
		[
			'en_US' => 'English',
			'el_GR' => 'Ελληνικά',
		]
	);
}

if ( ! defined( 'P4GBKS_ALLOWED_PAGETYPE' ) ) {
	define( 'P4GBKS_ALLOWED_PAGETYPE', [ 'page', 'campaign' ] );
}
if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
	define( 'WP_UNINSTALL_PLUGIN', P4GBKS_PLUGIN_BASENAME );
}

if ( ! defined( 'P4GBKS_EN_SLUG_NAME' ) ) {
	define( 'P4GBKS_EN_SLUG_NAME', 'engagingnetworks' );
}

if ( ! defined( 'P4_REST_SLUG' ) ) {
	define( 'P4_REST_SLUG', 'planet4-engaging-networks' );
}

require_once __DIR__ . '/classes/class-loader.php';
require_once ABSPATH . 'wp-admin/includes/plugin.php';

/*
==========================
	F I L T E R
==========================
*/

const POST_BLOCK_TYPES = [
	'planet4-blocks/accordion',
	'planet4-blocks/articles',
	'planet4-blocks/counter',
	'planet4-blocks/gallery',
	'planet4-blocks/social-media',
	'planet4-blocks/spreadsheet',
	'planet4-blocks/take-action-boxout',
	'planet4-blocks/timeline',
	'leadin/hubspot-form-block',
	'gravityforms/form',
];

// pages allow all block types.
const PAGE_BLOCK_TYPES = [
	'planet4-blocks/accordion',
	'planet4-blocks/articles',
	'planet4-blocks/carousel-header',
	'planet4-blocks/columns',
	'planet4-blocks/cookies',
	'planet4-blocks/counter',
	'planet4-blocks/covers',
	'planet4-blocks/gallery',
	'planet4-blocks/happypoint',
	'planet4-blocks/media-video',
	'planet4-blocks/social-media',
	'planet4-blocks/spreadsheet',
	'planet4-blocks/submenu',
	'planet4-blocks/timeline',
	'planet4-blocks/enform',
	'planet4-blocks/guestbook',
	'leadin/hubspot-form-block',
	'gravityforms/form',
];

const BETA_PAGE_BLOCK_TYPES = [
	'planet4-blocks/share-buttons',
];

// campaigns allow all block types.
const CAMPAIGN_BLOCK_TYPES = [
	'planet4-blocks/accordion',
	'planet4-blocks/articles',
	'planet4-blocks/carousel-header',
	'planet4-blocks/columns',
	'planet4-blocks/cookies',
	'planet4-blocks/counter',
	'planet4-blocks/covers',
	'planet4-blocks/gallery',
	'planet4-blocks/happypoint',
	'planet4-blocks/media-video',
	'planet4-blocks/social-media',
	'planet4-blocks/spreadsheet',
	'planet4-blocks/sub-pages',
	'planet4-blocks/timeline',
	'planet4-blocks/enform',
	'planet4-blocks/guestbook',
	'leadin/hubspot-form-block',
	'gravityforms/form',
];

const BETA_CAMPAIGN_BLOCK_TYPES = [
	'planet4-blocks/social-media-cards',
	'planet4-blocks/share-buttons',
];

// action page type allow all block types.
const ACTION_BLOCK_TYPES = [
	'planet4-blocks/accordion',
	'planet4-blocks/articles',
	'planet4-blocks/carousel-header',
	'planet4-blocks/columns',
	'planet4-blocks/cookies',
	'planet4-blocks/counter',
	'planet4-blocks/covers',
	'planet4-blocks/gallery',
	'planet4-blocks/happypoint',
	'planet4-blocks/media-video',
	'planet4-blocks/social-media',
	'planet4-blocks/spreadsheet',
	'planet4-blocks/submenu',
	'planet4-blocks/timeline',
	'planet4-blocks/enform',
	'planet4-blocks/guestbook',
	'leadin/hubspot-form-block',
	'gravityforms/form',
	'planet4-blocks/sub-pages',
];

const BETA_ACTION_BLOCK_TYPES = [
	'planet4-blocks/social-media-cards',
	'planet4-blocks/share-buttons',
];

const BLOCK_TEMPLATES = [
	'planet4-block-templates/deep-dive',
	'planet4-block-templates/highlighted-cta',
	'planet4-block-templates/quick-links',
	'planet4-block-templates/reality-check',
	'planet4-block-templates/issues',
	'planet4-block-templates/page-header',
	'planet4-block-templates/side-image-with-text-and-cta',

	// layouts.
	'planet4-block-templates/deep-dive-topic',
	'planet4-block-templates/homepage',
	'planet4-block-templates/campaign',
	'planet4-block-templates/take-action',
	'planet4-block-templates/action',
	'planet4-block-templates/get-informed',
	'planet4-block-templates/high-level-topic',
];

/**
 * Allowed block types based on post type
 *
 * @param array  $allowed_block_types array of allowed block types.
 * @param object $context Current editor context.
 *
 * @return array|bool Array with allowed types, or true if all blocks are allowed.
 */
function set_allowed_block_types( $allowed_block_types, $context ) {
	if ( Features::is_active( 'allow_all_blocks' ) ) {
		return true;
	}
	$post_type = $context->post ? $context->post->post_type : null;
	// https://github.com/WordPress/gutenberg/blob/trunk/lib/blocks.php.
	$wordpress_blocks = [
		'core/block',
		'core/paragraph',
		'core/heading',
		'core/image',
		'core/list',
		'core/list-item',
		'core/quote',
		'core/file',
		'core/html',
		'core/table',
		'core/buttons',
		'core/button',
		'core/separator',
		'core/spacer',
		'core/shortcode',
		'core/group',
		'core/columns',
		'core/column',
		'core/embed',
		'core/media-text',
		'core-embed/twitter',
		'core-embed/youtube',
		'core-embed/facebook',
		'core-embed/instagram',
		'core-embed/wordpress',
		'core-embed/soundcloud',
		'core-embed/spotify',
		'core-embed/flickr',
		'core-embed/vimeo',
		'core-embed/dailymotion',
		'core-embed/funnyordie',
		'core-embed/imgur',
		'core-embed/issuu',
		'core-embed/kickstarter',
		'core-embed/meetup-com',
		'core-embed/mixcloud',
		'core-embed/photobucket',
		'core-embed/polldaddy',
		'core-embed/reddit',
		'core-embed/scribd',
		'core-embed/slideshare',
		'core-embed/speaker',
		'core-embed/ted',
		'core-embed/videopress',
	];

	$migration_ran = MigrationLog::from_wp_options()->already_ran( M001EnableEnFormFeature::get_id() );

	$enform_active = ! $migration_ran || Features::is_active( 'allow_all_blocks' );

	$page_block_types = array_merge(
		PAGE_BLOCK_TYPES,
		! Features::is_active( 'beta_blocks' ) ? [] : BETA_PAGE_BLOCK_TYPES,
		! $enform_active ? [] : [ 'planet4-blocks/enform' ],
		(bool) planet4_get_option( 'new_ia' ) ? [] : [ 'planet4-blocks/split-two-columns' ],
		BLOCK_TEMPLATES,
	);

	$campaign_block_types = array_merge(
		CAMPAIGN_BLOCK_TYPES,
		! Features::is_active( 'beta_blocks' ) ? [] : BETA_CAMPAIGN_BLOCK_TYPES,
		! $enform_active ? [] : [ 'planet4-blocks/enform' ],
		BLOCK_TEMPLATES,
	);

	$action_block_types = array_merge(
		ACTION_BLOCK_TYPES,
		! Features::is_active( 'beta_blocks' ) ? [] : BETA_ACTION_BLOCK_TYPES,
		! $enform_active ? [] : [ 'planet4-blocks/enform' ],
		BLOCK_TEMPLATES,
	);

	$all_allowed_p4_block_types = [
		'post'      => POST_BLOCK_TYPES,
		'page'      => $page_block_types,
		'campaign'  => $campaign_block_types,
		'p4_action' => $action_block_types,
	];

	$allowed_p4_block_types = $all_allowed_p4_block_types[ $post_type ] ?? $all_allowed_p4_block_types['page'];

	return array_merge( $wordpress_blocks, $allowed_p4_block_types );
}

add_filter( 'allowed_block_types_all', 'set_allowed_block_types', 10, 2 );

/**
 * @param array $block the block being rendered.
 * For the "link_new_tab" field the type was initially incorrectly set to
 * string instead of boolean. As a result we need to catch all empty strings here and
 * turn them into false.
 *
 * Note that this DOES NOT get called when a block is rendered using the REST API column rendered *sigh*.
 * Even better, there is no hook that allows to modify the request before the parameters are validated.
 * As this is only for the block renderer of columns, a good option would be to replace the invalid argument
 * on the frontend before the API is called.
 * This should be sufficient as we can fix the data after this fix hsa been applied, after which we can remove the workaround.
 *
 * @return array
 */
function empty_string_to_false_in_link_new_tab_in_columns_blocks( $block ): array {
	// Yes, that's right, WordPress doesn't follow its own rules here so we have a camel among snakes.
	if ( 'planet4-blocks/columns' === $block['blockName'] ?? null ) {
		foreach ( $block['attrs']['columns'] ?? [] as $key => $column ) {
			if ( isset( $column['link_new_tab'] ) && true !== $column['link_new_tab'] ) {
				$block['attrs']['columns'][ $key ]['link_new_tab'] = false;
			}
		}
	}

	return $block;
}

add_filter( 'render_block_data', 'empty_string_to_false_in_link_new_tab_in_columns_blocks' );

// Add a filter to prevent the main query from being run on the DB or ES. This is needed because we actually executed a
// separate query for our results and never use the result of the main query. Returning an empty array in
// posts_pre_query for the main query on a search page short circuits the main query. However we also need to remove the
// filter that is set up by ElasticPress. Then we call it manually in our filter when we're not performing the main
// query of search.

// Even though all instances have ElasticPress plugin, this is run during unit tests where the ElasticPress plugin is
// not (yet?) loaded, causing a fatal error.
if ( class_exists( Elasticpress\Indexables::class ) ) {

	remove_filter(
		'posts_pre_query',
		[
			\ElasticPress\Indexables::factory()->get( 'post' )->query_integration,
			'get_es_posts',
			10,
		]
	);

	add_filter(
		'posts_pre_query',
		function ( $posts, $query ) {
			if ( is_search() && ! is_admin() && $query->is_main_query() ) {
				return [];
			}
			return \ElasticPress\Indexables::factory()->get( 'post' )->query_integration->get_es_posts(
				$posts,
				$query
			);
		},
		10,
		2
	);
}

add_filter( 'timber/twig', 'p4_blocks_en_forms_twig_filters' );

/**
 * Adds functionality to Twig.
 *
 * @param \Twig\Environment $twig The Twig environment.
 * @return \Twig\Environment
 */
function p4_blocks_en_forms_twig_filters( $twig ) {
	// Adding functions as filters.
	$twig->addFilter(
		new Twig_SimpleFilter(
			'object_to_array',
			function ( $std_class_object ) {
				$response = [];
				foreach ( $std_class_object as $key => $value ) {
					$response[ $key ] = $value;
				}
				return $response;
			}
		)
	);

	return $twig;
}

/*
==========================
	L O A D  P L U G I N
==========================
*/
P4GBKS\Loader::get_instance();
\P4GBKS\Rest\Rest_Api::add_endpoints();

$remove_rtl_fix = function (): void {
	global $sitepress;
	// This RTL fix does not seem a good idea. Probably it was a bad attempt at solving the issues `url_to_postid`
	// creates.
	remove_action( 'wp_head', [ $sitepress, 'rtl_fix' ] );
	remove_action( 'admin_print_styles', [ $sitepress, 'rtl_fix' ] );

	// This caused `switch_lang` to get called. As a result the RTL fix messed up.
	remove_filter( 'url_to_postid', [ $sitepress, 'url_to_postid' ] );
};
$remove_rtl_fix();
add_action( 'wpml_after_startup', $remove_rtl_fix, 10, 0 );

$breakpoints = [
	[
		'screen' => 1600,
		'width'  => '1320px',
	],
	[
		'screen' => 1200,
		'width'  => '1140px',
	],
	[
		'screen' => 992,
		'width'  => '960px',
	],
	[
		'screen' => 768,
		'width'  => '720px',
	],
	[
		'screen' => 601,
		'width'  => '540px',
	],
	[
		'screen' => 577,
		'width'  => '540px',
	],
];

add_filter(
	'render_block_core/query-pagination',
	function ( $content ) {
		// Check if prev and next buttons are disabled.
		if (
			str_contains( $content, 'wp-block-query-pagination-previous disabled' )
			&& str_contains( $content, 'wp-block-query-pagination-next disabled' )
		) {
			return null;
		}

		return $content;
	},
	10,
	3
);

add_filter(
	'render_block_core/query-pagination-previous',
	function ( $content, $parsed, $block ) {
		$button_label = __( 'Prev', 'planet4-blocks' );

		if ( ! array_key_exists( 'label', $block->attributes ) ) {
			$block->attributes['label'] = $button_label;
			return $block->render();
		}

		// Check if the button isn't rendered, then return it.
		if ( empty( $content ) ) {
			return '<a href="/" class="wp-block-query-pagination-previous disabled">' . $button_label . '</a>';
		}

		return $content;
	},
	10,
	3
);

add_filter(
	'render_block_core/query-pagination-next',
	function ( $content, $parsed, $block ) {
		$button_label = __( 'Next', 'planet4-blocks' );

		if ( ! array_key_exists( 'label', $block->attributes ) ) {
			$block->attributes['label'] = $button_label;
			return $block->render();
		}

		// Check if the button isn't rendered, then return it.
		if ( empty( $content ) ) {
			return '<a href="/" class="wp-block-query-pagination-next disabled">' . $button_label . '</a>';
		}

		return $content;
	},
	10,
	3
);

add_filter(
	'render_block',
	function ( $block_content, $block, WP_Block $instance ) use ( $breakpoints ) {
		if ( 'core/query' === $block['blockName'] ) {
			$column_count = $instance->attributes['displayLayout']['columns'] ?? null;
			if ( ! $column_count || 1 === $column_count ) {
				return $block_content;
			}

			$sizes = array_map(
				function ( $breakpoint ) use ( $column_count ) {
					$screen         = $breakpoint['screen'];
					$container      = $breakpoint['width'];
					$cols_minus_one = $column_count - 1;

					return "(min-width: ${screen}px) calc($container / $column_count - 1.25em * $cols_minus_one)";
				},
				$breakpoints
			);

			$sizes_attr = 'sizes="' . implode( ', ', array_merge( $sizes, [ 'calc(100vw - 24px)' ] ) ) . '"';

			// Assume all images are full width in a container.
			$block_content = preg_replace( '/sizes=".*"/', $sizes_attr, $block_content );
		}

		if ( 'core/media-text' === $block['blockName'] && array_key_exists( 'mediaId', $instance->attributes ) ) {
			$media_id    = $instance->attributes['mediaId'];
			$media_width = $instance->attributes['mediaWidth'] ?? 50;

			$srcset = wp_get_attachment_image_srcset( $media_id, 'full' );

			if ( 'full' === $instance->attributes['align'] ) {
				$sizes = ! $instance->attributes['isStackedOnMobile'] ? "${media_width}vw"
					: "(min-width: 601px) {$media_width}vw, 100vw";

				$sizes_attr = "sizes=\"{$sizes}\"";
			} else {
				$default = ! $instance->attributes['isStackedOnMobile'] ? "calc((100vw - 24px) * $media_width / 100)"
					: 'calc(100vw - 24px)';
				$sizes   = implode(
					',',
					array_map(
						function ( $breakpoint ) use ( $instance, $media_width ) {
							$screen       = $breakpoint['screen'];
							$container    = $breakpoint['width'];
							$should_stack = $screen < 600 && $instance->attributes['isStackedOnMobile'];
							$fraction     = $should_stack ? 1 : round( 100 / $media_width, 4 );

							// Currently, we need to subtract 24px for Bootstrap container.
							return "(min-width: ${screen}px) calc(($container - 24px) / $fraction)";
						},
						$breakpoints
					)
				);

				$sizes_attr = "sizes=\"{$sizes}, {$default}\"";
			}

			$image_class_start = "class=\"wp-image-$media_id ";

			$block_content = str_replace(
				$image_class_start,
				"$sizes_attr srcset=\"$srcset\" $image_class_start",
				$block_content
			);
		}

		return $block_content;
	},
	10,
	3
);
