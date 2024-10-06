import { useState } from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import ProgressiveImage from 'react-progressive-graceful-image';

function ProductCard(props) {
  const { content } = props;
  const [isHover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <Link
      to={`/products/${
        content.type === 'frames' ? 'eyeglasses' : 'sunglasses'
      }/${content.id}`}
      className="pd-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="pd-card__img--wrapper">
        {content.quantity < 1 && (
          <div className="pd-card__sold-out">SOLD OUT</div>
        )}
        {content.onSale && <div className="pd-card__sale">SALE</div>}
        <ProgressiveImage
          src={isHover ? content.images.side : content.images.main}
          placeholder={
            isHover
              ? content.compressedImages.side
              : content.compressedImages.main
          }
        >
          {(src, loading) => (
            <img
              src={src}
              alt={`${content.title} ${isHover ? 'side' : 'front'} profile`}
              className={`pd-card__img ${loading && 'img--loading-2'}`}
              loading="lazy"
            />
          )}
        </ProgressiveImage>
      </div>
      <div className="pd-card__details">
        <h5 className="pd-card__title">{content.title}</h5>
        <div className="pd-card__price--wrapper">
          {content.onSale && (
            <div className="pd-card__og-price">{content.originalPrice}</div>
          )}
          <div className="pd-card__price">{content.price}</div>
        </div>
      </div>
    </Link>
  );
}

ProductCard.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    originalPrice: PropTypes.string,
    description: PropTypes.string,
    technicalDetails: PropTypes.arrayOf(PropTypes.string),
    type: PropTypes.string.isRequired,
    color: PropTypes.string,
    quantity: PropTypes.number.isRequired,
    onSale: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    images: PropTypes.shape({
      main: PropTypes.node,
      side: PropTypes.node,
    }),
    compressedImages: PropTypes.shape({
      main: PropTypes.node,
      side: PropTypes.node,
    }),
  }),
};

ProductCard.defaultProps = {
  content: {
    title: 'Product X',
    price: '1000000',
    originalPrice: '1000000',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos inventore, error incidunt nemo, explicabo ',
    technicalDetails: ['Detail 1', 'Detail 2', 'Detail 3'],
    type: 'Type 1',
    color: 'Color 1',
    quantity: 0,
    onSale: false,
    id: 'abcde123',
    images: {
      main: null,
      side: null,
    },
  },
};

export default ProductCard;
