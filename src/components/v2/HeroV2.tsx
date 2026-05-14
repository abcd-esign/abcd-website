"use client";

import Link from "next/link";
import { ChapterSlate } from "./glyphs";

/* ============================================================
   Hero v2 — Chapter 01 / PINK
   The real Logo-Primary.svg sits side-by-side with the headline.
   The two share a single row whose height is set by a CSS
   variable, so both elements render at the same vertical scale.
   The headline is broken to four short lines so its block matches
   the logo's lockup height.
   ============================================================ */

export function HeroV2() {
  return (
    <section
      aria-label="ABC Design — Home"
      className="herov2"
      style={{
        position: "relative",
        height: "calc(100vh - 80px)",
        minHeight: 600,
        background: "#F672C6",
        color: "#111111",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        padding: "clamp(1.5rem, 3vw, 2.5rem) clamp(1.5rem, 4vw, 3rem)",
      }}
    >
      {/* Top — chapter slate + locations */}
      <div
        className="fade-up"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <ChapterSlate num="01" title="Studio" />
        <span
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "0.6875rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          MNL — SFO — BOS
        </span>
      </div>

      {/* Side-by-side lockup: Logo-Primary + headline share one row
          height (--lockup-h). The headline's line-height × line-count
          equals the lockup height, so both blocks match exactly. */}
      <div
        data-reveal
        style={{
          ["--lockup-h" as string]: "clamp(110px, 16vh, 220px)",
          ["--lockup-line" as string]: "calc(var(--lockup-h) / 3)",
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "clamp(1.5rem, 3vh, 2.5rem)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto",
            alignItems: "center",
            gap: "clamp(1.5rem, 3vw, 3rem)",
          }}
          className="herov2-lockup"
        >
          {/* Logo — height equals --lockup-h; width auto from aspect */}
          <div style={{ height: "var(--lockup-h)", lineHeight: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/Logo-Primary.svg"
              alt="ABC Design"
              style={{ display: "block", height: "100%", width: "auto", maxWidth: "100%" }}
            />
          </div>

          {/* Headline — 3 lines × --lockup-line = --lockup-h */}
          <h1
            style={{
              fontFamily: "var(--font-public-sans)",
              fontSize: "calc(var(--lockup-line) * 0.82)",
              fontWeight: 400,
              lineHeight: "var(--lockup-line)",
              letterSpacing: "-0.026em",
              margin: 0,
              color: "#111111",
              maxWidth: "26ch",
            }}
            className="herov2-headline"
          >
            <span style={{ display: "block" }}>
              An <span style={{ fontWeight: 700 }}>AI-native</span> design agency
            </span>
            <span style={{ display: "block" }}>that helps companies ship in</span>
            <span style={{ display: "block" }}>
              <span style={{ fontWeight: 700 }}>weeks</span> instead of months.
            </span>
          </h1>
        </div>
      </div>

      {/* CTAs — centred to match the lockup */}
      <div
        className="fade-up"
        style={{
          ["--delay" as string]: "720ms",
          display: "flex",
          gap: "0.75rem",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "clamp(1.5rem, 3vh, 2.5rem)",
        }}
      >
        <a
          href="mailto:hello@abc.design"
          data-cursor="Email us"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.625rem",
            fontFamily: "var(--font-public-sans)",
            fontSize: "0.9375rem",
            fontWeight: 500,
            background: "#111111",
            color: "#F672C6",
            padding: "0.875rem 1.25rem",
            border: "1px solid #111111",
            borderRadius: 0,
            textDecoration: "none",
          }}
          className="herov2-cta-primary"
        >
          <span>hello@abc.design</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <Link
          href="/work"
          data-cursor="See work"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.625rem",
            fontFamily: "var(--font-public-sans)",
            fontSize: "0.9375rem",
            fontWeight: 500,
            background: "transparent",
            color: "#111111",
            padding: "0.875rem 1.25rem",
            border: "1px solid #111111",
            borderRadius: 0,
            textDecoration: "none",
          }}
          className="herov2-cta-ghost"
        >
          <span>See selected work</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </Link>
      </div>

      <style>{`
        .herov2-cta-primary:hover { background: transparent; color: #111111; }
        .herov2-cta-ghost:hover { background: #111111; color: #F672C6; }
        @media (max-width: 880px) {
          .herov2-lockup { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .herov2-lockup > div:first-child { height: clamp(70px, 12vh, 120px) !important; }
          .herov2-lockup > div:first-child img { max-width: 100%; }
          .herov2-headline { font-size: clamp(1.125rem, 4vw, 1.5rem) !important; line-height: 1.15 !important; }
        }
      `}</style>
    </section>
  );
}
