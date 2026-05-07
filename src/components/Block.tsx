import React, { HTMLAttributes } from 'react';

export interface BlockProps extends HTMLAttributes<HTMLDivElement> {
  /** When true, children are rendered as-is without blocking */
  disabled?: boolean;
}

export const Block: React.FC<BlockProps> = ({
  children,
  disabled = false,
  style,
  ...props
}) => {
  if (disabled) return <>{children}</>;

  return (
    <div
      style={{
        pointerEvents: 'none',
        userSelect: 'none',
        ...style,
      }}
      aria-disabled="true"
      {...props}
    >
      {children}
    </div>
  );
};
