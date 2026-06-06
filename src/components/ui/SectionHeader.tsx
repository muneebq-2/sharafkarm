import React from 'react';

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  description,
  align = 'center',
}) => {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl mb-14 ${alignClass}`}>
      <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary-600 mb-3">
        {label}
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-dark-600 leading-relaxed">{description}</p>
      )}
    </div>
  );
};

export default SectionHeader;
