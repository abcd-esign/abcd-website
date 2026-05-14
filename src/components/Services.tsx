"use client";

const services = [
  {
    num: "A",
    color: "#1570F4",
    label: "Product Design",
    description:
      "End-to-end product design — from zero-to-one concepts to scaling mature platforms. UX rigor with visual craft.",
    items: ["Product strategy", "Interaction design", "Design systems", "Prototyping"],
  },
  {
    num: "B",
    color: "#F672C6",
    label: "Brand & Identity",
    description:
      "Visual systems that hold together at scale. Logos, tokens, component libraries, and the rules that bind them.",
    items: ["Identity systems", "Type design", "Editorial direction", "Packaging"],
  },
  {
    num: "C",
    color: "#00B800",
    label: "AI Workflows",
    description:
      "We embed AI at every step — rapid prototyping, generative exploration, automated QA. Ship faster without cutting corners.",
    items: ["LLM tooling", "Eval design", "Agent UX", "Internal tools"],
  },
  {
    num: "D",
    color: "#F25E08",
    label: "Design Engineering",
    description:
      "We don't hand off — we build. Our designers write production-quality code, closing the gap between design and shipping.",
    items: ["Production React", "Motion systems", "Marketing sites", "Performance"],
  },
] as const;

export function Services() {
  return (
    <section
      id="practice"
      style={{
        background: "var(--color-bg)",
        padding: "8rem 2rem 6rem",
        borderTop: "1px solid var(--color-border)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <header
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
            gap: "3rem",
            alignItems: "end",
            marginBottom: "4rem",
          }}
          className="services-head"
          data-reveal
        >
          <div>
            <div className="rail" style={{ marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ width: 28, height: 1, background: "currentColor" }} />
              <span>Fig. 03 — Practices</span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-public-sans)",
                fontSize: "clamp(2rem, 5vw, 4.25rem)",
                fontWeight: 400,
                lineHeight: 0.98,
                letterSpacing: "-0.03em",
                margin: 0,
              }}
            >
              Four disciplines.{" "}
              <span className="serif-italic" style={{ color: "var(--color-blue)" }}>One studio.</span>
            </h2>
          </div>
          <p
            style={{
              maxWidth: 460,
              fontSize: "1.0625rem",
              lineHeight: 1.55,
              color: "var(--color-text-muted)",
              margin: 0,
            }}
          >
            We're a small, senior team. No account managers, no handoffs to juniors. You work directly with
            the people doing the work — and we like it that way.
          </p>
        </header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "1px",
            background: "var(--color-border)",
            border: "1px solid var(--color-border)",
          }}
          className="services-grid"
        >
          {services.map(({ num, color, label, description, items }) => (
            <article
              key={label}
              className="service-cell"
              style={{
                position: "relative",
                background: "var(--color-bg)",
                padding: "2.75rem 2.5rem 2.5rem",
                minHeight: 340,
                overflow: "hidden",
                transition: "background 320ms var(--ease-out)",
                cursor: "none",
              }}
              data-cursor={label}
              data-reveal
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = color + "1A";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--color-bg)";
              }}
            >
              {/* index letter (giant, decorative) */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  right: "-0.05em",
                  fontFamily: "var(--font-instrument-serif)",
                  fontStyle: "italic",
                  fontSize: "12rem",
                  lineHeight: 0.85,
                  color: color,
                  opacity: 0.16,
                  pointerEvents: "none",
                  userSelect: "none",
                  transform: "translateY(-12%)",
                }}
              >
                {num}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <span style={{ width: 10, height: 10, borderRadius: 9999, background: color }} />
                <span className="mono" style={{ fontSize: "0.6875rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-text-muted)" }}>
                  Practice {num}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-public-sans)",
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  margin: "0 0 1rem 0",
                  lineHeight: 1.05,
                }}
              >
                {label}
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.55,
                  color: "var(--color-text-muted)",
                  margin: "0 0 1.75rem 0",
                  maxWidth: 420,
                }}
              >
                {description}
              </p>

              <ul
                style={{
                  display: "flex",
                  gap: "0.4rem",
                  flexWrap: "wrap",
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                {items.map((it) => (
                  <li
                    key={it}
                    className="mono"
                    style={{
                      fontSize: "0.6875rem",
                      letterSpacing: "0.06em",
                      padding: "0.4rem 0.7rem",
                      border: `1px solid ${color}`,
                      color: color,
                      borderRadius: 9999,
                    }}
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .services-head { grid-template-columns: 1fr !important; }
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
