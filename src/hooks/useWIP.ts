import { useContext } from 'react';
import { WIPContext, WIPConfig } from '../provider/WIPProvider';

export function useWIP(): WIPConfig {
  return useContext(WIPContext);
}
