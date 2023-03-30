import { nanoid } from 'nanoid';

import img1 from '../../../assets/img/unsplash/frame-16.jpg';
import imgComp1 from '../../../assets/img/unsplash-compressed/frame-16.jpg';

const blogData = [
  {
    id: nanoid(),
    category: 'example category',
    title: 'Example Title',
    description:
      'Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem facere sunt mollitia? Repellendus voluptatum, dolorem aliquam eveniet voluptas pariatur id. Velit laboriosam ad saepe amet in obcaecati doloribus sit dolores?',
    img: img1,
    imgCompressed: imgComp1,
    imgAlt: 'Example Alt',
  },
];

export default blogData;
