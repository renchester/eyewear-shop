import { allProductsData, sunglassesData, eyeglassesData } from './productData';
import { BLOB_URL } from '../config';

export const allProductsCategoryData = {
  documentTitle: 'COLLECTION | Shop all products - SAVANT Eyewear Store',
  banner: {
    title: 'All Products',
    description:
      'Featuring our iconic frames, this collection draws inspiration from the unique DNA of downtown living. The frames are designed to evoke the energy, creativity, and excitement that are synonymous with urban life, while also offering the comfort and functionality',
    img: `${BLOB_URL}/unsplash/frame-9.webp`,
    imgCompressed: `${BLOB_URL}/unsplash-compressed/frame-9.webp`,
    imgAlt: 'Female model wearing glasses',
  },
  products: allProductsData,
};

export const eyeglassesCategoryData = {
  documentTitle: 'OPTICAL | Trendy Frames & Styles - SAVANT Eyewear Store',
  banner: {
    title: 'Optical Shop',
    description:
      'Introducing our latest line of eyeglass frames, designed to elevate your everyday look with style and sophistication. From classic and timeless designs to bold and daring styles, these frames have something for every taste and preference. Explore the collection and find the perfect frames to reflect your personal style and elevate your eyewear game.',
    img: `${BLOB_URL}/unsplash/frame-7.webp`,
    imgCompressed: `${BLOB_URL}/unsplash-compressed/frame-7.webp`,
    imgAlt: 'Male model wearing glasses',
  },
  products: eyeglassesData,
};

export const sunglassesCategoryData = {
  documentTitle: 'SUNGLASSES | Trendy Frames & Styles - SAVANT Eyewear Store',
  banner: {
    title: 'Sunnies Store',
    description:
      "Our latest line of sunglasses is the perfect combination of fashion and function. Designed with both style and comfort in mind, these frames are the ultimate accessory for any adventure.  With high-quality materials and attention to detail, these frames are not only stylish but also durable enough to withstand whatever your day throws your way. So whether you're lounging by the pool or exploring the great outdoors, our sunglasses will keep you looking and feeling your best.",
    img: `${BLOB_URL}/unsplash/sun-1.webp`,
    imgCompressed: `${BLOB_URL}/unsplash-compressed/sun-1.webp`,
    imgAlt: 'Female model on boat wearing sunglasses',
  },
  products: sunglassesData,
};
