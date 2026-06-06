import React from 'react';
import SectionHeader from './ui/SectionHeader';

const clients = [
  { name: 'DHA', logo: '/client/dha.jfif' },
  { name: 'NUST', logo: '/client/nust.png' },
  { name: 'Widecon', logo: '/client/widecon.jpg' },
];

const Clients: React.FC = () => {
  return (
    <section className="py-14 bg-white border-y border-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Trusted By"
          title="Organizations we have supported"
          description="Clients and partners who have trusted us with their civil engineering and project delivery needs."
        />

        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center h-28 w-44 sm:w-52"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                loading="lazy"
                decoding="async"
                className="max-h-24 sm:max-h-28 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
