import { ReactNode } from 'react';

interface SectionHeaderProps {
  /** Main title text */
  title: string;
  /** Highlighted text that appears after the title */
  highlightedText?: string;
  /** Description text below the title */
  description?: string | ReactNode;
  /** Badge text at the top */
  badgeText?: string;
  /** Optional icon to display with the badge */
  icon?: ReactNode;
  /** Additional class names for the container */
  className?: string;
  /** Additional class names for the title */
  titleClassName?: string;
  /** Additional class names for the description */
  descriptionClassName?: string;
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
  /** Gradient colors for the highlighted text */
  gradientColors?: string;
}

export function SectionHeader({
  title,
  highlightedText,
  description,
  badgeText,
  icon: Icon,
  className = '',
  titleClassName = '',
  descriptionClassName = 'text-lg text-gray-300 mt-4 max-w-3xl',
  align = 'center',
  gradientColors = 'from-yellow-400 to-yellow-600',
}: SectionHeaderProps) {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div className={`flex flex-col ${alignmentClasses[align]} ${className} mb-12`}>
      {badgeText && (
        <div className="inline-flex items-center px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-xs font-medium uppercase tracking-wider mb-4">
          {badgeText}
        </div>
      )}
      <h2 className={`text-3xl md:text-5xl font-bold text-white ${titleClassName}`}>
        {title}
        {highlightedText && (
          <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradientColors}`}>
            {' '}{highlightedText}
          </span>
        )}
      </h2>
      {description && (
        <p className={`${descriptionClassName} ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
