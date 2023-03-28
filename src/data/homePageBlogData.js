import { nanoid } from 'nanoid';

import img1 from '../assets/img/unsplash/frame-16.jpg';
import img2 from '../assets/img/unsplash/store-5.jpg';
import img3 from '../assets/img/unsplash/frame-2.jpg';

import imgComp1 from '../assets/img/unsplash-compressed/frame-16.jpg';
import imgComp2 from '../assets/img/unsplash-compressed/store-5.jpg';
import imgComp3 from '../assets/img/unsplash-compressed/frame-2.jpg';

const blogData = [
  {
    id: nanoid(),
    category: 'feel good',
    title: 'Gallery of dogs wearing glasses',
    description:
      "From classic aviators to colorful frames, dogs of all breeds and sizes are embracing this fun and playful trend, making a bold fashion statement that's impossible to ignore.",
    img: img1,
    imgCompressed: imgComp1,
    imgAlt: 'Black pug in a grey sweater wearing round glasses',
  },
  {
    id: nanoid(),
    category: 'proper eyecare',
    title: 'How to take care of your eyes as a teenager',
    description:
      'From getting enough sleep to eating a balanced diet, our experts weigh in on a range of healthy habits that can help prevent eye strain, maintain healthy vision, and reduce the risk of long-term eye problems.',
    img: img2,
    imgCompressed: imgComp2,
    imgAlt:
      'Glasses in front of a blurred eye test, with the part inside the lens clear and non-blurry',
  },
  {
    id: nanoid(),
    category: 'legacy',
    title: 'The eye doctor who traveled across Asia',
    description:
      "The story of one eye doctor's journey to remote villages across Asia to provide much-needed eye care to young children. ",
    img: img3,
    imgCompressed: imgComp3,
    imgAlt: 'Elderly eye doctor wearing clear frames',
  },
];

export default blogData;
