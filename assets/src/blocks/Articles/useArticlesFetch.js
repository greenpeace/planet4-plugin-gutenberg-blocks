import { useState, useEffect } from '@hooks';
import { fetchJson } from '../../functions/fetchJson';
import { addQueryArgs } from '../../functions/addQueryArgs';

const { apiFetch } = wp;

export const useArticlesFetch = (attributes, postType, postId, baseUrl = null, postCategories = []) => {
  const { article_count, post_types, posts, tags, ignore_categories } = attributes;

  const [totalPosts, setTotalPosts] = useState(null);
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadPage = async (reset = false) => {
    if (loading) {
      return;
    }
    setLoading(true);

    const prevPosts = reset ? [] : displayedPosts;

    const args = {
      article_count,
      post_types,
      posts,
      tags,
      ignore_categories,
      offset: prevPosts.length,
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

      const newPosts = [...prevPosts, ...response.recent_posts];

      setDisplayedPosts(newPosts);

      if (response.total_posts !== undefined && response.total_posts !== totalPosts) {
        setTotalPosts(response.total_posts);
      }

    } catch (e) {
      console.log(e);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setDisplayedPosts([]);
    loadPage(true);
  }, [ article_count, post_types, posts, tags, ignore_categories ]);

  return {
    posts: displayedPosts,
    totalPosts,
    loading,
    error,
    hasMorePages: totalPosts > displayedPosts.length,
    loadNextPage: () => {
      loadPage();
    },
  };
};
