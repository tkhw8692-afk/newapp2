"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  clearFragments,
  formatFragmentTime,
  loadFragments,
  saveFragment,
  type ThoughtFragment,
} from "@/lib/archive";
import {
  CONTEMPLATION_DELAY_MS,
  delay,
  getRitualAction,
  interpret,
} from "@/lib/analyze";
import { WisdomReveal } from "./wisdom-reveal";

export function MeditationApp() {
  const [worry, setWorry] = useState("");
  const [wisdom, setWisdom] = useState<string | null>(null);
  const [isContemplating, setIsContemplating] = useState(false);
  const [showWisdom, setShowWisdom] = useState(false);
  const [revealActive, setRevealActive] = useState(false);
  const [showArchive, setShowArchive] = useState(false);
  const [ambientOn, setAmbientOn] = useState(false);
  const [fragments, setFragments] = useState<ThoughtFragment[]>([]);

  const ritualAction = useMemo(
    () => getRitualAction(worry.trim() || " "),
    [worry],
  );

  useEffect(() => {
    setFragments(loadFragments());
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("meditation-ambient", ambientOn);
    return () => document.documentElement.classList.remove("meditation-ambient");
  }, [ambientOn]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = worry.trim();
    if (!text || isContemplating) return;

    setShowWisdom(false);
    setRevealActive(false);
    setWisdom(null);
    setIsContemplating(true);

    const result = interpret(text);

    await delay(CONTEMPLATION_DELAY_MS);

    setWisdom(result.wisdom);
    setIsContemplating(false);
    setShowWisdom(true);
    setRevealActive(true);

    saveFragment({
      text: result.input,
      wisdom: result.wisdom,
      emotion: result.emotion,
      theme: result.theme,
    });
    setFragments(loadFragments());
  }

  function handleClearArchive() {
    clearFragments();
    setFragments([]);
  }

  return (
    <main className="meditation-room grain paper-texture relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6 py-14 sm:px-8">
      <div
        className="meditation-vignette pointer-events-none absolute inset-0"
        aria-hidden
      />
      <div
        className="meditation-breathe pointer-events-none absolute left-1/2 top-[40%] h-[min(68vw,400px)] w-[min(68vw,400px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,transparent_65%)] blur-3xl"
        aria-hidden
      />

      <div className="absolute right-5 top-5 z-20 flex flex-col items-end gap-3">
        <button
          type="button"
          onClick={() => setAmbientOn((v) => !v)}
          className="meditation-utility font-sans text-[10px] tracking-[0.12em] text-muted/80"
          aria-pressed={ambientOn}
        >
          {ambientOn ? "소리 끄기" : "소리 켜기"}
        </button>
        <button
          type="button"
          onClick={() => setShowArchive((v) => !v)}
          className="meditation-utility font-sans text-[10px] tracking-[0.12em] text-muted/80"
        >
          {showArchive ? "닫기" : "지나간 말"}
        </button>
      </div>

      {showArchive && (
        <aside className="meditation-archive animate-fade-in absolute inset-x-4 top-16 z-20 mx-auto max-h-[42vh] max-w-md overflow-y-auto rounded-sm border border-white/10 bg-black/40 px-5 py-4 backdrop-blur-md">
          {fragments.length === 0 ? (
            <p className="font-display text-center text-[13px] leading-relaxed text-muted">
              아직 남은 말이 없습니다
            </p>
          ) : (
            <ul className="space-y-5">
              {fragments.map((item) => (
                <li
                  key={item.id}
                  className="border-b border-white/[0.06] pb-4 last:border-0"
                >
                  <p className="font-sans text-[10px] tracking-wide text-muted/70">
                    {formatFragmentTime(item.createdAt)}
                  </p>
                  <p className="font-display mt-2 text-[13px] leading-relaxed text-foreground/55 line-clamp-2">
                    {item.text}
                  </p>
                  <p className="font-display mt-2 text-[14px] leading-relaxed text-foreground/75">
                    {item.wisdom}
                  </p>
                </li>
              ))}
            </ul>
          )}
          {fragments.length > 0 && (
            <button
              type="button"
              onClick={handleClearArchive}
              className="meditation-utility mt-5 w-full text-center font-sans text-[10px] tracking-[0.1em] text-muted/60"
            >
              모두 지우기
            </button>
          )}
        </aside>
      )}

      <div className="relative z-10 w-full max-w-md text-center">
        <p className="animate-fade-in mb-6 text-[11px] font-light tracking-[0.16em] text-muted opacity-0">
          익명 · 남지 않음
        </p>

        <div className="relative">
          <div
            className="meditation-title-glow pointer-events-none absolute left-1/2 top-1/2 h-44 w-60 -translate-x-1/2 -translate-y-1/2"
            aria-hidden
          />
          <h1 className="animate-fade-up font-display relative text-[clamp(2.75rem,11vw,4.25rem)] font-normal leading-none tracking-[0.08em] text-foreground opacity-0">
            고요
          </h1>
        </div>

        <p className="animate-fade-up mx-auto mt-5 max-w-[15rem] text-[13px] font-light leading-[1.9] tracking-[0.02em] text-muted opacity-0 [animation-delay:0.18s]">
          마음속 말을 적어보세요
        </p>

        <form
          onSubmit={handleSubmit}
          className="animate-fade-up mt-12 opacity-0 [animation-delay:0.32s]"
        >
          <label htmlFor="worry" className="sr-only">
            마음속 말
          </label>
          <textarea
            id="worry"
            name="worry"
            rows={4}
            value={worry}
            onChange={(e) => setWorry(e.target.value)}
            placeholder="오늘 내려놓지 못한 것을 적어보세요"
            className="meditation-field font-display w-full resize-none rounded-sm px-5 py-5 text-center text-[15px] font-normal leading-[2] tracking-[0.02em] text-foreground outline-none placeholder:text-[13px] placeholder:leading-[1.9] placeholder:tracking-[0.02em] placeholder:text-muted/75"
            disabled={isContemplating}
          />

          <div className="mt-10 flex justify-center">
            <button
              type="submit"
              disabled={!worry.trim() || isContemplating}
              className="meditation-action font-display text-[14px] font-normal tracking-[0.14em] text-foreground/68 disabled:cursor-default disabled:opacity-35"
            >
              {isContemplating ? (
                <span className="meditation-listening text-muted">잠시만요</span>
              ) : (
                <span className="meditation-action-label">
                  {ritualAction}{" "}
                  <span className="meditation-action-arrow">→</span>
                </span>
              )}
            </button>
          </div>
        </form>

        <div
          className="mt-14 min-h-[6.5rem] px-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {isContemplating && (
            <p className="meditation-listening font-display text-[13px] tracking-wide text-muted/55">
              마음을 읽고 있습니다
            </p>
          )}

          {wisdom && showWisdom && (
            <article className="text-center meditation-fade-in">
              {revealActive ? (
                <WisdomReveal
                  text={wisdom}
                  active={revealActive}
                  onComplete={() => setRevealActive(false)}
                />
              ) : (
                <p className="font-display text-[17px] font-normal leading-[2.05] tracking-[0.03em] text-foreground/88 md:text-[18px]">
                  {wisdom}
                </p>
              )}
            </article>
          )}
        </div>
      </div>
    </main>
  );
}
