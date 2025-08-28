# Architecture Overview

## High-level Decisions

| Aspect        | Choice                           | Rationale                              |
| ------------- | -------------------------------- | -------------------------------------- |
| Output        | Static export (`output: static`) | Simplicity, Pages hosting fit          |
| Data source   | Local YAML                       | Versioned content & simple review      |
| Theme         | Dark-only                        | Remove complexity, consistent contrast |
| Animations    | 2 CSS layers (nodes + sweep)     | GPU composite only, minimal JS         |
| Design tokens | CSS custom props + Tailwind      | Centralized theming & reuse            |
| Diagrams      | Hand-optimized SVG               | Deterministic build, visual polish     |
| Visual test   | Single Playwright spec           | Low maintenance, detects regressions   |
| Dev env       | Dev Container                    | Fast onboarding, parity                |

## Directory Boundaries

- `src/components`: Pure presentational Astro components.
- `src/layouts/Layout.astro`: Single shell (nav, background, time, particles).
- `src/data/*.yml`: Content store; keep schema additions backward compatible.
- `src/styles/tokens.css`: Design token single source of truth.

## Background Animation Policy

| Layer         | Selector               | Tunables          | Notes                      |
| ------------- | ---------------------- | ----------------- | -------------------------- |
| Base gradient | `.main-scroll`         | colors, stops     | Non-animated dark gradient |
| Nodes         | `.main-scroll::before` | keyframe duration | Rotating cluster, subtle   |
| Sweep         | `.main-scroll::after`  | keyframe duration | Conic soft sweep           |
| Geek (static) | `.theme-geek`          | optional removal  | Toggle UI removed          |

Rules:

1. Opacity stays low (0.12–0.20) for readability.
2. Duration tweaks <= ±20% per change.
3. PRs must attach before/after screenshot.

## Deletions & Rationale

Removed uptime pill, theme toggle, auto diagram pipeline: each cost > value or harmed determinism.

## Future Potential

- Light/high-contrast token sets.
- Additional visual test coverage.
- Optional MDX content path.
