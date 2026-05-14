import type { Metadata } from "next";
import { Work } from "@/components/Work";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Work — ABC Design",
  description: "An index of recent work from ABC Design — product, brand, AI, and design engineering.",
};

export default function WorkPage() {
  return (
    <>
      <section
        className="slide-frame"
        style={{
          position: "relative",
          background: "var(--color-bg)",
          padding: "clamp(3rem, 6vw, 6rem) clamp(1.25rem, 4vw, 2rem) clamp(2.5rem, 5vw, 4rem)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="rail" style={{ marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ width: 28, height: 1, background: "currentColor" }} />
            <span>Index — Work</span>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-public-sans)",
              fontSize: "clamp(2.5rem, 8vw, 7.5rem)",
              fontWeight: 400,
              lineHeight: 0.95,
              letterSpacing: "-0.035em",
              margin: "0 0 2rem 0",
              maxWidth: "16ch",
            }}
          >
            <span className="word-mask" style={{ ["--word-delay" as string]: "60ms" }}><span>An index</span></span>{" "}
            <span className="word-mask serif-italic" style={{ ["--word-delay" as string]: "200ms", color: "var(--color-orange)" }}>
              <span>of made things,</span>
            </span>{" "}
            <span className="word-mask" style={{ ["--word-delay" as string]: "340ms" }}><span>2024 — 2026.</span></span>
          </h1>
          <p
            className="fade-up"
            style={{
              ["--delay" as string]: "440ms",
              fontSize: "clamp(1rem, 1.4vw, 1.25rem)",
              lineHeight: 1.55,
              maxWidth: 640,
              margin: 0,
              color: "var(--color-text-muted)",
            }}
          >
            A working catalog of recent projects across product, brand, AI, and design engineering. Hover any
            row to peek inside, click to open the case.
          </p>
        </div>
      </section>

      <Work variant="index" title="Cases" />
      <Contact />
    </>
  );
}
