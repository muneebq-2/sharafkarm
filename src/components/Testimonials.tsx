import React from 'react';
import { Quote } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

const testimonials = [
  {
    quote:
      'Their quantity surveying deliverables were detailed, well-structured, and aligned with our contract requirements. We saved significant time during procurement.',
    author: 'Project Manager',
    company: 'Commercial Development',
  },
  {
    quote:
      'The structural design package was code-compliant and constructible. Coordination between drawings and schedules was handled professionally.',
    author: 'Lead Consultant',
    company: 'Multi-Storey Building',
  },
  {
    quote:
      'Fast turnaround on cost estimation with transparent assumptions. Their team communicated clearly at every review stage.',
    author: 'Development Client',
    company: 'Infrastructure Works',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="section-padding bg-dark-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Testimonials"
          title="What clients say about our work"
          description="Real feedback from project stakeholders who relied on our technical and contractual support."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <article key={index} className="card card-hover p-8">
              <Quote className="h-8 w-8 text-primary-200 mb-4" />
              <p className="text-dark-700 leading-relaxed mb-6">&ldquo;{item.quote}&rdquo;</p>
              <div>
                <p className="font-semibold text-dark-900">{item.author}</p>
                <p className="text-sm text-dark-500">{item.company}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
