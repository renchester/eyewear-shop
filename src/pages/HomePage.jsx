import { useEffect } from 'react';

import Hero from '../components/Hero';
import FeaturedCollection from '../components/FeaturedCollection';
import BlogContent from '../components/BlogContent';
import FeaturedProducts from '../components/FeaturedProducts';

import blogData from '../data/homePageBlogData';

function HomePage() {
  useEffect(() => {
    document.title = 'SAVANT Eyewear Online Store';
  }, []);

  return (
    <div className="screen-home">
      <Hero />
      <FeaturedCollection />
      <BlogContent content={blogData} headerTitle="Latest Posts" />
      <FeaturedProducts />
    </div>
  );
}
export default HomePage;
