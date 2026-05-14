"use client";

/* ============================================================
   Closing CTA — yellow chapter. Massive headline anchored to
   the bottom-right. Single email CTA plus a "book a call" link.
   ============================================================ */

export function Contact() {
  return (
    <section
      id="contact"
      style={{
        position: "relative",
        background: "#F0CE2E",
        color: "#121212",
        padding: "clamp(3rem, 6vw, 6rem) clamp(1.5rem, 4vw, 3rem) clamp(2.5rem, 4vw, 3rem)",
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
        {/* Top strip — email */}
        <div
          className="fade-up"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "0.6875rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(17,17,17,0.65)",
          }}
        >
          <span>hello@abc.design</span>
        </div>

        {/* Headline + CTAs pinned bottom-right */}
        <div
          data-reveal
          style={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            textAlign: "right",
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
              whiteSpace: "nowrap",
            }}
          >
            Let&apos;s build at{" "}
            <span className="serif-italic" style={{ color: "#F25E08" }}>
              the speed
            </span>{" "}
            of light.
          </h2>

          <div
            className="fade-up"
            style={{
              ["--delay" as string]: "440ms",
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: "flex-end",
            }}
          >
            <a
              href="mailto:hello@abc.design?subject=Hi%20ABC%20Design"
              data-cursor="Email us"
              className="btn"
              style={{
                background: "#121212",
                color: "#F0CE2E",
                borderColor: "#121212",
              }}
            >
              <span>hello@abc.design</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="mailto:hello@abc.design?subject=Book%20a%20call"
              data-cursor="Book"
              className="closing-link"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                fontSize: "0.9375rem",
                color: "#121212",
                textDecoration: "none",
                padding: "0.875rem 0.5rem",
                position: "relative",
              }}
            >
              <span>Or book a call</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="closing-link-arrow">
                <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .closing-link::after {
          content: "";
          position: absolute;
          left: 0.5rem; right: 0.5rem; bottom: 0.625rem;
          height: 1px;
          background: currentColor;
          transform: scaleX(1);
          transform-origin: left;
          transition: transform 360ms var(--ease-out);
        }
        .closing-link:hover::after { transform: scaleX(0); transform-origin: right; }
        .closing-link:hover .closing-link-arrow { transform: translateX(3px); }
        .closing-link-arrow { transition: transform 320ms var(--ease-out); }
      `}</style>
    </section>
  );
}
