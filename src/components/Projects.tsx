import React, { useState } from 'react';
import { Calendar, Wrench } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import { scrollToSection } from '../utils/navigation';

const categories = ['All', 'Structural Engineering', 'Quantity Surveying', 'Project Management', 'Contract Management'] as const;

const projects = [
  {
    title: 'Bar Bending Schedule',
    category: 'Structural Engineering',
    description:
      'Detailed bar bending schedule for a 5-storey office building with reinforcement detailing and steel quantity optimization.',
    tools: ['PlanSwift', 'MS Excel', 'AutoCAD'],
    duration: '1 week',
    image: '/images/project1.jpg',
  },
  {
    title: 'RCC Office Building IPC',
    category: 'Quantity Surveying',
    description:
      'Interim Payment Certificate for an RCC office building covering civil, MEP, and finishing works per FIDIC procedures.',
    tools: ['Revit', 'AutoCAD', 'MS Excel'],
    duration: '2 weeks',
    image: '/images/project2.jpg',
  },
  {
    title: 'Sector Infrastructure Development',
    category: 'Project Management',
    description:
      'Planning and scheduling of road networks, parking, and service lanes using Primavera P6 with defined dependencies.',
    tools: ['P6 Primavera', 'Civil 3D', 'MS Excel'],
    duration: '3 weeks',
    image: '/images/project3.jpg',
  },
  {
    title: 'Commercial Building Structural Design',
    category: 'Structural Engineering',
    description:
      'Multi-story commercial building design including slab reinforcement, beam layouts, and column coordination.',
    tools: ['ETABS', 'AutoCAD'],
    duration: '2 weeks',
    image: '/images/project4.jpg',
  },
  {
    title: 'Roadworks Quantity Estimation',
    category: 'Quantity Surveying',
    description:
      'Comprehensive quantity estimation and cost analysis with itemized rate build-ups and material take-offs.',
    tools: ['PlanSwift', 'Civil 3D', 'MS Excel'],
    duration: '4 weeks',
    image: '/images/project5.jpg',
  },
  {
    title: 'Dispute Proceedings Summary',
    category: 'Contract Management',
    description:
      'Arbitration summary covering contract terms, variation orders, and evidence for construction dispute resolution.',
    tools: ['FIDIC Handbook'],
    duration: '3 weeks',
    image: '/images/dispute_summary.png',
  },
];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-dark-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Portfolio"
          title="Selected project work"
          description="Representative engagements across structural design, quantity surveying, planning, and contracts."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-primary-700 text-white'
                  : 'bg-white text-dark-600 border border-dark-200 hover:border-primary-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filtered.map((project, index) => (
            <article key={index} className="card card-hover overflow-hidden group">
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-dark-900/80 backdrop-blur text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  {project.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-900 mb-2">{project.title}</h3>
                <p className="text-dark-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex items-center text-sm text-dark-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2 text-primary-600" />
                  {project.duration}
                </div>
                <div className="flex items-start text-sm text-dark-500 mb-3">
                  <Wrench className="h-4 w-4 mr-2 mt-0.5 text-primary-600 shrink-0" />
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="bg-primary-50 text-primary-800 text-xs font-medium px-2.5 py-1 rounded-md"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-14">
          <p className="text-dark-600 mb-5">Have a project scope to discuss?</p>
          <button onClick={() => scrollToSection('contact')} className="btn-primary">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
