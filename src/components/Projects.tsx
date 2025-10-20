import React from 'react';
import { Calendar, Wrench } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Bar Bending Schedule",
      category: "Structural Engineering",
      description: "A detailed bar bending schedule for a 5-storey office building, including reinforcement detailing, bar length calculations, and steel quantity estimation for slab elements. Ensured compliance with structural drawings and optimized reinforcement layout for material efficiency.",
      tools: ["PlanSwift", "MS Excel","AutoCad"],
      duration: "1 week",
      teamSize: "4 engineers",
      image: "images/project1.jpg"
    },
    {
      title: "RCC Office Building",
      category: "Quantity Surveying",
      description: "Interim Payment Certificate A detailed Interim Payment Certificate for an RCC office building project, encompassing civil, MEP, and finishing works. Included measurement verification, rate analysis, and valuation as per FIDIC-based contractual procedures.",
      tools: ["Revit", "AutoCad","MS Excel"],
      duration: "2 weeks",
      teamSize: "6 engineers",
      image: "images/project2.jpg"
    },
    {
      title: "Sector Infrastructure Development",
      category: "Project Management",
      description: "Complete planning and scheduling of infrastructure works using Primavera P6, covering road networks, parking, and service lanes with defined dependencies and timelines for efficient project execution.",
      tools: ["P6 Primavera", "Civil 3D", "MS Excel"],
      duration: "3 weeks",
      teamSize: "3 engineers",
      image: "images/project3.jpg"
    },
    {
      title: "Structural Design of a Commercial Building",
      category: "Structural Engineering",
      description: "Complete structural design of a multi-story commercial building. The scope included slab reinforcement detailing, beam layouts, and column coordination for load optimization. Advanced analysis ensured structural integrity, stability, and compliance with relevant design codes. Precision in detailing was emphasized to enhance constructability and cost efficiency.",
      tools: ["ETABS", "AutoCAD"],
      duration: "2 weeks",
      teamSize: "5 engineers",
      image: "images/project4.jpg"
    },
    {
      title: "Detailed Quantity Estimation for a Roadworks Project",
      category: "Quantity Surveying",
      description: "A comprehensive quantity estimation and cost analysis for roadworks development. It covered itemized rate build-ups, material take-offs, and installation cost evaluations. Each component was analyzed using subcontractor quotations and verified against project specifications. The deliverable ensured transparent cost tracking, accurate budgeting, and efficient resource planning.",
      tools: ["PlanSwift", "Civil 3D", "MS Excel"],
      duration: "4 weeks",
      teamSize: "7 engineers",
      image: "images/project5.jpg"
    },
    {
      title: "Dispute Proceedings and Arbitration Summary",
      category: "Contract Management",
      description: "Focused on preparing a detailed summary for an ongoing construction dispute arbitration. It included analysis of contract terms, variation orders, and correspondence to establish entitlement. Comprehensive documentation and evidence were organized to support the client's position effectively. The summary provided a clear, structured basis for negotiation and resolution in arbitration proceedings.",
      tools: ["FIDIC Handbook"],
      duration: "3 weeks",
      teamSize: "4 engineers",
      image: "images/project6.jpg"
    }
  ];

  const projectStats = [
    { number: "25+", label: "Projects Completed" },
    { number: "100%", label: "On-Time Delivery" },
    { number: "15+", label: "Software Tools" },
    { number: "50+", label: "Client Hours" }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-dark-800 mb-4">Our Projects</h2>
          <p className="text-lg text-dark-600 max-w-3xl mx-auto">
            Explore our portfolio of successful academic and freelance projects showcasing our 
            expertise across various civil engineering disciplines and our commitment to excellence.
          </p>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {projectStats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">{stat.number}</div>
              <div className="text-dark-600 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card card-hover overflow-hidden group animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-800 mb-3">{project.title}</h3>
                <p className="text-dark-600 mb-4 leading-relaxed">{project.description}</p>
                
                {/* Project Details */}
                <div className="grid grid-cols-1 gap-4 mb-4">
                  <div className="flex items-center text-sm text-dark-600 font-medium">
                    <Calendar className="h-4 w-4 mr-2 text-primary-600" />
                    {project.duration}
                  </div>
                </div>

                {/* Tools Used */}
                <div className="mb-4">
                  <div className="flex items-center text-sm text-dark-600 font-medium mb-2">
                    <Wrench className="h-4 w-4 mr-2 text-primary-600" />
                    Tools Used:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <span key={toolIndex} className="bg-primary-50 px-3 py-1 rounded-full text-xs font-semibold text-primary-700 border border-primary-200">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 lg:p-12 shadow-medium border border-primary-100">
          <h3 className="text-3xl font-bold text-dark-800 mb-4">Have a Project in Mind?</h3>
          <p className="text-dark-600 mb-6 max-w-2xl mx-auto text-lg">
            Let's discuss how our expertise and proven track record can help bring your civil engineering 
            project to life with precision, efficiency, and innovation.
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
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;