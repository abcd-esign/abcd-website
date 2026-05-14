import { ImageResponse } from "next/og";

export const alt = "ABC Design — a studio of designers, engineers & inventors.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#FFFDF9",
          display: "flex",
          flexDirection: "column",
          padding: 64,
          position: "relative",
        }}
      >
        {/* Slide-frame border */}
        <div
          style={{
            position: "absolute",
            top: 32,
            left: 32,
            right: 32,
            bottom: 32,
            border: "1px solid #111",
          }}
        />

        {/* Corner mark */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg width="60" height="24" viewBox="0 0 635 246" xmlns="http://www.w3.org/2000/svg">
            <g fill="#111">
              <rect x="146.172" y="113.867" width="86.7963" height="86.7963" />
              <rect x="0.124196" y="0.124196" width="86.5479" height="86.5479" />
              <rect x="247.105" y="9.70508" width="86.7963" height="86.7963" />
              <rect x="387.011" y="158.499" width="247.989" height="86.7963" />
            </g>
          </svg>
          <div
            style={{
              fontFamily: "monospace",
              fontSize: 16,
              letterSpacing: 3,
              color: "#6B6B6B",
              textTransform: "uppercase",
            }}
          >
            ABC / Design Studio
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "auto",
            fontSize: 110,
            lineHeight: 1.0,
            letterSpacing: -4,
            color: "#111",
            fontFamily: "sans-serif",
          }}
        >
          <div style={{ display: "flex" }}>A studio of</div>
          <div style={{ display: "flex", color: "#F25E08", fontStyle: "italic" }}>designers,</div>
          <div style={{ display: "flex" }}>engineers &amp; <span style={{ color: "#F672C6", fontStyle: "italic", marginLeft: 22 }}>inventors.</span></div>
        </div>

        {/* Color bar */}
        <div
          style={{
            position: "absolute",
            left: 32,
            right: 32,
            bottom: 32,
            display: "flex",
            height: 12,
          }}
        >
          <div style={{ flex: 1, background: "#F25E08" }} />
          <div style={{ flex: 1, background: "#F672C6" }} />
          <div style={{ flex: 1, background: "#1570F4" }} />
          <div style={{ flex: 1, background: "#00B800" }} />
          <div style={{ flex: 1, background: "#F0CE2E" }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
