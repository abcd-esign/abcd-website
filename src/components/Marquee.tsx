"use client";

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
      <div className="marquee" style={{ alignItems: "center" }}>
        {[0, 1].map((dup) => (
          <div key={dup} style={{ display: "flex", alignItems: "center", gap: "3rem", paddingRight: "3rem" }}>
            {items.map((label, i) => (
              <span
                key={`${dup}-${i}`}
                style={{
                  display: "inline-flex",
                  alignItems: "baseline",
                  gap: "0.75rem",
                  fontFamily: "var(--font-instrument-serif)",
                  fontSize: "clamp(2rem, 4.5vw, 4.5rem)",
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
