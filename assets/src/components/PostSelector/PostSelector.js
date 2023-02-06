import {FormTokenField} from '@wordpress/components';
import {dispatch, useSelect} from '@wordpress/data';
const {__} = wp.i18n;

// Allows to query a custom endpoint with select('core') tools
dispatch('core').addEntities([{
  baseURL: '/planet4/v1/published',
  kind: 'planet4/v1',
  name: 'published',
  label: 'All published of post_type',
}]);

/**
 * Post selector with autosuggestion
 * Based on post type
 *
 * @param {Object} attributes
 */
export const PostSelector = (attributes) => {
  const {
    label,
    selected,
    placeholder,
    postType,
    onChange,
    maxLength,
    maxSuggestions,
  } = attributes;

  /**
   * Fetch relevant posts for autosuggestions
   */
  const act_parent = window.p4ge_vars.planet4_options.act_page || null;
  const args = {per_page: -1, orderby: 'title', post_status: 'publish'};
  const posts = useSelect((select) => {
    if ('post' === postType) {
      return [
        ...select('core').getEntityRecords('postType', 'post', {include: selected}) || [],
        ...select('core').getEntityRecords('planet4/v1', 'published', {post_type: postType, ...args}) || [],
      ];
    }

    if ('post,page' === postType) {
      return [
        ...select('core').getEntityRecords('postType', 'post', {include: selected}) || [],
        ...select('core').getEntityRecords('postType', 'page', {include: selected}) || [],
        ...select('core').getEntityRecords('planet4/v1', 'published', {post_type: postType, ...args}) || [],
      ];
    }

    if ('act_page' === postType) {
      const selectedPosts = [
        ...select('core').getEntityRecords('postType', 'page', {include: selected}) || [],
        ...select('core').getEntityRecords('postType', 'p4_action', {include: selected}) || [],
      ];
      const actions = select('core').getEntityRecords('postType', 'p4_action', args) || [];
      const pages = act_parent
        ? (select('core').getEntityRecords('postType', 'page', {post_parent: act_parent, ...args}) || [])
        : [];
      return [].concat(selectedPosts, actions, pages);
    }

    return [];
  }, [postType]);

  /**
   * Convert posts to {id, title}
   */
  const options = posts.map((post) => ({
    id: parseInt(post.id),
    title: post.title?.raw || post.post_title,
  }));

  /**
   * Resolve Titles to IDs for saving values
   *
   * @param {Array} titles
   */
  const setPostsIdsFromTitles = (titles) => {
    const postIds = titles?.length
      ? titles.map((token) => options.find((option) => option.title === token)?.id)
      : [];
    onChange(postIds);
  };

  /**
   * Resolve IDs to Titles
   *
   * @param {Array} ids
   */
  const getPostsTitlesFromIds = (ids) => {
    return options?.length && ids?.length
      ? ids.map((postId) => options.find((option) => option.id === parseInt(postId))?.title).filter((t) => t)
      : [];
  };

  /**
   * Get field initial value
   */
  const getValue = () => getPostsTitlesFromIds(selected);

  return (
    <FormTokenField
      label={label || __('Select posts', 'planet4-blocks-backend')}
      value={getValue() || null}
      suggestions={options.map((post) => post.title)}
      onChange={(value) => {
        setPostsIdsFromTitles(value);
      }}
      placeholder={placeholder || __('Select posts', 'planet4-blocks-backend')}
      maxLength={maxLength}
      maxSuggestions={maxSuggestions || 50}
    />
  );
};
