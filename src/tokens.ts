import type { CSSProperties } from 'react';

export type WIPTheme = 'light' | 'dark';

export interface WIPColors {
  /** Background color of the WIP indicator element */
  bg?: string;
  /** Text / icon color of the WIP indicator element */
  text?: string;
}

const PALETTE = {
  light: { bg: '#E8DDCE', text: '#6A5D4D' },
  dark:  { bg: '#2C2A28', text: '#C4B9AD' },
} as const;

/** Resolve final bg/text colors: user `colors` override > theme defaults */
export function resolveColors(theme: WIPTheme, colors?: WIPColors) {
  const base = PALETTE[theme];
  return {
    bg:   colors?.bg   ?? base.bg,
    text: colors?.text ?? base.text,
  };
}

export const BASE_FONT: CSSProperties = {
  fontFamily: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`,
  boxSizing: 'border-box',
};
