"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isCoarse =
      window.matchMedia("(hover: none)").matches ||
      window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let raf = 0;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const text = textRef.current;

    function onMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot) dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      if (text)
        text.style.transform = `translate3d(${mouseX + 18}px, ${mouseY + 18}px, 0)`;
    }

    function tick() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ring) ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      raf = requestAnimationFrame(tick);
    }

    function over(e: MouseEvent) {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const interactive = t.closest("a, button, [data-cursor]");
      if (!interactive) {
        document.documentElement.classList.remove("cursor-active");
        if (text) text.classList.remove("is-on");
        if (text) text.textContent = "";
        return;
      }
      document.documentElement.classList.add("cursor-active");
      const label = (interactive as HTMLElement).getAttribute("data-cursor");
      if (label && text) {
        text.textContent = label;
        text.classList.add("is-on");
      } else if (text) {
        text.classList.remove("is-on");
        text.textContent = "";
      }
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", over);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", over);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("cursor-active");
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={textRef} className="cursor-text" aria-hidden="true" />
    </>
  );
}
