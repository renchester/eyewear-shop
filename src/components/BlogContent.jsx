import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ProgressiveImage from 'react-progressive-graceful-image';

function BlogContent(props) {
  const { content, headerTitle } = props;

  return (
    <section className="blog">
      <h3 className="blog__section-title">{headerTitle}</h3>
      <div className="blog-posts latest">
        {content.map((item) => (
          <article key={`${item.id}--blog-item`} className="blog-item">
            <ProgressiveImage src={item.img} placeholder={item.imgCompressed}>
              {(src, loading) => (
                <img
                  src={src}
                  alt={item.imgAlt}
                  className={`blog-item__img ${loading && 'img--loading'}`}
                  loading="lazy"
                />
              )}
            </ProgressiveImage>

            <div className="blog-item__text-wrapper">
              <span className="blog-item__category">{item.category}</span>
              <h4 className="blog-item__title">{item.title}</h4>
              <p className="blog-item__description">{item.description}</p>
              <Link to="/blog" className="blog-item__link">
                Read More
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

BlogContent.propTypes = {
  headerTitle: PropTypes.string,
  content: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      img: PropTypes.node,
    }),
  ).isRequired,
};

BlogContent.defaultProps = {
  headerTitle: '',
};

export default BlogContent;
