<?php

namespace P4GBKS\Blocks;

/**
 * Class SplitTwoColumns
 *
 * @package P4BKS
 * @since 0.1
 */
class ControlShiftDemo extends Base_Block {

	/**
	 * Block name.
	 *
	 * @const string BLOCK_NAME.
	 */
	public const BLOCK_NAME = 'planet4-blocks/control-shift-demo';

    private $attributes = [];

	/**
	 * SplitTwoColumns constructor.
	 */
	public function __construct() {
		\register_block_type(
			self::BLOCK_NAME,
			[
				'editor_script'   => 'planet4-blocks',
				'attributes'      => $this->attributes,
			]
		);
    }
    
    public function prepare_data( $fields ): array {
		return [];
	}
}
