"use client";

/* ============================================================
   Experience — a quiet credibility strip. Lists the companies
   the team has shipped at. No click-throughs, no logos required.
   ============================================================ */

const companies = [
  "Cash App",
  "Robinhood",
  "Affirm",
  "Harvey",
  "Carta",
  "Nextdoor",
  "BRM",
  "Runbook",
  "Dialogue AI",
];

export function Experience() {
  return (
    <section
      aria-label="Companies the team has shipped at"
      style={{
        position: "relative",
        background: "var(--color-bg)",
        color: "var(--color-text)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
        padding: "clamp(1.25rem, 2vw, 1.75rem) clamp(1.5rem, 4vw, 3rem)",
        maxHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: "clamp(1rem, 3vw, 3rem)",
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "0.6875rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--color-text-muted)",
            whiteSpace: "nowrap",
          }}
        >
          Shipped at —
        </span>
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            flexWrap: "wrap",
            columnGap: "clamp(1.25rem, 2.5vw, 2.25rem)",
            rowGap: "0.5rem",
            alignItems: "baseline",
            flex: 1,
          }}
        >
          {companies.map((c, i) => (
            <li
              key={c}
              data-reveal
              style={{
                ["--delay" as string]: `${i * 40}ms`,
                fontFamily: "var(--font-public-sans)",
                fontSize: "clamp(0.9375rem, 1.1vw, 1.0625rem)",
                color: "var(--color-text)",
                letterSpacing: "-0.012em",
              }}
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
