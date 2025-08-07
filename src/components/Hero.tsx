import React from 'react';
import { ArrowRight, Building2, Target, Award } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="pt-28 pb-16 gradient-bg relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow animation-delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center relative">
          {/* Content */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold text-dark-800 leading-tight mb-8">
              Building Excellence in <span className="text-gradient">Civil Engineering</span>
            </h1>
            <p className="text-lg text-dark-600 mb-8 leading-relaxed">
              SHARAFKARM Solutions is a dedicated civil engineering company focused on adding 
              exceptional value to construction ventures by delivering high-quality services 
              within budget and strict deadlines. We combine professionalism, attention to detail, 
              and innovative solutions to exceed your expectations.
            </p>
            
            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl shadow-soft">
                  <Building2 className="h-5 w-5 text-primary-700" />
                </div>
                <span className="text-sm font-semibold text-dark-700">Professional Excellence</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl shadow-soft">
                  <Target className="h-5 w-5 text-primary-700" />
                </div>
                <span className="text-sm font-semibold text-dark-700">Precision & Detail</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl shadow-soft">
                  <Award className="h-5 w-5 text-primary-700" />
                </div>
                <span className="text-sm font-semibold text-dark-700">Innovation Focus</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('services')}
                className="btn-primary"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-secondary"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="mt-12 lg:mt-0 animate-fade-in-right">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
              <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-large border border-primary-100 animate-float">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gradient mb-2">10+</div>
                  <div className="text-dark-600 mb-4 font-medium">Skilled Engineers</div>
                  <div className="text-4xl font-bold text-gradient mb-2">100%</div>
                  <div className="text-dark-600 mb-4 font-medium">Client Satisfaction</div>
                  <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
                  <div className="text-dark-600 font-medium">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;