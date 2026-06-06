import React from 'react';
import { Link, useNavigate, useLocation } from '../router';
import { Linkedin, Mail, Phone } from 'lucide-react';
import { scrollToSection } from '../utils/navigation';

const LINKEDIN_URL = 'https://www.linkedin.com/company/sharafkarm/';
const EMAIL = 'sharafkarmsolutions@gmail.com';
const PHONE = '+92 304 5410966';
const PHONE_HREF = 'tel:+923045410966';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionLink = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <footer className="bg-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="mb-5">
              <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-white mb-4">
                <img
                  src="/images/logo_bgr.png"
                  alt="SHARAFKARM Solutions"
                  className="h-14 w-14 object-contain"
                  width={56}
                  height={56}
                />
              </div>
              <div className="font-bold text-xl text-white">SHARAFKARM Solutions</div>
              <div className="text-primary-400 text-sm font-medium mt-1">
                Civil Engineering &amp; Project Consultancy
              </div>
            </div>
            <p className="text-dark-300 text-sm leading-relaxed max-w-md mb-5">
              Delivering quantity surveying, cost estimation, project planning, contract
              management, architectural design, GIS mapping, and risk modelling for clients
              who need accurate, on-time engineering solutions.
            </p>
            <div className="flex gap-3">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-dark-300 hover:text-white transition-colors"
                aria-label="SHARAFKARM on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-dark-300 hover:text-white transition-colors"
                aria-label="Email SHARAFKARM"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href={PHONE_HREF}
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-dark-300 hover:text-white transition-colors"
                aria-label="Call SHARAFKARM"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-dark-300">
              {[
                { label: 'Services', id: 'services' },
                { label: 'Projects', id: 'projects' },
                { label: 'About', id: 'about' },
                { label: 'Blog', id: 'blog' },
                { label: 'FAQ', id: 'faq' },
                { label: 'Contact', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleSectionLink(link.id)}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <Link to="/team" className="hover:text-white transition-colors">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-dark-300">
              <li>NUST, Islamabad</li>
              <li>
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors break-all">
                  {EMAIL}
                </a>
              </li>
              <li>
                <a href={PHONE_HREF} className="hover:text-white transition-colors">
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-dark-400">
          © {currentYear} SHARAFKARM Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
