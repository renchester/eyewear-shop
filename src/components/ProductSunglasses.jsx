import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

import ProductCard from './ProductCard';

import bannerImg from '../assets/img/unsplash/sun-1.jpg';

import { sunglassesData } from '../data/productData';

function ProductSunglasses() {
  const [, setBannerContent] = useOutletContext();

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
      {sunglassesData.map((item) => (
        <ProductCard content={item} key={item.id} />
      ))}
    </>
  );
}
export default ProductSunglasses;
