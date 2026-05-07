# Changelog

All notable changes to `react-wip-ui` are documented here.  
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [2.0.0] — 2026-05-07

### Breaking Changes

- **Removed** client-only components: `Modal`, `Banner`, `WIPWrapper`
- **Removed** `WIPProvider` and `useWIP` hook
- **Removed** `/client` sub-path export (`react-wip-ui/client`)
- **Removed** CSS stylesheet export — no more `import 'react-wip-ui/styles.css'` required
- **Removed** `lucide-react` runtime dependency — zero external deps

### Added

- `WIP` namespace export — use as `WIP.Badge`, `WIP.Overlay`, `WIP.Ribbon`, `WIP.Block`
- `theme` prop on `Badge`, `Ribbon`, `Overlay` — accepts `'light'` or `'dark'`
- `colors` prop on `Badge`, `Ribbon`, `Overlay` — `{ bg?, text? }` for full colour overrides
- `placement` prop on `Badge` — `'before'` or `'after'` (default: `'after'`)
- Inline SVG construction icon in `Overlay` replacing the lucide-react import
- `sideEffects: false` in `package.json` for better consumer tree-shaking

### Changed

- All component styles are now fully inline — no CSS class names, no stylesheet
- Bundle is now a single entry point (`dist/index.js` / `dist/index.mjs`)
- Bundle minified; ESM output is ~3.5 kB
- `Block` simplified — purely structural, no theme dependency

---

## [1.0.0] — 2026-05-07

### Added

- Initial release
- Server-safe components: `Badge`, `Ribbon`, `Overlay`, `Block`
- Client-only components: `Modal`, `Banner`, `WIPWrapper`
- `WIPProvider` context and `useWIP` hook
- Bundled CSS stylesheet (`react-wip-ui/styles.css`)
- Dual entry points: root and `/client`
