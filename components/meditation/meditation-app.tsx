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

    await delay(900);
    setWisdom(getMockWisdom(text));
    setIsReleasing(false);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => setCardVisible(true));
    });
  }

  return (
    <main className="meditation-room grain relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6 py-14 sm:px-8">
      <div
        className="meditation-vignette pointer-events-none absolute inset-0"
        aria-hidden
      />
      <div
        className="meditation-breathe pointer-events-none absolute left-1/2 top-[40%] h-[min(68vw,400px)] w-[min(68vw,400px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,transparent_65%)] blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-md text-center">
        <p className="animate-fade-in mb-6 text-[11px] font-light tracking-[0.16em] text-muted opacity-0">
          익명 · 남지 않음
        </p>

        <div className="relative">
          <div
            className="meditation-title-glow pointer-events-none absolute left-1/2 top-1/2 h-40 w-56 -translate-x-1/2 -translate-y-1/2"
            aria-hidden
          />
          <h1 className="animate-fade-up font-display relative text-[clamp(2.75rem,11vw,4.25rem)] font-normal leading-none tracking-[0.08em] text-foreground opacity-0">
            고요
          </h1>
        </div>

        <p className="animate-fade-up mx-auto mt-5 max-w-[15rem] text-[13px] font-light leading-[1.9] tracking-[0.02em] text-muted opacity-0 [animation-delay:0.18s]">
          오늘 내려놓지 못한 것을
          <br />
          적어보세요
        </p>

        <form
          onSubmit={handleSubmit}
          className="animate-fade-up mt-12 opacity-0 [animation-delay:0.32s]"
        >
          <label htmlFor="worry" className="sr-only">
            마음에 남은 말
          </label>
          <textarea
            id="worry"
            name="worry"
            rows={4}
            value={worry}
            onChange={(e) => setWorry(e.target.value)}
            placeholder="무거운 마음을 잠시 내려두세요"
            className="meditation-field font-display w-full resize-none rounded-sm px-5 py-5 text-center text-[15px] font-normal leading-[2] tracking-[0.02em] text-foreground outline-none placeholder:text-[13px] placeholder:leading-[1.9] placeholder:tracking-[0.02em] placeholder:text-muted/70"
            disabled={isReleasing}
          />

          <div className="mt-10 flex justify-center">
            <button
              type="submit"
              disabled={!worry.trim() || isReleasing}
              className="meditation-action font-display text-[14px] font-normal tracking-[0.14em] text-foreground/62 disabled:cursor-default disabled:opacity-35"
            >
              {isReleasing ? (
                <span className="text-muted">잠시만요</span>
              ) : (
                <span className="meditation-action-label">
                  놓아주기 <span className="meditation-action-arrow">→</span>
                </span>
              )}
            </button>
          </div>
        </form>

        <div
          className="mt-14 min-h-[6rem] px-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {wisdom && (
            <article
              className={`text-center ${
                cardVisible ? "meditation-fade-in" : "opacity-0"
              }`}
            >
              <p className="font-display text-[17px] font-normal leading-[2.05] tracking-[0.03em] text-foreground/88 md:text-[18px]">
                {wisdom}
              </p>
            </article>
          )}
        </div>
      </div>
    </main>
  );
}
