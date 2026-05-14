import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--color-bg)",
        borderTop: "1px solid var(--color-border)",
        padding: "clamp(2rem, 5vw, 3rem) clamp(1.25rem, 4vw, 2rem) calc(1.5rem + env(safe-area-inset-bottom))",
        color: "var(--color-text)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Brand pattern — 5 yellow stars + 4 colored monograms,
            alternating. Flex space-between fills the row edge-to-edge.
            Height shrinks to keep all 9 items on one line. */}
        <div
          aria-label="ABC Design"
          className="footer-pattern"
          style={{
            /* Break out of the footer's max-width + padding so the
               pattern spans the entire viewport edge-to-edge. */
            width: "100vw",
            position: "relative",
            left: "50%",
            marginLeft: "-50vw",
            marginBottom: "2rem",
            padding: "0 clamp(1rem, 3vw, 2rem)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "nowrap",
            gap: "clamp(0.5rem, 1.2vw, 1.125rem)",
            height: "clamp(28px, 4vw, 60px)",
            boxSizing: "border-box",
          }}
        >
          <PatternStar />
          <PatternMonogram />
          <PatternStar />
          <PatternMonogram />
          <PatternStar />
          <PatternMonogram />
          <PatternStar />
          <PatternMonogram />
          <PatternStar />
        </div>
        <style>{`
          /* On phones, drop the last four items so the pattern stays legible
             and doesn't squish the monograms. Keeps a 5-item star/mono/star/
             mono/star arrangement. */
          @media (max-width: 560px) {
            .footer-pattern > *:nth-child(n+6) { display: none; }
          }
        `}</style>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            paddingTop: "2rem",
            borderTop: "1px solid var(--color-border)",
          }}
        >
          <span className="mono" style={{ fontSize: "0.6875rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-text-muted)" }}>
            © ABC Design {year}
          </span>
          <Link
            href="mailto:hello@abc.design"
            className="ed-link ed-link--quiet"
            style={{ fontSize: "0.9375rem", color: "var(--color-text)" }}
          >
            hello@abc.design
          </Link>
        </div>
      </div>
    </footer>
  );
}

function PatternStar() {
  return (
    <svg
      viewBox="0 0 15 15"
      fill="#F0CE2E"
      aria-hidden="true"
      style={{ display: "block", height: "100%", width: "auto", flexShrink: 0 }}
    >
      <path d="M7.48 0L9.5 5.46L14.97 7.48L9.5 9.51L7.48 14.97L5.46 9.51L0 7.48L5.46 5.46Z" />
    </svg>
  );
}

function PatternMonogram() {
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src="/brand/Monogram-Colored.svg"
      alt=""
      aria-hidden="true"
      style={{ display: "block", height: "100%", width: "auto", flexShrink: 0 }}
    />
  );
}
