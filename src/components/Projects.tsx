import React from 'react';
import { ExternalLink, Calendar, Users, Wrench } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Commercial Building Design",
      category: "Structural Design",
      description: "Complete structural design and analysis for a 5-story commercial building including foundation design, beam calculations, and seismic analysis.",
      tools: ["AutoCAD", "ETABS", "SAFE", "MS Excel"],
      duration: "3 months",
      teamSize: "4 engineers",
      image: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      title: "Highway Infrastructure Planning",
      category: "Transportation Engineering",
      description: "Comprehensive planning and design for a 10km highway section including traffic analysis, pavement design, and drainage systems.",
      tools: ["Civil 3D", "HCS", "Primavera", "ArcGIS"],
      duration: "4 months",
      teamSize: "6 engineers",
      image: "https://images.pexels.com/photos/2837644/pexels-photo-2837644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      title: "Residential Complex Cost Analysis",
      category: "Quantity Surveying",
      description: "Detailed quantity takeoff and cost estimation for a 200-unit residential complex with comprehensive bill of quantities and pricing analysis.",
      tools: ["MS Excel", "CostX", "Bluebeam", "MS Project"],
      duration: "2 months",
      teamSize: "3 engineers",
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      title: "Water Treatment Plant Design",
      category: "Environmental Engineering", 
      description: "Design and planning of a municipal water treatment facility with capacity analysis, process design, and environmental impact assessment.",
      tools: ["AutoCAD", "Bentley WaterCAD", "MS Project", "MATLAB"],
      duration: "5 months",
      teamSize: "5 engineers",
      image: "https://images.pexels.com/photos/3651597/pexels-photo-3651597.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      title: "Bridge Construction Management",
      category: "Project Management",
      description: "Complete project management for a concrete bridge construction including scheduling, resource allocation, and quality control procedures.",
      tools: ["Primavera P6", "MS Project", "Procore", "AutoCAD"],
      duration: "6 months", 
      teamSize: "7 engineers",
      image: "https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      title: "Industrial Facility Planning",
      category: "Site Development",
      description: "Site planning and development for an industrial manufacturing facility including utilities design, site grading, and infrastructure layout.",
      tools: ["Civil 3D", "SketchUp", "MS Project", "GIS"],
      duration: "3 months",
      teamSize: "4 engineers", 
      image: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
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
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-sm text-dark-600 font-medium">
                    <Calendar className="h-4 w-4 mr-2 text-primary-600" />
                    {project.duration}
                  </div>
                  <div className="flex items-center text-sm text-dark-600 font-medium">
                    <Users className="h-4 w-4 mr-2 text-primary-600" />
                    {project.teamSize}
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
                
                {/* Action Button */}
                <button className="flex items-center text-primary-700 font-semibold hover:text-primary-800 transition-colors duration-200">
                  View Details
                  <ExternalLink className="h-4 w-4 ml-2" />
                </button>
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