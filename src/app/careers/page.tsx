import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — ABC Design",
  description:
    "Designers, engineers, and inventors — we'd love to meet you. Drop us a line.",
};

const looking = [
  {
    role: "Product Designer",
    location: "Manila · San Francisco · Boston · Remote",
    type: "Full-time / Contract",
  },
  {
    role: "Design Engineer",
    location: "Manila · San Francisco · Boston · Remote",
    type: "Full-time / Contract",
  },
  {
    role: "Brand & Editorial",
    location: "Remote",
    type: "Project basis",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: "relative",
          background: "var(--color-bg)",
          color: "var(--color-text)",
          padding: "clamp(3rem, 6vw, 6rem) clamp(1.5rem, 4vw, 3rem) clamp(2.5rem, 5vw, 5rem)",
          minHeight: "calc(70dvh - 80px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", width: "100%" }}>
          <div
            className="fade-up"
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
              marginBottom: "clamp(1.5rem, 2.5vw, 2rem)",
            }}
          >
            <span aria-hidden="true" style={{ width: 22, height: 1, background: "currentColor" }} />
            <span>Careers</span>
          </div>

          <h1
            className="fade-up"
            style={{
              ["--delay" as string]: "120ms",
              fontFamily: "var(--font-public-sans)",
              fontSize: "clamp(2rem, 5.6vw, 5.25rem)",
              fontWeight: 400,
              lineHeight: 0.98,
              letterSpacing: "-0.038em",
              margin: "0 0 clamp(1.5rem, 2.5vw, 2.5rem) 0",
              maxWidth: "18ch",
            }}
          >
            Join the{" "}
            <span className="serif-italic" style={{ color: "var(--color-orange)" }}>
              team.
            </span>
          </h1>

          <p
            className="fade-up"
            style={{
              ["--delay" as string]: "260ms",
              fontSize: "clamp(1rem, 1.2vw, 1.125rem)",
              lineHeight: 1.55,
              maxWidth: "52ch",
              color: "var(--color-text-muted)",
              margin: "0 0 clamp(2rem, 3vw, 2.5rem) 0",
            }}
          >
            We&apos;re a small senior studio shipping product, brand, and interface work for the
            world&apos;s most ambitious teams. If you write, draw, type-design, or think strangely
            about interfaces — we&apos;d love to meet you.
          </p>

          <a
            href="mailto:hello@abc.design?subject=Joining%20ABC%20Design"
            data-cursor="Apply"
            className="fade-up btn btn-primary"
            style={{ ["--delay" as string]: "400ms" }}
          >
            <span>hello@abc.design</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      {/* Open roles */}
      <section
        style={{
          position: "relative",
          background: "var(--color-bg)",
          color: "var(--color-text)",
          padding: "clamp(3rem, 6vw, 6rem) clamp(1.5rem, 4vw, 3rem) clamp(4rem, 7vw, 7rem)",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
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
              marginBottom: "clamp(1.5rem, 2.5vw, 2.25rem)",
            }}
          >
            <span aria-hidden="true" style={{ width: 22, height: 1, background: "currentColor" }} />
            <span>What we&apos;re looking for</span>
          </div>

          <ol
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              borderTop: "1px solid var(--color-border)",
            }}
          >
            {looking.map((r, i) => (
              <li key={r.role} data-reveal style={{ ["--delay" as string]: `${i * 70}ms` }}>
                <a
                  href={`mailto:hello@abc.design?subject=${encodeURIComponent(r.role)}`}
                  data-cursor="Email"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1.6fr 2.2fr 1.6fr auto",
                    alignItems: "center",
                    gap: "clamp(1rem, 2.5vw, 2.5rem)",
                    padding: "clamp(1.5rem, 2.5vw, 2.25rem) 0",
                    borderBottom: "1px solid var(--color-border)",
                    textDecoration: "none",
                    color: "var(--color-text)",
                    transition: "padding 360ms var(--ease-out)",
                  }}
                  className="careers-row"
                >
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains-mono)",
                      fontSize: "0.6875rem",
                      letterSpacing: "0.16em",
                      color: "var(--color-text-faint)",
                      width: 32,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-public-sans)",
                      fontSize: "clamp(1.125rem, 1.7vw, 1.5rem)",
                      letterSpacing: "-0.012em",
                      color: "var(--color-text)",
                    }}
                  >
                    {r.role}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-instrument-serif)",
                      fontStyle: "italic",
                      fontSize: "1rem",
                      color: "var(--color-text-muted)",
                    }}
                    className="careers-row-loc"
                  >
                    {r.location}
                  </span>
                  <span
                    className="mono careers-row-type"
                    style={{
                      fontFamily: "var(--font-jetbrains-mono)",
                      fontSize: "0.6875rem",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {r.type}
                  </span>
                  <span
                    aria-hidden="true"
                    style={{
                      width: 32,
                      height: 32,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 9999,
                      border: "1px solid var(--color-border)",
                      transition: "background 320ms var(--ease-out), color 320ms var(--ease-out)",
                      color: "var(--color-text)",
                    }}
                    className="careers-row-arrow"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M3 9L9 3M9 3H4.5M9 3V7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
              </li>
            ))}
          </ol>

          <p
            data-reveal
            style={{
              fontFamily: "var(--font-instrument-serif)",
              fontStyle: "italic",
              fontSize: "clamp(1.125rem, 1.6vw, 1.5rem)",
              lineHeight: 1.4,
              maxWidth: "60ch",
              marginTop: "clamp(2.5rem, 4vw, 3.5rem)",
              color: "var(--color-text-muted)",
            }}
          >
            Don&apos;t see your role here? Reach out anyway — we&apos;re always interested in
            unusual paths.
          </p>
        </div>

        <style>{`
          .careers-row:hover { padding-left: 12px !important; padding-right: 12px !important; }
          .careers-row:hover .careers-row-arrow { background: var(--color-text); color: var(--color-bg); }
          @media (max-width: 880px) {
            .careers-row { grid-template-columns: auto 1fr auto !important; gap: 1rem !important; }
            .careers-row-loc, .careers-row-type { display: none !important; }
          }
        `}</style>
      </section>
    </>
  );
}
