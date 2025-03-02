
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  className?: string;
  children: React.ReactNode;
  hoverEffect?: boolean;
  delayIndex?: number;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  className,
  children,
  hoverEffect = true,
  delayIndex = 0
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const delayClass = delayIndex === 0 
    ? 'animate-fade-up' 
    : delayIndex === 1 
      ? 'opacity-0 animate-delayed-fade-up' 
      : 'opacity-0 animate-long-delayed-fade-up';

  return (
    <div
      className={cn(
        'rounded-2xl p-6 transition-all duration-300',
        hoverEffect && 'hover:shadow-lg hover:-translate-y-1',
        isHovered && 'shadow-lg -translate-y-1',
        delayClass,
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
