import React, { useState, useEffect } from 'react';
import { useLocation } from '../router';
import Header from './Header';
import Footer from './Footer';
import Home from '../pages/Home';
import Team from '../pages/Team';
import { scrollToHash } from '../utils/navigation';
import { loadBotpress } from '../utils/loadBotpress';

const Layout: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname === '/' && hash) {
      setTimeout(() => scrollToHash(hash), 150);
    } else if (pathname !== '/') {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  useEffect(() => {
    const loadChat = () => loadBotpress();
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(loadChat, { timeout: 5000 });
      return () => window.cancelIdleCallback(id);
    }
    const timer = setTimeout(loadChat, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header activeSection={activeSection} />
      <div className="flex-1">
        {pathname === '/team' ? (
          <Team />
        ) : (
          <Home onSectionChange={setActiveSection} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
