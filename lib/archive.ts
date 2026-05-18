import type { Emotion } from "./emotion-map";
import type { PhilosophyTheme } from "./philosophy-map";

export type ThoughtFragment = {
  id: string;
  text: string;
  wisdom: string;
  emotion: Emotion;
  theme: PhilosophyTheme;
  createdAt: string;
};

const STORAGE_KEY = "goyo-fragments";
const MAX_FRAGMENTS = 24;

export function loadFragments(): ThoughtFragment[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as ThoughtFragment[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveFragment(fragment: Omit<ThoughtFragment, "id" | "createdAt">) {
  if (typeof window === "undefined") return;
  const entry: ThoughtFragment = {
    ...fragment,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  const next = [entry, ...loadFragments()].slice(0, MAX_FRAGMENTS);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
}

export function clearFragments() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}

export function formatFragmentTime(iso: string): string {
  const date = new Date(iso);
  return date.toLocaleString("ko-KR", {
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}
