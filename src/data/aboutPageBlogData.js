import img1 from '../assets/img/unsplash/store-1.jpg';
import img2 from '../assets/img/unsplash/frame-4.jpg';
import img3 from '../assets/img/unsplash/sun-5.jpg';

import imgComp1 from '../assets/img/unsplash-compressed/store-1.jpg';
import imgComp2 from '../assets/img/unsplash-compressed/frame-4.jpg';
import imgComp3 from '../assets/img/unsplash-compressed/sun-5.jpg';

const blogData = [
  {
    id: 'blog-post-new-loc-singapore',
    category: 'locations',
    title: "We're coming to Singapore",
    description:
      "We are opening a new location in Singapore! Our unique collection of glasses and sunglasses is coming to the heart of the city, and we can't wait for you to come and explore our latest designs.",
    img: img1,
    imgCompressed: imgComp1,
    imgAlt: 'Depiction of the store display of frames',
  },
  {
    id: 'blog-post-meet-our-savant-family',
    category: 'community',
    title: 'Meet our Savant Family',
    description:
      'At our brand, we place a great emphasis on the value of community and family. From our dedicated team members to our loyal customers, we see everyone as a part of the larger family that makes our brand what it is today.',
    img: img2,
    imgCompressed: imgComp2,
    imgAlt:
      'Black man holding his child in his arms and kissing him on his cheeks',
  },
  {
    id: 'blog-post-savant-moments-eye-spy',
    category: '#SAVANTmoments',
    title: 'Eye Spy',
    description:
      'Our brand has been spotted on some of the biggest names in Hollywood! From red carpet events to casual outings, these stars have been rocking our frames and proving that our designs are truly timeless.',
    img: img3,
    imgCompressed: imgComp3,
    imgAlt:
      'Happy woman wearing sunglasses--holding her hands up with peace signs',
  },
];

export default blogData;
