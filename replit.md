# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Lyncore Website (artifacts/lyncore-website)

Pixel-perfect replica of the Lyncore AI Chatbot & Receptionist website at https://2l3dvk3mtbt6y.ok.kimi.link

### Design System (from reference)
- **Primary Blue**: `#3B5BFE` (CSS var `--primary-blue`)
- **Dark Navy**: `#1A1F36` (CSS var `--primary-dark`)
- **Lime Green**: `#C8E636` (CSS var `--lime-green`)
- **Text Secondary**: `#6B7280`
- **Font**: Inter (system-ui fallback)
- **Custom CSS classes**: `.btn-primary`, `.btn-secondary`, `.btn-white`, `.btn-outline-white`, `.glass`, `.glass-dark`, `.card-hover`, `.section-dark`, `.feature-card`, `.story-card`, `.chat-agent`, `.chat-user`, `.page-hero`, `.tag-industry`

### Pages (26 total)
All inner pages use `.page-hero` (dark navy gradient `#1A1F36` → `#2d3655`)

**Pricing**: `/pricing` — 3 plans (Starter $197, Pro $497 highlighted, Premium $997), feature comparison table, FAQ accordion, plan selection stored in `localStorage` via `selectedPlan` key, toast notification on CTA click
**Company**: About Us, Careers, Contact Us
**Solutions**: Sales (`SalesSolution`), Support (`SupportSolution`), Document Processing & Research (`DocumentProcessingSolution`)
**Industry**: HVAC, Plumbing, Electrical, Roofing, Residential Cleaning (`ResidentialCleaningIndustry`), Lawn Care, Pest Control
**Resources**: Success Stories, AI Explained, Use Cases, Blogs
**Legal**: Terms of Service, Privacy Policy, Data Processing Agreement (`DataProcessingAgreement`), Business Associate Agreement (`BusinessAssociateAgreement`)

### Key Architecture
- `src/App.tsx` — All 25 routes
- `src/index.css` — Custom CSS classes (exact match from reference)
- `src/components/Navbar.tsx` — Glass morphism nav on scroll (uses `.glass` class)
- `src/pages/*.tsx` — Page components

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
