import React from 'react';
import { Users, BookOpen, Briefcase, Target, Linkedin, Mail } from 'lucide-react';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: "Syed Mohammad Asad",
      role: "Managing Partner",
      description: "Sets vision and strategy, leads company direction, manages partnerships, and oversees overall performance.",
      image: "images/asad.jpg",
      linkedin: "http://www.linkedin.com/in/syedasadmohammad",
      email: "asdsydmhd79@gmail.com"
    },
    {
      name: "Khadija Javed",
      role: "Director of Services",
      description: "Manages daily workflow, team coordination, project delivery timelines, and service quality",
      image: "images\\khadija.jpg",
      linkedin: "http://linkedin.com/in/khadija-javed-083579347",
      email: "khadijajaved450@gmail.com"
    },
    {
      name: "Muhammad Abdullah",
      role: "Chief of Marketing",
      description: "Grows the client base, builds brand presence online (LinkedIn, website, etc.), and handles proposals and sales funnels.",
      image: "images/abdullah.jpg",
      linkedin: "https://www.linkedin.com/in/muhammad-abdullah-b51503313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "abdullahjutt1027@gmail.com"
    },
    {
      name: "Alisha Ahsan",
      role: "Head of Client Acquisition",
      description: "Sales funnel, cold outreach, client targeting.",
      image: "images/alisha.jpg",
      linkedin: "https://www.linkedin.com/in/alishaahsan/",
      email: "alishaahsan67@gmail.com"
    },
    {
      name: "Moaziz Ali Khan",
      role: "Head of Finance",
      description: "Handles pricing strategy, invoicing, expense tracking, payments, budgeting, and financial reporting.",
      image: "images/moaziz.jpg",
      linkedin: "https://www.linkedin.com/in/moaziz-ali-khan-a8b001379",
      email: "moaziz.ali.khan1318@gmail.com"
    },
    {
      name: "Reaan Abid",
      role: "Head of Contracts and Legal Affairs",
      description: "Oversees contract drafting, review, negotiation, compliance, and risk management for clients and vendors.",
      image: "images/ReaanA.jpg",
      linkedin: "http://linkedin.com/in/reaan-abid-563970141",
      email: "reaanabid123@gmail.com"
    },
    {
      name: "Rayan Amin",
      role: "Head of Design",
      description: "Leads architectural, structural, and MEP design output (AutoCAD, Revit, etc.) and supervises design deliverables.",
      image: "images/Rayyan.jpg",
    //  linkedin: "https://www.linkedin.com/in/rayan-amin/",
      email: "rayyanamin2k19@gmail.com"
    },
    {
      name: "Shaheer Umar",
      role: "Chief Technical Officer",
      description: "Supervises technical quality, design engineering, and compliance with codes.",
      image: "images/shaheer.png",
      linkedin: "http://linkedin.com/in/shaheer-umar",
      email: "shaheerumar23@gmail.com"
    },
    {
      name: "Hisham Khan",
      role: "Head Project Consultancy",
      description: "Provides expert input on project planning, scheduling (Primavera/MS Project), and technical consultancy.",
      image: "images/hisham.jpg",
      linkedin: "https://www.linkedin.com/in/hisham-khan-9a50b1365?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      email: "hishamkhanma@gmail.com"
    },
    {
      name: "Muhammad Faseeh",
      role: "Head of Estimation",
      description: "Manages estimation work, quantity take-offs, and cost breakdowns using tools like Bluebeam, Planswift, or Excel.",
      image: "images/faseeh.png",
      // linkedin: "https://www.instagram.com/faseehlicious?igsh=aXg3dnljNXB6OGxl",
      email: "Faseehlicious@gmail.com"
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
                <button 
                  onClick={() => window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${member.email}`, '_blank')} 
                  className="text-dark-500 hover:text-primary-700 transition-colors"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail className="h-5 w-5" />
                </button>
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