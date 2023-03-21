import Hero from '../components/Hero';
import FeaturedCollection from '../components/FeaturedCollection';
import BlogContent from '../components/BlogContent';

function HomePage() {
  return (
    <div className="screen-home">
      <Hero />
      <FeaturedCollection />
      <BlogContent />
    </div>
  );
}
export default HomePage;
