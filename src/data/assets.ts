/* ============================================================
   Asset registry — single source of truth for static asset paths.

   Treat this file as your CMS for now: reference assets by key
   (`brand.wordmark`, `icons.arrowRight`) instead of typing
   `/brand/abc-wordmark.svg` in every component. To swap an asset,
   drop a new file in /public and either reuse the same filename or
   update the path here once.

   - All paths are absolute from the site root (Next serves /public/* at /*).
   - SVGs in /public/brand/, /public/icons/, /public/vectors/ use
     `currentColor` where possible, so they accept CSS color overrides.
   ============================================================ */

export const brand = {
  /** Long horizontal wordmark — "ABC Design" letterforms. */
  wordmark: "/brand/abc-wordmark.svg",
  /** Stacked wordmark — for footers and tight layouts. */
  wordmarkStack: "/brand/abc-wordmark-stack.svg",
  /** The 4-rectangle corner mark used on slide-frame headers. */
  mark: "/brand/abc-mark.svg",
  /** Square favicon-ready variant of the corner mark, with star accent. */
  markSquare: "/brand/abc-mark-square.svg",
  /** The signature kinetic-star glyph. */
  star: "/brand/star.svg",
  /** Brand palette swatches — useful for press kits / about pages. */
  swatches: "/brand/swatches.svg",
} as const;

export const icons = {
  arrowRight: "/icons/arrow-right.svg",
  arrowUpRight: "/icons/arrow-up-right.svg",
  arrowDown: "/icons/arrow-down.svg",
  plus: "/icons/plus.svg",
  close: "/icons/close.svg",
  menu: "/icons/menu.svg",
  check: "/icons/check.svg",
  external: "/icons/external.svg",
  mail: "/icons/mail.svg",
  quote: "/icons/quote.svg",
  play: "/icons/play.svg",
} as const;

export const vectors = {
  /** Full-bleed hero artwork — yellow/orange/pink primary kinetic vector. */
  heroPrimary: "/vectors/hero-kinetic-primary.svg",
  /** Alternate kinetic vector — full palette (blue/pink/green/warm). */
  kineticMulticolor: "/vectors/kinetic-multicolor.svg",
  /** Hairline wave divider — accepts currentColor. */
  waveDivider: "/vectors/wave-divider.svg",
  /** Static fractal-noise grain — alternative to the inline CSS grain. */
  grain: "/vectors/grain.svg",
} as const;

export const placeholders = {
  /** 4:3 project thumbnail placeholder (800×600). */
  project: "/projects/placeholder.svg",
  /** 4:5 team headshot placeholder (400×500). */
  team: "/team/placeholder.svg",
  /** Journal cover placeholder (5:3, 800×480). */
  journal: "/journal/placeholder.svg",
} as const;

export const social = {
  /** Default Open Graph card (SVG source — see app/opengraph-image.tsx for runtime PNG). */
  ogDefault: "/social/og-default.svg",
} as const;

/** Aggregate registry — useful for tooling and audits. */
export const assets = { brand, icons, vectors, placeholders, social } as const;

export type AssetCategory = keyof typeof assets;
export type BrandAsset = keyof typeof brand;
export type IconName = keyof typeof icons;
export type VectorName = keyof typeof vectors;
export type PlaceholderName = keyof typeof placeholders;

/* ------------------------------------------------------------
   Optional convenience accessors
   ------------------------------------------------------------ */

/** Resolve an icon path by name with type safety. */
export function icon(name: IconName): string {
  return icons[name];
}

/** Resolve a brand asset path by name with type safety. */
export function brandAsset(name: BrandAsset): string {
  return brand[name];
}

/** Resolve a vector asset path by name with type safety. */
export function vector(name: VectorName): string {
  return vectors[name];
}
