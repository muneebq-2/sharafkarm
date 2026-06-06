import React from 'react';
import { Link, useLocation, useNavigate } from '../router';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '../utils/navigation';

interface HeaderProps {
  activeSection?: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { id: 'services', label: 'Services', type: 'section' as const },
    { id: 'projects', label: 'Projects', type: 'section' as const },
    { id: 'about', label: 'About', type: 'section' as const },
    { id: 'blog', label: 'Blog', type: 'section' as const },
    { id: 'team', label: 'Team', type: 'page' as const, path: '/team' },
    { id: 'contact', label: 'Contact', type: 'section' as const },
  ];

  const handleSectionNav = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      return;
    }
    scrollToSection(sectionId);
  };

  const isActive = (id: string, type: 'section' | 'page') => {
    if (type === 'page') return location.pathname === '/team';
    return location.pathname === '/' && activeSection === id;
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-b border-dark-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <Link to="/" className="flex items-center gap-3 group" onClick={() => setIsMobileMenuOpen(false)}>
            <img
              src="/images/logo_bgr.png"
              alt="Sharafkarm Logo"
              className="h-12 w-auto"
              width={48}
              height={48}
              decoding="async"
            />
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-dark-900 leading-tight">SHARAFKARM</div>
              <div className="text-xs font-medium text-dark-500 tracking-wide">Solutions</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) =>
              item.type === 'page' ? (
                <Link
                  key={item.id}
                  to={item.path!}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive(item.id, 'page')
                      ? 'text-primary-700 bg-primary-50'
                      : 'text-dark-600 hover:text-primary-700 hover:bg-primary-50/60'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => handleSectionNav(item.id)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive(item.id, 'section')
                      ? 'text-primary-700 bg-primary-50'
                      : 'text-dark-600 hover:text-primary-700 hover:bg-primary-50/60'
                  }`}
                >
                  {item.label}
                </button>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <button onClick={() => handleSectionNav('contact')} className="btn-primary text-sm">
              Get a Quote
            </button>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg text-dark-600 hover:text-primary-700 hover:bg-primary-50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-dark-100 py-4">
            <nav className="space-y-1">
              {navigationItems.map((item) =>
                item.type === 'page' ? (
                  <Link
                    key={item.id}
                    to={item.path!}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                      isActive(item.id, 'page')
                        ? 'text-primary-700 bg-primary-50'
                        : 'text-dark-600 hover:bg-primary-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => handleSectionNav(item.id)}
                    className={`block w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
                      isActive(item.id, 'section')
                        ? 'text-primary-700 bg-primary-50'
                        : 'text-dark-600 hover:bg-primary-50'
                    }`}
                  >
                    {item.label}
                  </button>
                )
              )}
              <button
                onClick={() => handleSectionNav('contact')}
                className="w-full btn-primary mt-3 text-sm"
              >
                Get a Quote
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
