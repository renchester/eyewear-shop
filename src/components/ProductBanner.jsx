import PropTypes from 'prop-types';
import ProgressiveImage from 'react-progressive-graceful-image';
import ImageWrapper from './ImageWrapper';

function ProductBanner(props) {
  const { content } = props;

  return (
    <section className="banner">
      <div className="banner-main">
        <h4 className="banner-main__title">{content.title}</h4>
        <p className="banner-main__description">{content.description}</p>
      </div>
      <ImageWrapper className="banner-img--wrapper">
        <ProgressiveImage src={content.img} placeholder={content.imgCompressed}>
          {(src, loading) => (
            <img
              src={src}
              alt={content.imgAlt}
              className={`banner-img ${loading && 'img--loading'}`}
              loading="lazy"
            />
          )}
        </ProgressiveImage>
      </ImageWrapper>
    </section>
  );
}

ProductBanner.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    img: PropTypes.node.isRequired,
    imgCompressed: PropTypes.node.isRequired,
    imgAlt: PropTypes.string,
  }),
};

ProductBanner.defaultProps = {
  content: {
    title: 'Shop',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odit necessitatibus veritatis deserunt et eum eius pariatur earum quaerat quod.',
    img: '',
    imgAlt: 'Placeholder banner image for collection',
  },
};

export default ProductBanner;
