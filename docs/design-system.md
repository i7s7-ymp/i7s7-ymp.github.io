# Design System

Live preview: /design page.

## Tokens (tokens.css)

Categories:

- Spacing / Axis: `--chart-axis-left`, `--bar-gap-*`
- Bar dimensions: `--bar-width`, inline `--h`
- Gradients (Stops): `--bar-cyan-start/end`
- Gradients (Composite): `--bar-grad-cyan`
- Shadows: `--shadow-bar*`, `--shadow-tooltip` etc.
- Pills / Toggles: `--pill-bg*`, `--toggle-bg*`
- Tooltip: `--bar-value-bg/*`
- Note panel: `--chart-note-*`
- Grid / Axis lines: `--grid-line-gradient`
- Scrollbar: `--scrollbar-*`
- Radius scale: `--radius-*`
- Blur scale: `--blur-*`
- Neutral palette: `--neutral-*` (future)

Guidelines:

1. No raw hex/px in components; use tokens.
2. Add new tokens near category comment + doc update.
3. Replace tokens with backward fallback.
4. Structure changes follow parity check via support page harness.

## Utility Classes

- section-card, stat-card, panel-title, gradient-heading-sm, badge-pill, subtle-divider, hide-scrollbar

## Accent Palette

`accent-pink|cyan|neon|gold|coral|blue|indigo|purple` -> text/bg/gradient combos.

## Theming

One dark theme baseline. Geek variant removed (static residue ok to purge later). Any re-introduction must justify a11y & maintenance.

## Charts

Bar charts rely on layout CSS variables; logic-light approach (visual only).

## Future

- Token driven semantic layer (`--color-positive` etc)
- Light & HC sets
- Automated visual diff gating all token changes
