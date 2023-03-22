import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

import bannerImg from '../assets/img/unsplash/frame-9.jpg';

import ProductCard from './ProductCard';

import { allProductsData } from '../data/productData';

function ProductCollection() {
  const [, setBannerContent] = useOutletContext();

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
      {allProductsData.map((item) => (
        <ProductCard content={item} key={item.id} />
      ))}
    </>
  );
}
export default ProductCollection;
