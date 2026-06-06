import React from 'react';
import {
  Calculator,
  FileText,
  CalendarClock,
  Calendar,
  Handshake as HandShake,
  PenTool,
  Map,
  ShieldAlert,
  Zap,
  BadgeDollarSign,
  Target,
} from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

const services = [
  {
    icon: Calculator,
    title: 'Quantity Surveying',
    description:
      'Accurate measurement and quantification of materials and labor for precise cost control.',
    features: ['Material Take-offs', 'Bill of Quantities', 'Cost Analysis'],
  },
  {
    icon: FileText,
    title: 'Cost Estimation',
    description:
      'Detailed and reliable cost forecasts to keep your project financially on track from start to finish.',
    features: ['Preliminary Estimates', 'Detailed Cost Estimates', 'Tender Pricing', 'Budget Planning'],
  },
  {
    icon: CalendarClock,
    title: 'Project Scheduling & Updating',
    description:
      'Structured timelines and real-time schedule updates to ensure your project stays on track.',
    features: ['Baseline Schedule Development', 'Progress Updating', 'Delay Analysis', 'Look-Ahead Schedules'],
  },
  {
    icon: Calendar,
    title: 'Project Planning',
    description:
      'End-to-end planning frameworks that align resources, milestones, and deliverables for project success.',
    features: ['Work Breakdown Structure (WBS)', 'Resource Allocation', 'Milestone Planning', 'Critical Path Analysis'],
  },
  {
    icon: HandShake,
    title: 'Construction Contract Management',
    description:
      'Professional oversight of construction contracts to protect your interests and ensure compliance.',
    features: ['Contract Drafting & Review', 'Claims Management', 'Variation Orders', 'Compliance Monitoring'],
  },
  {
    icon: PenTool,
    title: 'Architectural Design',
    description:
      'Creative and technically precise architectural design and drafting for residential and commercial projects.',
    features: ['Concept Design', 'Construction Drawings', '3D Modeling & Visualization', 'AutoCAD & Revit Drafting'],
  },
  {
    icon: Map,
    title: 'GIS Mapping, Cartography & Digitization',
    description:
      'Spatial data solutions and detailed mapping for infrastructure, land, and environmental projects.',
    features: ['GIS Data Analysis', 'Map Production & Cartography', 'Geographic Digitization', 'Remote Sensing (ERDAS)'],
  },
  {
    icon: ShieldAlert,
    title: 'Predictive Risk Modelling',
    description:
      'Data-driven risk identification and modelling to help you make informed decisions and avoid costly surprises.',
    features: [
      'Risk Identification & Register',
      'Quantitative Risk Analysis',
      'Monte Carlo Simulation',
      'Mitigation Strategy Development',
    ],
  },
];

const benefits = [
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Quick turnaround without compromising accuracy or review quality.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Competitive Pricing',
    description: 'Transparent scopes and rates suited to growing project portfolios.',
  },
  {
    icon: Target,
    title: 'Technical Excellence',
    description: 'Industry-standard tools and disciplined QA on every deliverable.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Services"
          title="End-to-end civil engineering support"
          description="From early estimates to contract close-out, we help you control scope, cost, and technical risk."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="card card-hover p-7 group">
                <div className="inline-flex p-3 rounded-xl bg-primary-50 text-primary-700 mb-5 group-hover:bg-primary-100 transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-dark-900 mb-3">{service.title}</h3>
                <p className="text-dark-600 text-sm leading-relaxed mb-5">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-dark-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title} className="rounded-2xl bg-dark-900 p-8 text-center">
                <div className="inline-flex p-3 rounded-xl bg-primary-700/20 text-primary-400 mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{benefit.title}</h4>
                <p className="text-dark-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
