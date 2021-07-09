<?php
/**
 * Block search query parameters
 *
 * @package P4BKS\Search\Block
 */

namespace P4GBKS\Search\Block;

/**
 * Parameter bag for Query interface
 */
class QueryParameters {
	/**
	 * @var string
	 */
	private $namespace;

	/**
	 * @var string
	 */
	private $name;

	/**
	 * @var array
	 */
	private $attributes;

	/**
	 * @var string
	 */
	private $content;

	/**
	 * @var string[]
	 */
	private $post_status;

	/**
	 * @var string[]
	 */
	private $order;

	/** @var string[] */
	const DEFAULT_POST_STATUS = [ 'publish', 'private' ];

	/**
	 * @param string|null   $namespace Block namespace.
	 * @param string|null   $name Full block name.
	 * @param array|null    $attributes Block attributes.
	 * @param string|null   $content Block options content.
	 * @param string[]|null $post_status List of required post status.
	 * @param string[]|null $order Columns names to sort on.
	 */
	public function __construct(
		?string $namespace = null,
		?string $name = null,
		?array $attributes = null,
		?string $content = null,
		?array $post_status = null,
		?array $order = null
	) {
		$this->namespace   = $namespace;
		$this->name        = $name;
		$this->attributes  = $attributes;
		$this->content     = $content;
		$this->post_status = $post_status;
		$this->order       = $order;
	}

	/**
	 * Block namespace.
	 */
	public function namespace(): ?string {
		return $this->namespace;
	}

	/**
	 * Full block name.
	 */
	public function name(): ?string {
		return $this->name;
	}

	/**
	 * Block attributes.
	 */
	public function attributes(): ?array {
		return $this->attributes;
	}

	/**
	 * Block options content.
	 */
	public function content(): ?string {
		return $this->content;
	}

	/**
	 * List of required post status.
	 */
	public function post_status(): ?array {
		return $this->post_status ? $this->post_status : self::DEFAULT_POST_STATUS;
	}

	/**
	 * Columns names to sort on.
	 */
	public function order(): ?array {
		return $this->order;
	}
}
