import { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  highlightedText: string;
  description: string;
  icon?: ReactNode;
  badgeText?: string;
}

export function SectionHeader({
  title,
  subtitle,
  highlightedText,
  description,
  icon: Icon,
  badgeText = 'Section',
}: SectionHeaderProps) {
  return (
    <div className="text-center mb-20">
      {badgeText && (
        <div className="inline-flex items-center px-6 py-3 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-medium mb-6 backdrop-blur-sm">
          {Icon && <span className="mr-2">{Icon}</span>}
          {badgeText}
        </div>
      )}
      <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
        {title}
        <span className="text-yellow-400 block mt-2">{highlightedText}</span>
      </h2>
      <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
}
