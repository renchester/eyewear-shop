import { useState } from 'react';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';

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

  return (
    <section className="fp featured-products">
      <h3 className="fp__title">New Arrivals</h3>
      <ul
        className="fp__products
      "
      >
        {featured.map((item) => (
          <Link
            to={`/products/${getCategory(item.type)}/${item.id}`}
            key={nanoid()}
            className="fp-product"
          >
            <ImageWrapper
              className="fp-product__img-wrapper
            "
            >
              <img
                src={item.images.main}
                alt={item.description}
                className="fp-product__img
                  "
              />
            </ImageWrapper>
            <span className="fp-product__title">{item.title}</span>
            <span className="fp-product__price">{item.price}</span>
          </Link>
        ))}
      </ul>
    </section>
  );
}

export default FeaturedProducts;
