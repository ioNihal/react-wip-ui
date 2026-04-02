import React, { HTMLAttributes } from 'react';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  text?: string;
  className?: string;
  disabled?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({ 
  text = 'WIP', 
  className = '',
  disabled = false,
  ...props 
}) => {
  if (disabled) return null;

  return (
    <span className="rwip-badge-wrapper" title="Work in Progress">
      {props.children}
      <span className={`rwip-badge ${className}`} {...props}>
        {text}
      </span>
    </span>
  );
};
