import { Link } from 'react-router-dom';
import ProgressiveImage from 'react-progressive-graceful-image';
import ImageWrapper from './ImageWrapper';
import { BLOB_URL } from '../config';

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
          <ProgressiveImage
            src={`${BLOB_URL}/unsplash/frame-12.webp`}
            placeholder={`${BLOB_URL}/unsplash-compressed/frame-12.webp`}
          >
            {(src, loading) => (
              <img
                src={src}
                alt="Sample of a model"
                className={`featured-coll__img model ${
                  loading && 'img--loading'
                }`}
                loading="lazy"
              />
            )}
          </ProgressiveImage>
        </ImageWrapper>
      </div>
      <div className="featured-coll__col-2">
        <ImageWrapper className="featured-coll__img-wrapper">
          <ProgressiveImage
            src={`${BLOB_URL}/unsplash/ad-3.webp`}
            placeholder={`${BLOB_URL}/unsplash-compressed/ad-3.webp`}
          >
            {(src, loading) => (
              <img
                src={src}
                alt="Sunglass product in the featured collection"
                className={`featured-coll__img main ${
                  loading && 'img--loading'
                }`}
                loading="lazy"
              />
            )}
          </ProgressiveImage>
        </ImageWrapper>
        <Link to="/products" className="featured-coll__btn-link">
          SEE THE COLLECTION
        </Link>
      </div>
    </section>
  );
}
export default FeaturedCollection;
