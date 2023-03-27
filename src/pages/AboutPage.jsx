import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import ImageWrapper from '../components/ImageWrapper';
import BlogContent from '../components/BlogContent';
import ScrollToTop from '../components/ScrollToTop';

import blogData from '../data/aboutPageBlogData';

import mainImg1 from '../assets/img/unsplash/frame-13.jpg';
import mainImg2 from '../assets/img/unsplash/frame-10.jpg';
import mainImg3 from '../assets/img/unsplash/sun-11.jpg';

import eyecareImg from '../assets/img/unsplash/store-7.jpg';

function AboutPage() {
  useEffect(() => {
    document.title = 'The SAVANT Experience | SAVANT Eyewear Online Store';
  }, []);

  return (
    <main className="story">
      <section className="story-header">
        <h1 className="story-header__title">An Eye for Better Eyewear</h1>
        <p className="story-header__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
          velit reiciendis facere commodi modi dolorem aspernatur, officia quae
          porro non numquam
        </p>
        <p className="story-header__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
          velit reiciendis facere commodi modi dolorem aspernatur, officia quae
          porro non numquam
        </p>
      </section>

      <section className="story-main">
        <ImageWrapper className="story-main__panel panel-1">
          <img
            src={mainImg1}
            alt="Guy in office wearing glasses"
            className="story-main__img"
          />
        </ImageWrapper>
        <div className="story-main__panel panel-2 about-us">
          <h2 className="story-main__title">About us</h2>
          <p className="story-main__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam hic
            similique aliquam dolore molestias velit nobis voluptatum, libero
            tempore.
          </p>
          <p className="story-main__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam hic
            similique aliquam dolore molestias velit nobis voluptatum,
          </p>
          <p className="story-main__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam hic
            similique aliquam dolore
          </p>
          <Link to="/products/" className="story-main__btn-link">
            Browse Products
          </Link>
        </div>
        <div className="story-main__panel panel-3 eyeglasses">
          <h2 className="story-main__title">Eyewear For Everyone</h2>
          <p className="story-main__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam hic
            similique aliquam dolore molestias velit nobis voluptatum, libero
            tempore.
          </p>
          <p className="story-main__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam hic
            similique aliquam dolore molestias velit nobis voluptatum,
          </p>
          <p className="story-main__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam hic
            similique aliquam dolore
          </p>
          <Link to="/products/eyeglasses" className="story-main__btn-link">
            Browse Frames
          </Link>
        </div>
        <ImageWrapper className="story-main__panel panel-4">
          <img
            src={mainImg2}
            alt="Female model wearing eyeglasses"
            className="story-main__img"
          />
        </ImageWrapper>
        <ImageWrapper className="story-main__panel panel-5">
          <img
            src={mainImg3}
            alt="Male model wearing sunglasses"
            className="story-main__img"
          />
        </ImageWrapper>
        <div className="story-main__panel panel-6 sunglasses">
          <h2 className="story-main__title">Responsible Shade</h2>
          <p className="story-main__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam hic
            similique aliquam dolore molestias velit nobis voluptatum, libero
            tempore.
          </p>
          <p className="story-main__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam hic
            similique aliquam dolore molestias velit nobis voluptatum,
          </p>
          <p className="story-main__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam hic
            similique aliquam dolore
          </p>
          <Link to="/products/sunglasses" className="story-main__btn-link">
            Browse Sunnies
          </Link>
        </div>
      </section>

      <section className="story-eyecare">
        <div className="story-eyecare__info">
          <h3 className="story-eyecare__title">
            Our commitment to proper eyecare
          </h3>
          <p className="story-eyecare__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            deleniti quia qui architecto perferendis beatae, illo nobis quod
            distinctio cum reprehenderit minus perspiciatis ratione. Quos at
            cumque
          </p>
          <Link to="/eyecare" className="story-eyecare__link">
            Learn more
          </Link>
        </div>
        <ImageWrapper className="story-eyecare__img-wrapper">
          <img
            src={eyecareImg}
            alt="Woman getting her eyes checked with a machine"
            className="story-eyecare__img"
          />
        </ImageWrapper>
      </section>

      <BlogContent
        content={blogData}
        headerTitle="A community built on neighborhood values"
      />

      <section className="story-visit">Visit us</section>
      <ScrollToTop />
    </main>
  );
}
export default AboutPage;
