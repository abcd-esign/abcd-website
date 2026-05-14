"use client";

import { ChapterSlate, PixelStaircase } from "./glyphs";

/* ============================================================
   What We Offer v2 — Chapter 02 / YELLOW
   Solid #F0CE2E. Process vectors (black ink) sit naturally on
   yellow. A small BrandMark anchors the top-right corner.
   ============================================================ */

export function WhatWeOfferV2() {
  return (
    <section
      style={{
        position: "relative",
        background: "var(--color-bg)",
        color: "var(--color-text)",
        padding: "clamp(3rem, 5vw, 5rem) clamp(1.5rem, 4vw, 3rem) clamp(3rem, 6vw, 6rem)",
        maxHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ maxWidth: 1440, margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", gap: "clamp(2rem, 4vw, 3.5rem)", flex: 1 }}>
        <div
          data-reveal
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "2rem",
            flexWrap: "wrap",
          }}
          className="offerv2-head"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(1rem, 2vw, 1.75rem)" }}>
            <ChapterSlate num="02" title="What We Offer" />
            <h2
            style={{
              fontFamily: "var(--font-public-sans)",
              fontSize: "clamp(1.5rem, 3.2vw, 2.5rem)",
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: "-0.026em",
              margin: 0,
              maxWidth: "22ch",
            }}
          >
            A modern design process that gets ideas to launch in{" "}
            <span style={{ fontWeight: 700 }}>a fraction of the time.</span>
          </h2>
          </div>
          {/* Staircase of pixel squares — the visual idea of "process compressing".
              Same primitive, new arrangement. */}
          <PixelStaircase unit={10} color="var(--color-text)" />
        </div>

        <div
          data-reveal
          style={{ display: "flex", flexDirection: "column", gap: "clamp(2.25rem, 4vw, 3.5rem)" }}
        >
          <ProcessRow
            kind="abc"
            label="Our Product Process"
            sublabel="ABC Design"
            duration="~ 6 — 10 weeks"
            src="/vectors/Product_Process_Vector.svg"
            alt="ABC Design product process"
          />
          <ProcessRow
            kind="traditional"
            label="Traditional Process"
            sublabel="The long way"
            duration="~ 6 — 12 months"
            src="/vectors/Traditional_Process_Vector.svg"
            alt="Traditional process"
          />
        </div>
      </div>
    </section>
  );
}

function ProcessRow({
  kind,
  label,
  sublabel,
  duration,
  src,
  alt,
}: {
  kind: "abc" | "traditional";
  label: string;
  sublabel: string;
  duration: string;
  src: string;
  alt: string;
}) {
  const isAbc = kind === "abc";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          gap: "1rem",
          flexWrap: "wrap",
          borderBottom: "1px solid var(--color-border)",
          paddingBottom: "0.75rem",
        }}
      >
        <div style={{ display: "inline-flex", alignItems: "baseline", gap: "0.5em" }}>
          <span
            style={{
              fontFamily: "var(--font-public-sans)",
              fontSize: "clamp(1.125rem, 1.5vw, 1.5rem)",
              fontWeight: isAbc ? 700 : 400,
              letterSpacing: "-0.012em",
              color: "var(--color-text)",
            }}
          >
            {label}
          </span>
          <span
            style={{
              fontFamily: "var(--font-public-sans)",
              fontSize: "clamp(1rem, 1.25vw, 1.25rem)",
              fontWeight: 400,
              color: "var(--color-text)",
              opacity: isAbc ? 0.95 : 0.55,
            }}
          >
            — {sublabel}
          </span>
        </div>
        <span
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "0.6875rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--color-text)",
            opacity: isAbc ? 1 : 0.65,
          }}
        >
          {duration}
        </span>
      </div>

      <div style={{ width: "100%", maxWidth: isAbc ? "51.4%" : "100%" }} className={`procv2 procv2--${kind}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} style={{ display: "block", width: "100%", height: "auto" }} />
      </div>

      <style>{`
        @media (max-width: 980px) {
          .offerv2-head { align-items: flex-start !important; }
        }
        @media (max-width: 720px) {
          .procv2 { max-width: 100% !important; }
        }
      `}</style>
    </div>
  );
}
