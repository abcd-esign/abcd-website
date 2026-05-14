"use client";

import Link from "next/link";

export function CaseNextLink({
  dir,
  project,
}: {
  dir: "prev" | "next";
  project: { slug: string; client: string; title: string; index: string; hue: string };
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      data-cursor={dir === "next" ? "next →" : "← prev"}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        padding: "2rem",
        border: "1px solid var(--color-border)",
        textDecoration: "none",
        color: "var(--color-text)",
        background: "var(--color-bg)",
        position: "relative",
        overflow: "hidden",
        transition: "background 320ms var(--ease-out)",
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = project.hue + "1A")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--color-bg)")}
    >
      <span className="mono" style={{ fontSize: "0.6875rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-text-muted)" }}>
        {dir === "prev" ? "← Previous case" : "Next case →"}
      </span>
      <span style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
        <span className="serif-italic" style={{ color: project.hue, fontSize: "1.25rem" }}>{project.client}</span>
        <span style={{ fontSize: "1.25rem", color: "var(--color-text-muted)" }}>·</span>
        <span className="mono" style={{ fontSize: "0.6875rem", letterSpacing: "0.14em", color: project.hue }}>{project.index}</span>
      </span>
      <span
        style={{
          fontFamily: "var(--font-public-sans)",
          fontSize: "clamp(1.25rem, 2.4vw, 1.75rem)",
          letterSpacing: "-0.02em",
          lineHeight: 1.05,
          maxWidth: "22ch",
        }}
      >
        {project.title}
      </span>
    </Link>
  );
}
