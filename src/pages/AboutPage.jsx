import { useEffect } from 'react';

function AboutPage() {
  useEffect(() => {
    document.title = 'The SAVANT Experience | SAVANT Eyewear Online Store';
  }, []);

  return <div>Hello from AboutPage</div>;
}
export default AboutPage;
