import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProject, adjacent } from "@/data/projects";
import { CaseNextLink } from "@/components/CaseNextLink";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.client} — ${project.title} · ABC Design`,
    description: project.subtitle,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = adjacent(slug);

  return (
    <article style={{ position: "relative" }}>
      {/* Hero */}
      <section
        className="slide-frame"
        style={{
          position: "relative",
          background: project.hueSoft,
          color: "var(--color-text)",
          padding: "6rem 2rem 4rem",
          minHeight: "82vh",
          overflow: "hidden",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <DecorArcs hue={project.hue} />

        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              flexWrap: "wrap",
              marginBottom: "2.5rem",
            }}
          >
            <Link href="/work" className="ed-link" data-cursor="back" style={{ fontSize: "0.9375rem" }}>
              ← Back to index
            </Link>
            <span className="mono" style={{ fontSize: "0.6875rem", letterSpacing: "0.14em", textTransform: "uppercase", color: project.hue }}>
              Case {project.index} / {project.year}
            </span>
          </div>

          <span
            className="mono"
            style={{
              display: "inline-block",
              background: project.hue,
              color: "var(--color-bg)",
              fontSize: "0.6875rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              padding: "0.35rem 0.75rem",
              borderRadius: 9999,
              marginBottom: "1.5rem",
            }}
          >
            {project.client}
          </span>

          <h1
            style={{
              fontFamily: "var(--font-public-sans)",
              fontSize: "clamp(2.5rem, 7vw, 6.5rem)",
              fontWeight: 400,
              lineHeight: 0.96,
              letterSpacing: "-0.035em",
              margin: "0 0 2rem 0",
              maxWidth: "18ch",
            }}
          >
            <span className="word-mask" style={{ ["--word-delay" as string]: "40ms" }}>
              <span>{project.title}</span>
            </span>
          </h1>

          <p
            className="fade-up"
            style={{
              ["--delay" as string]: "260ms",
              fontFamily: "var(--font-instrument-serif)",
              fontSize: "clamp(1.25rem, 2.2vw, 1.75rem)",
              fontStyle: "italic",
              lineHeight: 1.35,
              maxWidth: 720,
              margin: 0,
              color: "var(--color-text)",
            }}
          >
            {project.subtitle}
          </p>
        </div>
      </section>

      {/* Meta strip */}
      <section
        style={{
          background: "var(--color-bg)",
          padding: "3rem 2rem",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: "2rem",
          }}
          className="meta-strip"
        >
          <MetaCell label="Client" value={project.client} />
          <MetaCell label="Year" value={project.year} />
          <MetaCell label="Duration" value={project.duration} />
          <MetaCell label="Practice" value={project.practice.join(" · ")} />
        </div>
      </section>

      {/* Problem + Role */}
      <section
        style={{
          background: "var(--color-bg)",
          padding: "6rem 2rem",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 2fr)",
            gap: "5rem",
            alignItems: "start",
          }}
          className="problem-grid"
        >
          <div data-reveal>
            <div className="rail" style={{ marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ width: 28, height: 1, background: "currentColor" }} />
              <span>§ The problem</span>
            </div>
            <span className="serif-italic" style={{ fontSize: "0.875rem", color: project.hue }}>Brief</span>
          </div>
          <div data-reveal>
            <p
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
                margin: "0 0 3rem 0",
              }}
            >
              {project.problem}
            </p>
            <div className="rail" style={{ marginBottom: "0.75rem" }}>
              Our role
            </div>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.6, color: "var(--color-text)", margin: 0, maxWidth: 720 }}>
              {project.role}
            </p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section
        className="inverse"
        style={{
          background: "var(--color-bg-inverse)",
          color: "var(--color-text-inverse)",
          padding: "6rem 2rem",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 2fr)",
            gap: "5rem",
            alignItems: "start",
          }}
          className="approach-grid"
        >
          <div data-reveal>
            <div className="rail" style={{ marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ width: 28, height: 1, background: "currentColor" }} />
              <span>§ Approach</span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-public-sans)",
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                lineHeight: 1.02,
                margin: 0,
              }}
            >
              How we <span className="serif-italic" style={{ color: project.hue }}>actually</span> worked.
            </h2>
          </div>
          <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column" }}>
            {project.approach.map((step, i) => (
              <li
                key={i}
                data-reveal
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "1.5rem",
                  alignItems: "baseline",
                  padding: "1.5rem 0",
                  borderTop: i === 0 ? "1px solid rgba(255,253,249,0.15)" : "none",
                  borderBottom: "1px solid rgba(255,253,249,0.15)",
                }}
              >
                <span className="serif-italic" style={{ fontSize: "1.75rem", color: project.hue, lineHeight: 1, width: 38 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ fontSize: "clamp(1.0625rem, 1.4vw, 1.25rem)", lineHeight: 1.45 }}>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Visual block — abstract screens row */}
      <section
        style={{
          background: project.hueSoft,
          padding: "6rem 2rem",
          borderBottom: "1px solid var(--color-border)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div
            data-reveal
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "1.5rem",
            }}
            className="screens-row"
          >
            {[0, 1, 2].map((i) => (
              <FauxScreen key={i} hue={project.hue} variant={i as 0 | 1 | 2} client={project.client} />
            ))}
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section
        style={{
          background: "var(--color-bg)",
          padding: "8rem 2rem",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div style={{ maxWidth: 980, margin: "0 auto", textAlign: "center" }} data-reveal>
          <span
            aria-hidden="true"
            className="serif-italic"
            style={{ fontSize: "5rem", lineHeight: 0.4, color: project.hue, display: "block", marginBottom: "1rem" }}
          >
            “
          </span>
          <blockquote
            style={{
              fontFamily: "var(--font-instrument-serif)",
              fontStyle: "italic",
              fontSize: "clamp(1.75rem, 3.6vw, 3rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.005em",
              margin: 0,
            }}
          >
            {project.pullQuote}
          </blockquote>
          <span className="mono" style={{ display: "block", marginTop: "2rem", fontSize: "0.75rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-text-muted)" }}>
            — {project.pullQuoteAttr}
          </span>
        </div>
      </section>

      {/* Outcome / metrics */}
      <section
        style={{
          background: "var(--color-bg-cream)",
          padding: "6rem 2rem",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            data-reveal
            style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: "4rem", alignItems: "end", marginBottom: "3rem" }}
            className="outcome-head"
          >
            <div>
              <div className="rail" style={{ marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{ width: 28, height: 1, background: "currentColor" }} />
                <span>§ Outcome</span>
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-public-sans)",
                  fontSize: "clamp(2rem, 4vw, 3.25rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.02,
                  margin: 0,
                }}
              >
                What <span className="serif-italic" style={{ color: project.hue }}>shipped.</span>
              </h2>
            </div>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.55, margin: 0, color: "var(--color-text)" }}>{project.outcome}</p>
          </div>

          <ul
            data-reveal
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "grid",
              gridTemplateColumns: `repeat(${project.metrics.length}, minmax(0, 1fr))`,
              gap: "1px",
              background: "var(--color-border)",
              border: "1px solid var(--color-border)",
            }}
            className="metrics-grid"
          >
            {project.metrics.map((m) => (
              <li
                key={m.label}
                style={{
                  background: "var(--color-bg-cream)",
                  padding: "2.5rem 2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-instrument-serif)",
                    fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                    lineHeight: 1,
                    color: project.hue,
                  }}
                >
                  {m.value}
                </span>
                <span className="mono" style={{ fontSize: "0.6875rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-text-muted)" }}>
                  {m.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Next / prev */}
      <section
        style={{
          background: "var(--color-bg)",
          padding: "5rem 2rem",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
          }}
          className="next-grid"
        >
          {prev && <CaseNextLink dir="prev" project={prev} />}
          {next && <CaseNextLink dir="next" project={next} />}
        </div>
      </section>

      <style>{`
        @media (max-width: 980px) {
          .problem-grid, .approach-grid, .outcome-head { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .screens-row { grid-template-columns: 1fr !important; }
          .metrics-grid { grid-template-columns: 1fr 1fr !important; }
          .next-grid { grid-template-columns: 1fr !important; }
          .meta-strip { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </article>
  );
}

function MetaCell({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
      <span className="mono" style={{ fontSize: "0.6875rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-text-muted)" }}>
        {label}
      </span>
      <span style={{ fontSize: "1.0625rem", letterSpacing: "-0.01em" }}>{value}</span>
    </div>
  );
}

/* Animated decorative arcs in case hero background */
function DecorArcs({ hue }: { hue: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 600"
      preserveAspectRatio="xMidYMid slice"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0, opacity: 0.55 }}
    >
      <defs>
        <linearGradient id="caseGrad" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={hue} stopOpacity="0.1" />
          <stop offset="50%" stopColor={hue} />
          <stop offset="100%" stopColor={hue} stopOpacity="0.1" />
          <animateTransform attributeName="gradientTransform" type="translate" from="-1440 0" to="1440 0" dur="8s" repeatCount="indefinite" />
        </linearGradient>
      </defs>
      {[40, 80, 130, 200, 290, 400, 520].map((y, i) => (
        <path
          key={y}
          d={`M-20 ${y} Q 360 ${y - 80 + i * 8} 720 320 T 1460 320`}
          stroke="url(#caseGrad)"
          strokeWidth={i === 3 ? 1.5 : 0.8}
          fill="none"
          strokeDasharray={i % 2 === 0 ? "0" : "5 3"}
        />
      ))}
    </svg>
  );
}

function FauxScreen({
  hue,
  variant,
  client,
}: {
  hue: string;
  variant: 0 | 1 | 2;
  client: string;
}) {
  return (
    <div
      data-reveal
      style={{
        background: "var(--color-bg)",
        border: "1px solid var(--color-border)",
        padding: "1.25rem",
        position: "relative",
        aspectRatio: "4 / 5",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        overflow: "hidden",
        boxShadow: `8px 12px 0 ${hue}`,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{ width: 8, height: 8, borderRadius: 9999, background: hue }} />
        <span className="mono" style={{ fontSize: "0.625rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-text-muted)" }}>
          {client.toLowerCase()}.app
        </span>
      </div>
      <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
        {variant === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", height: "100%" }}>
            <div style={{ height: 12, background: "var(--color-rule)", width: "60%" }} />
            <div style={{ height: 38, background: hue, width: "80%" }} />
            <div style={{ height: 8, background: "var(--color-rule)", width: "100%" }} />
            <div style={{ height: 8, background: "var(--color-rule)", width: "85%" }} />
            <div style={{ marginTop: "auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
              <div style={{ aspectRatio: "1/1", background: hue + "22", border: `1px solid ${hue}` }} />
              <div style={{ aspectRatio: "1/1", background: hue }} />
            </div>
          </div>
        )}
        {variant === 1 && (
          <svg viewBox="0 0 200 240" style={{ width: "100%", height: "100%" }}>
            <defs>
              <linearGradient id={`fs-${hue.replace("#", "")}`} x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor={hue} stopOpacity="0.2" />
                <stop offset="100%" stopColor={hue} />
              </linearGradient>
            </defs>
            <rect x="10" y="14" width="86" height="10" fill="var(--color-rule)" />
            <rect x="10" y="30" width="120" height="22" fill={hue} />
            {[80, 110, 140, 170, 200].map((y, i) => (
              <rect key={y} x="10" y={y} width={i % 2 === 0 ? 160 : 130} height="6" fill="var(--color-rule)" />
            ))}
            <path d="M5 230 Q 60 180 100 215 T 200 200" stroke={`url(#fs-${hue.replace("#", "")})`} strokeWidth="2" fill="none" />
            <circle cx="100" cy="215" r="4" fill={hue} />
          </svg>
        )}
        {variant === 2 && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridAutoRows: "1fr", gap: "0.4rem", height: "100%" }}>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                style={{
                  background: i % 3 === 0 ? hue : i % 2 === 0 ? hue + "33" : "var(--color-rule)",
                }}
              />
            ))}
          </div>
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span className="mono" style={{ fontSize: "0.6875rem", letterSpacing: "0.12em", color: hue }}>
          Fig. {variant + 1}
        </span>
        <span className="serif-italic" style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
          screen study
        </span>
      </div>
    </div>
  );
}
