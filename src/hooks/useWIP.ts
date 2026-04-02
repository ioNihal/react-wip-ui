import { useContext } from 'react';
import { WIPContext, WIPConfig } from '../provider/WIPProvider';

export function useWIP(): WIPConfig {
  const context = useContext(WIPContext);
  if (context === undefined) {
    throw new Error('useWIP must be used within a WIPProvider');
  }
  return context;
}
