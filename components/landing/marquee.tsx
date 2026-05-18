export function Marquee() {
  const items = [
    "Architectural tailoring",
    "·",
    "Monochrome discipline",
    "·",
    "Stockholm atelier",
    "·",
    "Limited release",
    "·",
  ];

  const track = [...items, ...items];

  return (
    <section className="snap-section flex min-h-[30vh] items-center overflow-hidden border-y border-border bg-black">
      <span className="flex w-max animate-marquee whitespace-nowrap">
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="px-8 font-display text-[clamp(2rem,6vw,5rem)] font-medium tracking-[-0.03em] text-foreground/90"
          >
            {item}
          </span>
        ))}
      </span>
    </section>
  );
}
