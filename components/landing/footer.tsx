"use client";

import { Reveal } from "./reveal";

export function Footer() {
  return (
    <footer
      id="newsletter"
      className="snap-section flex min-h-dvh flex-col justify-between px-6 py-16 md:px-12 md:py-20"
    >
      <Reveal>
        <p className="text-[11px] uppercase tracking-[0.35em] text-muted">
          Private list
        </p>
        <h2 className="mt-6 max-w-3xl font-display text-[clamp(2.5rem,7vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.03em]">
          Enter before the next drop closes.
        </h2>
      </Reveal>

      <Reveal delay={1}>
        <form
          className="mt-16 flex max-w-xl flex-col gap-6 border-t border-border pt-10 md:flex-row md:items-end"
          onSubmit={(e) => e.preventDefault()}
        >
          <label className="flex-1">
            <span className="sr-only">Email address</span>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full border-b border-border bg-transparent pb-3 text-sm text-foreground outline-none transition-colors duration-500 placeholder:text-muted focus:border-foreground"
            />
          </label>
          <button
            type="submit"
            className="h-12 shrink-0 px-8 text-[11px] uppercase tracking-[0.28em] text-foreground transition-opacity duration-500 hover:opacity-60"
          >
            Request access
          </button>
        </form>
      </Reveal>

      <span className="mt-auto flex flex-col gap-10 border-t border-border pt-10 md:flex-row md:items-end md:justify-between">
        <span className="font-display text-sm tracking-[0.35em]">NOIR</span>
        <span className="flex flex-wrap gap-8 text-[11px] uppercase tracking-[0.22em] text-muted">
          <a href="#" className="hover-line transition-colors hover:text-foreground">
            Instagram
          </a>
          <a href="#" className="hover-line transition-colors hover:text-foreground">
            Stockists
          </a>
          <a href="#" className="hover-line transition-colors hover:text-foreground">
            Legal
          </a>
        </span>
        <span className="text-[11px] tracking-[0.15em] text-muted">
          © 2026 NOIR Studio
        </span>
      </span>
    </footer>
  );
}
