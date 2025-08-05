import React from 'react';
import { Users, BookOpen, Briefcase, Target, Linkedin, Mail } from 'lucide-react';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: "Syed Muhammad Asad",
      role: "Structural Design Specialist",
      description: "Expert in structural analysis and design with focus on modern construction techniques.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      linkedin: "https://linkedin.com/",
      email: "mailto:s.asad@example.com"
    },
    {
      name: "Ahmed Khan",
      role: "Quantity Surveyor",
      description: "Specializes in cost estimation and quantity surveying for large-scale projects.",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      linkedin: "https://linkedin.com/",
      email: "mailto:a.khan@example.com"
    },
    {
      name: "Omar Ali",
      role: "Project Manager",
      description: "Expert in project planning and management using MS Project and Primavera.",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      linkedin: "https://linkedin.com/",
      email: "mailto:o.ali@example.com"
    },
    {
      name: "Fatima Ibrahim",
      role: "Contract Management",
      description: "Specializes in construction contract management and legal compliance.",
      image: "https://images.pexels.com/photos/3778966/pexels-photo-3778966.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      linkedin: "https://linkedin.com/",
      email: "mailto:f.ibrahim@example.com"
    },
    {
      name: "Khalid Ahmed",
      role: "Site Engineer",
      description: "Field expert with extensive experience in construction supervision.",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      linkedin: "https://linkedin.com/",
      email: "mailto:k.ahmed@example.com"
    },
    {
      name: "Noura Salem",
      role: "CAD Specialist",
      description: "Proficient in AutoCAD, Revit, and other design software for technical drawings.",
      image: "https://images.pexels.com/photos/3785074/pexels-photo-3785074.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      linkedin: "https://linkedin.com/",
      email: "mailto:n.salem@example.com"
    },
    {
      name: "Yusuf Omar",
      role: "Environmental Engineer",
      description: "Focuses on sustainable construction practices and environmental compliance.",
      image: "https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      linkedin: "https://linkedin.com/",
      email: "mailto:y.omar@example.com"
    },
    {
      name: "Amina Rashid",
      role: "Quality Control",
      description: "Ensures quality standards and compliance throughout project lifecycle.",
      image: "https://images.pexels.com/photos/3778965/pexels-photo-3778965.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      linkedin: "https://linkedin.com/",
      email: "mailto:a.rashid@example.com"
    },
    {
      name: "Hassan Abdullah",
      role: "Transportation Engineer",
      description: "Specializes in transportation infrastructure and traffic management systems.",
      image: "https://images.pexels.com/photos/2379003/pexels-photo-2379003.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      linkedin: "https://linkedin.com/",
      email: "mailto:h.abdullah@example.com"
    },
    {
      name: "Layla Mansour",
      role: "Water Resources Engineer",
      description: "Expert in hydraulic systems, water supply, and drainage infrastructure.",
      image: "https://images.pexels.com/photos/3785076/pexels-photo-3785076.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      linkedin: "https://linkedin.com/",
      email: "mailto:l.mansour@example.com"
    }
  ];

  const highlights = [
    {
      icon: <Users className="h-8 w-8 text-emerald-700" />,
      title: "Skilled Team",
      description: "10 final-year civil engineering students with diverse expertise"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-emerald-700" />,
      title: "Academic Excellence",
      description: "Strong foundation in theoretical knowledge and practical application"
    },
    {
      icon: <Briefcase className="h-8 w-8 text-emerald-700" />,
      title: "Project Experience",
      description: "Proven track record in both academic and freelance projects"
    },
    {
      icon: <Target className="h-8 w-8 text-emerald-700" />,
      title: "Collaborative Approach",
      description: "Working together to deliver exceptional results"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-dark-800 mb-4">About SHARAFKARM Solutions</h2>
          <p className="text-lg text-dark-600 max-w-3xl mx-auto">
            We are a dynamic team of 10 final-year civil engineering students passionate about 
            delivering excellence in construction and infrastructure projects. Our diverse skills 
            and collaborative approach ensure innovative solutions for every challenge.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {highlights.map((highlight, index) => (
            <div key={index} className="text-center group animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 p-4 rounded-full w-20 h-20 mx-auto mb-4 group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-300 flex items-center justify-center shadow-soft group-hover:shadow-medium">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-bold text-dark-800 mb-2">{highlight.title}</h3>
              <p className="text-dark-600">{highlight.description}</p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-dark-800 text-center mb-4">Meet Our Team</h3>
          <p className="text-dark-600 text-center mb-12 max-w-2xl mx-auto">
            Our team brings together technical expertise, innovative thinking, and collaborative 
            spirit to deliver outstanding civil engineering solutions.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="card card-hover p-6 text-center group animate-fade-in-up" style={{animationDelay: `${index * 0.05}s`}}>
              <div className="relative mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <h4 className="text-lg font-bold text-dark-800 mb-1">{member.name}</h4>
              <p className="text-primary-700 font-semibold text-sm mb-3">{member.role}</p>
              <p className="text-dark-600 text-sm leading-relaxed">{member.description}</p>
              <div className="mt-4 flex justify-center space-x-4">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s LinkedIn`} className="text-dark-500 hover:text-primary-700 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href={member.email} aria-label={`Email ${member.name}`} className="text-dark-500 hover:text-primary-700 transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-dark-600 mb-6 text-lg">
            Ready to work with our talented team on your next project?
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
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;