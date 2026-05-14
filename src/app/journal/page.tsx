import type { Metadata } from "next";
import Link from "next/link";
import { JournalSubscribe } from "@/components/JournalSubscribe";

export const metadata: Metadata = {
  title: "Journal — ABC Design",
  description: "Notes from the studio — on design, AI workflows, and how we ship.",
};

const entries = [
  {
    n: "001",
    date: "2026 · 05 · 02",
    title: "We stopped writing tickets. Then we stopped writing standups.",
    kicker: "Operations",
    excerpt:
      "What we replaced project management with — and why our oldest client noticed before we did.",
    color: "#F25E08",
    minutes: 4,
  },
  {
    n: "002",
    date: "2026 · 04 · 18",
    title: "Drawing in public, with the lights on.",
    kicker: "Process",
    excerpt:
      "A short defense of working live with clients, even when the first sketch is wrong. Especially then.",
    color: "#F672C6",
    minutes: 6,
  },
  {
    n: "003",
    date: "2026 · 03 · 30",
    title: "Notes on a co-pilot that sometimes lies.",
    kicker: "AI",
    excerpt:
      "We shipped an evidence-card UI for a Series B health platform. Here's what hallucinations taught us about footnotes.",
    color: "#00B800",
    minutes: 9,
  },
  {
    n: "004",
    date: "2026 · 03 · 12",
    title: "Why we draw type before we draw screens.",
    kicker: "Craft",
    excerpt:
      "Three of our last five projects started with a custom display family. Here's the practical case for it.",
    color: "#F0CE2E",
    minutes: 5,
  },
  {
    n: "005",
    date: "2026 · 02 · 27",
    title: "Field notes from shipping with three clinicians on call.",
    kicker: "Research",
    excerpt:
      "Continuous evaluation isn't a research method — it's a hiring decision. What it cost us, and what it bought.",
    color: "#1570F4",
    minutes: 7,
  },
  {
    n: "006",
    date: "2026 · 02 · 09",
    title: "A nine-week brand: what we cut.",
    kicker: "Brand",
    excerpt:
      "We launched Halo's rebrand in eleven weeks and people kept asking what we left out. Here's the full list.",
    color: "#06AAFF",
    minutes: 4,
  },
  {
    n: "007",
    date: "2026 · 01 · 18",
    title: "On lying gracefully in onboarding.",
    kicker: "UX",
    excerpt:
      "How to design an empty state that performs trust before the data shows up.",
    color: "#F25E08",
    minutes: 3,
  },
];

export default function JournalPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="slide-frame"
        style={{
          position: "relative",
          background: "var(--color-bg)",
          padding: "6rem 2rem 4rem",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="rail" style={{ marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ width: 28, height: 1, background: "currentColor" }} />
            <span>Index — Journal</span>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-public-sans)",
              fontSize: "clamp(2.5rem, 8vw, 7.5rem)",
              fontWeight: 400,
              lineHeight: 0.95,
              letterSpacing: "-0.035em",
              margin: "0 0 2rem 0",
              maxWidth: "14ch",
            }}
          >
            <span className="word-mask" style={{ ["--word-delay" as string]: "60ms" }}><span>A working</span></span>{" "}
            <span className="word-mask serif-italic" style={{ ["--word-delay" as string]: "200ms", color: "var(--color-pink)" }}>
              <span>journal</span>
            </span>{" "}
            <span className="word-mask" style={{ ["--word-delay" as string]: "320ms" }}><span>of</span></span>{" "}
            <span className="word-mask" style={{ ["--word-delay" as string]: "440ms" }}><span>thinking aloud.</span></span>
          </h1>
          <p
            className="fade-up"
            style={{
              ["--delay" as string]: "560ms",
              fontSize: "clamp(1rem, 1.4vw, 1.25rem)",
              lineHeight: 1.55,
              maxWidth: 720,
              margin: 0,
              color: "var(--color-text-muted)",
            }}
          >
            Notes, half-formed ideas, and the occasional case study from the studio. We publish when there's
            something worth saying — not on a schedule.
          </p>
        </div>
      </section>

      {/* Entries */}
      <section style={{ background: "var(--color-bg)", padding: "4rem 2rem 8rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <ol
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              borderTop: "1px solid var(--color-border)",
            }}
          >
            {entries.map((e, i) => (
              <li key={e.n} data-reveal style={{ ["--delay" as string]: `${i * 50}ms` }}>
                <Link
                  href="#"
                  data-cursor="Read"
                  className="journal-row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 110px 1fr auto auto",
                    gap: "2rem",
                    alignItems: "baseline",
                    padding: "2rem 0",
                    borderBottom: "1px solid var(--color-border)",
                    textDecoration: "none",
                    color: "var(--color-text)",
                    transition: "padding-left 360ms var(--ease-out)",
                  }}
                >
                  <span
                    className="mono"
                    style={{
                      fontSize: "0.6875rem",
                      letterSpacing: "0.14em",
                      color: e.color,
                      width: 40,
                    }}
                  >
                    {e.n}
                  </span>
                  <span className="mono" style={{ fontSize: "0.6875rem", letterSpacing: "0.14em", color: "var(--color-text-muted)" }}>
                    {e.date}
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", gap: "0.5rem", minWidth: 0 }}>
                    <span
                      style={{
                        fontFamily: "var(--font-public-sans)",
                        fontWeight: 400,
                        fontSize: "clamp(1.25rem, 2.6vw, 1.875rem)",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.1,
                      }}
                    >
                      {e.title}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-instrument-serif)",
                        fontStyle: "italic",
                        fontSize: "1rem",
                        color: "var(--color-text-muted)",
                        maxWidth: 640,
                      }}
                    >
                      {e.excerpt}
                    </span>
                  </span>
                  <span
                    className="mono"
                    style={{
                      fontSize: "0.6875rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: e.color,
                      border: `1px solid ${e.color}`,
                      padding: "0.35rem 0.65rem",
                      borderRadius: 9999,
                    }}
                  >
                    {e.kicker}
                  </span>
                  <span className="mono" style={{ fontSize: "0.6875rem", letterSpacing: "0.14em", color: "var(--color-text-muted)" }}>
                    {e.minutes} min
                  </span>
                </Link>
              </li>
            ))}
          </ol>

          <div
            data-reveal
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "2rem",
              padding: "3rem 0 0",
              flexWrap: "wrap",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontStyle: "italic",
                fontSize: "clamp(1.25rem, 2.2vw, 1.75rem)",
                lineHeight: 1.3,
                margin: 0,
                maxWidth: 520,
              }}
            >
              The journal is mailed out at the end of every other month —
              <br />
              <span style={{ color: "var(--color-orange)" }}>only when there's something worth printing.</span>
            </p>
            <JournalSubscribe />
          </div>
        </div>

        <style>{`
          .journal-row:hover { padding-left: 12px !important; }
          @media (max-width: 980px) {
            .journal-row {
              grid-template-columns: auto 1fr !important;
              gap: 1rem !important;
              padding: 1.5rem 0 !important;
            }
            .journal-row > :nth-child(2),
            .journal-row > :nth-child(4),
            .journal-row > :nth-child(5) { display: none; }
          }
        `}</style>
      </section>
    </>
  );
}
