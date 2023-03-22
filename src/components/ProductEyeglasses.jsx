import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

import ProductCard from './ProductCard';

import bannerImg from '../assets/img/unsplash/frame-7.jpg';

import { eyeglassesData } from '../data/productData';

function ProductEyeglasses() {
  const [, setBannerContent] = useOutletContext();

  useEffect(() => {
    setBannerContent(() => ({
      title: 'Optical Shop',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, earum fugit, suscipit provident maiores voluptatem nemo repellendus nesciunt quo perferendis est ratione quibusdam, vero doloremque doloribus dolor dolorem saepe? Nostrum.',
      img: bannerImg,
    }));
  }, [setBannerContent]);

  return (
    <>
      {eyeglassesData.map((item) => (
        <ProductCard content={item} key={item.id} />
      ))}
    </>
  );
}
export default ProductEyeglasses;
