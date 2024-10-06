import img1 from '../assets/img/unsplash/frame-16.webp';
import img2 from '../assets/img/unsplash/store-5.webp';
import img3 from '../assets/img/unsplash/frame-2.webp';

import imgComp1 from '../assets/img/unsplash-compressed/frame-16.webp';
import imgComp2 from '../assets/img/unsplash-compressed/store-5.webp';
import imgComp3 from '../assets/img/unsplash-compressed/frame-2.webp';

const blogData = [
  {
    id: 'blog-post-dogs-glasses',
    category: 'feel good',
    title: 'Gallery of dogs wearing glasses',
    description:
      "From classic aviators to colorful frames, dogs of all breeds and sizes are embracing this fun and playful trend, making a bold fashion statement that's impossible to ignore.",
    img: img1,
    imgCompressed: imgComp1,
    imgAlt: 'Black pug in a grey sweater wearing round glasses',
  },
  {
    id: 'blog-post-take-care-of-eyes-teenager',
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
    id: 'blog-post-eye-doctor-asia',
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
