import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';

const faqs = [
  {
    question: 'What types of civil engineering projects do you support?',
    answer:
      'We support commercial buildings, infrastructure works, road projects, and contract administration engagements across quantity surveying, estimation, structural design, and planning.',
  },
  {
    question: 'How quickly can you start after receiving project documents?',
    answer:
      'For standard scopes, we typically begin within 48 hours of receiving drawings, BOQ inputs, or contract references. Urgent scopes can be discussed directly by phone.',
  },
  {
    question: 'Which software tools does your team use?',
    answer:
      'Our team works with AutoCAD, Revit, ETABS, PlanSwift, Primavera P6, Civil 3D, MS Excel, and FIDIC-based contract frameworks depending on project needs.',
  },
  {
    question: 'Do you provide interim payment certificates and contract support?',
    answer:
      'Yes. We prepare IPCs, variation assessments, measurement verification, and arbitration summaries aligned with contractual procedures.',
  },
  {
    question: 'How do I request a quote?',
    answer:
      'Use the contact form with your project scope, timeline, and available drawings. We respond within 24 hours with scope confirmation and next steps.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="FAQ"
          title="Common questions"
          description="Quick answers before you reach out. For project-specific queries, contact us directly."
        />

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="card overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-dark-900">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-dark-500 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-dark-600 leading-relaxed border-t border-dark-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
