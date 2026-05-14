"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

/* ============================================================
   Hero — minimal stage.
   No kinetic vector for now. Locations strip top-right, single
   orange star above the headline as the only ornament.
   ============================================================ */

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  /* Subtle rise on the headline as the page scrolls */
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const content = root.querySelector<HTMLDivElement>("[data-stage-content]");
    let raf = 0;
    function tick() {
      const y = window.scrollY;
      if (content) content.style.transform = `translate3d(0, ${y * -0.05}px, 0)`;
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      ref={rootRef}
      aria-label="ABC Design — Home"
      style={{
        position: "relative",
        height: "calc(100vh - 80px)",
        minHeight: 560,
        background: "var(--color-bg)",
        color: "var(--color-text)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ─── Top strip — locations right ─── */}
      <div
        className="fade-up"
        style={{
          ["--delay" as string]: "0ms",
          position: "relative",
          zIndex: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "1rem",
          padding: "clamp(1.5rem, 3vw, 2.5rem) clamp(1.5rem, 4vw, 3rem) 0",
          fontFamily: "var(--font-jetbrains-mono)",
          fontSize: "0.6875rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--color-text-muted)",
        }}
      >
        <span aria-hidden="true">MNL · SFO · BOS</span>
      </div>

      {/* ─── Type zone ─── */}
      <div
        data-stage-content
        style={{
          position: "relative",
          zIndex: 3,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "clamp(2rem, 4vw, 3.25rem)",
          padding: "clamp(2.5rem, 5vw, 4.5rem) clamp(1.5rem, 4vw, 3rem) clamp(2rem, 4vw, 4rem)",
          willChange: "transform",
        }}
      >
        {/* Hero lockup: oversized primary logo, with tagline + CTAs
            sharing a single row directly beneath it. The wrapper is
            inline-flex so its width is set by the logo, and the row
            below uses justify-content: space-between to pin the tagline
            to the left edge of the logo and the CTAs to the right. */}
        <div
          data-reveal
          className="hero-lockup"
          style={{
            display: "inline-flex",
            flexDirection: "column",
            gap: "clamp(1.25rem, 2vw, 1.75rem)",
          }}
        >
          <div
            style={{
              height: "clamp(180px, 32vh, 380px)",
              lineHeight: 0,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/Logo-Primary.svg"
              alt="ABC Design"
              style={{ display: "block", height: "100%", width: "auto" }}
            />
          </div>

          {/* Tagline (left) + CTAs (right), same line, spanning the logo's width. */}
          <div
            className="hero-tagrow fade-up"
            style={{
              ["--delay" as string]: "240ms",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-public-sans)",
                fontSize: "clamp(0.9375rem, 1.1vw, 1.0625rem)",
                fontWeight: 400,
                letterSpacing: "-0.005em",
                color: "var(--color-text)",
              }}
            >
              AI-native design agency.
            </span>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "1.5rem",
                flexWrap: "wrap",
              }}
            >
              <a
                href="mailto:hello@abc.design"
                data-cursor="Email us"
                className="stage-mail"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.625rem",
                  fontFamily: "var(--font-public-sans)",
                  fontSize: "clamp(0.9375rem, 1.1vw, 1.0625rem)",
                  color: "var(--color-text)",
                  textDecoration: "none",
                  position: "relative",
                  padding: "0.5rem 0",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: 22,
                    height: 1,
                    background: "currentColor",
                    display: "inline-block",
                  }}
                />
                <span>hello@abc.design</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="stage-mail-arrow">
                  <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <Link
                href="/work"
                data-cursor="See work"
                className="stage-mail"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.625rem",
                  fontFamily: "var(--font-public-sans)",
                  fontSize: "clamp(0.9375rem, 1.1vw, 1.0625rem)",
                  color: "var(--color-text-muted)",
                  textDecoration: "none",
                  position: "relative",
                  padding: "0.5rem 0",
                }}
              >
                <span>See selected work</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="stage-mail-arrow">
                  <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes stageUnderline {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        .stage-mail::after {
          content: "";
          position: absolute;
          left: 0; right: 0; bottom: 0.25rem;
          height: 1px;
          background: currentColor;
          opacity: 0;
          transform: scaleX(0);
          transform-origin: left;
          transition: opacity 320ms var(--ease-out), transform 360ms var(--ease-out);
        }
        .stage-mail:hover::after { opacity: 0.6; transform: scaleX(1); }
        .stage-mail:hover .stage-mail-arrow { transform: translate(2px, -2px); }
        .stage-mail-arrow { transition: transform 320ms var(--ease-out); }
        @media (max-width: 720px) {
          .hero-lockup > div:first-child { height: clamp(120px, 26vh, 220px) !important; }
          .hero-tagrow { flex-direction: column !important; align-items: flex-start !important; gap: 0.75rem !important; }
        }
      `}</style>
    </section>
  );
}

function Star({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 15 15" fill={color} aria-hidden="true" style={{ display: "block" }}>
      <path d="M7.48 0L9.5 5.46L14.97 7.48L9.5 9.51L7.48 14.97L5.46 9.51L0 7.48L5.46 5.46Z" />
    </svg>
  );
}
