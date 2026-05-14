import type { Metadata } from "next";
import Link from "next/link";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Studio — ABC Design",
  description: "ABC Design is a small senior team. No account managers, no handoffs. This is how we work.",
};

const principles = [
  {
    n: "01",
    color: "#F25E08",
    head: "Designers ship.",
    body: "We don't hand off Figma artifacts. The same humans who designed it write the production PR that lands it.",
  },
  {
    n: "02",
    color: "#1570F4",
    head: "AI is a tool, not a style.",
    body: "We use AI to compress the boring parts. The judgment, the taste, the editing — that's still on us.",
  },
  {
    n: "03",
    color: "#F672C6",
    head: "Senior or nothing.",
    body: "Every project is led by a partner with ten years in. Juniors learn by pairing — never by being staffed alone.",
  },
  {
    n: "04",
    color: "#00B800",
    head: "Speed is craft.",
    body: "Faster doesn't mean sloppier. It means we cut the rituals that don't ship product.",
  },
  {
    n: "05",
    color: "#F0CE2E",
    head: "Default to the obvious.",
    body: "If it has to be explained, it isn't designed yet. We rewrite the screen, not the documentation.",
  },
  {
    n: "06",
    color: "#06AAFF",
    head: "Make the boring thing memorable.",
    body: "Even an error state can be a chance to be a studio worth hiring twice.",
  },
];

const team = [
  { name: "Bianca J. Wen", role: "Founder / Principal Designer", color: "#F25E08" },
  { name: "Mira Adebayo", role: "Design Engineer", color: "#1570F4" },
  { name: "Jonas Tüür", role: "Product Designer", color: "#F672C6" },
  { name: "Aki Tanaka", role: "Motion / Brand", color: "#F0CE2E" },
  { name: "Sara El-Khoury", role: "AI Workflows", color: "#00B800" },
  { name: "Ren Park", role: "Studio Manager", color: "#06AAFF" },
];

export default function StudioPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="slide-frame"
        style={{
          position: "relative",
          background: "var(--color-bg)",
          padding: "clamp(3rem, 6vw, 6rem) clamp(1.25rem, 4vw, 2rem) clamp(2.5rem, 5vw, 5rem)",
          borderBottom: "1px solid var(--color-border)",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div className="rail" style={{ marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ width: 28, height: 1, background: "currentColor" }} />
            <span>About — Studio</span>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-public-sans)",
              fontSize: "clamp(2.5rem, 8vw, 8rem)",
              fontWeight: 400,
              lineHeight: 0.94,
              letterSpacing: "-0.035em",
              margin: "0 0 2rem 0",
              maxWidth: "14ch",
            }}
          >
            <span className="word-mask" style={{ ["--word-delay" as string]: "60ms" }}><span>Six</span></span>{" "}
            <span className="word-mask" style={{ ["--word-delay" as string]: "180ms" }}><span>humans,</span></span>{" "}
            <span className="word-mask serif-italic" style={{ ["--word-delay" as string]: "300ms", color: "var(--color-orange)" }}>
              <span>one shared sketchbook.</span>
            </span>
          </h1>
          <p
            className="fade-up"
            style={{
              ["--delay" as string]: "420ms",
              fontSize: "clamp(1.0625rem, 1.4vw, 1.25rem)",
              lineHeight: 1.55,
              maxWidth: 720,
              color: "var(--color-text-muted)",
              margin: 0,
            }}
          >
            ABC is a small, senior studio working at the intersection of product design, brand, AI workflows
            and design engineering. We were founded on a single bet: that AI doesn't replace designers — it
            sharpens the ones who actually ship.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section style={{ background: "var(--color-bg)", padding: "clamp(4rem, 9vw, 8rem) clamp(1.25rem, 4vw, 2rem)", borderBottom: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <header
            data-reveal
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
              gap: "3rem",
              alignItems: "end",
              marginBottom: "5rem",
            }}
            className="principles-head"
          >
            <div>
              <div className="rail" style={{ marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{ width: 28, height: 1, background: "currentColor" }} />
                <span>§ House rules</span>
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-public-sans)",
                  fontSize: "clamp(2rem, 5vw, 4.5rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.03em",
                  lineHeight: 0.98,
                  margin: 0,
                }}
              >
                Six things <span className="serif-italic" style={{ color: "var(--color-blue)" }}>we believe.</span>
              </h2>
            </div>
            <p style={{ maxWidth: 460, margin: 0, fontSize: "1.0625rem", lineHeight: 1.55, color: "var(--color-text-muted)" }}>
              We don't have a manifesto pinned to the wall. We have rules of thumb we keep coming back to
              when the work gets hard.
            </p>
          </header>

          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "1px",
              background: "var(--color-border)",
              border: "1px solid var(--color-border)",
            }}
            className="principles-grid"
          >
            {principles.map((p) => (
              <li
                key={p.n}
                data-reveal
                style={{
                  background: "var(--color-bg)",
                  padding: "2.5rem 2.5rem 2.5rem",
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "1.75rem",
                  alignItems: "start",
                  position: "relative",
                  overflow: "hidden",
                  minHeight: 240,
                }}
              >
                <span
                  className="serif-italic"
                  style={{
                    fontSize: "clamp(3rem, 5vw, 4.5rem)",
                    color: p.color,
                    lineHeight: 0.85,
                  }}
                >
                  {p.n}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-public-sans)",
                      fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                      fontWeight: 400,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.05,
                      margin: "0 0 0.75rem 0",
                    }}
                  >
                    {p.head}
                  </h3>
                  <p style={{ fontSize: "0.9375rem", lineHeight: 1.55, color: "var(--color-text-muted)", margin: 0, maxWidth: 460 }}>
                    {p.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <style>{`
          @media (max-width: 880px) {
            .principles-head { grid-template-columns: 1fr !important; }
            .principles-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Pull quote */}
      <section style={{ background: "var(--color-bg-cream)", padding: "clamp(4rem, 9vw, 8rem) clamp(1.25rem, 4vw, 2rem)", borderBottom: "1px solid var(--color-border)" }}>
        <div data-reveal style={{ maxWidth: 1080, margin: "0 auto", textAlign: "center" }}>
          <p
            style={{
              fontFamily: "var(--font-instrument-serif)",
              fontStyle: "italic",
              fontSize: "clamp(1.75rem, 4vw, 3.5rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.005em",
              margin: 0,
            }}
          >
            We started ABC because we kept noticing that the studios we admired<br />
            <span style={{ color: "var(--color-orange)" }}>were really just two or three people in a room.</span><br />
            So we made one of those — on purpose.
          </p>
        </div>
      </section>

      {/* Team */}
      <section style={{ background: "var(--color-bg)", padding: "clamp(4rem, 9vw, 8rem) clamp(1.25rem, 4vw, 2rem)", borderBottom: "1px solid var(--color-border)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <header
            data-reveal
            style={{ marginBottom: "4rem" }}
          >
            <div className="rail" style={{ marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ width: 28, height: 1, background: "currentColor" }} />
              <span>§ Who we are</span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-public-sans)",
                fontSize: "clamp(2rem, 5vw, 4.25rem)",
                fontWeight: 400,
                letterSpacing: "-0.03em",
                lineHeight: 0.98,
                margin: 0,
                maxWidth: "16ch",
              }}
            >
              The whole team — <span className="serif-italic" style={{ color: "var(--color-pink)" }}>no juniors</span>, no agencies, no middle.
            </h2>
          </header>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "1px",
              background: "var(--color-border)",
              border: "1px solid var(--color-border)",
            }}
            className="team-grid"
          >
            {team.map((m) => (
              <li
                key={m.name}
                data-reveal
                style={{
                  background: "var(--color-bg)",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  position: "relative",
                  minHeight: 240,
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 9999,
                    background: m.color,
                    position: "relative",
                  }}
                >
                  <svg viewBox="0 0 15 15" fill="white" style={{ position: "absolute", top: "50%", left: "50%", width: 14, height: 14, transform: "translate(-50%,-50%)" }}>
                    <path d="M7.48415 0L9.50555 5.46275L14.9683 7.48415L9.50555 9.50555L7.48415 14.9683L5.46275 9.50555L0 7.48415L5.46275 5.46275L7.48415 0Z" />
                  </svg>
                </div>
                <div style={{ marginTop: "auto" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-public-sans)",
                      fontWeight: 400,
                      fontSize: "1.25rem",
                      letterSpacing: "-0.01em",
                      margin: "0 0 0.25rem 0",
                    }}
                  >
                    {m.name}
                  </h3>
                  <span className="mono" style={{ fontSize: "0.6875rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-text-muted)" }}>
                    {m.role}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <p
            data-reveal
            style={{ marginTop: "3rem", fontSize: "1rem", color: "var(--color-text-muted)", maxWidth: 720 }}
          >
            We're not currently hiring full-time, but we collaborate often. If you write, draw, type-design, or
            think strangely about interfaces — <Link href="/#contact" className="ed-link" data-cursor="email">drop a line</Link>.
          </p>
        </div>

        <style>{`
          @media (max-width: 880px) {
            .team-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 560px) {
            .team-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      <Contact />
    </>
  );
}
