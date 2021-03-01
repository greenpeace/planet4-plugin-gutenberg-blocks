<?php
/**
 * Base block class.
 *
 * @package P4GBKS
 */

namespace P4GBKS\Blocks;

/**
 * Class Base_Block
 *
 * @package P4GBKS\Blocks
 */
abstract class Base_Block {

	protected const CSS_VARIABLES_ATTRIBUTE = [
		'type'    => 'object',
		'default' => [],
	];

	public const BLOCK_NAMESPACE_PREFIX = 'planet4-blocks';

	/**
	 * Get all the data that will be needed to render the block correctly.
	 *
	 * @param array $fields This is the array of fields of this block.
	 *
	 * @return array The data to be passed in the View.
	 */
	abstract public function prepare_data( $fields ): array;

	/**
	 * @param array $attributes Block attributes.
	 *
	 * @return mixed
	 */
	public function render( $attributes, $content ) {

		var_dump($attributes);
		var_dump(htmlentities($content));
		die;

		$data = $this->prepare_data( $attributes );

		\Timber::$locations = P4GBKS_PLUGIN_DIR . '/templates/blocks';

		$block_output = \Timber::compile( static::BLOCK_NAME . '.twig', $data );

		// phpcs:ignore WordPress.WP.I18n.NonSingularStringLiteralText
		$empty_message = defined( 'static::EMPTY_MESSAGE' ) ? __( static::EMPTY_MESSAGE, 'planet4-blocks' ) : "Block content is empty. Check the block's settings or remove it.";

		// Return empty string if rendered output contains only whitespace or new lines.
		// If it is a rest request from editor/admin area, return a message that block has no content.
		$empty_content = $this->is_rest_request() ? '<div class="EmptyMessage">' . $empty_message . '</div>' : '';

		return ctype_space( $block_output ) ? $empty_content : $block_output;
	}

	/**
	 * Outputs an error message.
	 *
	 * @param string $message Error message.
	 */
	public function render_error_message( $message ) {
		// Ensure only editors see the error, not visitors to the website.
		if ( current_user_can( 'edit_posts' ) ) {
			\Timber::render(
				P4GBKS_PLUGIN_DIR . 'templates/block-error-message.twig',
				[
					'category' => __( 'Error', 'planet4-blocks' ),
					'message'  => $message,
				]
			);
		}
	}

	/**
	 * Returns if current request is a rest api request.
	 *
	 * @return bool
	 */
	protected function is_rest_request() {
		if ( defined( 'REST_REQUEST' ) && REST_REQUEST ) {
			return true;
		}
		return false;
	}

	/**
	 * Update the attributes of a block to the latest version.
	 * It returns an array with the new version of the block attributes.
	 * PHPCS does not allow me to add the return type if there is no return statement, but here we always throw an
	 * exception, so adding a return after triggers another CS rule. Disabling the violated rule,
	 * Squiz.Commenting.FunctionComment.InvalidNoReturn, is not working in the doc comment.
	 *
	 * @param array $fields The old version of the block attributes.
	 * @throws NotImplemented If no implementation is given by the subclass.
	 */
	public static function update_data( array $fields ) {
		throw new NotImplemented( 'Method update_data is not implemented for ' . static::class );
	}

	/**
	 * Register scripts and styles for a block
	 * 
	 * @param array $editor_script_dependencies Dependencies for the Editor script.
	 * @param array $script_dependencies Dependencies for the Frontend script.
	 */
	public static function enqueue_editor_assets() {
		$camelized_block_name = str_replace("-", "", ucwords(static::BLOCK_NAME, "-"));

		// Editor Script
		$file_url = trailingslashit( P4GBKS_PLUGIN_URL ) . 'assets/build/' . $camelized_block_name . 'EditorScript.js';
		$file_path = trailingslashit( P4GBKS_PLUGIN_DIR ) . 'assets/build/' . $camelized_block_name . 'EditorScript.js';
		wp_enqueue_script(
			static::BLOCK_NAMESPACE_PREFIX . '/' . static::BLOCK_NAME . '-editor-script',
			$file_url,
			'planet4-blocks-editor-script',
			\P4GBKS\Loader::file_ver($file_path),
			true
		);
		
		// Editor Style
		$file_url = trailingslashit( P4GBKS_PLUGIN_URL ) . 'assets/build/' . $camelized_block_name . 'EditorStyle.min.css';
		$file_path = trailingslashit( P4GBKS_PLUGIN_DIR ) . 'assets/build/' . $camelized_block_name . 'EditorStyle.min.css';
		wp_enqueue_style(
			static::BLOCK_NAMESPACE_PREFIX . '/' . static::BLOCK_NAME . '-editor-style',
			$file_url,
			[],
			\P4GBKS\Loader::file_ver($file_path),
		);
			
		// Frontend Style (aka: style)
		$file_url = trailingslashit( P4GBKS_PLUGIN_URL ) . 'assets/build/' . $camelized_block_name . 'Style.min.css';
		$file_path = trailingslashit( P4GBKS_PLUGIN_DIR ) . 'assets/build/' . $camelized_block_name . 'Style.min.css';
		wp_enqueue_style(
			static::BLOCK_NAMESPACE_PREFIX . '/' . static::BLOCK_NAME . '-style',
			$file_url,
			[],
			\P4GBKS\Loader::file_ver($file_path),
		);
	}

	public static function enqueue_frontend_assets() {
		if ( has_block( static::BLOCK_NAMESPACE_PREFIX . '/' . static::BLOCK_NAME ) ) {
			$camelized_block_name = str_replace("-", "", ucwords(static::BLOCK_NAME, "-"));

			// Frontend Script (aka: script)
			$file_url = trailingslashit( P4GBKS_PLUGIN_URL ) . 'assets/build/' . $camelized_block_name . 'Script.js';
			$file_path = trailingslashit( P4GBKS_PLUGIN_DIR ) . 'assets/build/' . $camelized_block_name . 'Script.js';
	
			wp_enqueue_script(
				static::BLOCK_NAMESPACE_PREFIX . '/' . static::BLOCK_NAME . '-script',
				$file_url,
				'planet4-blocks-script',
				\P4GBKS\Loader::file_ver($file_path),
				true
			);
	
			// Frontend Style (aka: style)
			$file_url = trailingslashit( P4GBKS_PLUGIN_URL ) . 'assets/build/' . $camelized_block_name . 'Style.min.css';
			$file_path = trailingslashit( P4GBKS_PLUGIN_DIR ) . 'assets/build/' . $camelized_block_name . 'Style.min.css';
			wp_enqueue_style(
				static::BLOCK_NAMESPACE_PREFIX . '/' . static::BLOCK_NAME . '-style',
				$file_url,
				[],
				\P4GBKS\Loader::file_ver($file_path),
			);
		}		
	}

	public static function as_hydratable_block( $attributes, $content ) {
		$json = wp_json_encode(
			[ 'attributes' => $attributes ]
		);

		return "<div data-hydrate='" . static::BLOCK_NAMESPACE_PREFIX . '/' . static::BLOCK_NAME . "' data-attributes='$json'>"
			. trim($content)
			. '</div>';
	}	
}
