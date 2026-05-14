"use client";

import { ChapterSlate, StarField } from "./glyphs";

/* A deterministic scatter of small stars across the section bg.
   Same primitive, new arrangement. */
const studioSky = [
  { x: 6, y: 12, size: 9, color: "rgba(255,253,249,0.55)" },
  { x: 18, y: 7, size: 6, color: "rgba(255,253,249,0.35)" },
  { x: 32, y: 4, size: 11, color: "#F0CE2E" },
  { x: 47, y: 10, size: 7, color: "rgba(255,253,249,0.4)" },
  { x: 62, y: 6, size: 9, color: "rgba(255,253,249,0.55)" },
  { x: 78, y: 9, size: 6, color: "rgba(255,253,249,0.35)" },
  { x: 91, y: 13, size: 10, color: "#F672C6" },
  { x: 12, y: 88, size: 7, color: "rgba(255,253,249,0.4)" },
  { x: 28, y: 92, size: 6, color: "rgba(255,253,249,0.35)" },
  { x: 44, y: 90, size: 9, color: "rgba(255,253,249,0.55)" },
  { x: 58, y: 94, size: 11, color: "#1570F4" },
  { x: 74, y: 88, size: 6, color: "rgba(255,253,249,0.35)" },
  { x: 88, y: 91, size: 8, color: "rgba(255,253,249,0.45)" },
];

/* ============================================================
   Team v2 — Chapter 04 / BLACK
   Solid near-black. Light cream cards with sharp corners. Each
   portrait wears a small BrandMark stamp in the member's color.
   ============================================================ */

type Member = {
  name: string;
  work: string;
  education: string;
  color: string;
  portrait: string;
  signature: string;
};

const team: Member[] = [
  {
    name: "Andres Limcaoco",
    work: "Harvey, Affirm",
    education: "Stanford",
    color: "#1570F4",
    portrait: "/team/Andres.svg",
    signature: "/team/Single_Vector_Blue.svg",
  },
  {
    name: "Bianca Jimenez Wen",
    work: "Cash App",
    education: "University of Pennsylvania, Penn:IPD",
    color: "#F672C6",
    portrait: "/team/Bianca.svg",
    signature: "/team/Single_Vector_Pink.svg",
  },
  {
    name: "Connor Wen",
    work: "Runbook, Carta, BRM",
    education: "Wharton",
    color: "#F25E08",
    portrait: "/team/Connor.svg",
    signature: "/team/Single_Vector_Orange.svg",
  },
  {
    name: "Danielle Limcaoco",
    work: "Robinhood, Nextdoor",
    education: "Stanford, Harvard",
    color: "#0D9A3E",
    portrait: "/team/Danielle.svg",
    signature: "/team/Single_Vector_Green.svg",
  },
];

export function TeamV2() {
  return (
    <section
      id="team"
      className="section-bound"
      style={{
        position: "relative",
        background: "#121212",
        color: "#FFFDF9",
        padding: "clamp(3rem, 5vw, 5rem) clamp(1.5rem, 4vw, 3rem)",
      }}
    >
      {/* Studio sky — scatter of stars across the dark canvas */}
      <StarField stars={studioSky} />

      <div style={{ maxWidth: 1440, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <header data-reveal style={{ marginBottom: "clamp(2rem, 3.5vw, 3rem)" }}>
          <ChapterSlate num="04" title="The Team" color="rgba(255,253,249,0.65)" />
        </header>

        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: "clamp(1rem, 1.5vw, 1.5rem)",
          }}
          className="teamv2-grid"
        >
          {team.map((m, i) => (
            <li key={m.name} data-reveal style={{ ["--delay" as string]: `${i * 80}ms` }}>
              <article
                className="teamv2-card"
                style={{
                  background: "#FFFDF9",
                  color: "#111111",
                  border: "1px solid #111111",
                  borderRadius: 0,
                  padding: "clamp(0.75rem, 1vw, 1rem)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  height: "100%",
                  maxWidth: 240,
                  marginInline: "auto",
                  transition:
                    "transform 380ms var(--ease-out), box-shadow 380ms var(--ease-out)",
                  willChange: "transform",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "1 / 1",
                    background: "#F1E7D0",
                    overflow: "hidden",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={m.portrait}
                    alt={`${m.name} portrait`}
                    loading="lazy"
                    style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  {/* Simple colored corner mark in the member's accent */}
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      top: 10,
                      left: 10,
                      width: 14,
                      height: 14,
                      background: m.color,
                    }}
                  />
                </div>

                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-public-sans)",
                      fontSize: "clamp(0.9375rem, 1.2vw, 1.0625rem)",
                      fontWeight: 700,
                      letterSpacing: "-0.014em",
                      lineHeight: 1.15,
                      margin: 0,
                      color: "#111111",
                    }}
                  >
                    {m.name}
                  </h3>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={m.signature}
                    alt=""
                    aria-hidden="true"
                    style={{ display: "block", width: "100%", maxWidth: 110, height: "auto", marginTop: 8 }}
                  />
                </div>

                <dl style={{ margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem", marginTop: "auto" }}>
                  <Row label="Work" value={m.work} />
                  <Row label="Education" value={m.education} />
                </dl>
              </article>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .teamv2-card:hover {
          transform: translateY(-5px) rotate(-0.4deg);
          box-shadow: 0 14px 30px -16px rgba(0,0,0,0.55);
        }
        .teamv2-grid > li:nth-child(even) .teamv2-card:hover {
          transform: translateY(-5px) rotate(0.4deg);
        }
        /* Touch-press feedback that mirrors the desktop hover playfulness. */
        @media (hover: none), (pointer: coarse) {
          .teamv2-card {
            transition: transform 220ms var(--ease-spring), box-shadow 220ms var(--ease-out);
          }
          .teamv2-card:active {
            transform: scale(0.97) rotate(-0.4deg);
            box-shadow: 0 8px 18px -10px rgba(0,0,0,0.5);
          }
          .teamv2-grid > li:nth-child(even) .teamv2-card:active {
            transform: scale(0.97) rotate(0.4deg);
          }
        }
        @media (max-width: 980px) {
          .teamv2-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .teamv2-grid { grid-template-columns: 1fr !important; gap: 1rem !important; }
          .teamv2-card { max-width: 360px !important; }
        }
      `}</style>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <dt
        style={{
          fontFamily: "var(--font-jetbrains-mono)",
          fontSize: "0.625rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(17,17,17,0.5)",
        }}
      >
        {label}
      </dt>
      <dd style={{ margin: 0, fontFamily: "var(--font-public-sans)", fontSize: "0.875rem", lineHeight: 1.4, color: "#111111" }}>
        {value}
      </dd>
    </div>
  );
}
