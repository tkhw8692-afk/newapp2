"use client";

import { useEffect, useRef } from "react";

export function Hero() {
  const glowRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 24;
      const y = (e.clientY / window.innerHeight - 0.5) * 24;
      glow.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="snap-section relative flex min-h-dvh flex-col justify-end overflow-hidden px-6 pb-16 pt-28 md:px-12 md:pb-24">
      <span
        ref={glowRef}
        className="pointer-events-none absolute left-1/2 top-1/3 block h-[min(80vw,640px)] w-[min(80vw,640px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06)_0%,transparent_68%)] transition-transform duration-[1.8s] ease-out"
        aria-hidden
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,#000_92%)]" />

      <p className="animate-fade-in relative z-10 mb-6 text-[11px] uppercase tracking-[0.35em] text-muted opacity-0">
        Spring / Summer 2026
      </p>

      <h1 className="animate-fade-up relative z-10 font-display text-[clamp(3.5rem,16vw,13rem)] font-medium leading-[0.85] tracking-[-0.04em] text-foreground opacity-0">
        Silence
        <br />
        <span className="text-muted">in form</span>
      </h1>

      <div
        className="animate-line-grow relative z-10 mt-10 h-px w-24 bg-foreground/30 opacity-0"
        aria-hidden
      />

      <p className="animate-fade-up relative z-10 mt-10 max-w-md text-sm leading-relaxed text-muted opacity-0 [animation-delay:0.35s]">
        Sculpted silhouettes. Obsidian palettes. A wardrobe distilled to
        essential tension between structure and void.
      </p>

      <a
        href="#collection"
        className="animate-fade-up group relative z-10 mt-14 inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.28em] text-foreground opacity-0 [animation-delay:0.5s]"
      >
        Explore collection
        <span className="inline-block transition-transform duration-500 group-hover:translate-x-2">
          →
        </span>
      </a>

      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted">
          Scroll
        </span>
        <span className="block h-10 w-px bg-foreground/20">
          <span className="animate-scroll-hint mx-auto block h-3 w-px bg-foreground" />
        </span>
      </div>
    </section>
  );
}
