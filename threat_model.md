# Threat Model

## Project Overview

This repository is a pnpm monorepo for Lyncore AI. In production it currently exposes two artifacts:
- `artifacts/lyncore-website`: a Vite-built static React marketing site served at `/`
- `artifacts/api-server`: an Express 5 API served at `/api`

Shared packages include a generated API client (`lib/api-client-react`), generated Zod schemas (`lib/api-zod`), an OpenAPI spec (`lib/api-spec`), and a PostgreSQL/Drizzle database package (`lib/db`). At the time of this scan, the production API surface is minimal (`GET /api/healthz`) and there is no active authentication or session system implemented server-side.

Assumptions for scan scope:
- `artifacts/mockup-sandbox` is a development-only component preview environment and is not deployed to production unless future evidence shows otherwise.
- Production runs with `NODE_ENV=production`.
- Replit deployment provides TLS in transit.

## Assets

- **Visitor lead data** — the website collects names, email addresses, company names, phone numbers, industry, and freeform messages in contact and pricing forms. This is personal and business contact data.
- **API and deployment integrity** — the `/api` namespace and static website content must not be modifiable by untrusted clients.
- **Application secrets** — environment variables such as `DATABASE_URL` and any future auth or third-party API secrets must remain server-only.
- **Future database contents** — `lib/db` is wired for PostgreSQL access even though no tables are currently defined. Any future records stored there will inherit the same trust boundary.

## Trust Boundaries

- **Browser to static website** — all client inputs, query strings, route segments, and browser state are attacker-controlled.
- **Browser to API (`/api`)** — any future API request body, headers, and parameters are untrusted and must be validated server-side.
- **Browser to third-party scheduling service** — the contact and pricing flows redirect visitors to Calendly. Data sent across this boundary should be minimized, and sensitive lead fields should not be exposed in URL query strings unless that exposure is explicitly accepted.
- **API to PostgreSQL** — the API process can access the database directly through `lib/db`; injection or unsafe query construction here would be high impact.
- **Build/runtime configuration to app code** — environment variables such as `PORT`, `BASE_PATH`, `LOG_LEVEL`, and `DATABASE_URL` influence runtime behavior and must not leak to the browser unless intentionally exposed.

## Scan Anchors

- Production entry points: `artifacts/lyncore-website/src/main.tsx`, `artifacts/api-server/src/index.ts`, `artifacts/api-server/src/app.ts`
- Highest-risk code areas: `artifacts/api-server/src/**`, `lib/db/src/**`, `lib/api-client-react/src/custom-fetch.ts`, and lead-capture pages under `artifacts/lyncore-website/src/pages/Company.tsx` and `artifacts/lyncore-website/src/pages/Pricing.tsx`
- Public surfaces: all website routes in `artifacts/lyncore-website/src/App.tsx`, `/api/healthz`
- Authenticated/admin surfaces: none currently implemented in production
- Usually dev-only: `artifacts/mockup-sandbox/**`, `attached_assets/**`, `clone-data/**`, `scripts/**`

## Threat Categories

### Tampering

The client is fully untrusted. Any future API endpoints must validate and normalize request data on the server, and must never rely on frontend-only checks for business logic. Database access must remain parameterized through safe query construction; raw SQL assembled from user input would create a high-impact injection path.

### Information Disclosure

Lead-capture pages handle contact details and freeform messages. Those values must not be exposed through logs, client-side error messages, source maps, or future API responses. Browser redirects to third-party services must avoid placing lead PII in URL query strings, because URLs are widely retained in history, logs, analytics, and vendor infrastructure. Server-side secrets such as `DATABASE_URL` must remain confined to server code and deployment configuration.

### Denial of Service

The current API is tiny, but any future public endpoints must consider request size limits, parsing behavior, and abuse controls. Public form submission or webhook-style endpoints would need explicit rate limiting and bounded processing if they are added.

### Elevation of Privilege

There are no production admin or authenticated surfaces today, but this repository already contains a reusable bearer-token client helper. If protected API routes are added later, authentication and authorization must be enforced server-side on every protected route; client-attached bearer tokens alone are not a security boundary.

### Security Misconfiguration

Production security depends on keeping development-only tooling out of deployed paths. The mockup sandbox and other design/support directories should stay non-production unless deliberately promoted. Production logging must continue to redact sensitive headers and avoid verbose debug output.