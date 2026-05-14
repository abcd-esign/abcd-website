"use client";

const steps = [
  {
    num: "I.",
    label: "Discover",
    color: "#F0CE2E",
    desc: "Stakeholder interviews, audits, user research — compressed into days. We learn your world fast.",
    sub: "Week 0 — 1",
  },
  {
    num: "II.",
    label: "Define",
    color: "#F672C6",
    desc: "Clear problem framing, success metrics, prioritized scope. No ambiguity heading into design.",
    sub: "Week 1 — 2",
  },
  {
    num: "III.",
    label: "Design",
    color: "#06AAFF",
    desc: "High-velocity iteration powered by AI. Rough concepts to pixel-perfect deliverables in parallel.",
    sub: "Week 2 — 7",
  },
  {
    num: "IV.",
    label: "Deliver",
    color: "#F25E08",
    desc: "Production-ready design and code. We stay through launch, fixing edges and supporting implementation directly.",
    sub: "Week 7 — 9",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="inverse slide-frame slide-frame--inverse"
      style={{
        background: "var(--color-bg-inverse)",
        color: "var(--color-text-inverse)",
        padding: "8rem 2rem 7rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <header data-reveal style={{ marginBottom: "5rem", display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: "3rem", alignItems: "end" }} className="process-head">
          <div>
            <div className="rail" style={{ marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ width: 28, height: 1, background: "currentColor" }} />
              <span>Fig. 04 — Operating model</span>
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
              An <span className="serif-italic" style={{ color: "var(--color-yellow)" }}>AI-native</span> way of working.
            </h2>
          </div>
          <p style={{ maxWidth: 460, margin: 0, fontSize: "1.0625rem", lineHeight: 1.55, color: "rgba(255,253,249,0.7)" }}>
            We compress the parts that used to take months — research, exploration, hand-off — without
            cutting the part you actually pay for: judgment.
          </p>
        </header>

        <ol
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: "1px",
            background: "rgba(255,253,249,0.12)",
            border: "1px solid rgba(255,253,249,0.12)",
          }}
          className="process-grid"
        >
          {steps.map((s, i) => (
            <li
              key={s.num}
              data-reveal
              style={{
                padding: "2.5rem 2rem 3rem",
                background: "var(--color-bg-inverse)",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                position: "relative",
                overflow: "hidden",
                ["--delay" as string]: `${i * 90}ms`,
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                <span className="serif-italic" style={{ fontSize: "2rem", color: s.color, lineHeight: 1 }}>{s.num}</span>
                <span className="mono" style={{ fontSize: "0.6875rem", letterSpacing: "0.14em", color: "rgba(255,253,249,0.5)" }}>{s.sub}</span>
              </div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 400, margin: 0, letterSpacing: "-0.01em" }}>{s.label}</h3>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.6, color: "rgba(255,253,249,0.65)", margin: 0 }}>{s.desc}</p>

              {/* hairline kinetic arc */}
              <svg
                aria-hidden="true"
                viewBox="0 0 220 40"
                preserveAspectRatio="none"
                style={{ marginTop: "auto", width: "100%", height: 36, opacity: 0.6 }}
              >
                <path d={`M0 30 Q 60 -10 110 18 T 220 14`} stroke={s.color} strokeWidth="1.2" fill="none" strokeDasharray={i === 3 ? "0" : "4 3"} />
              </svg>
            </li>
          ))}
        </ol>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .process-head { grid-template-columns: 1fr !important; }
          .process-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
