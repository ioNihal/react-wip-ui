import React, { HTMLAttributes } from 'react';
import { Construction } from 'lucide-react';

export interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
  message?: string;
  className?: string;
  disabled?: boolean;
}

export const Overlay: React.FC<OverlayProps> = ({ 
  children, 
  message = 'Under Construction', 
  className = '',
  disabled = false,
  ...props 
}) => {
  if (disabled) {
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
