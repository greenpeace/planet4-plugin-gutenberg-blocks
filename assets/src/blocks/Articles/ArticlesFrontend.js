import { ArticlesList } from './ArticlesList';
import { useArticlesFetch } from './useArticlesFetch';

const { __ } = wp.i18n;

export const ArticlesFrontend = (props) => {
  const {
    article_heading,
    articles_description,
    see_all_text,
    see_all_link,
    see_all_new_tab,
    className,
  } = props;

  const postType = document.body.getAttribute('data-post-type');

  const postIdClass = [...document.body.classList].find(className => /^postid-\d+$/.test(className));

  const postId = !postIdClass ? null : postIdClass.split('-')[1];

  const postCategories = props.post_categories || [];

  const { posts, loading } = useArticlesFetch(props, postType, postId, document.body.dataset.nro, postCategories);

  if (!posts.length) {
    return null;
  }

  return (
    <section className={`block articles-block ${className ?? ''}`}>
      <header>
        <h2 className="page-section-header">{article_heading}</h2>
      </header>
      {articles_description &&
        <div className="page-section-description" dangerouslySetInnerHTML={{ __html: articles_description }} />
      }
      <ArticlesList posts={posts} postType={postType} />
      <div className="row">
        <div className="col-md-12 col-lg-5 col-xl-5">
          <a
            className="btn btn-secondary btn-block articles-see-all"
            href={see_all_link}
            disabled={loading}
            data-ga-category="Articles Block"
            data-ga-action="See All Button"
            data-ga-label="n/a"
            {...see_all_new_tab && { target: '_blank' }}
          >
            {see_all_text}
          </a>
        </div>
      </div>
    </section>
  );
};
