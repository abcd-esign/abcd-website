"use client";

/* ============================================================
   Closing CTA v2 — yellow ground, blue + white headline.
   No chapter eyebrow; just the email label, the headline, and
   the two CTAs.
   ============================================================ */

export function ContactV2() {
  return (
    <section
      id="contact"
      style={{
        position: "relative",
        background: "var(--color-blue)",
        color: "#FFFFFF",
        padding: "clamp(3rem, 5vw, 5rem) clamp(1.5rem, 4vw, 3rem)",
        overflow: "hidden",
        maxHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1440,
          width: "100%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <div
          className="fade-up"
          style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "1rem", flexWrap: "wrap" }}
        >
          <span
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontSize: "0.6875rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            hello@abc.design
          </span>
        </div>

        <div
          data-reveal
          style={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "clamp(1.75rem, 3vw, 2.5rem)",
            paddingTop: "clamp(3rem, 5vw, 4rem)",
          }}
        >
          <h2
            className="fade-up"
            style={{
              ["--delay" as string]: "120ms",
              fontFamily: "var(--font-public-sans)",
              fontSize: "clamp(1.25rem, 3.4vw, 2.75rem)",
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: "-0.028em",
              margin: 0,
              color: "#FFFFFF",
              whiteSpace: "nowrap",
            }}
          >
            Let&apos;s build at <span style={{ fontWeight: 700 }}>the speed</span> of light.
          </h2>

          <div
            className="fade-up"
            style={{
              ["--delay" as string]: "440ms",
              display: "flex",
              gap: "0.75rem",
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <a
              href="mailto:hello@abc.design?subject=Hi%20ABC%20Design"
              data-cursor="Email us"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.625rem",
                fontFamily: "var(--font-public-sans)",
                fontSize: "0.9375rem",
                fontWeight: 500,
                background: "transparent",
                color: "#FFFFFF",
                padding: "0.875rem 1.25rem",
                border: "1px solid #FFFFFF",
                borderRadius: 0,
                textDecoration: "none",
              }}
              className="ctav2-primary"
            >
              <span>hello@abc.design</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="mailto:hello@abc.design?subject=Book%20a%20call"
              data-cursor="Book"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.625rem",
                fontFamily: "var(--font-public-sans)",
                fontSize: "0.9375rem",
                fontWeight: 500,
                background: "transparent",
                color: "#FFFFFF",
                padding: "0.875rem 1.25rem",
                border: "1px solid #FFFFFF",
                borderRadius: 0,
                textDecoration: "none",
              }}
              className="ctav2-ghost"
            >
              <span>Or book a call</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .ctav2-primary:hover { background: #FFFFFF; color: var(--color-blue); }
        .ctav2-ghost:hover { background: #FFFFFF; color: var(--color-blue); }
      `}</style>
    </section>
  );
}
