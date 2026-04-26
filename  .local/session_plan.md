# Objective
Run an in-depth production-scope security scan across the workspace, confirm whether any SAST/HoundDog hits are materially exploitable, and update threat modeling artifacts accordingly.

# Relevant information
- Production artifacts:
  - `artifacts/lyncore-website` (static React/Vite website served at `/`)
  - `artifacts/api-server` (Express API served at `/api`)
- Shared packages:
  - `lib/db` (Drizzle/Postgres wiring)
  - `lib/api-client-react` (generated client + auth token helper)
  - `lib/api-spec`, `lib/api-zod` (generated schemas/spec)
- `artifacts/mockup-sandbox` is treated as dev-only and out of production scope unless production reachability is demonstrated.
- Current API surface appears to be only `GET /api/healthz`.
- Existing vulnerability directories are empty.
- Deterministic scan notes:
  - SAST: 3 findings total; 2 low-severity open-redirect flags on Calendly redirects in website pages, 1 medium finding in dev-only mockup sandbox.
  - HoundDog: unavailable/error during this scan, so manual review must cover privacy-sensitive flows.

# Tasks

### T001: Validate production API and database attack surface
- **Blocked By**: []
- **Details**:
  - Inspect `artifacts/api-server/src/**`, `lib/db/src/**`, and production artifact config.
  - Confirm current routes, request parsing, CORS behavior, logging, env handling, and DB reachability.
  - Determine whether any issue is exploitable in the current minimal API, not just risky for future code.
- **Acceptance**:
  - All current production API routes and DB access paths are enumerated.
  - Any confirmed vulnerability is written to `.local/new_vulnerabilities/` and any relevant existing finding is updated.

### T002: Validate public website lead-capture and client-side trust boundaries
- **Blocked By**: []
- **Details**:
  - Inspect `artifacts/lyncore-website/src/**`, especially contact/pricing forms, redirects, localStorage/cookie usage, and any HTML injection sinks.
  - Confirm whether the Semgrep redirect findings are real exploitable issues or false positives given the hard-coded Calendly base.
  - Check for privacy leaks, XSS, open redirect, unsafe external navigation, or exposed secrets in production assets.
- **Acceptance**:
  - Client-side trust boundaries are documented with concrete code references.
  - Scanner hits are either ruled out with evidence or recorded as real findings.

### T003: Validate shared codegen/client boundary and deployment scope assumptions
- **Blocked By**: []
- **Details**:
  - Inspect `lib/api-client-react`, `lib/api-spec`, `lib/api-zod`, and artifact manifests.
  - Confirm whether generated client helpers or deployment configuration create any production-reachable auth, origin, or exposure risk.
  - Re-check that `artifacts/mockup-sandbox` remains dev-only under current deployment config.
- **Acceptance**:
  - Shared-library and deployment-scope conclusions are recorded with supporting files.
  - Any production-relevant issue is documented; dev-only findings are excluded.