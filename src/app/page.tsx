import { Hero } from "@/components/Hero";
import { WhatWeOffer } from "@/components/WhatWeOffer";
import { SecretSauce } from "@/components/SecretSauce";
import { TeamV2 } from "@/components/v2/TeamV2";
import { ContactV2 } from "@/components/v2/ContactV2";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Kinetic wave anchored across the seam between Hero and What We
          Offer. The wave SVG aspect is 1920 × 241 (natural height ≈ 100vw /
          7.97) and we scale it 1.4× for presence. The wrapper's `top` is
          tuned so ~80% of the visible wave lives inside the hero and ~20%
          bleeds into the section below. Box top = -0.92 × natural height. */}
      <div
        aria-hidden="true"
        style={{
          position: "relative",
          height: 0,
          width: "100%",
          zIndex: 5,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: "calc(0px - 92vw * 241 / 1920)",
            lineHeight: 0,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/vectors/Secret_Sauce_Vector.svg"
            alt=""
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              transform: "scale(1.4)",
              transformOrigin: "center",
            }}
          />
        </div>
      </div>

      <WhatWeOffer />
      <SecretSauce />
      <TeamV2 />
      <ContactV2 />
    </>
  );
}
