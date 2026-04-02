import React, { ReactElement } from 'react';
import { useWIP } from '../hooks/useWIP';
import { Overlay } from './Overlay';
import { Block } from './Block';
import { Badge } from './Badge';

export interface WIPWrapperProps {
  children: React.ReactNode;
  when?: boolean;
}

export const WIPWrapper: React.FC<WIPWrapperProps> = ({ children, when = true }) => {
  const { globalDisabled, defaultVariant } = useWIP();

  if (globalDisabled || !when) {
    return <>{children}</>;
  }

  switch (defaultVariant) {
    case 'overlay':
      return <Overlay>{children}</Overlay>;
    case 'block':
      return <Block>{children}</Block>;
    case 'badge':
      // Badge is typically inline, so we wrap children and add badge
      return (
        <span className="rwip-badge-wrapper">
          {children}
          <Badge />
        </span>
      );
    case 'hidden':
      return null;
    default:
      return <Block>{children}</Block>;
  }
};
