import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { nanoid } from 'nanoid';

import ProductCard from '../components/ProductCard';

import bannerImg from '../assets/img/unsplash/frame-7.jpg';

import { eyeglassesData } from '../data/productData';
import sortProducts from '../utils/sortProducts';

function ProductEyeglasses() {
  const { productSort, setBannerContent } = useOutletContext();
  const sortedEyeglassesData = sortProducts(eyeglassesData, productSort);

  useEffect(() => {
    document.title = 'OPTICAL | Trendy Frames & Styles - SAVANT Eyewear Store';
  }, []);

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
      {sortedEyeglassesData.map((item) => (
        <ProductCard content={item} key={nanoid()} />
      ))}
    </>
  );
}
export default ProductEyeglasses;
