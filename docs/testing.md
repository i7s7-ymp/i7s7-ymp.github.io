# Testing & Quality

## Layers

| Layer  | Tool                      | Status          |
| ------ | ------------------------- | --------------- |
| Types  | `astro check`             | Enforced in CI  |
| Lint   | ESLint + Prettier         | Enforced in CI  |
| Visual | Playwright (support page) | Manual / pre-PR |
| Build  | `astro build`             | CI deploy gate  |

## Commands

```
npm run check
npm run test:visual
```

## Visual Workflow

1. Baseline build & capture exists in `tests/visual/__snapshots__`.
2. Run `npm run test:visual` after UI/CSS changes.
3. If expected: update snapshots with Playwright `--update-snapshots`.
4. Attach diff screenshot to PR.

## Philosophy

Keep cost low: quality via types + design tokens + one sentinel visual test. Scale only when real regressions escape.
