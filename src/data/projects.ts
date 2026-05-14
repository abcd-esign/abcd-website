export type Project = {
  slug: string;
  index: string;          // "01" — display index
  client: string;
  title: string;
  subtitle: string;
  year: string;
  duration: string;
  practice: string[];     // discipline tags
  hue: string;            // brand accent for this project
  hueSoft: string;        // background tint
  role: string;
  outcome: string;
  problem: string;
  approach: string[];
  metrics: { label: string; value: string }[];
  pullQuote: string;
  pullQuoteAttr: string;
  swatches: string[];     // a small palette for the swatch chip strip
  /** Cover image path. Defaults to /projects/placeholder.svg if not set. */
  cover?: string;
};

export const projects: Project[] = [
  {
    slug: "dialogue-ai",
    index: "01",
    client: "Dialogue AI",
    title: "Fully redesigned Dialogue AI's website.",
    subtitle:
      "Reimagined branding and a from-scratch website to kickstart a Series A raise.",
    year: "2025",
    duration: "7 weeks",
    practice: ["Brand Identity", "Web", "Design Engineering"],
    hue: "#1570F4",
    hueSoft: "#E3EEFE",
    role: "Brand direction, web design, production engineering.",
    outcome:
      "Shipped a new mark, design system, and site in seven weeks. Closed Series A within 60 days of launch.",
    problem:
      "Dialogue's existing site read like an early-stage demo. Their conversation tech was best-in-class, but every part of the public surface — wordmark, type, navigation, taxonomy — undersold the company on stage with investors and customers.",
    approach: [
      "Re-grounded the brand on a single drawn wordmark and a tight type pairing.",
      "Defined a clear narrative architecture: what it is, why it's hard, why us.",
      "Designed and built the site in Next.js — no separate handoff.",
      "Sat in the investor meetings and refined live as the deck evolved.",
    ],
    metrics: [
      { label: "Time to ship", value: "7 wk" },
      { label: "Series A close", value: "60d" },
      { label: "Lighthouse", value: "100" },
    ],
    pullQuote:
      "ABC didn't just rebrand the company — they helped us figure out what to say.",
    pullQuoteAttr: "Founder, Dialogue AI",
    swatches: ["#1570F4", "#06AAFF", "#FFFDF9", "#111111"],
  },
  {
    slug: "robinhood",
    index: "02",
    client: "Robinhood",
    title: "Grew Robinhood Gold from 1M to 3.2M members in one year.",
    subtitle:
      "Launched new offerings, evolved the brand, and shipped ~20 growth experiments.",
    year: "2024",
    duration: "12 months · embedded",
    practice: ["Product Design", "Brand Identity", "Growth"],
    hue: "#F0CE2E",
    hueSoft: "#FBF4D2",
    role: "Embedded product design lead on the Gold growth team.",
    outcome:
      "Membership tripled in twelve months. Gold's brand inside the app became a real identity.",
    problem:
      "Gold was a subscription tier hidden inside a free product. Most existing users couldn't articulate what it was for — and even users on it didn't know what they had.",
    approach: [
      "Audited the entire Gold surface — onboarding, value-prop placements, billing.",
      "Designed a quiet visual identity for the tier that reads inside a sea of green.",
      "Ran a continuous experiment cadence — ~20 in-product tests over the year.",
      "Paired with the Gold marketing team so the brand worked outside the app, too.",
    ],
    metrics: [
      { label: "Members", value: "1M → 3.2M" },
      { label: "Experiments", value: "~20" },
      { label: "Tenure", value: "12 mo" },
    ],
    pullQuote:
      "ABC owned the design half of Gold's growth story for a year — and it shows in the numbers.",
    pullQuoteAttr: "Director of Product, Robinhood",
    swatches: ["#F0CE2E", "#0D9A3E", "#111111", "#FFFDF9"],
  },
  {
    slug: "affirm",
    index: "03",
    client: "Affirm",
    title: "Designed Affirm's onboarding experience for businesses.",
    subtitle:
      "Unified signup and integration into one strategy across product, eng, and GTM.",
    year: "2023",
    duration: "14 weeks",
    practice: ["Product Design", "UX Research", "Service Design"],
    hue: "#F25E08",
    hueSoft: "#FEE7DA",
    role: "Lead designer on the merchant onboarding stream.",
    outcome:
      "Cut median time-to-first-transaction in half. Doubled the integration-success rate.",
    problem:
      "Affirm's merchant onboarding spanned a marketing site, a sales handoff, a dashboard, and engineering integration docs. Each step had its own owner — and merchants felt every seam.",
    approach: [
      "Mapped the full merchant journey across product, eng, and GTM owners.",
      "Designed a single onboarding spine that survives handoffs between teams.",
      "Wrote the docs alongside the UI so language matched across surfaces.",
      "Paired with the dev-rel team to make the integration feel like part of the product.",
    ],
    metrics: [
      { label: "Time-to-first-txn", value: "−51%" },
      { label: "Integration success", value: "×2" },
      { label: "Surfaces aligned", value: "4" },
    ],
    pullQuote:
      "It's the first time onboarding felt designed instead of assembled.",
    pullQuoteAttr: "VP Product, Affirm",
    swatches: ["#F25E08", "#F0CE2E", "#111111", "#FFFDF9"],
  },
  {
    slug: "cash-app",
    index: "04",
    client: "Cash App",
    title: "Unified Cash App's banking features, centralizing ~$3B in monthly inflows.",
    subtitle:
      "Aligned leaders across verticals to protect and scale deposit growth for each feature.",
    year: "2022",
    duration: "10 months",
    practice: ["Product Design", "Strategy", "Cross-functional"],
    hue: "#0D9A3E",
    hueSoft: "#E2F4E2",
    role: "Cross-functional design lead bridging Money, Transfers, Writing, and OS teams.",
    outcome:
      "Centralized ~$3B in monthly inflows under a single banking surface — without rebuilding the underlying products.",
    problem:
      "Cash App's banking lived inside four different teams: Money, Transfers, Writing, OS. Each one had its own conventions. Customers had to learn each one separately, and inflows fragmented across screens.",
    approach: [
      "Ran a quiet six-week alignment with leaders across all four verticals.",
      "Designed a unified banking surface that respected each team's underlying logic.",
      "Annotated every screen with the owning team so engineering work could parallelize.",
      "Stayed through the rollout — feature-flagged, regional ramp, monthly read-outs.",
    ],
    metrics: [
      { label: "Monthly inflows", value: "~$3B" },
      { label: "Teams aligned", value: "4" },
      { label: "Engagement", value: "10 mo" },
    ],
    pullQuote:
      "Half the work was design. The other half was getting four teams to agree — ABC owned both.",
    pullQuoteAttr: "Head of Product, Cash App Banking",
    swatches: ["#0D9A3E", "#00B800", "#111111", "#FFFDF9"],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function adjacent(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return { prev: undefined, next: undefined };
  return {
    prev: projects[(i - 1 + projects.length) % projects.length],
    next: projects[(i + 1) % projects.length],
  };
}
