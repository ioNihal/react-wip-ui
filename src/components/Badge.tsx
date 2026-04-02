import React, { HTMLAttributes } from 'react';
import { useWIP } from '../hooks/useWIP';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  text?: string;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ 
  text = 'WIP', 
  className = '',
  ...props 
}) => {
  const { globalDisabled } = useWIP();
  if (globalDisabled) return null;

  return (
    <span className="rwip-badge-wrapper" title="Work in Progress">
      {props.children}
      <span className={`rwip-badge ${className}`} {...props}>
        {text}
      </span>
    </span>
  );
};
