import React, { useState } from 'react';
import { Link } from '../router';
import { Linkedin, Mail, MessageCircle, ChevronDown, ArrowLeft } from 'lucide-react';
import { featuredMember, coreTeamMembers } from '../data/team';

const TeamCard: React.FC<{
  member: (typeof coreTeamMembers)[0];
}> = ({ member }) => (
  <div className="card card-hover p-6 text-center">
    <img
      src={member.image}
      alt={member.name}
      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-md mb-4"
      onError={(e) => {
        (e.target as HTMLImageElement).src = '/images/logo_bgr.png';
      }}
    />
    <h4 className="text-lg font-bold text-dark-900">{member.name}</h4>
    <p className="text-primary-700 font-semibold text-sm mb-3">{member.role}</p>
    <p className="text-dark-600 text-sm leading-relaxed mb-4">{member.description}</p>
    <div className="flex justify-center gap-4">
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-dark-500 hover:text-primary-700 transition-colors"
          aria-label={`${member.name} on LinkedIn`}
        >
          <Linkedin className="h-5 w-5" />
        </a>
      )}
      <button
        onClick={() =>
          window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${member.email}`, '_blank')
        }
        className="text-dark-500 hover:text-primary-700 transition-colors"
        aria-label={`Email ${member.name}`}
      >
        <Mail className="h-5 w-5" />
      </button>
    </div>
  </div>
);

const Team: React.FC = () => {
  const [showMoreTeam, setShowMoreTeam] = useState(false);

  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <Link
          to="/"
          className="inline-flex items-center text-sm font-medium text-dark-500 hover:text-primary-700 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-1.5" />
          Back to home
        </Link>

        <p className="section-label mb-3">Our Team</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-dark-900 mb-4">Leadership</h1>
        <p className="text-dark-600 max-w-2xl mb-12 leading-relaxed">
          Meet the people leading SHARAFKARM Solutions — combining technical depth, project
          discipline, and client-focused delivery.
        </p>

        {/* Featured: Asad */}
        <div className="card overflow-hidden mb-12">
          <div className="lg:grid lg:grid-cols-5">
            <div className="lg:col-span-2 bg-dark-900 p-8 lg:p-10 flex items-center justify-center">
              <img
                src={featuredMember.image}
                alt={featuredMember.name}
                className="w-48 h-48 lg:w-56 lg:h-56 rounded-2xl object-cover shadow-large"
              />
            </div>
            <div className="lg:col-span-3 p-8 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-wider text-primary-600 mb-2">
                Managing Partner
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-dark-900 mb-2">
                {featuredMember.name}
              </h2>
              <p className="text-primary-700 font-semibold mb-5">{featuredMember.role}</p>
              <p className="text-dark-600 leading-relaxed mb-6">{featuredMember.description}</p>
              <div className="flex flex-wrap gap-4">
                {featuredMember.linkedin && (
                  <a
                    href={featuredMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-dark-600 hover:text-primary-700 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </a>
                )}
                <button
                  onClick={() =>
                    window.open(
                      `https://mail.google.com/mail/?view=cm&fs=1&to=${featuredMember.email}`,
                      '_blank'
                    )
                  }
                  className="inline-flex items-center gap-2 text-sm font-medium text-dark-600 hover:text-primary-700 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  Email
                </button>
                {featuredMember.whatsapp && (
                  <a
                    href={`https://wa.me/${featuredMember.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-green-700 hover:text-green-800 transition-colors"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Browse more */}
        {!showMoreTeam ? (
          <div className="text-center">
            <button
              onClick={() => setShowMoreTeam(true)}
              className="btn-secondary gap-2"
            >
              Browse More Team
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold text-dark-900 text-center mb-3">Core Team</h3>
            <p className="text-dark-600 text-center mb-10 max-w-xl mx-auto text-sm">
              The specialists who lead design, estimation, services, and project coordination.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreTeamMembers.map((member) => (
                <TeamCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;
