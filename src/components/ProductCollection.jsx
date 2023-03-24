import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { nanoid } from 'nanoid';

import bannerImg from '../assets/img/unsplash/frame-9.jpg';

import ProductCard from './ProductCard';

import { allProductsData } from '../data/productData';
import sortProducts from '../utils/sortProducts';

function ProductCollection() {
  const { productSort, setBannerContent } = useOutletContext();
  const sortedProductsData = sortProducts(allProductsData, productSort);

  useEffect(() => {
    setBannerContent(() => ({
      title: 'All Products',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, earum fugit, suscipit provident maiores voluptatem nemo repellendus nesciunt quo perferendis est ratione quibusdam, vero doloremque doloribus dolor dolorem saepe? Nostrum.',
      img: bannerImg,
    }));
  }, [setBannerContent]);

  return (
    <>
      {sortedProductsData.map((item) => (
        <ProductCard content={item} key={nanoid()} />
      ))}
    </>
  );
}
export default ProductCollection;
