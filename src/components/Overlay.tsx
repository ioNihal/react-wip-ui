import React, { HTMLAttributes } from 'react';
import { BASE_FONT, resolveColors, type WIPTheme, type WIPColors } from '../tokens';

/** Inline SVG — replaces lucide-react Construction icon. No external dep. */
const ConstructionIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <rect x="2" y="6" width="20" height="8" rx="1" />
    <path d="M17 14v7" />
    <path d="M7 14v7" />
    <path d="M17 3v3" />
    <path d="M7 3v3" />
    <path d="M10 14 2.3 6.3" />
    <path d="m14 6 7.7 7.7" />
    <path d="m8 6 8 8" />
  </svg>
);

export interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
  /** Message shown on the overlay. Default: 'Under Construction' */
  message?: string;
  /** Light or dark colour scheme for the overlay scrim + message pill. Default: 'light' */
  theme?: WIPTheme;
  /** Override overlay badge background and text colours */
  colors?: WIPColors;
  /** When true, children are rendered as-is with no overlay */
  disabled?: boolean;
}

const SCRIM = {
  light: 'rgba(253, 251, 247, 0.55)',
  dark:  'rgba(18, 17, 16, 0.55)',
};

const PILL_BG = {
  light: '#FDFBF7',
  dark:  '#1A1918',
};

const PILL_TEXT = {
  light: '#4A4641',
  dark:  '#E8E6E1',
};

export const Overlay: React.FC<OverlayProps> = ({
  children,
  message = 'Under Construction',
  theme = 'light',
  colors,
  disabled = false,
  style,
  ...props
}) => {
  if (disabled) return <>{children}</>;

  const c = resolveColors(theme, colors);

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block',
    width: '100%',
    ...style,
  };

  const scrimStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    backgroundColor: SCRIM[theme],
    backdropFilter: 'blur(4px)',
    WebkitBackdropFilter: 'blur(4px)',
    zIndex: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'inherit',
  };

  const pillStyle: React.CSSProperties = {
    backgroundColor: colors?.bg ?? PILL_BG[theme],
    color: colors?.text ?? PILL_TEXT[theme],
    padding: '6px 14px',
    borderRadius: '8px',
    fontSize: '0.8rem',
    fontWeight: 500,
    boxShadow: '0 2px 10px rgba(0,0,0,0.10)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    ...BASE_FONT,
  };

  return (
    <div style={containerStyle} {...props}>
      {children}
      <div style={scrimStyle} aria-hidden="true">
        <div style={pillStyle}>
          <ConstructionIcon />
          <span>{message}</span>
        </div>
      </div>
    </div>
  );
};
