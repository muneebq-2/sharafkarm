import React from 'react';
import { Link } from '../router';
import { Users, BookOpen, Briefcase, Target, ArrowRight } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import { scrollToSection } from '../utils/navigation';

const highlights = [
  {
    icon: Users,
    title: 'Specialist Team',
    description: 'Focused civil engineering professionals across design, estimation, and contracts.',
  },
  {
    icon: BookOpen,
    title: 'Technical Depth',
    description: 'Strong foundation in codes, standards, and practical project delivery.',
  },
  {
    icon: Briefcase,
    title: 'Proven Delivery',
    description: 'Track record across academic and client-facing engineering engagements.',
  },
  {
    icon: Target,
    title: 'Client-First Approach',
    description: 'Clear communication, documented assumptions, and accountable timelines.',
  },
];

const tools = ['AutoCAD', 'Revit', 'ETABS', 'PlanSwift', 'Primavera P6', 'FIDIC'];

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <SectionHeader
              label="About Us"
              title="Engineering consultancy built for real project pressure"
              description="SHARAFKARM Solutions is a civil engineering consultancy helping clients deliver on scope, budget, and schedule. We combine technical precision with clear documentation at every stage."
              align="left"
            />
            <p className="text-dark-600 leading-relaxed mb-6 -mt-6">
              Whether you need a BOQ, structural package, or contract support, our team works
              with the rigor expected on live construction projects — not just classroom exercises.
            </p>
            <Link
              to="/team"
              className="inline-flex items-center text-primary-700 font-semibold hover:text-primary-800 transition-colors"
            >
              Meet our leadership team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="card p-5">
                  <div className="inline-flex p-2.5 rounded-lg bg-primary-50 text-primary-700 mb-3">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-dark-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-dark-600 text-xs leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 rounded-2xl bg-dark-900 p-8 lg:p-10">
          <h3 className="text-lg font-bold text-white mb-4">Tools & standards we work with</h3>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 rounded-lg bg-white/10 text-dark-100 text-sm font-medium border border-white/10"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="text-center mt-14">
          <button onClick={() => scrollToSection('contact')} className="btn-primary">
            Discuss Your Requirements
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
