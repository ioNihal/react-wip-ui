import React, { HTMLAttributes } from 'react';
import { useWIP } from '../hooks/useWIP';

export interface RibbonProps extends HTMLAttributes<HTMLDivElement> {
  position?: 'top-left' | 'top-right';
  text?: string;
  variant?: 'solid' | 'outline';
  className?: string;
}

export const Ribbon: React.FC<RibbonProps> = ({ 
  position = 'top-right', 
  text = 'WIP', 
  variant = 'solid',
  className = '',
  ...props 
}) => {
  const { globalDisabled } = useWIP();
  if (globalDisabled) return null;

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
