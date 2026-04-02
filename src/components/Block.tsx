import React, { HTMLAttributes } from 'react';

export interface BlockProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  disabled?: boolean;
}

export const Block: React.FC<BlockProps> = ({ 
  children, 
  className = '',
  disabled = false,
  ...props 
}) => {
  if (disabled) {
    return <>{children}</>;
  }

  return (
    <div className={`rwip-block ${className}`} aria-disabled="true" {...props}>
      {children}
    </div>
  );
};
