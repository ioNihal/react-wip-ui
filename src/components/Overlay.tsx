import React, { HTMLAttributes } from 'react';
import { Construction } from 'lucide-react';
import { useWIP } from '../hooks/useWIP';

export interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
  message?: string;
  className?: string;
}

export const Overlay: React.FC<OverlayProps> = ({ 
  children, 
  message = 'Under Construction', 
  className = '',
  ...props 
}) => {
  const { globalDisabled } = useWIP();

  if (globalDisabled) {
    return <>{children}</>;
  }

  return (
    <div className={`rwip-overlay-container ${className}`} {...props}>
      {children}
      <div className="rwip-overlay" aria-hidden="true">
        <div className="rwip-overlay-message">
          <Construction size={18} />
          <span>{message}</span>
        </div>
      </div>
    </div>
  );
};
