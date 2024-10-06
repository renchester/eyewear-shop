import { nanoid } from 'nanoid';
import { BLOB_URL } from '../../../config';

const blogData = [
  {
    id: nanoid(),
    category: 'example category',
    title: 'Example Title',
    description:
      'Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem facere sunt mollitia? Repellendus voluptatum, dolorem aliquam eveniet voluptas pariatur id. Velit laboriosam ad saepe amet in obcaecati doloribus sit dolores?',
    img: `${BLOB_URL}/unsplash/frame-16.webp`,
    imgCompressed: `${BLOB_URL}/unsplash-compressed/frame-16.webp`,
    imgAlt: 'Example Alt',
  },
];

export default blogData;
