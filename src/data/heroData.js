import { nanoid } from 'nanoid';

import hero1 from '../assets/img/unsplash/hero-1.jpg';
import hero2 from '../assets/img/unsplash/hero-2.jpg';
import hero3 from '../assets/img/unsplash/hero-3.jpg';
import hero4 from '../assets/img/unsplash/hero-4.jpg';
import hero5 from '../assets/img/unsplash/hero-5.jpg';
import hero6 from '../assets/img/unsplash/hero-6.jpg';
import hero7 from '../assets/img/unsplash/hero-7.jpg';

const heroData = [
  {
    id: nanoid(),
    img: hero4,
    title: 'Solari',
    details:
      'Based in the heart of Los Angeles, this eyewear brand is on a mission to create durable and stylish sunglasses that are environmentally friendly. Each pair is handmade from plant-based cellulose acetate, ensuring a sleek and sustainable accessory for any outfit.',
  },
  {
    id: nanoid(),
    img: hero7,
    title: 'Amora',
    details:
      'Hailing from New York City, this modern eyewear brand is dedicated to crafting handmade unisex sunglasses from eco-friendly plant-based cellulose acetate. With a focus on durability and sustainability, their eyewear is designed to last and make a statement.',
  },
  {
    id: nanoid(),
    img: hero3,
    title: 'Valti',
    details:
      'Based in Geneva, this brand merges world-class craftsmanship with advanced production techniques to create small-batch statement pieces that push eyewear aesthetics into the future while paying homage to the past.',
  },

  {
    id: nanoid(),
    img: hero5,
    title: 'Avara',
    details:
      'This modern eyewear concept hails from London and produces handmade unisex sunglasses crafted from eco-friendly plant-based cellulose acetate. Their focus on durability and sustainability ensures that each pair of sunglasses is designed to last.',
  },
  {
    id: nanoid(),
    img: hero6,
    title: 'Caldo',
    details:
      'This modern eyewear brand is based in Melbourne and produces handmade unisex sunglasses that are designed to last. Crafted from eco-friendly plant-based cellulose acetate, their eyewear is both stylish and sustainable.',
  },
  {
    id: nanoid(),
    img: hero2,
    title: 'Helix',
    details:
      'From Barcelona comes a modern eyewear concept that focuses on crafting handmade unisex sunglasses. Their eyewear is designed to last and crafted from eco-friendly plant-based cellulose acetate, making a statement while being responsible.',
  },
  {
    id: nanoid(),
    img: hero1,
    title: 'Galla',
    details:
      'Berlin-based brand merges world-class craftsmanship with advanced production methods to create small-batch statement eyewear that pushes the boundaries of style. Each piece pays homage to the past while looking towards the future.',
  },
];

export default heroData;
