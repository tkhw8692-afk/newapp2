import { Reveal } from "./reveal";

export function Statement() {
  return (
    <section
      id="atelier"
      className="snap-section flex min-h-dvh items-center px-6 py-24 md:px-12"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-16 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-4">
          <p className="text-[11px] uppercase tracking-[0.35em] text-muted">
            Manifesto
          </p>
        </Reveal>

        <Reveal className="md:col-span-8" delay={1}>
          <h2 className="font-display text-[clamp(2.25rem,7vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.03em] text-foreground">
            We design for the edge of perception — garments that disappear into
            silhouette until light finds them.
          </h2>
        </Reveal>

        <Reveal className="md:col-span-4 md:col-start-5" delay={2}>
          <p className="mt-4 text-sm leading-[1.9] text-muted">
            Inspired by the restraint of Nordic minimalism and the cinematic
            pacing of modern luxury, each piece is cut once, finished by hand,
            and released in numbered editions.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
