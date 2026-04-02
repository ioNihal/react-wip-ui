# react-wip-ui

Production-ready UI components for marking features as "Work In Progress" (WIP). Designed for modern React ecosystems and compatible with Next.js App Router.

## Features

- Beautiful default theme with a warm minimal visual style.
- Server-friendly visual components for `Ribbon`, `Badge`, `Overlay`, and `Block`.
- Separate client entry for `WIP`, `Modal`, `Banner`, `WIPProvider`, and `useWIP`.
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

Server-friendly visual components can be imported from the root package:

```tsx
import { Badge, Ribbon, Overlay, Block } from 'react-wip-ui';
```

Interactive and stateful exports live under the client entry:

```tsx
"use client";

import { WIP, WIPProvider, Modal, Banner, useWIP } from 'react-wip-ui/client';
```

## Global Configuration

Wrap your app with `<WIPProvider>` if you want to change the default variant, theme, or disable all WIP UI globally.

```tsx
import { WIP, WIPProvider } from 'react-wip-ui/client';

function App({ children }) {
  return (
    <WIPProvider theme="light" defaultVariant="overlay" globalDisabled={false}>
      {children}
    </WIPProvider>
  );
}
```

## Root Components

### Ribbon

```tsx
import { Ribbon } from 'react-wip-ui';

<Ribbon position="top-right" text="BETA" variant="outline" />
```

### Overlay

```tsx
import { Overlay } from 'react-wip-ui';

<Overlay message="Coming Soon">
  <BillingSection />
</Overlay>
```

### Badge

```tsx
import { Badge } from 'react-wip-ui';

<Badge>
  <button disabled>Pro Feature</button>
</Badge>
```

### Block

```tsx
import { Block } from 'react-wip-ui';

<Block>
  <SubscriptionForm />
</Block>
```

## Client Components

### WIP Wrapper

```tsx
"use client";

import { WIP } from 'react-wip-ui/client';

<WIP when={isFeaturePending}>
  <NewDashboard />
</WIP>
```

### Modal

```tsx
"use client";

import { Modal } from 'react-wip-ui/client';

<Modal
  isOpen={showModal}
  onClose={() => setShowModal(false)}
  title="Feature Under Construction"
  description="This module is not ready yet."
/>
```

### Banner

```tsx
"use client";

import { Banner } from 'react-wip-ui/client';

<Banner message="Our store is currently under maintenance." dismissible />
```

## Programmatic Control

The `useWIP()` hook reads the current config. Without a provider, it falls back to the built-in defaults.

```tsx
"use client";

import { useWIP } from 'react-wip-ui/client';

function CheckStatus() {
  const { globalDisabled, theme } = useWIP();
  return <div>Active Theme: {theme}</div>;
}
```

## License

MIT
