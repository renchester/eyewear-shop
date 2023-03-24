import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useOutletContext } from 'react-router-dom';
import { nanoid } from 'nanoid';

import ProductCard from '../components/ProductCard';

import {
  allProductsCategoryData,
  sunglassesCategoryData,
  eyeglassesCategoryData,
} from '../data/productCategoryData';
import sortProducts from '../utils/sortProducts';

function ProductGalleryPage({ categoryType }) {
  const [categoryData, setCategoryData] = useState(allProductsCategoryData);
  const { productSort, setBannerContent } = useOutletContext();
  const sortedProductsData = sortProducts(categoryData.products, productSort);

  useEffect(() => {
    switch (categoryType) {
      case 'allProducts': {
        setCategoryData(allProductsCategoryData);
        break;
      }
      case 'sunglasses': {
        setCategoryData(sunglassesCategoryData);
        break;
      }
      case 'eyeglasses': {
        setCategoryData(eyeglassesCategoryData);
        break;
      }
      default:
        setCategoryData(allProductsCategoryData);
    }
  }, [categoryType]);

  useEffect(() => {
    document.title = categoryData.documentTitle;
  }, [categoryData]);

  useEffect(() => {
    setBannerContent(() => categoryData.banner);
  }, [categoryData, setBannerContent]);

  return (
    <>
      {sortedProductsData.map((item) => (
        <ProductCard content={item} key={nanoid()} />
      ))}
    </>
  );
}

ProductGalleryPage.propTypes = {
  categoryType: PropTypes.string.isRequired,
};

export default ProductGalleryPage;
