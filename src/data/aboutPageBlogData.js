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
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, qui delectus? Sed sequi magni voluptatum veniam, doloremque',
    img: img1,
  },
  {
    id: nanoid(),
    category: 'community',
    title: 'Meet our Savant Family',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, qui delectus? Sed sequi magni voluptatum veniam, doloremque',
    img: img2,
  },
  {
    id: nanoid(),
    category: '#SAVANTmoments',
    title: 'Eye Spy',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, qui delectus? Sed sequi magni voluptatum veniam, doloremque',
    img: img3,
  },
];

export default blogData;
