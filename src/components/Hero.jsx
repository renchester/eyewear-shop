import { Link } from 'react-router-dom';
import Flickity from 'react-flickity-component';

// eslint-disable-next-line no-unused-vars
import flickityFade from 'flickity-fade';
import { nanoid } from 'nanoid';

import heroData from '../data/heroData';

const flickityOptions = {
  fade: true,
  wrapAround: true,
  initialIndex: 0,
  autoPlay: 7000,
  pauseAutoPlayOnHover: false,
};

function Hero() {
  return (
    <Flickity options={flickityOptions} className="hero" elementType="section">
      {heroData.map((item, index) => (
        <div className="hero-item" key={nanoid()}>
          <img
            src={item.img}
            alt={item.details}
            className={`hero-item__img img-${index + 1}`}
            width={650}
          />
          <div className="hero-item__dynamic-content">
            <div className="hero-item__text-wrapper">
              <h3 className="hero-item__title">{item.title}</h3>
              <p className="hero-item__details">{item.details}</p>
            </div>
            <Link to="/products" className="hero-item__link">
              Shop Now
            </Link>
          </div>
        </div>
      ))}
    </Flickity>
  );
}
export default Hero;
