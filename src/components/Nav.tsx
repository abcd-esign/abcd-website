"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/work", label: "Work", num: "01" },
  { href: "/careers", label: "Careers", num: "02" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  /* On the v2 homepage the hero already shows the logo BIG. Hide the
     nav logo at the top of the page and fade it in once the user
     scrolls past the hero. Every other route shows it normally. */
  const isV2 = pathname === "/v2";
  const showLogo = !isV2 || scrolled;

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "2rem",
        padding: scrolled ? "0.75rem 2rem" : "1.25rem 2rem",
        background: scrolled ? "rgba(255,253,249,0.78)" : "var(--color-bg)",
        backdropFilter: scrolled ? "saturate(140%) blur(14px)" : "none",
        WebkitBackdropFilter: scrolled ? "saturate(140%) blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid var(--color-rule)" : "1px solid transparent",
        color: "var(--color-text)",
        transition: "padding 320ms var(--ease-out), background 320ms var(--ease-out), border-color 320ms var(--ease-out)",
      }}
    >
      <Link
        href="/"
        aria-label="ABC Design — Home"
        data-cursor="Home"
        style={{
          display: "inline-flex",
          alignItems: "center",
          textDecoration: "none",
          color: "inherit",
          opacity: showLogo ? 1 : 0,
          transform: showLogo ? "translateY(0)" : "translateY(-4px)",
          pointerEvents: showLogo ? "auto" : "none",
          transition: "opacity 320ms var(--ease-out), transform 320ms var(--ease-out)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/Monogram-Black.svg"
          alt="ABC Design"
          width={56}
          height={22}
          style={{ display: "block", height: scrolled ? 18 : 22, width: "auto", transition: "height 320ms var(--ease-out)" }}
        />
      </Link>

      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="nav-toggle"
        style={{
          display: "none",
          alignItems: "center",
          justifyContent: "center",
          width: 44, height: 44,
          background: "transparent",
          border: "1px solid var(--color-border)",
          borderRadius: 9999,
          marginLeft: "auto",
          color: "inherit",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {open ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="8" x2="21" y2="8" />
              <line x1="3" y1="16" x2="21" y2="16" />
            </>
          )}
        </svg>
      </button>

      <div
        className={`nav-links ${open ? "nav-links--open" : ""}`}
        style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginLeft: "auto" }}
      >
        {LINKS.map(({ href, label }, i) => {
          const active = pathname === href || pathname.startsWith(href + "/");
          return (
            <span key={href} style={{ display: "inline-flex", alignItems: "center", gap: "1.25rem" }}>
              {i > 0 && <NavStar color="var(--color-orange)" />}
              <Link
                href={href}
                data-cursor={label}
                className="ed-link ed-link--quiet"
                style={{
                  fontFamily: "var(--font-public-sans)",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--color-text)",
                  position: "relative",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                <span>{label}</span>
                {active && (
                  <span aria-hidden="true" style={{
                    position: "absolute",
                    left: "100%", marginLeft: 6, top: "50%",
                    transform: "translateY(-50%)",
                    width: 4, height: 4, borderRadius: 9999,
                    background: "var(--color-orange)",
                  }} />
                )}
              </Link>
            </span>
          );
        })}
        <NavStar color="var(--color-pink)" />
        <Link
          href="/#contact"
          data-cursor="Say hi"
          className="nav-cta"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            height: 22,
            padding: "0 0.75rem",
            background: "#111111",
            color: "var(--color-bg)",
            border: "1px solid #111111",
            borderRadius: 0,
            fontFamily: "var(--font-public-sans)",
            fontSize: "0.75rem",
            fontWeight: 500,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            textDecoration: "none",
            lineHeight: 1,
            transition: "background 240ms var(--ease-out), color 240ms var(--ease-out)",
          }}
        >
          Get in touch
        </Link>
      </div>

      <style>{`
        .nav-cta:hover { background: var(--color-bg) !important; color: #111111 !important; }
        @media (max-width: 820px) {
          .nav-toggle { display: inline-flex !important; }
          .nav-links {
            position: absolute;
            top: 100%;
            left: 0; right: 0;
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 1rem !important;
            margin: 0 !important;
            padding: 1.75rem 1.5rem 2rem;
            background: var(--color-bg);
            border-top: 1px solid var(--color-rule);
            border-bottom: 1px solid var(--color-rule);
            visibility: hidden;
            opacity: 0;
            transform: translateY(-8px);
            transition: opacity 280ms var(--ease-out), transform 280ms var(--ease-out), visibility 0s linear 280ms;
          }
          .nav-links--open {
            visibility: visible !important;
            opacity: 1 !important;
            transform: translateY(0) !important;
            transition: opacity 280ms var(--ease-out), transform 280ms var(--ease-out), visibility 0s linear 0s !important;
          }
          .nav-links .nav-cta { justify-content: center; height: 44px; padding: 0 1.25rem; }
        }
      `}</style>
    </nav>
  );
}

function NavStar({ color = "var(--color-text-faint)" }: { color?: string }) {
  return (
    <svg width="9" height="9" viewBox="0 0 15 15" fill={color} aria-hidden="true" style={{ display: "block", flexShrink: 0 }}>
      <path d="M7.48 0L9.5 5.46L14.97 7.48L9.5 9.51L7.48 14.97L5.46 9.51L0 7.48L5.46 5.46Z" />
    </svg>
  );
}
