"use client";

import Link from "next/link";
import { useState } from "react";

/* ============================================================
   Work — collapsed summary on homepage.
   Orange chapter divider + four rows. Each row links to its
   detail page under /work/[slug].
   ============================================================ */

type Case = {
  slug: string;
  client: string;
  headline: string;
  year: string;
};

const cases: Case[] = [
  {
    slug: "dialogue-ai",
    client: "Dialogue AI",
    headline: "Fully redesigned Dialogue AI's website",
    year: "2025",
  },
  {
    slug: "robinhood",
    client: "Robinhood",
    headline: "Grew Robinhood Gold from 1M to 3.2M members in one year",
    year: "2024",
  },
  {
    slug: "affirm",
    client: "Affirm",
    headline: "Designed Affirm's onboarding experience for businesses",
    year: "2023",
  },
  {
    slug: "cash-app",
    client: "Cash App",
    headline: "Unified Cash App's banking features, centralizing ~$3B in monthly inflows",
    year: "2022",
  },
];

export function Work({ variant = "home" }: { variant?: "home" | "index"; title?: string }) {
  return (
    <section
      id="work"
      style={{
        position: "relative",
        background: "var(--color-bg)",
        color: "var(--color-text)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      {/* Orange chapter divider */}
      {variant === "home" && <WorkDivider />}

      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "clamp(3rem, 5vw, 5rem) clamp(1.5rem, 4vw, 3rem) clamp(4rem, 7vw, 8rem)",
        }}
      >
        {variant === "home" && (
          <header
            data-reveal
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
              gap: "clamp(2rem, 4vw, 4rem)",
              alignItems: "end",
              marginBottom: "clamp(2.5rem, 5vw, 4rem)",
            }}
            className="work-head"
          >
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-public-sans)",
                  fontSize: "clamp(2rem, 5vw, 4rem)",
                  fontWeight: 400,
                  lineHeight: 0.98,
                  letterSpacing: "-0.032em",
                  margin: 0,
                  maxWidth: "16ch",
                }}
              >
                Selected{" "}
                <span className="serif-italic" style={{ color: "var(--color-orange)" }}>
                  work.
                </span>
              </h2>
            </div>
            <p
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.55,
                maxWidth: "44ch",
                color: "var(--color-text-muted)",
                margin: 0,
                justifySelf: "end",
                textAlign: "left",
              }}
            >
              A few of the recent projects. Each row is a short headline — click through for
              the full case.
            </p>
          </header>
        )}

        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            borderTop: "1px solid var(--color-border)",
          }}
        >
          {cases.map((c, i) => (
            <WorkRow key={c.slug} c={c} index={i} />
          ))}
        </ul>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .work-head { grid-template-columns: 1fr !important; align-items: start !important; }
          .work-head p { justify-self: start !important; }
        }
      `}</style>
    </section>
  );
}

function WorkRow({ c, index }: { c: Case; index: number }) {
  const [hover, setHover] = useState(false);
  return (
    <li data-reveal style={{ ["--delay" as string]: `${index * 50}ms` }}>
      <Link
        href={`/work/${c.slug}`}
        data-cursor="View case →"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          display: "grid",
          gridTemplateColumns: "auto 1.6fr 4fr auto auto",
          alignItems: "center",
          gap: "clamp(1rem, 2.5vw, 2.5rem)",
          padding: "clamp(1.5rem, 2.5vw, 2.25rem) 0",
          borderBottom: "1px solid var(--color-border)",
          textDecoration: "none",
          color: "var(--color-text)",
          position: "relative",
          transition: "padding 360ms var(--ease-out)",
        }}
        className="work-row"
      >
        <span
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "0.6875rem",
            letterSpacing: "0.16em",
            color: "var(--color-text-faint)",
            width: 32,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <span
          style={{
            fontFamily: "var(--font-public-sans)",
            fontSize: "clamp(1.125rem, 1.7vw, 1.5rem)",
            letterSpacing: "-0.012em",
            color: "var(--color-text)",
            transition: "transform 360ms var(--ease-out)",
            transform: hover ? "translateX(8px)" : "translateX(0)",
          }}
        >
          {c.client}
        </span>

        <span
          style={{
            fontFamily: "var(--font-instrument-serif)",
            fontStyle: "italic",
            fontSize: "clamp(1.0625rem, 1.5vw, 1.375rem)",
            lineHeight: 1.25,
            color: "var(--color-text-muted)",
            letterSpacing: "-0.005em",
            maxWidth: "60ch",
          }}
          className="work-row-headline"
        >
          {c.headline}
        </span>

        <span
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "0.6875rem",
            letterSpacing: "0.16em",
            color: "var(--color-text-faint)",
          }}
          className="work-row-year"
        >
          {c.year}
        </span>

        <span
          aria-hidden="true"
          style={{
            width: 32,
            height: 32,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 9999,
            border: "1px solid var(--color-border)",
            transition: "background 320ms var(--ease-out), color 320ms var(--ease-out), transform 320ms var(--ease-out)",
            background: hover ? "var(--color-text)" : "transparent",
            color: hover ? "var(--color-bg)" : "var(--color-text)",
            transform: hover ? "translateX(6px)" : "translateX(0)",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M3 9L9 3M9 3H4.5M9 3V7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </Link>

      <style>{`
        .work-row:hover { padding-left: 12px !important; padding-right: 12px !important; }
        @media (max-width: 880px) {
          .work-row { grid-template-columns: auto 1fr auto !important; gap: 0.75rem !important; }
          .work-row-headline { display: none !important; }
        }
        @media (max-width: 520px) {
          .work-row-year { display: none !important; }
        }
      `}</style>
    </li>
  );
}

function WorkDivider() {
  return (
    <div
      style={{
        position: "relative",
        background: "#F25E08",
        color: "#FFFDF9",
        padding: "clamp(2.5rem, 5vw, 4.5rem) clamp(1.5rem, 4vw, 3rem)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "0.6875rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            color: "rgba(255,253,249,0.85)",
          }}
        >
          <span style={{ width: 28, height: 1, background: "currentColor" }} />
          <span>Chapter / 05</span>
        </div>
        <h2
          style={{
            fontFamily: "var(--font-public-sans)",
            fontSize: "clamp(2.5rem, 9vw, 8rem)",
            fontWeight: 400,
            lineHeight: 0.9,
            letterSpacing: "-0.045em",
            margin: 0,
          }}
        >
          Work
        </h2>
      </div>
    </div>
  );
}
