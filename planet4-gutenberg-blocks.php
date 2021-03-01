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
	'planet4-blocks-beta/accordion',
	'planet4-blocks/counter',
	'planet4-blocks/gallery',
	'planet4-blocks/take-action-boxout',
	'planet4-blocks/spreadsheet',
	'planet4-blocks/timeline',
];

// pages allow all block types.
const PAGE_BLOCK_TYPES = [
	'planet4-blocks-beta/accordion',
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
	'planet4-blocks/split-two-columns',
	'planet4-blocks/spreadsheet',
	'planet4-blocks/submenu',
	'planet4-blocks/take-action-boxout',
	'planet4-blocks/timeline',
	'planet4-blocks/enform',
];

// campaigns allow all block types.
const CAMPAIGN_BLOCK_TYPES = [
	'planet4-blocks-beta/accordion',
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
	'planet4-blocks/social-media-cards',
	'planet4-blocks/spreadsheet',
	'planet4-blocks/sub-pages',
	'planet4-blocks/timeline',
	'planet4-blocks/enform',
];

/**
 * Allowed block types based on post type
 *
 * @param array  $allowed_block_types array of allowed block types.
 * @param object $post current post.
 *
 * @return array of all blocks allowed.
 */
function set_allowed_block_types( $allowed_block_types, $post ) {
	// phpcs:disable Squiz.PHP.CommentedOutCode.Found -- allow these comments
	$wordpress_blocks = [
		'core/block',
		'core/paragraph',
		'core/heading',
		'core/image',
		// 'core/gallery', // functionality replaced by P4 galleries.
		'core/list',
		'core/quote', // TODO: Styling or removal.
		// 'core/audio', // removed, not needed.
		// 'core/cover', // removed, not needed.
		'core/file',
		// 'core/video', // TODO: Decision. Ideally only allow embedded video.
		// 'core/preformatted', // removed, not needed.
		// 'core/code', // functionality not needed and not styled.
		'core/html',
		'core/table', // TODO: Styling.
		// 'core/pullquote', // removed, normal quote element is available.
		// 'core/verse', // removed, not needed, not styled.
		'core/buttons', // TODO: Styling.
		// 'core/media-text' // removed, not needed.
		// 'core/more', // removed, not needed.
		// 'core/nextpage', // removed, not needed.
		'core/separator', // TODO: Styling.
		'core/spacer',
		'core/shortcode',
		// 'core/archives', // removed, not needed.
		// 'core/categories', // removed, not needed.
		// 'core/latest-comments', // removed, not needed.
		// 'core/latest-posts', // removed, functionality replaced by P4 article list.
		'core/embed',
		'core-embed/twitter',
		'core-embed/youtube',
		'core-embed/facebook',
		'core-embed/instagram',
		'core-embed/wordpress',
		'core-embed/soundcloud',
		'core-embed/spotify',
		'core-embed/flickr',
		'core-embed/vimeo',
		// 'core-embed/animoto', // removed, not needed.
		// 'core-embed/cloudup', // removed, not needed.
		// 'core-embed/collegehumor', // removed, not needed.
		'core-embed/dailymotion',
		'core-embed/funnyordie',
		// 'core-embed/hulu', // removed, not needed.
		'core-embed/imgur',
		'core-embed/issuu',
		'core-embed/kickstarter',
		'core-embed/meetup-com',
		'core-embed/mixcloud',
		'core-embed/photobucket',
		'core-embed/polldaddy',
		'core-embed/reddit',
		// 'core-embed/reverbnation', // removed, not needed.
		// 'core-embed/screencast', // removed, not needed.
		'core-embed/scribd',
		'core-embed/slideshare',
		// 'core-embed/smugmug', // removed, not needed.
		'core-embed/speaker',
		'core-embed/ted',
		// 'core-embed/tumblr', // removed, not needed.
		'core-embed/videopress',
		// 'core-embed/wordpress-tv', // removed, not needed.
	];
	// phpcs:enable

	$migration_ran = MigrationLog::from_wp_options()->already_ran( M001EnableEnFormFeature::get_id() );

	$enform_active = ! $migration_ran || Features::is_active( Features::ENGAGING_NETWORKS );

	$page_block_types     = array_merge( PAGE_BLOCK_TYPES, ! $enform_active ? [] : [ 'planet4-blocks/enform' ] );
	$campaign_block_types = array_merge( CAMPAIGN_BLOCK_TYPES, ! $enform_active ? [] : [ 'planet4-blocks/enform' ] );

	$all_allowed_p4_block_types = [
		'post'     => POST_BLOCK_TYPES,
		'page'     => $page_block_types,
		'campaign' => $campaign_block_types,
	];

	$allowed_p4_block_types = $all_allowed_p4_block_types[ $post->post_type ];

	if ( empty( $allowed_p4_block_types ) ) {
		return $wordpress_blocks;
	}

	$allowed_block_types = array_merge( $wordpress_blocks, $allowed_p4_block_types );

	return $allowed_block_types;
}

add_filter( 'allowed_block_types', 'set_allowed_block_types', 10, 2 );

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
P4GBKS\Loader::get_instance(
	[
		// --- Add here your own Block Controller ---
		// DEPRECATED: Blocks could be registered inside Loader class
		// 'P4GBKS\Controllers\Blocks\NewCovers_Controller'
		\P4GBKS\Controllers\Menu\Settings_Controller::class,
		\P4GBKS\Controllers\Menu\Blocks_Usage_Controller::class,
		\P4GBKS\Controllers\Menu\Classic_Blocks_Usage::class,
		\P4GBKS\Controllers\Menu\Reusable_Blocks_Controller::class,
		\P4GBKS\Controllers\Menu\Archive_Import::class,
		\P4GBKS\Controllers\Menu\Postmeta_Check_Controller::class,
		\P4GBKS\Controllers\Menu\Enform_Post_Controller::class,
		\P4GBKS\Controllers\Menu\En_Settings_Controller::class,
		\P4GBKS\Controllers\Api\Rest_Controller::class,
	],
	\P4GBKS\Views\View::class
);

\P4GBKS\Rest\Rest_Api::add_endpoints();
