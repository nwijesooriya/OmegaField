# OmegaField frontend

Next.js App Router, TypeScript and Tailwind CSS. Routes live in `app/` (this checkout does not use a `src/` directory).

## Run locally

1. Install existing dependencies with `npm install` if needed.
2. Copy `.env.example` to `.env.local`.
3. Set `NEXT_PUBLIC_API_URL` to the backend origin, without `/api`, matching `PORT` in `../backend/.env`. The default is `http://localhost:4000`; use `http://localhost:5000` if the backend runs on port 5000.
4. Run the backend using `npm run build` then `npm start` from `../backend`.
5. Run `npm run dev` here and open the URL printed by Next.js.

On Windows PowerShell, use `npm.cmd` if execution policy blocks `npm.ps1`.
Restart Next.js after changing environment variables.

## Phase 1 data

Public pages default to the centralized sample catalogue in `lib/mock-news.ts`, including locally generated stadium illustrations. This is a preview edition; sample stories are not verified reporting.

`lib/news.ts` supplies the same catalogue to the homepage, categories, articles and search. Set `NEWS_DATA_SOURCE=api` to opt into the existing Express `/api/news` endpoint; the existing local fallback remains available when the backend cannot be reached. News API and auth requests share `NEXT_PUBLIC_API_URL`; server news requests can override it with `BACKEND_API_URL`.

Existing article fields are preserved for backend compatibility. `lib/categories.ts` supplies the five Phase 1 categories and stable article URLs. Articles with legacy categories such as Opinion or School Sports appear under Other Sports. An API-provided `slug` takes precedence; otherwise URLs derive from title and ID.

Advertisement examples live in `lib/mock-ads.ts`. Their types support image, target URL, placement, active state and optional schedule. No advertising delivery, analytics or database system is implemented.

## Routes and components

- `/`: homepage with lead and secondary stories, latest news, headlines and reusable sport sections.
- `/cricket`, `/football`, `/rugby`, `/athletics`, `/other-sports`: shared category page with query-based pagination.
- `/news/[slug]`: article detail, related stories and advertisement placement.
- `/search?q=...`: local keyword search; `page` preserves the query while paginating.
- `/about`, `/contact`, `/privacy`, `/terms`: preview information pages.
- Existing `/login`, `/register`, `/profile`, role dashboards and `/unauthorized` remain available. `/signup` redirects to `/register`.

Existing Navbar, Header, Footer, NewsCard, FeaturedCard, HeroGrid, Sidebar, Container and SectionTitle components are reused. PublicShell shares page chrome without changing auth layouts.

Authentication continues to use the existing Express JWT/bcrypt endpoints. Accounts remain in memory and reset when the backend restarts. Gender and date of birth collected by the existing registration UI are not currently stored. Password recovery and Remember me are not connected. Dashboard statistics are backend placeholders.

## Checks

- `npm run lint`
- `npm run build` (includes TypeScript checking)
- `npm start` for the production server

Google Fonts are fetched by the existing `next/font` configuration during builds, so network access may be required. No MongoDB, live scores, comments, paywalls or advanced ad systems have been added.

Local environment files, build output and QA artifacts are ignored by Git; only environment examples should be committed.
