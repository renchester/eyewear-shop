import { Link } from 'react-router-dom';
import Flickity from 'react-flickity-component';

// eslint-disable-next-line no-unused-vars
import flickityFade from 'flickity-fade';
import ProgressiveImage from 'react-progressive-graceful-image';

import heroData from '../data/heroData';

const flickityOptions = {
  fade: true,
  wrapAround: true,
  initialIndex: 0,
  autoPlay: 15000,
  pauseAutoPlayOnHover: false,
};

function Hero() {
  return (
    <Flickity options={flickityOptions} className="hero" elementType="section">
      {heroData.map((item, index) => (
        <div className="hero-item" key={`${item.id}--hero-item`}>
          <ProgressiveImage src={item.img} placeholder={item.imgCompressed}>
            {(src, loading) => (
              <img
                src={src}
                alt={item.imgAlt}
                className={`hero-item__img img-${index + 1} ${
                  loading && 'img--loading'
                }`}
              />
            )}
          </ProgressiveImage>
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
