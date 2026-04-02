import { WIPWrapper } from './components/WIPWrapper';
import { Badge } from './components/Badge';
import { Ribbon } from './components/Ribbon';
import { Overlay } from './components/Overlay';
import { Block } from './components/Block';
import { Modal } from './components/Modal';
import { Banner } from './components/Banner';
import { WIPProvider } from './provider/WIPProvider';
import { useWIP } from './hooks/useWIP';

// Create a namespace-style API
export const WIP = Object.assign(WIPWrapper, {
  Badge,
  Ribbon,
  Overlay,
  Block,
  Modal,
  Banner,
  Provider: WIPProvider,
});

export { useWIP };
export type { WIPConfig, WIPTheme, WIPVariant } from './provider/WIPProvider';
export type { BadgeProps } from './components/Badge';
export type { RibbonProps } from './components/Ribbon';
export type { OverlayProps } from './components/Overlay';
export type { BlockProps } from './components/Block';
export type { ModalProps } from './components/Modal';
export type { BannerProps } from './components/Banner';
export type { WIPWrapperProps } from './components/WIPWrapper';
