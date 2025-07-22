import React from 'react';

interface SectionHeaderProps {
  title: string | React.ReactNode;
  subtitle?: string;
  badgeText?: string;
  className?: string;
  highlightedText?: string;
  description?: string;
  icon?: React.ReactNode;
}

export function SectionHeader({ 
  title, 
  subtitle, 
  badgeText, 
  className = '',
  highlightedText,
  description,
  icon
}: SectionHeaderProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      {badgeText && (
        <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-yellow-500 uppercase rounded-full bg-yellow-500/10 mb-4">
          {badgeText}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl mx-auto text-lg text-gray-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
