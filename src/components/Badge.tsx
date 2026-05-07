import React, { HTMLAttributes } from 'react';
import { BASE_FONT, resolveColors, type WIPTheme, type WIPColors } from '../tokens';

export interface BadgeProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
  /** Label text shown inside the badge */
  text?: string;
  /** Show WIP badge before or after children. Default: 'after' */
  placement?: 'before' | 'after';
  /** Light or dark colour scheme. Default: 'light' */
  theme?: WIPTheme;
  /** Override badge background and text colours */
  colors?: WIPColors;
  /** When true, the badge is not rendered */
  disabled?: boolean;
  children?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  text = 'WIP',
  placement = 'after',
  theme = 'light',
  colors,
  disabled = false,
  children,
  style,
  ...props
}) => {
  if (disabled) return children ? <>{children}</> : null;

  const c = resolveColors(theme, colors);

  const wrapperStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    position: 'relative',
    ...BASE_FONT,
  };

  const badgeStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    backgroundColor: c.bg,
    color: c.text,
    borderRadius: '9999px',
    padding: '2px 8px',
    fontSize: '0.7rem',
    fontWeight: 600,
    lineHeight: 1,
    whiteSpace: 'nowrap',
    letterSpacing: '0.03em',
    userSelect: 'none',
    flexShrink: 0,
    ...style,
  };

  const badge = (
    <span style={badgeStyle} aria-label={`${text} — Work in Progress`} {...props}>
      {text}
    </span>
  );

  return (
    <span style={wrapperStyle}>
      {placement === 'before' && badge}
      {children}
      {placement === 'after' && badge}
    </span>
  );
};
