# AGENTS.md

Single-page personal portfolio: React 18 + TypeScript + Vite + Tailwind CSS 3. No backend; the contact form uses Netlify Forms. Source files live at the repo root, **not** in `src/`.

## Commands

- `npm install` — install dependencies
- `npm run dev` — Vite dev server on `http://localhost:3000` (binds `0.0.0.0`)
- `npm run build` — production build to `dist/`; does **not** type-check
- `npm run typecheck` — runs `tsc --noEmit`; run it after non-trivial TS/TSX edits
- `npm run preview` — serve the built `dist/`

There are no test, lint, format, or codegen scripts/tools configured. Don't invent or claim them. There is no CI config.

## Structure

- `index.html` — Vite entry; also holds a hidden static Netlify form.
- `index.tsx` mounts `App.tsx`; `App.tsx` defines section order and the dark-mode state (toggles `dark` on `<html>`, persists to `localStorage` key `theme`).
- `components/` — one file per page section plus `UI.tsx` (`Section`, `SectionHeading`, `Button`, `Card`); reuse these primitives instead of re-styling layout.
- `constants.ts` — all page content (nav, skills, projects, achievements, certifications); `types.ts` — shared types.
- `public/` is served at `/`; images are referenced as `/Projects/*.png`, `/certifications/*.png`, `/Profilepic/Profile.jpg`. Paths are case-sensitive in production.

## Conventions and gotchas

- No router: navigation is anchor links (`#about`, `#skills`, …) to section `id`s. `NAV_ITEMS` in `constants.ts` must match the `Section` ids.
- The `@/*` alias maps to the repo root in both `vite.config.ts` and `tsconfig.json`, but existing code uses relative imports (`./UI`, `../constants`). Match that style.
- Tailwind `darkMode` is `class`; new UI needs explicit `dark:` variants. Custom tokens: `primary-*` colors, `font-display` (Space Grotesk), `font-mono` (JetBrains Mono).
- Project categories are a union in `types.ts` and a separately hard-coded filter list in `components/Projects.tsx`; update both when adding a category.
- Netlify Forms: the hidden form in `index.html` and the live form in `components/Contact.tsx` must stay in sync (`name="contact"`, hidden `form-name`, honeypot `bot-field`). The static copy is required for Netlify's build-time form detection. Local submissions hit the dev server and are not recorded.
- `metadata.json` is unused, and `.env.local` (`GEMINI_API_KEY`) is not read anywhere — no app code uses env vars. Don't expect Vite env changes to affect anything.
- Deployment is Netlify per `README.md`: build `npm run build`, publish `dist`. There is no `netlify.toml`.
