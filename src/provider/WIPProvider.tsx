"use client";

import React, { createContext, ReactNode } from 'react';

export type WIPTheme = 'light' | 'dark' | 'system';
export type WIPVariant = 'overlay' | 'badge' | 'block' | 'hidden';

export interface WIPConfig {
  theme: WIPTheme;
  defaultVariant: WIPVariant;
  globalDisabled: boolean;
}

const defaultContext: WIPConfig = {
  theme: 'light',
  defaultVariant: 'badge',
  globalDisabled: false,
};

export const WIPContext = createContext<WIPConfig>(defaultContext);

export interface WIPProviderProps {
  children: ReactNode;
  theme?: WIPTheme;
  defaultVariant?: WIPVariant;
  /** Disable all WIP components globally (e.g. for production override) */
  globalDisabled?: boolean;
}

export function WIPProvider({
  children,
  theme = 'light',
  defaultVariant = 'badge',
  globalDisabled = false,
}: WIPProviderProps) {
  const value = React.useMemo(
    () => ({ theme, defaultVariant, globalDisabled }),
    [theme, defaultVariant, globalDisabled]
  );

  return (
    <WIPContext.Provider value={value}>
      <div 
        className="rwip-base" 
        data-rwip-theme={theme === 'dark' ? 'dark' : 'light'} 
        style={{ display: 'contents' }}
      >
        {children}
      </div>
    </WIPContext.Provider>
  );
}
