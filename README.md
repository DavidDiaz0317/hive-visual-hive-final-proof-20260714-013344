# Hive + Visual Hive Final Installation Proof

This deliberately small React/Vite TypeScript application is a clean, initially unconfigured target for the immutable integrated-release installation proof. It has two routes (`/` and `/jobs`), a deterministic local metrics endpoint, focused unit tests, a Playwright browser flow, a reviewed screenshot assertion, and accessibility checks. It requires no secrets or paid service.

## Local verification

Use Node 22:

```bash
npm ci
npx playwright install chromium
npm run build
npm test
npm run test:e2e
```

The checked-in screenshots are platform-scoped so Windows and hosted Linux compare like-for-like. The initial repository contains no Hive or Visual Hive configuration; integrated Hive is the only intended lifecycle writer.
