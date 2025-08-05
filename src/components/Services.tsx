import React from 'react';
import { Calculator, FileText, Handshake as HandShake, Building, Calendar, Ruler } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Calculator className="h-8 w-8" />,
      title: "Quantity Surveying",
      description: "Accurate measurement and quantification of construction materials and labor, ensuring precise cost control and resource allocation for your projects.",
      features: ["Material Take-offs", "Bill of Quantities", "Cost Analysis", "Value Engineering"]
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Cost Estimation",
      description: "Comprehensive cost analysis and estimation services providing detailed breakdowns for informed decision-making and budget planning.",
      features: ["Detailed Estimates", "Budget Planning", "Cost Optimization", "Risk Assessment"]
    },
    {
      icon: <HandShake className="h-8 w-8" />,
      title: "Contract Management",
      description: "Professional contract administration ensuring compliance, dispute resolution, and smooth project execution from start to finish.",
      features: ["Contract Administration", "Dispute Resolution", "Compliance Management", "Progress Monitoring"]
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Structural Design",
      description: "Innovative structural design solutions using latest engineering principles and software tools for safe, efficient, and cost-effective structures.",
      features: ["Structural Analysis", "Design Optimization", "Load Calculations", "Drawing Production"]
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Project Planning",
      description: "Comprehensive project planning and scheduling using industry-standard tools like MS Project and Primavera for optimal project delivery.",
      features: ["Schedule Development", "Resource Planning", "Critical Path Analysis", "Progress Tracking"]
    },
    {
      icon: <Ruler className="h-8 w-8" />,
      title: "Technical Consulting",
      description: "Expert technical consultation and advisory services covering all aspects of civil engineering projects and construction challenges.",
      features: ["Technical Advisory", "Problem Solving", "Code Compliance", "Best Practices"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-dark-800 mb-4">Our Services</h2>
          <p className="text-lg text-dark-600 max-w-3xl mx-auto">
            We offer comprehensive civil engineering services combining technical expertise, 
            professional excellence, and cost-effective solutions to meet all your construction needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card card-hover p-8 group animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 p-4 rounded-xl w-fit mb-6 group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-300 shadow-soft">
                <div className="text-primary-700">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-dark-800 mb-4">{service.title}</h3>
              <p className="text-dark-600 mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-dark-600 font-medium">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key Benefits */}
        <div className="mt-20 bg-white rounded-2xl p-8 lg:p-12 shadow-medium border border-primary-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-dark-800 mb-4">Why Choose Our Services?</h3>
            <p className="text-dark-600 max-w-2xl mx-auto">
              Our commitment to excellence and innovative approach sets us apart in the civil engineering industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-soft">
                <span className="text-2xl font-bold text-primary-700">⚡</span>
              </div>
              <h4 className="text-lg font-bold text-dark-800 mb-2">Fast Delivery</h4>
              <p className="text-dark-600">Quick turnaround times without compromising on quality or accuracy.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-soft">
                <span className="text-2xl font-bold text-primary-700">💰</span>
              </div>
              <h4 className="text-lg font-bold text-dark-800 mb-2">Competitive Pricing</h4>
              <p className="text-dark-600">Affordable rates designed for startups and growing businesses.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-soft">
                <span className="text-2xl font-bold text-primary-700">🎯</span>
              </div>
              <h4 className="text-lg font-bold text-dark-800 mb-2">Technical Excellence</h4>
              <p className="text-dark-600">Cutting-edge tools and methodologies for superior results.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-dark-600 mb-6 text-lg">
            Ready to discuss your project requirements?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                const offsetTop = element.offsetTop - 80;
                window.scrollTo({
                  top: offsetTop,
                  behavior: 'smooth',
                });
              }
            }}
            className="btn-primary"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;