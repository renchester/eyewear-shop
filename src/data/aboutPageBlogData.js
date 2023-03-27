import { nanoid } from 'nanoid';

import img1 from '../assets/img/unsplash/store-1.jpg';
import img2 from '../assets/img/unsplash/frame-4.jpg';
import img3 from '../assets/img/unsplash/sun-5.jpg';

const blogData = [
  {
    id: nanoid(),
    category: 'locations',
    title: "We're coming to Singapore",
    description:
      "We are opening a new location in Singapore! Our unique collection of glasses and sunglasses is coming to the heart of the city, and we can't wait for you to come and explore our latest designs.",
    img: img1,
  },
  {
    id: nanoid(),
    category: 'community',
    title: 'Meet our Savant Family',
    description:
      'At our brand, we place a great emphasis on the value of community and family. From our dedicated team members to our loyal customers, we see everyone as a part of the larger family that makes our brand what it is today.',
    img: img2,
  },
  {
    id: nanoid(),
    category: '#SAVANTmoments',
    title: 'Eye Spy',
    description:
      'Our brand has been spotted on some of the biggest names in Hollywood! From red carpet events to casual outings, these stars have been rocking our frames and proving that our designs are truly timeless.',
    img: img3,
  },
];

export default blogData;
