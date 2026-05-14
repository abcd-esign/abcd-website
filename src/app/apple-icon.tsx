import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#FFFDF9",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
          <g fill="#111111">
            <rect x="64" y="40" width="56" height="56" />
            <rect x="136" y="40" width="56" height="56" />
            <rect x="64" y="112" width="56" height="56" />
            <rect x="136" y="112" width="56" height="56" />
            <rect x="64" y="184" width="128" height="32" />
          </g>
          <path
            fill="#F25E08"
            d="M155 145.5l4.04 10.92L170 160.46l-10.92 4.04L155 175.42l-4.04-10.92L140 160.46l10.92-4.04L155 145.5Z"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
