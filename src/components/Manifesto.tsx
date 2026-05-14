"use client";

import { useEffect, useRef, useState } from "react";

function CountUp({ to, suffix = "", duration = 1400 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let start = 0;
    let running = false;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !running) {
            running = true;
            const t0 = performance.now();
            start = t0;
            const tick = (t: number) => {
              const p = Math.min(1, (t - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(Math.round(to * eased));
              if (p < 1) raf = requestAnimationFrame(tick);
            };
            raf = requestAnimationFrame(tick);
            io.disconnect();
          }
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export function Manifesto() {
  return (
    <section
      id="studio"
      style={{
        position: "relative",
        background: "var(--color-bg)",
        padding: "9rem 2rem 7rem",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 5fr) minmax(0, 4fr)",
            gap: "5rem",
            alignItems: "start",
          }}
          className="manifesto-grid"
        >
          <div data-reveal>
            <div className="rail" style={{ marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ width: 28, height: 1, background: "currentColor" }} />
              <span>Fig. 02 — Manifesto</span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: "clamp(2rem, 4.2vw, 4rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.01em",
                margin: 0,
              }}
            >
              We design like writers, ship like founders, and think{" "}
              <em style={{ color: "var(--color-orange)" }}>in motion</em>. Every screen is a sentence — every system, a chapter.
              <span style={{ color: "var(--color-text-faint)" }}>
                {" "}Design isn't a phase, it's the operating system of a good company.
              </span>
            </p>
          </div>

          <aside
            data-reveal
            className="slide-frame slide-ticks"
            style={{
              position: "relative",
              padding: "2rem",
              minHeight: 320,
              background: "var(--color-bg-cream)",
              color: "var(--color-text)",
            }}
          >
            <div className="rail" style={{ marginBottom: "1.5rem" }}>Index of facts</div>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {[
                { num: 38, suffix: "", label: "shipped products" },
                { num: 9, suffix: " wk", label: "median engagement" },
                { num: 92, suffix: "%", label: "of clients return for a second project" },
                { num: 6, suffix: "", label: "humans, no account managers" },
              ].map((row) => (
                <li
                  key={row.label}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    alignItems: "baseline",
                    gap: "1rem",
                    borderBottom: "1px solid var(--color-rule)",
                    paddingBottom: "1.25rem",
                  }}
                >
                  <span
                    className="serif"
                    style={{
                      fontSize: "clamp(2.5rem, 4vw, 3.25rem)",
                      lineHeight: 1,
                      color: "var(--color-text)",
                    }}
                  >
                    <CountUp to={row.num} suffix={row.suffix} />
                  </span>
                  <span
                    className="mono"
                    style={{
                      fontSize: "0.6875rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {row.label}
                  </span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .manifesto-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
