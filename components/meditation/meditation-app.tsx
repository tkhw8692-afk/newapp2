"use client";

import { FormEvent, useState } from "react";
import { delay, getMockWisdom } from "@/lib/meditation/mock-wisdom";

export function MeditationApp() {
  const [worry, setWorry] = useState("");
  const [wisdom, setWisdom] = useState<string | null>(null);
  const [isReleasing, setIsReleasing] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = worry.trim();
    if (!text || isReleasing) return;

    setCardVisible(false);
    setIsReleasing(true);

    await delay(720);
    setWisdom(getMockWisdom(text));
    setIsReleasing(false);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => setCardVisible(true));
    });
  }

  return (
    <main className="grain relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6 py-16">
      <div
        className="pointer-events-none absolute left-1/2 top-[38%] h-[min(90vw,520px)] w-[min(90vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.07)_0%,transparent_70%)] blur-2xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[-10%] right-[-5%] h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(120,120,120,0.04)_0%,transparent_72%)] blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-lg text-center">
        <p className="animate-fade-in mb-4 text-[10px] uppercase tracking-[0.42em] text-muted opacity-0">
          Anonymous · Unstored
        </p>
        <h1 className="animate-fade-up font-display text-[clamp(2.25rem,8vw,3.75rem)] font-light leading-[1.05] tracking-[-0.03em] text-foreground opacity-0">
          Release
        </h1>
        <p className="animate-fade-up mx-auto mt-5 max-w-sm text-sm leading-relaxed text-muted opacity-0 [animation-delay:0.15s]">
          Write what weighs on you. Receive a quiet word in return.
        </p>

        <form
          onSubmit={handleSubmit}
          className="animate-fade-up mt-14 space-y-6 opacity-0 [animation-delay:0.28s]"
        >
          <label htmlFor="worry" className="sr-only">
            Your worry
          </label>
          <textarea
            id="worry"
            name="worry"
            rows={5}
            value={worry}
            onChange={(e) => setWorry(e.target.value)}
            placeholder="What rests heavy on your heart tonight?"
            className="meditation-glow-field w-full resize-none rounded-sm border border-white/[0.08] bg-white/[0.02] px-5 py-4 text-center text-[15px] leading-relaxed text-foreground/90 placeholder:text-muted/70 outline-none transition-[border-color,box-shadow] duration-700 focus:border-white/20"
            disabled={isReleasing}
          />

          <button
            type="submit"
            disabled={!worry.trim() || isReleasing}
            className="group relative mx-auto flex items-center justify-center gap-3 px-8 py-3 text-[11px] uppercase tracking-[0.32em] text-foreground transition-opacity duration-500 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <span className="absolute inset-0 rounded-sm bg-white/[0.04] opacity-0 blur-md transition-opacity duration-700 group-hover:opacity-100 group-enabled:group-hover:opacity-100" />
            <span className="relative border-b border-foreground/25 pb-0.5 transition-[border-color,padding] duration-500 group-hover:border-foreground/60 group-enabled:group-hover:pb-1">
              {isReleasing ? "Listening…" : "Release"}
            </span>
          </button>
        </form>

        <div
          className="mt-12 min-h-[9rem]"
          aria-live="polite"
          aria-atomic="true"
        >
          {wisdom && (
            <article
              className={`meditation-response-card rounded-sm border border-white/[0.06] bg-white/[0.02] px-8 py-10 text-left shadow-[0_0_80px_rgba(255,255,255,0.03)] ${
                cardVisible ? "meditation-fade-in" : "opacity-0"
              }`}
            >
              <p className="font-display text-xl font-light italic leading-[1.65] tracking-[0.01em] text-foreground/95 md:text-2xl">
                {wisdom}
              </p>
              <p className="mt-8 text-[10px] uppercase tracking-[0.28em] text-muted">
                — a quiet teaching
              </p>
            </article>
          )}
        </div>
      </div>
    </main>
  );
}
