import type { Emotion } from "./emotion-map";

export const PHILOSOPHY_THEMES = [
  "무상",
  "현재",
  "자아",
  "흐름",
  "결핍",
  "거리",
  "침묵",
] as const;

export type PhilosophyTheme = (typeof PHILOSOPHY_THEMES)[number];

export const EMOTION_TO_PHILOSOPHY: Record<Emotion, PhilosophyTheme> = {
  집착: "무상",
  불안: "현재",
  비교: "자아",
  상실: "흐름",
  공허: "침묵",
  분노: "거리",
  욕망: "결핍",
  후회: "흐름",
  외로움: "침묵",
};

export function mapEmotionToPhilosophy(emotion: Emotion): PhilosophyTheme {
  return EMOTION_TO_PHILOSOPHY[emotion];
}
