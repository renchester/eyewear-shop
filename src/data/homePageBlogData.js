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
      "From classic aviators to colorful frames, dogs of all breeds and sizes are embracing this fun and playful trend, making a bold fashion statement that's impossible to ignore.",
    img: img1,
  },
  {
    id: nanoid(),
    category: 'proper eyecare',
    title: 'How to take care of your eyes as a teenager',
    description:
      'From getting enough sleep to eating a balanced diet, our experts weigh in on a range of healthy habits that can help prevent eye strain, maintain healthy vision, and reduce the risk of long-term eye problems.',
    img: img2,
  },
  {
    id: nanoid(),
    category: 'legacy',
    title: 'The eye doctor who traveled across Asia',
    description:
      "The story of one eye doctor's journey to remote villages across Asia to provide much-needed eye care to young children. ",
    img: img3,
  },
];

export default blogData;
