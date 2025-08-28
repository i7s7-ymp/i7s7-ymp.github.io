# Runbook

## Common Tasks

| Task             | Steps                                                                       |
| ---------------- | --------------------------------------------------------------------------- |
| Add achievement  | Edit `src/data/achievements.yml` -> verify home + achievements page         |
| Reorder socials  | Edit `src/data/social.yml` -> dev reload                                    |
| Tweak background | Edit base gradient / durations in `Layout.astro` -> screenshot before/after |
| Replace diagram  | Optimize SVG -> overwrite in `public/diagrams/` -> attach diff              |
| Add design token | Add in `tokens.css` with comment & update design-system doc                 |
| Update README    | Prefer moving details into docs/\*.md and link                              |

## Incident: Dev server fails

1. Clean install: remove node_modules + lock; reinstall.
2. Run `npm run check` to isolate type/lint errors.
3. Narrow recent changes (git diff) focusing on `Layout.astro` / tokens.
4. If still failing, open issue with logs.

## Performance Budget (soft)

| Metric    | Target                       |
| --------- | ---------------------------- |
| LCP       | <2.5s                        |
| CLS       | <0.05                        |
| Bundle JS | Minimal (Astro islands only) |

## Dependency Update (monthly)

```
npm outdated
npm up --save-prod
npm run check && npm run build
```

Open PR with changelog notes if major leaps.
