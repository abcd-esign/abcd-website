"use client";

import { useEffect } from "react";

/* ============================================================
   What We Offer — process comparison.
   The key sales surface: a potential client lands here and
   needs to instantly understand WHY working with us is faster
   than the alternative. Layout reads top-down:
     1. Eyebrow + dramatic headline + a one-sentence lede that
        names the value prop in plain English.
     2. Two process rows stacked (Ours on top of Traditional).
        Each row's time stat is the visual hero — bold + brand
        colour for ours, muted for theirs.
     3. A bottom takeaway row of three editorial stats that
        reinforce the comparison in concrete numbers.
   Motion / animation in the iframes is untouched; the SMIL
   sync effect at the top of WhatWeOffer keeps the two loops
   phase-locked exactly as before.
   ============================================================ */

const rows = [
  {
    kind: "abc",
    label: "Our Process",
    duration: "6 — 10 weeks",
    src: "/vectors/animated_process.html",
    alt: "ABC Design product process — Idea, ABC Design, Client handoff, Engineering, Launch",
    aspect: "1000 / 148",
  },
  {
    kind: "traditional",
    label: "Traditional Process",
    duration: "6 — 12 months",
    src: "/vectors/animated_traditional.html",
    alt: "Traditional process — Idea, Product, PRD, Design, Design handoff, Engineering, Testing, Launch",
    aspect: "1826 / 148",
  },
] as const;

export function WhatWeOffer() {
  /* Both iframes load independently, so their SMIL animation clocks start
     a few ms apart. To lock them together:
       1) Once both iframes have loaded, pause SMIL on both SVGs.
       2) Set currentTime to 0 on both (still paused).
       3) In the very next animation frame, unpause both — they resume from
          t=0 within the same paint tick, so the 28s loops stay phase-locked. */
  useEffect(() => {
    const iframes = Array.from(
      document.querySelectorAll<HTMLIFrameElement>("iframe.process-iframe")
    );
    if (iframes.length < 2) return;

    let synced = false;
    const trySync = () => {
      if (synced) return;
      const svgs = iframes
        .map((ifr) => ifr.contentDocument?.querySelector("svg"))
        .filter((s): s is SVGSVGElement => Boolean(s));
      if (svgs.length < iframes.length) return;
      svgs.forEach((s) => s.pauseAnimations());
      svgs.forEach((s) => s.setCurrentTime(0));
      requestAnimationFrame(() => {
        svgs.forEach((s) => s.unpauseAnimations());
        synced = true;
      });
    };

    let loaded = 0;
    const onLoad = () => {
      loaded += 1;
      if (loaded >= iframes.length) {
        requestAnimationFrame(trySync);
      }
    };

    iframes.forEach((ifr) => {
      if (ifr.contentDocument?.readyState === "complete") onLoad();
      else ifr.addEventListener("load", onLoad);
    });

    const retries = [200, 600, 1500].map((ms) => setTimeout(trySync, ms));

    return () => {
      retries.forEach(clearTimeout);
      iframes.forEach((ifr) => ifr.removeEventListener("load", onLoad));
    };
  }, []);

  return (
    <section
      id="what-we-offer"
      style={{
        position: "relative",
        background: "var(--color-bg)",
        color: "var(--color-text)",
        padding:
          "clamp(4.5rem, 7.5vw, 8rem) clamp(1.5rem, 4vw, 3rem) clamp(2.5rem, 4.5vw, 4.5rem)",
        maxHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "clamp(1.75rem, 3.5vw, 3rem)",
        }}
      >
        {/* ─── HEADER ─────────────────────────────────────────── */}
        <header data-reveal>
          <div
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontSize: "0.6875rem",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              lineHeight: 1,
              color: "var(--color-text-muted)",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.625rem",
              marginBottom: "1.25rem",
            }}
          >
            <span aria-hidden="true" style={{ width: 22, height: 1, background: "currentColor" }} />
            <span>What We Offer</span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-public-sans)",
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              fontWeight: 400,
              lineHeight: 1.08,
              letterSpacing: "-0.026em",
              margin: 0,
              maxWidth: "32ch",
            }}
          >
            A modern design process that gets ideas to launch in{" "}
            <span style={{ fontWeight: 700, color: "var(--color-blue)" }}>
              a fraction of the time.
            </span>
          </h2>
        </header>

        {/* ─── PROCESS COMPARISON ────────────────────────────── */}
        <div
          data-reveal
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(1.25rem, 2.5vw, 2.25rem)",
          }}
        >
          {rows.map((r) => (
            <ProcessRow key={r.kind} {...r} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProcessRow({
  kind,
  label,
  duration,
  src,
  alt,
  aspect,
}: {
  kind: "abc" | "traditional";
  label: string;
  duration: string;
  src: string;
  alt: string;
  aspect: string;
}) {
  const isAbc = kind === "abc";
  /* Both labels (process name + time) share the same font, size, weight
     and letter-spacing — only colour differs to set the row's importance.
     A 1px rule fills the space between them and connects the two ends.
     A 4-pixel cluster sits to the left of the process name: full brand
     palette for ours, a black opacity ramp (light → true) for theirs. */
  const textStyle = {
    fontFamily: "var(--font-public-sans)",
    fontSize: "clamp(0.9375rem, 1.2vw, 1.0625rem)",
    fontWeight: 500 as const,
    letterSpacing: "-0.012em",
    lineHeight: 1,
    whiteSpace: "nowrap" as const,
  };
  const pixelColors = isAbc
    ? [
        "var(--color-blue)",
        "var(--color-pink)",
        "var(--color-orange)",
        "var(--color-green)",
      ]
    : [
        "rgba(17,17,17,0.2)",
        "rgba(17,17,17,0.45)",
        "rgba(17,17,17,0.7)",
        "#111111",
      ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.875rem",
          maxWidth: isAbc ? "54.76%" : "100%",
          color: isAbc ? "var(--color-blue)" : "#111111",
        }}
        className={`process-label ${isAbc ? "process-label--abc" : "process-label--trad"}`}
      >
        <PixelCluster colors={pixelColors} />
        <span style={textStyle}>{label}</span>
        <span
          aria-hidden="true"
          style={{
            flex: 1,
            height: 1,
            background: "currentColor",
            opacity: 0.3,
          }}
        />
        <span style={textStyle}>{duration}</span>
      </div>

      {/* Animated process iframe — same per-unit scale across both rows. */}
      <div
        style={{
          width: "100%",
          maxWidth: isAbc ? "54.76%" : "100%",
          opacity: 1,
        }}
        className={`process-row ${isAbc ? "process-row--abc" : "process-row--trad"}`}
      >
        <iframe
          src={src}
          title={alt}
          aria-label={alt}
          loading="eager"
          scrolling="no"
          className="process-iframe"
          style={{
            display: "block",
            width: "100%",
            aspectRatio: aspect,
            border: 0,
            background: "transparent",
          }}
        />
      </div>

      <style>{`
        @media (max-width: 720px) {
          .process-row, .process-label { max-width: 100% !important; }
        }
      `}</style>
    </div>
  );
}

function PixelCluster({ colors }: { colors: string[] }) {
  return (
    <span
      aria-hidden="true"
      style={{
        display: "inline-flex",
        gap: 2,
        flexShrink: 0,
      }}
    >
      {colors.map((c, i) => (
        <span
          key={i}
          style={{
            width: 9,
            height: 9,
            background: c,
            display: "block",
          }}
        />
      ))}
    </span>
  );
}

