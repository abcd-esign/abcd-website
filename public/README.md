# /public — Asset folder ("CMS for now")

This folder is the **swappable asset surface** for the ABC Design site. Everything Next.js serves at the URL root lives here. Treat each subfolder as a category in a lightweight CMS — drop a new file in, and either reuse the filename to swap silently, or update `src/data/assets.ts` once to point at the new path.

```
public/
├── brand/        — logos, marks, wordmarks, brand-system pieces
├── icons/        — single-color UI icons (use currentColor)
├── vectors/      — large decorative SVG artwork (kinetic vector, dividers, grain)
├── projects/     — case-study thumbnails (replace placeholder.svg per case)
├── team/         — team headshots (replace placeholder.svg per person)
├── journal/      — journal entry covers
└── social/       — Open Graph / social share artwork
```

## How assets are referenced in code

All static paths are centralized in **[`src/data/assets.ts`](../src/data/assets.ts)** — the registry. Components import named keys, not raw paths:

```tsx
import Image from "next/image";
import { brand, icons, placeholders } from "@/data/assets";

<Image src={placeholders.project} alt="" width={800} height={600} />
<img src={icons.arrowRight} alt="" width={16} height={16} />
```

This means swapping an asset is a one-liner — change the registry, every component picks it up.

> **Logo SVGs are intentionally inlined in `Nav.tsx`, `Footer.tsx`, and `Hero.tsx`** so they accept `currentColor` and live in the same HTTP request. The files in `/public/brand/` are the canonical, swappable source-of-truth used by collaborators, press kits, and OG generators.

## Conventions

- **SVG icons** use `stroke="currentColor"` so they re-color from CSS. Default viewBox is `0 0 16 16` (line) or `0 0 24 24` (filled).
- **Brand SVGs** also use `currentColor` for the wordmark; the corner mark is solid `#111111` when standalone.
- **Photo placeholders** are SVGs sized to the expected aspect ratio. Replace with WebP/JPG and update the registry if the extension changes.
- **Never commit raster files larger than 500 KB.** Next/Image will resize on-demand from the original — keep originals reasonable.

## Favicon & Open Graph (Next 16 metadata conventions)

These live in `src/app/`, not `/public/`:

| File                          | Role                                                  |
| ----------------------------- | ----------------------------------------------------- |
| `src/app/favicon.ico`         | Classic `.ico` favicon (auto-wired to `<head>`)       |
| `src/app/icon.svg`            | SVG favicon for modern browsers                       |
| `src/app/apple-icon.tsx`      | 180×180 apple-touch-icon, generated via `next/og`     |
| `src/app/opengraph-image.tsx` | 1200×630 OG card, generated at build via `next/og`    |

To re-skin any of these, edit the JSX inside the `.tsx` file or replace the `.ico`/`.svg` directly. Next 16 regenerates the HTML `<head>` tags automatically.

## Adding a new asset

1. Drop the file in the appropriate subfolder.
2. Add a keyed entry in `src/data/assets.ts` under the matching category.
3. Reference it in code via the registry: `assets.icons.foo`, `brand.wordmark`, etc.

## Adding a new category

1. `mkdir public/<category>` and drop files in.
2. Add a new exported object in `src/data/assets.ts` (mirror the existing pattern).
3. Add it to the aggregate `assets = { … }` map and update the `AssetCategory` type.
