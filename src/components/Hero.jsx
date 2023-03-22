import { Link } from 'react-router-dom';
import Flickity from 'react-flickity-component';
import flickityFade from 'flickity-fade';
import { nanoid } from 'nanoid';

import heroData from '../data/heroData';

const flickityOptions = {
  fade: true,
  wrapAround: true,
  initialIndex: 3,
  autoPlay: 10000,
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
            <button className="hero-item__button btn" type="button">
              <Link to="/products">Shop Now</Link>
            </button>
          </div>
        </div>
      ))}
    </Flickity>
  );
}
export default Hero;
