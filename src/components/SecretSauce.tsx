"use client";

/* ============================================================
   Our Secret Sauce.
   Two-column editorial: headline anchors the left, three pillars
   stack on the right, separated by the brand's coloured kinetic
   waves (blue → pink → orange → green) from /public/team/.
   ============================================================ */

const pillars = [
  {
    num: "01",
    head: "Taste, honed at top product teams.",
    body: "We've shipped with the teams setting the bar. AI tools move that instinct faster at every stage.",
  },
  {
    num: "02",
    head: "Coded prototypes, not static mockups.",
    body: "Your team interacts with the real product on day one. No translation loss between design and engineering.",
  },
  {
    num: "03",
    head: "Engineering-ready code.",
    body: "Skip the front-end back-and-forth. We hand off code your engineers can review and ship.",
  },
] as const;

const dividers = [
  "/team/Single_Vector_Blue.svg",
  "/team/Single_Vector_Pink.svg",
  "/team/Single_Vector_Orange.svg",
  "/team/Single_Vector_Green.svg",
];

export function SecretSauce() {
  return (
    <section
      id="secret-sauce"
      style={{
        position: "relative",
        background: "var(--color-bg)",
        color: "var(--color-text)",
        /* Equal 80px inset on all four sides around the yellow card. */
        padding: "80px",
        maxHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Yellow card — real container with uniform internal padding. */}
      <div
        style={{
          background: "#F0CE2E",
          borderRadius: "clamp(10px, 1vw, 16px)",
          padding: "clamp(1.25rem, 2.4vw, 2.25rem)",
        }}
      >
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0, 5fr) minmax(0, 7fr)",
            gap: "clamp(2rem, 5vw, 5rem)",
            alignItems: "stretch",
          }}
          className="sauce-grid"
        >
          {/* Left — headline left-aligned, vertically centred in the column,
              with a small constellation of stars scattered around it. */}
          <header
            data-reveal
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              minHeight: "100%",
              padding: "clamp(1rem, 2vw, 2rem) 0",
            }}
          >
            <SauceStars />
            <h2
              style={{
                position: "relative",
                fontFamily: "var(--font-public-sans)",
                fontSize: "clamp(2rem, 4.6vw, 3.75rem)",
                fontWeight: 400,
                lineHeight: 0.96,
                letterSpacing: "-0.032em",
                margin: 0,
                color: "var(--color-text)",
                textAlign: "left",
              }}
            >
              Our
              <br />
              <span style={{ fontWeight: 700 }}>secret sauce.</span>
            </h2>
          </header>

          {/* Right — pillars interleaved with colored dividers */}
          <ol
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: "clamp(0.5rem, 1vw, 0.875rem)",
            }}
          >
            {/* Top divider — Blue */}
            <DividerWave src={dividers[0]} />

            {pillars.map((p, i) => (
              <li key={p.num} data-reveal style={{ ["--delay" as string]: `${i * 90}ms` }}>
                <Pillar {...p} />
                <DividerWave src={dividers[i + 1]} />
              </li>
            ))}
          </ol>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .sauce-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function SauceStars() {
  /* Randomly-scattered constellation hugging the left-aligned headline.
     Percentages are relative to the header element so stars stay anchored
     to the text regardless of column width. Positions deliberately
     asymmetric (no mirror, no grid) and clustered near the text rather
     than out at the column edges. */
  const stars = [
    { x: 4,  y: 12, size: 10, rotate: 14 },
    { x: 38, y: 6,  size: 13, rotate: -8 },
    { x: 64, y: 18, size: 9,  rotate: 22 },
    { x: 82, y: 36, size: 11, rotate: -16 },
    { x: 18, y: 46, size: 8,  rotate: 30 },
    { x: 74, y: 64, size: 14, rotate: 6 },
    { x: 8,  y: 78, size: 10, rotate: -22 },
    { x: 46, y: 92, size: 12, rotate: 10 },
    { x: 88, y: 88, size: 9,  rotate: -4 },
  ];
  return (
    <span
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    >
      {stars.map((s, i) => (
        <svg
          key={i}
          width={s.size}
          height={s.size}
          viewBox="0 0 15 15"
          className="sauce-star"
          style={{
            position: "absolute",
            left: `${s.x}%`,
            top: `${s.y}%`,
            ["--rot" as string]: `${s.rotate}deg`,
            /* Stagger each star's twinkle so they don't all pulse in
               sync. Negative delays + a long duration give a slow,
               wandering glimmer. */
            animationDelay: `${(i * 0.7).toFixed(2)}s`,
            fill: "var(--color-text)",
            display: "block",
          }}
        >
          <path d="M7.48 0L9.5 5.46L14.97 7.48L9.5 9.51L7.48 14.97L5.46 9.51L0 7.48L5.46 5.46Z" />
        </svg>
      ))}
      <style>{`
        @keyframes sauce-twinkle {
          0%, 100% {
            transform: translate(-50%, -50%) rotate(var(--rot)) scale(1);
            opacity: 0.85;
          }
          50% {
            transform: translate(-50%, -50%) rotate(var(--rot)) scale(1.18);
            opacity: 1;
          }
        }
        .sauce-star {
          animation: sauce-twinkle 3.8s ease-in-out infinite;
          transform: translate(-50%, -50%) rotate(var(--rot));
          transform-origin: center;
          will-change: transform, opacity;
        }
        @media (prefers-reduced-motion: reduce) {
          .sauce-star { animation: none; opacity: 0.9; }
        }
      `}</style>
    </span>
  );
}

function DividerWave({ src }: { src: string }) {
  return (
    <div
      aria-hidden="true"
      style={{
        width: "100%",
        height: "clamp(28px, 3vw, 36px)",
        margin: "clamp(0.375rem, 0.8vw, 0.625rem) 0",
        backgroundImage: `url(${src})`,
        backgroundRepeat: "repeat-x",
        backgroundSize: "auto 100%",
        backgroundPosition: "left center",
      }}
    />
  );
}

function Pillar({ num, head, body }: { num: string; head: string; body: string }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "clamp(1rem, 2vw, 2rem)",
        alignItems: "baseline",
      }}
      className="sauce-pillar"
    >
      <span
        style={{
          fontFamily: "var(--font-jetbrains-mono)",
          fontSize: "0.6875rem",
          letterSpacing: "0.18em",
          color: "#111111",
          opacity: 1,
          width: 28,
        }}
      >
        {num}
      </span>
      <div>
        <h3
          style={{
            fontFamily: "var(--font-public-sans)",
            fontSize: "clamp(1.0625rem, 1.5vw, 1.25rem)",
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: "-0.016em",
            margin: 0,
            color: "var(--color-text)",
            maxWidth: "30ch",
          }}
        >
          {head}
        </h3>
        <p
          style={{
            margin: "0.5rem 0 0",
            fontFamily: "var(--font-public-sans)",
            fontSize: "clamp(0.9375rem, 1.05vw, 1rem)",
            lineHeight: 1.5,
            color: "rgba(17,17,17,0.65)",
            maxWidth: "52ch",
          }}
        >
          {body}
        </p>
      </div>
    </div>
  );
}
