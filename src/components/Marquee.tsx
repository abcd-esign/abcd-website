"use client";

import { useState } from "react";

const items = [
  "Product design",
  "Brand identity",
  "AI workflows",
  "Design engineering",
  "Editorial direction",
  "Motion systems",
  "Prototyping",
  "Type design",
];

export function Marquee() {
  const [paused, setPaused] = useState(false);
  return (
    <section
      aria-label="What we do"
      style={{
        background: "var(--color-bg-cream)",
        padding: "2rem 0",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
        overflow: "hidden",
      }}
    >
      <div
        className="marquee"
        style={{ alignItems: "center", animationPlayState: paused ? "paused" : "running" }}
        onClick={() => setPaused((p) => !p)}
        role="button"
        tabIndex={0}
        aria-pressed={paused}
        aria-label={paused ? "Resume scrolling list" : "Pause scrolling list"}
        onKeyDown={(e) => {
          if (e.key === " " || e.key === "Enter") {
            e.preventDefault();
            setPaused((p) => !p);
          }
        }}
      >
        {[0, 1].map((dup) => (
          <div key={dup} style={{ display: "flex", alignItems: "center", gap: "clamp(1.5rem, 3vw, 3rem)", paddingRight: "clamp(1.5rem, 3vw, 3rem)" }}>
            {items.map((label, i) => (
              <span
                key={`${dup}-${i}`}
                style={{
                  display: "inline-flex",
                  alignItems: "baseline",
                  gap: "0.75rem",
                  fontFamily: "var(--font-instrument-serif)",
                  fontSize: "clamp(2.25rem, 6vw, 4.5rem)",
                  lineHeight: 1,
                  letterSpacing: "-0.01em",
                  fontStyle: i % 2 === 0 ? "normal" : "italic",
                }}
              >
                <span aria-hidden="true" style={{ color: "var(--color-orange)" }}>✦</span>
                {label}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
