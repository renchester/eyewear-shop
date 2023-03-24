import bannerAllProducts from '../assets/img/unsplash/frame-9.jpg';
import bannerSunglasses from '../assets/img/unsplash/sun-1.jpg';
import bannerEyeglasses from '../assets/img/unsplash/frame-7.jpg';

import { allProductsData, sunglassesData, eyeglassesData } from './productData';

export const allProductsCategoryData = {
  documentTitle: 'COLLECTION | Shop all products - SAVANT Eyewear Store',
  banner: {
    title: 'All Products',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, earum fugit, suscipit provident maiores voluptatem nemo repellendus nesciunt quo perferendis est ratione quibusdam, vero doloremque doloribus dolor dolorem saepe? Nostrum.',
    img: bannerAllProducts,
  },
  products: allProductsData,
};

export const eyeglassesCategoryData = {
  documentTitle: 'OPTICAL | Trendy Frames & Styles - SAVANT Eyewear Store',
  banner: {
    title: 'Optical Shop',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, earum fugit, suscipit provident maiores voluptatem nemo repellendus nesciunt quo perferendis est ratione quibusdam, vero doloremque doloribus dolor dolorem saepe? Nostrum.',
    img: bannerEyeglasses,
  },
  products: eyeglassesData,
};

export const sunglassesCategoryData = {
  documentTitle: 'SUNGLASSES | Trendy Frames & Styles - SAVANT Eyewear Store',
  banner: {
    title: 'Sunnies Store',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, earum fugit, suscipit provident maiores voluptatem nemo repellendus nesciunt quo perferendis est ratione quibusdam, vero doloremque doloribus dolor dolorem saepe? Nostrum.',
    img: bannerSunglasses,
  },
  products: sunglassesData,
};
