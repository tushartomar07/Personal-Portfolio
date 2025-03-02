
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  chipText?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  chipText,
  align = 'center',
  className,
  titleClassName,
  subtitleClassName
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={cn('mb-12', alignmentClasses[align], className)}>
      {chipText && (
        <div className="mb-3 animate-fade-in">
          <span className="chip">{chipText}</span>
        </div>
      )}
      <h2 className={cn('font-medium mb-4 animate-fade-up', titleClassName)}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn('max-w-2xl mx-auto animate-delayed-fade-up opacity-0', 
          align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : '', 
          subtitleClassName
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
