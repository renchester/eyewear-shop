import { Link } from 'react-router-dom';

import ImageWrapper from './ImageWrapper';

import img1 from '../assets/img/unsplash/ad-3.jpg';
import img2 from '../assets/img/unsplash/frame-12.jpg';

function FeaturedCollection() {
  return (
    <section className="featured-coll">
      <div className="featured-coll__col-1">
        <div className="featured-coll__text-wrapper">
          <h4 className="featured-coll__title">Amora</h4>
          <p className="featured-coll__details">
            Crafted with care, each pair of Amora glasses is a unique statement
            piece that combines contemporary design with classic elegance. The
            collection features a range of frames in various colors and styles,
            all made from high-quality materials that are built to last.
          </p>
          <Link to="/products" className="featured-coll__link">
            BROWSE AMORA
          </Link>
        </div>
        <ImageWrapper className="featured-coll__img-wrapper">
          <img
            src={img2}
            alt="Sample of a model"
            className="featured-coll__img model"
          />
        </ImageWrapper>
      </div>
      <div className="featured-coll__col-2">
        <ImageWrapper className="featured-coll__img-wrapper">
          <img
            src={img1}
            alt="Sample of an ad in the featured collection"
            className="featured-coll__img main"
          />
        </ImageWrapper>
        <Link to="/products" className="featured-coll__btn-link">
          SEE THE COLLECTION
        </Link>
      </div>
    </section>
  );
}
export default FeaturedCollection;
