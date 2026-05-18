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
    <main className="meditation-room grain relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-8 py-24">
      <div
        className="meditation-vignette pointer-events-none absolute inset-0"
        aria-hidden
      />
      <div
        className="meditation-breathe pointer-events-none absolute left-1/2 top-[42%] h-[min(72vw,440px)] w-[min(72vw,440px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.045)_0%,transparent_68%)] blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-md text-center">
        <p className="animate-fade-in mb-10 text-[11px] font-light tracking-[0.2em] text-muted/55 opacity-0">
          익명 · 남지 않음
        </p>

        <h1 className="animate-fade-up font-display text-[clamp(2.75rem,11vw,4.5rem)] font-extralight leading-none tracking-[0.12em] text-foreground/92 opacity-0">
          고요
        </h1>

        <p className="animate-fade-up mx-auto mt-8 max-w-[16rem] text-[13px] font-light leading-[2] tracking-wide text-muted/65 opacity-0 [animation-delay:0.18s]">
          오늘 내려놓지 못한 것을
          <br />
          적어보세요
        </p>

        <form
          onSubmit={handleSubmit}
          className="animate-fade-up mt-20 opacity-0 [animation-delay:0.32s]"
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
            className="meditation-field font-display w-full resize-none bg-transparent px-2 py-3 text-center text-[15px] font-light leading-[2.1] tracking-wide text-foreground/75 outline-none placeholder:text-[12px] placeholder:font-light placeholder:leading-[2] placeholder:tracking-wide placeholder:text-muted/35"
            disabled={isReleasing}
          />

          <div className="mt-16 flex justify-center">
            <button
              type="submit"
              disabled={!worry.trim() || isReleasing}
              className="meditation-action font-display text-[13px] font-light tracking-[0.18em] text-foreground/45 transition-[color,opacity,letter-spacing] duration-[1.2s] ease-out hover:text-foreground/72 disabled:cursor-default disabled:opacity-20"
            >
              {isReleasing ? (
                <span className="text-muted/40">잠시만요</span>
              ) : (
                <span>
                  놓아주기 <span className="inline-block transition-transform duration-[1.2s] ease-out">→</span>
                </span>
              )}
            </button>
          </div>
        </form>

        <div
          className="mt-20 min-h-[7rem] px-2"
          aria-live="polite"
          aria-atomic="true"
        >
          {wisdom && (
            <article
              className={`text-center ${
                cardVisible ? "meditation-fade-in" : "opacity-0"
              }`}
            >
              <p className="font-display text-[17px] font-extralight leading-[2.15] tracking-[0.04em] text-foreground/78 md:text-[19px]">
                {wisdom}
              </p>
            </article>
          )}
        </div>
      </div>
    </main>
  );
}
