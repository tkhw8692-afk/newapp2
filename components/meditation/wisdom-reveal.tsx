"use client";

import { useEffect, useState } from "react";

type WisdomRevealProps = {
  text: string;
  active: boolean;
  onComplete?: () => void;
};

export function WisdomReveal({ text, active, onComplete }: WisdomRevealProps) {
  const [visible, setVisible] = useState("");

  useEffect(() => {
    if (!active) {
      setVisible("");
      return;
    }

    setVisible("");
    let index = 0;
    const interval = window.setInterval(() => {
      index += 1;
      setVisible(text.slice(0, index));
      if (index >= text.length) {
        window.clearInterval(interval);
        onComplete?.();
      }
    }, 42);

    return () => window.clearInterval(interval);
  }, [text, active, onComplete]);

  if (!active && !visible) return null;

  return (
    <p className="font-display text-[17px] font-normal leading-[2.05] tracking-[0.03em] text-foreground/88 md:text-[18px]">
      {visible}
      {active && visible.length < text.length && (
        <span className="meditation-cursor" aria-hidden>
          │
        </span>
      )}
    </p>
  );
}
