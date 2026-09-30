# AGENTS.md

Next.js 16 (App Router, React 18, Turbopack) portfolio + forensic-practice landing. Content from Contentful; view counts in Upstash Redis.

## Commands

Package manager is **pnpm** (`packageManager: pnpm@10.33.2`); there is no `package-lock.json`. `CLAUDE.md` says `npm run ...` but that is stale — use pnpm.

```bash
pnpm dev              # next dev --turbopack
pnpm build            # next build (also runs the TypeScript check)
pnpm lint             # eslint .
pnpm sitemap          # next-sitemap; run after a build
pnpm exec tsc --noEmit  # standalone typecheck (no `typecheck` script exists)
```

There is **no test framework** in this repo. Verify changes with `pnpm lint` + `pnpm exec tsc --noEmit` (or a full `pnpm build`). Prettier is configured but has no script; style is enforced by convention only.

## Formatting (matches `.prettierrc`)

Tabs, tab width 4, **no semicolons**, single quotes, trailing commas `es5`, print width 150, brackets same line. ESLint disables `react-hooks/exhaustive-deps`.

## Architecture

Two route groups with separate layouts and audiences — do not mix their styling:

- `src/app/(portfolio)/` — personal portfolio, English, `thiagosaraiva.dev`
- `src/app/(perito)/perito/` — forensic-practice landing, pt-BR, `perito.thiagosaraiva.dev`. Single `page.tsx` driven by `constants.ts`.

`src/proxy.tsx` is the **Next.js 16 middleware replacement** (not `middleware.ts`). It rewrites requests on the `perito.*` host to the `/perito` path. Keep the filename/export name `proxy`.

MVVM-ish convention, but **casing differs by route**:
- `home/` uses PascalCase: `Model.tsx`, `View.tsx`, `ViewModel.tsx`, plus `Server.ts` (server-only fetcher using `unstable_cache`). `page.tsx` calls `getHomePageData()` and passes `initialData` into the viewmodel.
- Other routes (`content/[slug]`, `about`) use lowercase `.model.tsx` / `.view.tsx` / `.viewmodel.tsx` and fetch the repository directly from `page.tsx`.

Data layer: `src/services/` — `ContentfulRepository` via `GenericHttpClient` (all clients extend it; auth via request interceptor). `ViewsRepository` uses `Redis.fromEnv()` (keys `views:ranking`, `views:countries`). Zustand store `src/store/contentful.store/` persists post collection to localStorage under `post-collection`.

Path alias `@/*` → `src/*`. shadcn/ui components live in `src/components/ui/`.

## Styling / design system

Tailwind with custom tokens (`caesar-black` `#14100e`, `caesar-white` `#fbfaf6`, `caesar-burgundy` `#F5332C`). Pure `#000`/`#fff` are banned; burgundy is a rare accent, never a background/gradient. Home is "brand" register (bold); `/content/[slug]` is "product" register (quiet reading).

Before UI work, read `DESIGN.md` (tokens, type scale, motion, component patterns, explicit bans) and `PRODUCT.md` (audience + anti-references). Extend `DESIGN.md` only for reusable tokens/patterns (see its guidelines).

Global CSS is `src/app/global.css`; `components.json` incorrectly points at `globals.css` — the real file has no `s`.

## Contentful / env

`contentful-config.ts` reads `NEXT_PUBLIC_CONTENTFUL_*`. Env lives in `.env` / `.env*.local` (gitignored). Remote image hosts are allow-listed in `next.config.js` (`images.ctfassets.net`, `placehold.co`) — add new hosts there.

`next-sitemap.config.js` `siteUrl` is `https://thiagosaraiva.com`, while `metadataBase` is `https://thiagosaraiva.dev`; be intentional if touching canonical URLs.

## Workflow

Commit history uses Conventional Commits (`feat(...)`, `fix(...)`, `chore(...)`) on `feat/*` branches merged via PR. Do not commit attribution trailers or "generated with" footers.
