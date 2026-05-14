import type { Metadata, Viewport } from "next";
import { Public_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { Reveal } from "@/components/Reveal";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-public-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abc.design"),
  title: {
    default: "ABC Design — A studio of designers, engineers & inventors.",
    template: "%s · ABC Design",
  },
  description:
    "ABC is an AI-native design studio. We help companies ship distinctive product, brand and interface work in weeks, not months.",
  applicationName: "ABC Design",
  authors: [{ name: "ABC Design" }],
  keywords: [
    "design studio",
    "product design",
    "brand identity",
    "design engineering",
    "AI design",
    "design agency",
  ],
  openGraph: {
    type: "website",
    siteName: "ABC Design",
    locale: "en_US",
    url: "https://abc.design",
    title: "ABC Design — A studio of designers, engineers & inventors.",
    description:
      "An AI-native design studio shipping product, brand and interface work in weeks, not months.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ABC Design",
    description:
      "An AI-native design studio shipping product, brand and interface work in weeks, not months.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFDF9" },
    { media: "(prefers-color-scheme: dark)", color: "#FFFDF9" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const fontVars = `${publicSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`;
  return (
    <html lang="en" className={fontVars}>
      <body
        style={{
          fontFamily: "var(--font-public-sans), var(--font-sans)",
        }}
      >
        <CustomCursor />
        <Reveal />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
