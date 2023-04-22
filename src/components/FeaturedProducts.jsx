import { useState } from 'react';
import { Link } from 'react-router-dom';
import Flickity from 'react-flickity-component';
import ProgressiveImage from 'react-progressive-graceful-image';

import ImageWrapper from './ImageWrapper';

import { allProductsData } from '../data/productData';
import getCategory from '../utils/getCategory';

function FeaturedProducts() {
  const [featured] = useState([
    allProductsData[11],
    allProductsData[50],
    allProductsData[75],
    allProductsData[54],
    allProductsData[23],
    allProductsData[40],
  ]);

  const flickityOptions = {
    freeScroll: true,
    wrapAround: true,
    initialIndex: 0,
    autoPlay: 10000,
    pauseAutoPlayOnHover: false,
  };

  return (
    <section className="fp featured-products">
      <h3 className="fp__title">New Arrivals</h3>
      <Flickity
        options={flickityOptions}
        elementType="div"
        className="fp__products
      "
      >
        {featured.map((item) => (
          <Link
            to={`/products/${getCategory(item.type)}/${item.id}`}
            key={`${item.id}--featured-${item.type}`}
            className="fp-product"
          >
            <ImageWrapper
              className="fp-product__img-wrapper
            "
            >
              <ProgressiveImage
                src={item.images.main}
                placeholder={item.compressedImages.main}
              >
                {(src, loading) => (
                  <img
                    src={src}
                    alt={`${item.title} front profile`}
                    className={`fp-product__img
                     ${loading && 'img--loading'}`}
                    loading="lazy"
                  />
                )}
              </ProgressiveImage>
            </ImageWrapper>
            <span className="fp-product__title">{item.title}</span>
            <span className="fp-product__price">{item.price}</span>
          </Link>
        ))}
      </Flickity>
    </section>
  );
}

export default FeaturedProducts;
