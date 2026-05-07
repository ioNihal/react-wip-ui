# react-wip-ui

Lightweight, server-friendly React components for marking features as **Work In Progress**.

- ✅ **Zero dependencies** — no CSS file, no external packages
- ✅ **Server-component safe** — works in Next.js App Router RSC out of the box
- ✅ **Inline styles** — no stylesheet to import, nothing to configure
- ✅ **Tiny bundle** — ~3.5 kB minified ESM

## Installation

```bash
npm install react-wip-ui
```

Peer dependencies: `react` ^18 or ^19.

## Usage

Import and use — no setup, no CSS import, no provider needed.

```tsx
import { Badge, Ribbon, Overlay, Block } from 'react-wip-ui';
```

---

## Components

### `<Badge>`

Attaches a small WIP label next to any content.

```tsx
<Badge>
  <button>Pro Feature</button>
</Badge>

// With options
<Badge text="BETA" theme="dark" placement="before">
  <NavItem />
</Badge>

// Custom colours
<Badge colors={{ bg: '#1e1b4b', text: '#a5b4fc' }}>
  <NavItem />
</Badge>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `text` | `string` | `'WIP'` | Label text |
| `placement` | `'before' \| 'after'` | `'after'` | Badge before or after children |
| `theme` | `'light' \| 'dark'` | `'light'` | Colour scheme |
| `colors` | `{ bg?, text? }` | — | Custom colour overrides |
| `disabled` | `boolean` | `false` | Renders children without badge |

---

### `<Ribbon>`

A diagonal corner ribbon for containers. The parent must have `position: relative`.

```tsx
<div style={{ position: 'relative' }}>
  <Ribbon />
  <Card />
</div>

// Options
<Ribbon position="top-left" text="ALPHA" variant="outline" theme="dark" />
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `position` | `'top-left' \| 'top-right'` | `'top-right'` | Corner placement |
| `text` | `string` | `'WIP'` | Label text |
| `variant` | `'solid' \| 'outline'` | `'solid'` | Fill style |
| `theme` | `'light' \| 'dark'` | `'light'` | Colour scheme |
| `colors` | `{ bg?, text? }` | — | Custom colour overrides |
| `disabled` | `boolean` | `false` | Renders nothing |

---

### `<Overlay>`

Covers children with a blurred scrim and a message pill.

```tsx
<Overlay>
  <BillingSection />
</Overlay>

// Options
<Overlay message="Coming Soon" theme="dark" />

// Custom colours for the message pill
<Overlay colors={{ bg: '#0f172a', text: '#94a3b8' }}>
  <AnalyticsDashboard />
</Overlay>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `message` | `string` | `'Under Construction'` | Text in the message pill |
| `theme` | `'light' \| 'dark'` | `'light'` | Colour scheme for scrim + pill |
| `colors` | `{ bg?, text? }` | — | Override pill bg and text colour |
| `disabled` | `boolean` | `false` | Renders children as-is |

---

### `<Block>`

Disables pointer events and text selection on children — use to make a section non-interactive.

```tsx
<Block>
  <SubscriptionForm />
</Block>
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `disabled` | `boolean` | `false` | Renders children as-is |

---

## Types

```ts
import type { WIPTheme, WIPColors } from 'react-wip-ui';

type WIPTheme  = 'light' | 'dark';
type WIPColors = { bg?: string; text?: string };
```

---

## License

MIT
