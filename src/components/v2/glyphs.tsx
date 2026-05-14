/* Shared visual primitives for the v2 page — built around two raw
   materials: the brand star, and pixel squares of varying sizes.
   Each chapter assembles them differently. */

export function BrandStar({
  size = 12,
  color = "currentColor",
  style,
}: {
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 15 15"
      fill={color}
      aria-hidden="true"
      style={{ display: "inline-block", flexShrink: 0, ...style }}
    >
      <path d="M7.48 0L9.5 5.46L14.97 7.48L9.5 9.51L7.48 14.97L5.46 9.51L0 7.48L5.46 5.46Z" />
    </svg>
  );
}

/* The literal 4-rectangle ABC corner mark. Kept for one canonical use. */
export function BrandMark({
  width = 240,
  color = "currentColor",
  style,
}: {
  width?: number | string;
  color?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 635 246"
      fill={color}
      aria-hidden="true"
      style={{ width, height: "auto", display: "block", ...style }}
    >
      <rect x="146.172" y="113.867" width="86.7963" height="86.7963" />
      <rect x="0.124196" y="0.124196" width="86.5479" height="86.5479" />
      <rect x="247.105" y="9.70508" width="86.7963" height="86.7963" />
      <rect x="387.011" y="158.499" width="247.989" height="86.7963" />
    </svg>
  );
}

/* Chapter slate: short rule + chapter title, mono. */
export function ChapterSlate({
  title,
  color = "currentColor",
}: {
  num?: string;
  title: string;
  total?: string;
  color?: string;
}) {
  return (
    <div
      style={{
        fontFamily: "var(--font-jetbrains-mono)",
        fontSize: "0.6875rem",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color,
        display: "inline-flex",
        alignItems: "center",
        gap: "0.625rem",
      }}
    >
      <span aria-hidden="true" style={{ width: 22, height: 1, background: "currentColor", opacity: 0.6 }} />
      <span>{title}</span>
    </div>
  );
}

/* ─── NEW VOCABULARY ──────────────────────────────────────── */

/* PixelStaircase — a stepped cascade of solid squares. Reads as
   "compression": the row gets shorter and bigger as it descends.
   Used in WhatWeOffer to echo the process getting faster. */
export function PixelStaircase({
  unit = 14,
  color = "currentColor",
  reverse = false,
  style,
}: {
  unit?: number;
  color?: string;
  reverse?: boolean;
  style?: React.CSSProperties;
}) {
  // Each row: count of cells. Tall→short = "process compressing".
  const rows = reverse ? [1, 2, 3, 5, 8] : [8, 5, 3, 2, 1];
  return (
    <div
      aria-hidden="true"
      style={{
        display: "inline-flex",
        flexDirection: "column",
        gap: Math.max(2, Math.round(unit * 0.25)),
        ...style,
      }}
    >
      {rows.map((count, rowIdx) => (
        <div
          key={rowIdx}
          style={{
            display: "inline-flex",
            gap: Math.max(2, Math.round(unit * 0.25)),
          }}
        >
          {Array.from({ length: count }).map((_, i) => (
            <span
              key={i}
              style={{
                width: unit,
                height: unit,
                background: color,
                display: "inline-block",
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

/* StarField — scatter of stars across a positioned container.
   Sizes + colors + positions seeded so it renders identical on
   server and client. Used in Team's dark chapter as the "studio sky". */
type FieldStar = { x: number; y: number; size: number; color: string };
export function StarField({
  stars,
  style,
}: {
  stars: FieldStar[];
  style?: React.CSSProperties;
}) {
  return (
    <div
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, pointerEvents: "none", ...style }}
    >
      {stars.map((s, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            left: `${s.x}%`,
            top: `${s.y}%`,
            lineHeight: 0,
            opacity: 0.95,
          }}
        >
          <BrandStar size={s.size} color={s.color} />
        </span>
      ))}
    </div>
  );
}

/* StarBurst — radial fan of stars at varying sizes around a center
   point. Used in the Closing CTA as the chapter's exclamation. */
export function StarBurst({
  size = 320,
  color = "currentColor",
  style,
}: {
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}) {
  // 12 stars arranged in three concentric rings.
  const ring = (radius: number, count: number, starSize: number, offsetDeg = 0) =>
    Array.from({ length: count }).map((_, i) => {
      const angle = ((i / count) * Math.PI * 2) + (offsetDeg * Math.PI) / 180;
      return {
        x: 50 + (Math.cos(angle) * radius * 50) / (size / 2),
        y: 50 + (Math.sin(angle) * radius * 50) / (size / 2),
        size: starSize,
      };
    });

  const stars = [
    ...ring(size * 0.18, 4, Math.round(size * 0.06), 0),
    ...ring(size * 0.34, 6, Math.round(size * 0.045), 15),
    ...ring(size * 0.46, 8, Math.round(size * 0.032), 0),
  ];

  return (
    <div
      aria-hidden="true"
      style={{
        position: "relative",
        width: size,
        height: size,
        flexShrink: 0,
        ...style,
      }}
    >
      {/* Centre star — the biggest */}
      <span
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          lineHeight: 0,
        }}
      >
        <BrandStar size={Math.round(size * 0.12)} color={color} />
      </span>
      {stars.map((s, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            left: `${s.x}%`,
            top: `${s.y}%`,
            transform: "translate(-50%, -50%)",
            lineHeight: 0,
          }}
        >
          <BrandStar size={s.size} color={color} />
        </span>
      ))}
    </div>
  );
}

/* PixelStream — a row of squares of varying heights, like a bar
   chart or sound wave. Built from the same square primitive. */
export function PixelStream({
  unit = 10,
  heights = [1, 2, 4, 3, 5, 8, 5, 3, 2, 4, 1, 2],
  color = "currentColor",
  gap = 3,
  style,
}: {
  unit?: number;
  heights?: number[];
  color?: string;
  gap?: number;
  style?: React.CSSProperties;
}) {
  return (
    <div
      aria-hidden="true"
      style={{
        display: "inline-flex",
        gap,
        alignItems: "flex-end",
        ...style,
      }}
    >
      {heights.map((h, i) => (
        <span
          key={i}
          style={{
            width: unit,
            height: unit * h,
            background: color,
            display: "inline-block",
          }}
        />
      ))}
    </div>
  );
}
