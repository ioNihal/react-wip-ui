import React, { HTMLAttributes } from 'react';
import { BASE_FONT, resolveColors, type WIPTheme, type WIPColors } from '../tokens';

export type RibbonPosition = 'top-left' | 'top-right';
export type RibbonVariant  = 'solid' | 'outline';

export interface RibbonProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Corner placement of the ribbon. Default: 'top-right' */
  position?: RibbonPosition;
  /** Label text. Default: 'WIP' */
  text?: string;
  /** 'solid' fills the background; 'outline' uses a transparent bg with a border. Default: 'solid' */
  variant?: RibbonVariant;
  /** Light or dark colour scheme. Default: 'light' */
  theme?: WIPTheme;
  /** Override ribbon background and text colours */
  colors?: WIPColors;
  /** When true, the ribbon is not rendered */
  disabled?: boolean;
}

const POSITION: Record<RibbonPosition, React.CSSProperties> = {
  'top-left':  { top: 16, left: -28, transform: 'rotate(-45deg)' },
  'top-right': { top: 16, right: -28, transform: 'rotate(45deg)' },
};

export const Ribbon: React.FC<RibbonProps> = ({
  position = 'top-right',
  text = 'WIP',
  variant = 'solid',
  theme = 'light',
  colors,
  disabled = false,
  style,
  ...props
}) => {
  if (disabled) return null;

  const c = resolveColors(theme, colors);

  const containerStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    pointerEvents: 'none',
    zIndex: 50,
  };

  const ribbonStyle: React.CSSProperties = {
    position: 'absolute',
    backgroundColor: variant === 'outline' ? 'transparent' : c.bg,
    color: c.text,
    fontSize: '0.7rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    padding: '4px 40px',
    pointerEvents: 'auto',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    boxShadow: variant === 'solid' ? '0 2px 8px rgba(0,0,0,0.10)' : 'none',
    border: variant === 'outline' ? `1px solid ${c.bg}` : 'none',
    backdropFilter: variant === 'outline' ? 'blur(4px)' : 'none',
    ...POSITION[position],
    ...BASE_FONT,
    ...style,
  };

  return (
    <div style={containerStyle}>
      <div style={ribbonStyle} aria-label={`${text} — Work in Progress`} {...props}>
        {text}
      </div>
    </div>
  );
};
