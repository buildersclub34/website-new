import React from 'react';

interface SectionHeaderProps {
  title: string | React.ReactNode;
  subtitle?: string;
  badgeText?: string;
  className?: string;
  highlightedText?: string;
  description?: string;
  icon?: React.ReactNode;
  gradientText?: string;
  gradientColors?: string;
  titleClassName?: string;
}

export function SectionHeader({ 
  title, 
  subtitle, 
  badgeText, 
  className = '',
  highlightedText,
  description,
  icon,
  gradientText,
  gradientColors = 'from-[#FFD700] via-[#FFC000] to-[#FFA500]',
  titleClassName = ''
}: SectionHeaderProps) {
  const renderTitle = () => {
    const titleClasses = `font-black text-white mb-4 ${titleClassName || 'text-4xl md:text-5xl'}`;
    
    if (gradientText && typeof title === 'string') {
      const parts = title.split(gradientText);
      return (
        <h2 className={titleClasses}>
          {parts[0]}
          <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradientColors}`}>
            {gradientText}
          </span>
          {parts[1]}
        </h2>
      );
    }
    
    return (
      <h2 className={titleClasses}>
        {title}
      </h2>
    );
  };

  return (
    <div className={`text-center mb-12 ${className}`}>
      {badgeText && (
        <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-yellow-500 uppercase rounded-full bg-yellow-500/10 mb-4">
          {badgeText}
        </span>
      )}
      {renderTitle()}
      {subtitle && (
        <p className="max-w-2xl mx-auto text-lg text-gray-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
