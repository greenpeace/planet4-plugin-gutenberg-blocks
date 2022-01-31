=== Post Type Switcher ===
Author:            Triple J Software, Inc.
Author URI:        https://jjj.software
Donate link:       https://buy.stripe.com/7sI3cd2tK1Cy2lydQR
Plugin URI:        https://wordpress.org/plugins/post-type-switcher
License URI:       https://www.gnu.org/licenses/gpl-2.0.html
License:           GPLv2 or later
Contributors:      johnjamesjacoby, beatpanda, norcross
Tags:              post, page, type, types, post type
Requires PHP:      7.0
Requires at least: 5.0
Tested up to:      5.8
Stable tag:        3.2.1

A simple way to change a post's type in WordPress

== Description ==

This plugin adds a simple post-type drop-down to the post editor interface, allowing you to reassign any post to a new post type. It allows you to switch post's type while editing your post.

= Supported Types =

The plugin can convert nearly every combination of posts, pages, and even custom post types:

* Page to Post
* Post to Page
* Post to Custom
* Custom to Custom

As of 3.0.0, support for switching to or from Attachments was removed. This may come back in a subsequent version.

Invisible post types, such as revisions, menus, etc., are purposely excluded. But, if you need to access invisible post types, you can adjust the boundaries using the 'pts_post_type_filter' filter.

= Bulk Editing =

With bulk editing (thanks to Matthew Gerring) you can select all the posts in a certain type and convert them to a new type with one quick action.

= Block Editor =

With block-editor (aka Gutenberg) support (thanks to Daniel Bachhuber) you can switch between post-types that use either the Block Editor and the Classic one, without losing any of your embedded content.

== Installation ==

= Installation =
1. In your WordPress Dashboard go to "Plugins" -> "Add Plugin".
2. Search for "Post Type Switcher".
3. Install the plugin by pressing the "Install" button.
4. Activate the plugin by pressing the "Activate" button.
5. From the post edit screen, above the "Publish" button is the "Post Type" interface.
6. Change post types as needed.

= Minimum Requirements =
* WordPress version 5.0 or greater.
* PHP version 7.0.0 or greater.
* MySQL version 5.7 or greater.

= Recommended Requirements =
* Latest WordPress version.
* PHP version 8.0 or greater.
* MySQL version 8.0 or greater, or MariaDB 10.5 or greater.

== Frequently Asked Questions ==

= Why would I need this? =
You need to selectively change a posts type from one to another.

= Does this ruin my taxonomy associations? =
It should not. This plugin only changes the 'post_type' property of a post.

= Does this ruin block-editor content? =
It should not. Be careful when editing HTML content while switching between editor types!

= Will this delete my content? =
No. This plugin does not include any code capable of deleting anything.

Plugin conflicts are not unheard of and can be difficult to troubleshoot.

If you're worried, backup your database and deactivate all other plugins before using this tool.

If you're still worried, ask for help in the WordPress.org support forums.

== Screenshots ==
1. "Type" column in "Posts" screen.
2. "Post Type" interface in "Quick Edit".
3. "Post Type" interface in "Edit Post" screen.

== Changelog ==

= 3.2.1 =
* Update author
* Add sponsor link

= 3.2.0 =
* Block editor support

= 3.1.0 =
* Fix post targeting when called recursively

= 3.0.0 =
* Improved Quick-Edit and Bulk-Edit support
* Remove `attachment` type support for now, as there is no way to switch back
* Fix bug causing some post-types to switch unexpectedly

= 2.0.1 =
* Ensure quick-edit works with new procedure
* Quick-edit "Type" column works again!

= 2.0.0 =
* Improved plugin compatibility with WooThemes Sensei
* Filter post arguments vs. hook to save_post
* Add "post_type_switcher" action

= 1.7.0 =
* Add support for network activation

= 1.6.0 =
* Add textdomains for localization
* Load translation strings using load_plugin_textdomain()
* Before saving data chack if it's not an autosave using wp_is_post_autosave()
* Before saving data chack if it's not a revision using wp_is_post_revision()
* Security: Prevent direct access to directories
* Security: Translation strings escaping
* Add screenshots

= 1.5.0 - norcross =
* Fix multiple quickedit dropdowns

= 1.4.0 =
* Improve handling of non-public post types

= 1.3.0 =
* Fix saving of autodrafts

= 1.2.1 =
* Improved WordPress 3.9 integration (added dashicon to publish metabox)

= 1.2.0 =
* Add bulk editing to supported post types
* Props Matthew Gerring for bulk edit contribution

= 1.1.1 =
* Add is_admin() check to prevent theme-side interference
* Change save_post priority to 999 to avoid plugin compatibility issues
* Remove ending closing php tag
* HTML and PHPDoc improvements

= 1.1.0 =
* Fix revisions being nooped
* Fix malformed HTML for some user roles
* Make a singleton (meh...)

= 1.0.0 =
* Fix JS bugs
* Audit post save bail conditions
* Tweak UI for WordPress 3.3

= 0.3.0 =
* Use the API to change the post type, fixing a conflict with persistent object caches
* No longer requires JavaScript

= 0.2.0 =
* Disallow post types that are not public and do not have a visible UI

= 0.1.0 =
* Release
