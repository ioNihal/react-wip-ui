import React, { HTMLAttributes } from 'react';

export interface RibbonProps extends HTMLAttributes<HTMLDivElement> {
  position?: 'top-left' | 'top-right';
  text?: string;
  variant?: 'solid' | 'outline';
  className?: string;
  disabled?: boolean;
}

export const Ribbon: React.FC<RibbonProps> = ({ 
  position = 'top-right', 
  text = 'WIP', 
  variant = 'solid',
  className = '',
  disabled = false,
  ...props 
}) => {
  if (disabled) return null;

  return (
    <div className="rwip-ribbon-container">
      <div 
        className={`rwip-ribbon ${position} ${variant} ${className}`} 
        {...props}
      >
        {text}
      </div>
    </div>
  );
};
