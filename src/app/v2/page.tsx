import type { Metadata } from "next";
import { HeroV2 } from "@/components/v2/HeroV2";
import { WhatWeOfferV2 } from "@/components/v2/WhatWeOfferV2";
import { SecretSauceV2 } from "@/components/v2/SecretSauceV2";
import { TeamV2 } from "@/components/v2/TeamV2";
import { ContactV2 } from "@/components/v2/ContactV2";

export const metadata: Metadata = {
  title: "ABC Design — v2 / Color Chapter Theater",
  description:
    "An alternate ABC Design home built from the logo's mark — saturated color chapters, sharp corners, no serif accents.",
};

export default function HomeV2() {
  return (
    <>
      <HeroV2 />
      <WhatWeOfferV2 />
      <SecretSauceV2 />
      <TeamV2 />
      <ContactV2 />
    </>
  );
}
