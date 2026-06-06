import React, { lazy, useEffect } from 'react';
import Hero from '../components/Hero';
import LazySection from '../components/LazySection';
import { scrollToHash } from '../utils/navigation';

const Clients = lazy(() => import('../components/Clients'));
const Services = lazy(() => import('../components/Services'));
const Projects = lazy(() => import('../components/Projects'));
const About = lazy(() => import('../components/About'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const Blog = lazy(() => import('../components/Blog'));
const FAQ = lazy(() => import('../components/FAQ'));
const Contact = lazy(() => import('../components/Contact'));

interface HomeProps {
  onSectionChange: (section: string) => void;
}

const Home: React.FC<HomeProps> = ({ onSectionChange }) => {
  const hasDeepLink = !!window.location.hash;

  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => scrollToHash(window.location.hash), 300);
    }
  }, []);

  useEffect(() => {
    const sections = ['home', 'services', 'projects', 'about', 'blog', 'faq', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            onSectionChange(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onSectionChange]);

  return (
    <main>
      <Hero />
      <LazySection minHeight="80px" forceLoad={hasDeepLink}>
        <Clients />
      </LazySection>
      <LazySection minHeight="400px" forceLoad={hasDeepLink}>
        <Services />
      </LazySection>
      <LazySection minHeight="400px" forceLoad={hasDeepLink}>
        <Projects />
      </LazySection>
      <LazySection minHeight="300px" forceLoad={hasDeepLink}>
        <About />
      </LazySection>
      <LazySection minHeight="300px" forceLoad={hasDeepLink}>
        <Testimonials />
      </LazySection>
      <LazySection minHeight="300px" forceLoad={hasDeepLink}>
        <Blog />
      </LazySection>
      <LazySection minHeight="200px" forceLoad={hasDeepLink}>
        <FAQ />
      </LazySection>
      <LazySection minHeight="400px" forceLoad={hasDeepLink}>
        <Contact />
      </LazySection>
    </main>
  );
};

export default Home;
