# react-wip-ui

Production-ready UI components for marking features as "Work In Progress" (WIP). Designed for modern React ecosystems and compatible with Next.js App Router.

## Features

- Beautiful default theme with a warm minimal visual style.
- Composable API with `Ribbon`, `Badge`, `Overlay`, `Block`, `Modal`, and `Banner`.
- Next.js compatible when used inside your app's client components.
- Lightweight with a single bundled stylesheet.
- Accessible basics including Escape handling, dialog semantics, and ARIA labels.

## Installation

```bash
npm install react-wip-ui
```

This package expects `react` and `react-dom` as peer dependencies.

## Setup

Import the stylesheet once near the root of your app:

```tsx
import 'react-wip-ui/styles.css';
```

If you use this package in a Next.js App Router project, import it from a client component or mark the consuming file with `"use client";`. This avoids forcing a larger client boundary than your app actually needs.

## Global Configuration

Wrap your app with `<WIP.Provider>` if you want to change the default variant, theme, or disable all WIP UI globally.

```tsx
import { WIP } from 'react-wip-ui';

function App({ children }) {
  return (
    <WIP.Provider theme="light" defaultVariant="overlay" globalDisabled={false}>
      {children}
    </WIP.Provider>
  );
}
```

## Components

### Feature Flag Wrapper

```tsx
import { WIP } from 'react-wip-ui';

<WIP when={isFeaturePending}>
  <NewDashboard />
</WIP>
```

### Ribbon

```tsx
<WIP.Ribbon position="top-right" text="BETA" variant="outline" />
```

### Overlay

```tsx
<WIP.Overlay message="Coming Soon">
  <BillingSection />
</WIP.Overlay>
```

### Modal

```tsx
<WIP.Modal
  isOpen={showModal}
  onClose={() => setShowModal(false)}
  title="Feature Under Construction"
  description="This module is not ready yet."
/>
```

### Badge

```tsx
<WIP.Badge>
  <button disabled>Pro Feature</button>
</WIP.Badge>
```

### Block

```tsx
<WIP.Block>
  <SubscriptionForm />
</WIP.Block>
```

### Banner

```tsx
<WIP.Banner message="Our store is currently under maintenance." dismissible />
```

## Programmatic Control

The `useWIP()` hook reads the current config. Without a provider, it falls back to the built-in defaults.

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
