const WISDOM = [
  "The mind that grasps at thunder has already heard the rain pass. What you fear is often the echo, not the storm.",
  "A cup cannot receive fresh tea while it remains full of yesterday. Empty yourself gently — not through force, but through breath.",
  "The lotus does not argue with the mud. From darkness it rises, unhurried, without asking why the water was cold.",
  "You are not the thought crossing the sky of your awareness. You are the sky — wide enough to let it pass.",
  "When the hand tightens around the thorn, we call it pain. When it opens, we call it wisdom. Both were always yours to choose.",
  "The candle does not fight the wind. It leans, flickers, and continues. So may you bend without believing you have broken.",
  "What you carry is not the stone — only the thought of its weight. Set it down for one breath. Notice who remains.",
  "Still water reflects the moon perfectly. Agitated water shatters the image into a thousand pieces. Be still, even for a moment.",
  "The path is not behind you nor ahead. It is the step you are taking now, soft as fallen snow, leaving no demand to be remembered.",
  "Suffering often asks to be solved. Sometimes it only asks to be witnessed — the way one witnesses dawn without owning the sun.",
  "A bird does not sing because it has an answer. It sings because it has a voice. Let your worry be heard, then let it fly.",
  "The forest grows in silence. No tree announces its becoming. Trust what grows in you without applause.",
  "Anger is smoke; beneath it, a small ember of fear or sorrow. Breathe until you can see the ember. Then offer it kindness.",
  "You have survived every difficult hour until this one. That is not a small thing. The mountain, too, was once only dust.",
  "Release is not forgetting. It is loosening your grip so memory may sit beside you, no longer standing on your chest.",
] as const;

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function getMockWisdom(worry: string): string {
  const trimmed = worry.trim();
  if (!trimmed) return WISDOM[0];

  const index = hashString(trimmed) % WISDOM.length;
  return WISDOM[index];
}

export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
