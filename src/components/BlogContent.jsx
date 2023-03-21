import { Link } from 'react-router-dom';
import blogData from '../data/blogData';

function BlogContent() {
  return (
    <section className="blog">
      <h3 className="blog__section-title">Latest Posts</h3>
      <div className="blog-posts latest">
        {blogData.map((item) => (
          <article className="blog-item" key={item.id}>
            <img
              src={item.img}
              alt={item.description}
              className="blog-item__img"
            />

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
export default BlogContent;
