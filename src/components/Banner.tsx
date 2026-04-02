"use client";

import React, { HTMLAttributes, useState } from 'react';
import { X, Info } from 'lucide-react';
import { useWIP } from '../hooks/useWIP';

export interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  message?: string;
  dismissible?: boolean;
  position?: 'sticky' | 'relative';
  className?: string;
}

export const Banner: React.FC<BannerProps> = ({ 
  message = 'Parts of this application are currently under construction.', 
  dismissible = true,
  position = 'sticky',
  className = '',
  ...props 
}) => {
  const { globalDisabled } = useWIP();
  const [isVisible, setIsVisible] = useState(true);

  if (globalDisabled || !isVisible) return null;

  return (
    <div 
      className={`rwip-banner ${position === 'sticky' ? 'sticky' : ''} ${className}`} 
      role="alert"
      {...props}
    >
      <Info size={16} />
      <span>{message}</span>
      {dismissible && (
        <button 
          className="rwip-banner-close" 
          onClick={() => setIsVisible(false)}
          aria-label="Dismiss banner"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};
