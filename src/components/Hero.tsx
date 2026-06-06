import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { scrollToSection } from '../utils/navigation';

const proofPoints = [
  '25+ projects delivered',
  'FIDIC & code-compliant workflows',
  '24-hour inquiry response',
];

const Hero: React.FC = () => {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = '/images/project4.jpg';
    img.onload = () => setBgLoaded(true);
  }, []);

  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-dark-900">
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
          bgLoaded ? 'opacity-30' : 'opacity-0'
        }`}
        style={{ backgroundImage: bgLoaded ? "url('/images/project4.jpg')" : undefined }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/95 to-dark-900/70" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="section-label text-primary-400 mb-4">Civil Engineering Consultancy</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
            Precision engineering for projects that must be{' '}
            <span className="text-primary-400">built right</span>
          </h1>
          <p className="text-lg text-dark-200 leading-relaxed mb-8 max-w-2xl">
            SHARAFKARM Solutions helps developers and contractors control cost, schedule,
            and technical risk through quantity surveying, estimation, structural design,
            and contract management.
          </p>

          <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-10">
            {proofPoints.map((point) => (
              <li
                key={point}
                className="inline-flex items-center gap-2 text-sm text-dark-100 bg-white/5 border border-white/10 rounded-full px-4 py-2"
              >
                <CheckCircle2 className="h-4 w-4 text-primary-400 shrink-0" />
                {point}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => scrollToSection('contact')} className="btn-primary">
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center justify-center px-6 py-3.5 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/10 transition-colors"
            >
              View Our Work
            </button>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {[
            { value: '25+', label: 'Projects Completed' },
            { value: '10+', label: 'Engineering Specialists' },
            { value: '15+', label: 'Software Tools' },
            { value: '100%', label: 'On-Time Delivery' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-5 text-center"
            >
              <div className="text-2xl lg:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm text-dark-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
