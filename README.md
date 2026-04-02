# react-wip-ui

Production-ready UI components for marking features as "Work In Progress" (WIP). Designed for modern React ecosystems and fully compatible with Next.js App Router (React Server Components). Featuring a stunning **Warm Minimal** design aesthetic.

## Features

- 🎨 **Beautiful Default Theme:** Clean, 'Warm Minimal' design using soft off-whites, balanced styling, and smooth animations.
- 🧱 **Composable API:** Includes `Ribbon`, `Badge`, `Overlay`, `Block`, `Modal`, and `Banner`.
- 🚀 **Next.js Compatible:** `"use client"` where necessary, SSR-safe execution.
- 🪶 **Lightweight:** Minimal CSS payload via a single bundled stylesheet.
- ♿ **Accessible:** Focus trapping in modals, keyboard events, and ARIA labels.

## Installation

```bash
npm install react-wip-ui lucide-react
```

## Setup

A single CSS file must be imported at the root of your application (e.g., `app/layout.tsx` or `src/index.tsx`):

```tsx
import 'react-wip-ui/styles.css';
```

## Global Configuration (Optional)

Use the `<WIP.Provider>` to specify global configurations like switching to dark mode, disabling the feature-flags in production, or selecting a default wrapper mode.

```tsx
import { WIP } from 'react-wip-ui';

function App({ children }) {
  // If `globalDisabled` is true (e.g. process.env.NODE_ENV === 'production')
  // None of the WIP UI will render, completely unblocking the app.
  return (
    <WIP.Provider theme="light" defaultVariant="overlay" globalDisabled={false}>
      {children}
    </WIP.Provider>
  );
}
```

## Components

### 1. Feature Flag Wrapper

The `WIP` component acts as a feature flag. If `when` is true, your content is rendered with the selected `defaultVariant` (Overlay, Block, Badge, or Hidden).

```tsx
import { WIP } from 'react-wip-ui';

<WIP when={isFeaturePending}>
  <NewDashboard />
</WIP>
```

### 2. Ribbon

Displays a clean corner ribbon.

```tsx
<WIP.Ribbon position="top-right" text="BETA" variant="outline" />
```

### 3. Overlay

Places a blurred, semi-transparent overlay over the targeted section gracefully indicating it's under construction. Make sure it's inside a relative container.

```tsx
<WIP.Overlay message="Coming Soon">
  <BillingSection />
</WIP.Overlay>
```

### 4. Modal

An accessible dialog with focus-management capabilities.

```tsx
<WIP.Modal 
  isOpen={showModal} 
  onClose={() => setShowModal(false)}
  title="Feature Under Construction"
  description="This module is not ready yet."
/>
```

### 5. Badge

An inline, soft-styled tag component. Let users know a small element is unfinished.

```tsx
<WIP.Badge>
  <button disabled>Pro Feature</button>
</WIP.Badge>
```

### 6. Block

Visually block interaction with `pointer-events-none`.

```tsx
<WIP.Block>
  <SubscriptionForm />
</WIP.Block>
```

### 7. Banner

A sticky, dismissible top banner.

```tsx
<WIP.Banner message="Our store is currently under maintenance." dismissible />
```

## Programmatic Control

The library provides a React hook to access configuration directly inside client components.

```tsx
"use client";
import { useWIP } from 'react-wip-ui';

function CheckStatus() {
  const { globalDisabled, theme } = useWIP();
  return <div>Active Theme: {theme}</div>;
}
```

## License

MIT
