"use client";

/* ============================================================
   Team — dark-mode card grid.
   Each partner sits in their own rounded card on near-black.
   Portrait → name → signature wave → work / education.
   ============================================================ */

type Member = {
  name: string;
  work: string;
  education: string;
  color: string;
  portrait: string;
  signature: string;
};

const team: Member[] = [
  {
    name: "Andres Limcaoco",
    work: "Harvey, Affirm",
    education: "Stanford",
    color: "#1570F4",
    portrait: "/team/Andres.svg",
    signature: "/team/Single_Vector_Blue.svg",
  },
  {
    name: "Bianca Jimenez Wen",
    work: "Cash App",
    education: "University of Pennsylvania, Penn:IPD",
    color: "#F672C6",
    portrait: "/team/Bianca.svg",
    signature: "/team/Single_Vector_Pink.svg",
  },
  {
    name: "Connor Wen",
    work: "Runbook, Carta, BRM",
    education: "Wharton",
    color: "#F25E08",
    portrait: "/team/Connor.svg",
    signature: "/team/Single_Vector_Orange.svg",
  },
  {
    name: "Danielle Limcaoco",
    work: "Robinhood, Nextdoor",
    education: "Stanford, Harvard",
    color: "#0D9A3E",
    portrait: "/team/Danielle.svg",
    signature: "/team/Single_Vector_Green.svg",
  },
];

export function Team() {
  return (
    <section
      id="team"
      style={{
        position: "relative",
        background: "#121212",
        color: "#FFFDF9",
        padding: "clamp(3rem, 6vw, 6rem) clamp(1.5rem, 4vw, 3rem)",
        borderTop: "1px solid #121212",
        maxHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <header data-reveal style={{ marginBottom: "clamp(1.5rem, 2.5vw, 2.25rem)" }}>
          <h2
            style={{
              fontFamily: "var(--font-jetbrains-mono)",
              fontSize: "0.6875rem",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              lineHeight: 1,
              margin: 0,
              color: "rgba(255,253,249,0.55)",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.625rem",
            }}
          >
            <span aria-hidden="true" style={{ width: 22, height: 1, background: "currentColor" }} />
            <span>The Team</span>
          </h2>
        </header>

        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: "clamp(0.75rem, 1.2vw, 1.25rem)",
          }}
          className="team-grid"
        >
          {team.map((m, i) => (
            <TeamCard key={m.name} member={m} delay={i * 80} />
          ))}
        </ul>
      </div>

      <style>{`
        .team-card:hover {
          transform: translateY(-3px);
          border-color: rgba(255,253,249,0.18) !important;
          box-shadow: 0 16px 36px -20px rgba(0,0,0,0.55);
        }
        @media (max-width: 980px) {
          .team-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .team-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function TeamCard({ member, delay }: { member: Member; delay: number }) {
  return (
    <li
      data-reveal
      style={{
        ["--delay" as string]: `${delay}ms`,
      }}
    >
      <article
        className="team-card"
        style={{
          position: "relative",
          background: "#1A1A1A",
          border: "1px solid rgba(255,253,249,0.08)",
          borderRadius: 18,
          padding: "clamp(1.25rem, 1.8vw, 1.5rem)",
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
          minHeight: 380,
          height: "100%",
          transition:
            "transform 360ms var(--ease-out), box-shadow 360ms var(--ease-out), border-color 360ms var(--ease-out)",
        }}
      >
        {/* Portrait */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "1 / 1",
            background: "#0E0E0E",
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid rgba(255,253,249,0.06)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={member.portrait}
            alt={`${member.name} portrait`}
            loading="lazy"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          {/* Tiny pixel mark in the upper-right, in the member's signature color */}
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              width: 10,
              height: 10,
              background: member.color,
              borderRadius: 2,
            }}
          />
        </div>

        {/* Name + signature wave */}
        <div>
          <h3
            style={{
              fontFamily: "var(--font-public-sans)",
              fontSize: "clamp(1.0625rem, 1.4vw, 1.25rem)",
              fontWeight: 400,
              letterSpacing: "-0.014em",
              lineHeight: 1.15,
              margin: 0,
              color: "#FFFDF9",
            }}
          >
            {member.name}
          </h3>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={member.signature}
            alt=""
            aria-hidden="true"
            style={{
              display: "block",
              width: "100%",
              maxWidth: 150,
              height: "auto",
              marginTop: 10,
            }}
          />
        </div>

        {/* Work + Education */}
        <dl
          style={{
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "0.875rem",
            marginTop: "auto",
          }}
        >
          <Row label="Work" value={member.work} />
          <Row label="Education" value={member.education} />
        </dl>
      </article>
    </li>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <dt
        style={{
          fontFamily: "var(--font-jetbrains-mono)",
          fontSize: "0.625rem",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "rgba(255,253,249,0.45)",
        }}
      >
        {label}
      </dt>
      <dd
        style={{
          margin: 0,
          fontSize: "0.9375rem",
          lineHeight: 1.4,
          color: "rgba(255,253,249,0.92)",
        }}
      >
        {value}
      </dd>
    </div>
  );
}
