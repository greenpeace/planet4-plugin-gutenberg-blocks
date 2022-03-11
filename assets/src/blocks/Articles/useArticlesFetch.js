import { useState, useEffect } from '@wordpress/element';
import { fetchJson } from '../../functions/fetchJson';
import { addQueryArgs } from '../../functions/addQueryArgs';

const { apiFetch } = wp;

export const useArticlesFetch = (attributes, postType, postId, baseUrl = null, postCategories = []) => {
  const { article_count, post_types, posts, tags, ignore_categories } = attributes;

  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadPage = async () => {
    if (loading) {
      return;
    }
    setLoading(true);

    const args = {
      article_count,
      post_types,
      posts,
      tags,
      ignore_categories,
    };

    if (postType === 'post') {
      args.exclude_post_id = postId;
      args.categories = postCategories;
    }

    const path = addQueryArgs('planet4/v1/get-posts', args);

    try {
      const response = baseUrl
        ? await fetchJson(`${ baseUrl }/wp-json/${ path }`)
        : await apiFetch({ path });

      const newPosts = response.recent_posts;

      setDisplayedPosts(newPosts);
    } catch (e) {
      console.log(e);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setDisplayedPosts([]);
    loadPage();
  }, [ article_count, post_types, posts, tags, ignore_categories ]);

  return {
    posts: displayedPosts,
    loading,
    error,
  };
};
