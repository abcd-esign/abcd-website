"use client";

import { ChapterSlate } from "./glyphs";

/* ============================================================
   Secret Sauce v2 — Chapter 03 / WARM CREAM
   #F1E7D0. Three horizontal pillar rows separated by hairline
   rules. The kinetic Secret_Sauce_Vector sits between the
   eyebrow and the rows as the chapter's signature visual.
   ============================================================ */

const pillars = [
  {
    num: "01",
    head: "Taste honed inside top product teams.",
    body: "We've shipped with teams setting the bar. AI tools move that instinct faster at every stage.",
  },
  {
    num: "02",
    head: "Coded prototypes instead of static mockups.",
    body: "Your team sees the real product early — no translation loss between design and engineering.",
  },
  {
    num: "03",
    head: "Engineering-ready code.",
    body: "Skip the front-end back-and-forth. We deliver code ready for your engineers to review.",
  },
] as const;

export function SecretSauceV2() {
  return (
    <section
      style={{
        position: "relative",
        background: "#F1E7D0",
        color: "var(--color-text)",
        maxHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ padding: "clamp(3rem, 5vw, 5rem) clamp(1.5rem, 4vw, 3rem) 0" }}>
        <div data-reveal>
          <ChapterSlate num="03" title="Our Secret Sauce" />
        </div>
      </div>

      <div
        aria-hidden="true"
        style={{ width: "100%", lineHeight: 0, margin: "clamp(1.5rem, 2.5vw, 2.25rem) 0" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/vectors/Secret_Sauce_Vector.svg"
          alt=""
          style={{ display: "block", width: "100%", height: "auto" }}
        />
      </div>

      <div
        style={{
          padding: "clamp(1.5rem, 3vw, 3rem) clamp(1.5rem, 4vw, 3rem) clamp(3rem, 5vw, 5rem)",
        }}
      >
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <ol
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              borderTop: "1px solid rgba(17,17,17,0.18)",
            }}
          >
            {pillars.map((p, i) => (
              <li key={p.num} data-reveal style={{ ["--delay" as string]: `${i * 90}ms` }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1.4fr 2fr",
                    gap: "clamp(1rem, 2.5vw, 2.5rem)",
                    alignItems: "baseline",
                    padding: "clamp(1.25rem, 2.5vw, 2rem) 0",
                    borderBottom: "1px solid rgba(17,17,17,0.18)",
                  }}
                  className="saucev2-row"
                >
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains-mono)",
                      fontSize: "0.6875rem",
                      letterSpacing: "0.18em",
                      color: "rgba(17,17,17,0.55)",
                      width: 32,
                    }}
                  >
                    {p.num}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-public-sans)",
                      fontSize: "clamp(1.125rem, 1.8vw, 1.5rem)",
                      fontWeight: 400,
                      lineHeight: 1.15,
                      letterSpacing: "-0.018em",
                      margin: 0,
                      color: "var(--color-text)",
                      maxWidth: "22ch",
                    }}
                  >
                    {p.head}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontFamily: "var(--font-public-sans)",
                      fontSize: "clamp(0.9375rem, 1.1vw, 1rem)",
                      lineHeight: 1.55,
                      color: "rgba(17,17,17,0.7)",
                      maxWidth: "44ch",
                    }}
                  >
                    {p.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .saucev2-row { grid-template-columns: auto 1fr !important; }
          .saucev2-row > p { grid-column: 2 !important; }
        }
      `}</style>
    </section>
  );
}
