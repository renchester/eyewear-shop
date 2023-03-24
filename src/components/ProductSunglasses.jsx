import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { nanoid } from 'nanoid';

import ProductCard from './ProductCard';

import bannerImg from '../assets/img/unsplash/sun-1.jpg';

import { sunglassesData } from '../data/productData';
import sortProducts from '../utils/sortProducts';

function ProductSunglasses() {
  const { productSort, setBannerContent } = useOutletContext();
  const sortedSunglassesData = sortProducts(sunglassesData, productSort);

  useEffect(() => {
    setBannerContent(() => ({
      title: 'Sunnies Store',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, earum fugit, suscipit provident maiores voluptatem nemo repellendus nesciunt quo perferendis est ratione quibusdam, vero doloremque doloribus dolor dolorem saepe? Nostrum.',
      img: bannerImg,
    }));
  }, [setBannerContent]);

  return (
    <>
      {sortedSunglassesData.map((item) => (
        <ProductCard content={item} key={nanoid()} />
      ))}
    </>
  );
}
export default ProductSunglasses;
