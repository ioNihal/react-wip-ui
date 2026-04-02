import React, { HTMLAttributes } from 'react';
import { useWIP } from '../hooks/useWIP';

export interface BlockProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Block: React.FC<BlockProps> = ({ 
  children, 
  className = '',
  ...props 
}) => {
  const { globalDisabled } = useWIP();

  if (globalDisabled) {
    return <>{children}</>;
  }

  return (
    <div className={`rwip-block ${className}`} aria-disabled="true" {...props}>
      {children}
    </div>
  );
};
