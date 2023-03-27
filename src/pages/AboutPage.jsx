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
          Our designs are carefully crafted to capture the latest fashion trends
          while ensuring maximum comfort and functionality. With a range of
          unique styles and color options, we are confident that our collection
          has something to suit every taste and personality.
        </p>
        <p className="story-header__text">
          Our frames are crafted with attention to detail, utilizing the latest
          materials and technology to ensure the highest quality products.
          Elevate your eyewear game with SAVANT frames.
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
            SAVANT was born of a simple mission - to create high-quality,
            stylish glasses that would empower people to express themselves with
            confidence.
          </p>
          <p className="story-main__text">
            Founded by a group of passionate designers and eyewear enthusiasts,
            we started our journey with a commitment to crafting frames that
            would stand the test of time, both in terms of durability and style.
          </p>
          <p className="story-main__text">
            Today, we continue to build on that legacy by designing unique and
            trendsetting glasses that reflect the spirit and creativity of our
            brand. Join us as we continue to redefine eyewear fashion and bring
            our vision to life.
          </p>
          <Link to="/products/" className="story-main__btn-link">
            Browse Products
          </Link>
        </div>
        <div className="story-main__panel panel-3 eyeglasses">
          <h2 className="story-main__title">Eyewear For Everyone</h2>
          <p className="story-main__text">
            At SAVANT, we believe that everyone should have access to stylish
            and affordable glasses. That&apos;s why we strive to create frames
            that are not only trendy and fashionable, but also accessible for
            everyone.
          </p>
          <p className="story-main__text">
            From classic to contemporary, our frames are designed to suit every
            taste and style, making it easy for our customers to find the
            perfect pair of glasses.
          </p>
          <p className="story-main__text">
            Our commitment to accessibility is at the heart of everything we do,
            and we take pride in helping people around the world to see better
            and look their best.
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
            We are committed to making a positive impact on the world around us.
            We believe that as a business, we have a responsibility to give back
            to the communities we serve and to protect the planet we all call
            home.
          </p>
          <p className="story-main__text">
            From using sustainable materials and manufacturing practices to
            supporting local charities and non-profits, we are constantly
            striving to make a difference.
          </p>
          <p className="story-main__text">
            When you choose our brand, you are not just getting a pair of
            stylish and functional glasses - you are also joining us in our
            commitment to making a positive impact on the world.
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
            We believe that everyone deserves access to high-quality eyecare,
            and that is why we have partnered with various organizations to
            promote awareness and support initiatives that make vision care
            accessible to those in need.
          </p>
          <p className="story-eyecare__text">
            With every purchase, we also provide educational resources and
            support to help our customers take care of their eyes and maintain
            good eye health for years to come.
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
