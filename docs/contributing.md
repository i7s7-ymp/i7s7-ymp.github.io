# Contributing

## Flow

1. Create issue (bug/feature/docs).
2. Branch naming: `feat/`, `fix/`, `docs/`, `chore/`.
3. Implement; keep changeset focused.
4. Run quality gate: `npm run check` + visual test if UI.
5. PR with screenshots & checklist.

## PR Checklist

- [ ] No unnecessary client JS
- [ ] Uses tokens (no raw hex/px)
- [ ] Background contrast OK
- [ ] YAML schema backward compatible
- [ ] `npm run check` passes
- [ ] Visual diff reviewed / updated
- [ ] Docs updated (if needed)

## Commit Style

Conventional-ish, lightweight:

```
feat: add new stat-card variant
fix: correct token fallback for bar gradient
chore: tune background animation speed
docs: move architecture details to docs/
```

## Issues

Use provided templates; include repro + environment when bug.
