export { Badge }    from './components/Badge';
export { Ribbon }   from './components/Ribbon';
export { Overlay }  from './components/Overlay';
export { Block }    from './components/Block';

export type { BadgeProps }   from './components/Badge';
export type { RibbonProps, RibbonPosition, RibbonVariant } from './components/Ribbon';
export type { OverlayProps } from './components/Overlay';
export type { BlockProps }   from './components/Block';

export type { WIPTheme, WIPColors } from './tokens';

// Namespace export — use as WIP.Badge, WIP.Ribbon, WIP.Overlay, WIP.Block
import { Badge }   from './components/Badge';
import { Ribbon }  from './components/Ribbon';
import { Overlay } from './components/Overlay';
import { Block }   from './components/Block';

export const WIP = { Badge, Ribbon, Overlay, Block } as const;
