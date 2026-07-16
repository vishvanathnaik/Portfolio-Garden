# Vishvanath Naik — portfolio & field notes

A responsive, editorial portfolio designed as a growing digital garden. It brings projects, essays, working notes, reading, and current interests into one connected system.

## What is included

- A polished, responsive homepage
- Reusable layout, navigation, content cards, type, color, spacing, and motion tokens
- Routes for About, Projects, Writing, Notes, Reading, Now, Résumé, Contact, and Mind Map
- Centralized starter content in `lib/content.ts`
- Centralized, intentionally blank contact fields in `lib/site.ts`
- Static export suitable for GitHub Pages
- Accessible navigation, skip link, reduced-motion support, and semantic page structure
- GitHub Actions deployment workflow

The site is original and uses no copied illustrations, code, or layout from Maggie Appleton. The inspiration is conceptual: connected ideas, visible work-in-progress, and a garden that can mature over time.

## Run locally

Requires Node.js 20.9 or newer (Node 22 recommended).

```bash
pnpm install
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
pnpm run typecheck
pnpm run lint
pnpm run build
```

The production build is written to `out/` as a fully static site.

## Add or edit content

Most homepage content and taxonomy live in `lib/content.ts`. Each item has:

- `kind`: project, essay, note, or reading
- `status`: a transparent maturity label such as “in progress” or “seedling”
- `topics`: shared concepts that will power the future mind map
- `href`: the item’s route or anchor

Verified public email and social URLs are centralized in `lib/site.ts`. Experience, education, research, and capabilities are centralized in `lib/profile.ts`.

## Deploy on GitHub Pages

1. Push this project to `vishvanathnaik/Portfolio-Garden` with `main` as the default branch.
2. In **Settings → Pages**, choose **GitHub Actions** as the source.
3. Push to `main` or run the **Deploy to GitHub Pages** workflow manually.
4. The included `public/CNAME` publishes the site at `vishvanathnaik.com`; GitHub Pages must use that same custom-domain setting.

The workflow builds for the custom domain at the root path. To return to a project-site URL, remove `public/CNAME` and set `NEXT_PUBLIC_BASE_PATH=/Portfolio-Garden` for the build step.

## Suggested next content pass

1. Replace starter summaries with verified case-study evidence, sources, methods, and outcomes.
2. Add an approved résumé and confirmed LinkedIn/GitHub/email links.
3. Move long-form content to MDX and generate topic indexes from frontmatter.
4. Turn the mind-map preview into a filterable graph after the content library is large enough to make connections meaningful.
