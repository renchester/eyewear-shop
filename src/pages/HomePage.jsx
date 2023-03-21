import FeaturedCollection from '../components/FeaturedCollection';
import Hero from '../components/Hero';

function HomePage() {
  return (
    <div className="screen-home">
      <Hero />
      <FeaturedCollection />
    </div>
  );
}
export default HomePage;
