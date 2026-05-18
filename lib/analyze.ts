import { EMOTION_RULES, type Emotion } from "./emotion-map";
import {
  mapEmotionToPhilosophy,
  type PhilosophyTheme,
} from "./philosophy-map";
import { WISDOM_BY_THEME } from "./wisdoms";

export type EmotionScore = {
  emotion: Emotion;
  score: number;
};

export type Interpretation = {
  input: string;
  emotion: Emotion;
  theme: PhilosophyTheme;
  wisdom: string;
  scores: EmotionScore[];
};

export const CONTEMPLATION_DELAY_MS = 2600;

export const RITUAL_ACTIONS = ["놓아두기", "흘려보내기", "내려두기"] as const;

const DEFAULT_EMOTION: Emotion = "공허";

export function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function normalizeInput(input: string): string {
  return input.trim().replace(/\s+/g, " ");
}

export function scoreEmotions(input: string): EmotionScore[] {
  const normalized = normalizeInput(input);
  const lowered = normalized.toLowerCase();

  const scores = EMOTION_RULES.map((rule) => {
    let score = 0;
    for (const { text, weight } of rule.keywords) {
      if (lowered.includes(text.toLowerCase())) {
        score += weight;
      }
    }
    return { emotion: rule.emotion, score };
  });

  return scores.sort((a, b) => b.score - a.score);
}

export function selectDominantEmotion(
  input: string,
  scores: EmotionScore[],
): Emotion {
  const maxScore = scores[0]?.score ?? 0;
  if (maxScore === 0) return DEFAULT_EMOTION;

  const top = scores.filter((s) => s.score === maxScore);
  if (top.length === 1) return top[0].emotion;

  const seed = hashString(input);
  return top[seed % top.length].emotion;
}

export function selectWisdom(
  input: string,
  theme: PhilosophyTheme,
  emotion: Emotion,
): string {
  const pool = WISDOM_BY_THEME[theme];
  const seed = hashString(`${normalizeInput(input)}:${emotion}:${theme}`);
  return pool[seed % pool.length];
}

export function getRitualAction(input: string): (typeof RITUAL_ACTIONS)[number] {
  const seed = hashString(normalizeInput(input));
  return RITUAL_ACTIONS[seed % RITUAL_ACTIONS.length];
}

export function interpret(input: string): Interpretation {
  const normalized = normalizeInput(input);
  const scores = scoreEmotions(normalized);
  const emotion = selectDominantEmotion(normalized, scores);
  const theme = mapEmotionToPhilosophy(emotion);
  const wisdom = selectWisdom(normalized, theme, emotion);

  return {
    input: normalized,
    emotion,
    theme,
    wisdom,
    scores,
  };
}

export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
