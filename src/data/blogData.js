import { nanoid } from 'nanoid';

import img1 from '../assets/img/unsplash/frame-16.jpg';
import img2 from '../assets/img/unsplash/store-5.jpg';
import img3 from '../assets/img/unsplash/frame-2.jpg';

const blogData = [
  {
    id: nanoid(),
    category: 'feel good',
    title: 'Gallery of dogs wearing glasses',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, qui delectus? Sed sequi magni voluptatum veniam, doloremque',
    img: img1,
  },
  {
    id: nanoid(),
    category: 'proper eyecare',
    title: 'How to take care of your eyes as a teenager',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, qui delectus? Sed sequi magni voluptatum veniam, doloremque',
    img: img2,
  },
  {
    id: nanoid(),
    category: 'legacy',
    title: 'The eye doctor who traveled across Asia',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, qui delectus? Sed sequi magni voluptatum veniam, doloremque',
    img: img3,
  },
];

export default blogData;
