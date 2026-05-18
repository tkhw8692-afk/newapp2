import { Reveal } from "./reveal";

const pieces = [
  {
    id: "01",
    name: "Void Coat",
    detail: "Double-faced wool · Ink black",
    gradient: "from-zinc-900 via-black to-black",
  },
  {
    id: "02",
    name: "Column Trouser",
    detail: "Raw silk blend · Graphite",
    gradient: "from-neutral-800 via-zinc-950 to-black",
  },
  {
    id: "03",
    name: "Arc Shirt",
    detail: "Japanese cotton · Chalk white",
    gradient: "from-zinc-700 via-zinc-900 to-black",
  },
];

export function Collection() {
  return (
    <section
      id="collection"
      className="snap-section min-h-dvh px-6 py-24 md:px-12"
    >
      <Reveal>
        <p className="text-[11px] uppercase tracking-[0.35em] text-muted">
          Collection 01
        </p>
        <h2 className="mt-4 font-display text-[clamp(2.5rem,8vw,7rem)] font-medium tracking-[-0.03em] text-foreground">
          The edit
        </h2>
      </Reveal>

      <ul className="mt-16 grid gap-px md:mt-24 md:grid-cols-3">
        {pieces.map((piece, index) => (
          <li key={piece.id}>
            <Reveal delay={(index + 1) as 1 | 2 | 3}>
              <article className="group relative flex min-h-[52vh] flex-col justify-between overflow-hidden bg-zinc-950 p-8 transition-colors duration-700 hover:bg-zinc-900 md:min-h-[68vh]">
                <span
                  className={`absolute inset-0 bg-gradient-to-b ${piece.gradient} opacity-80 transition-opacity duration-700 group-hover:opacity-100`}
                  aria-hidden
                />
                <span className="relative z-10 text-[11px] tracking-[0.3em] text-muted">
                  {piece.id}
                </span>
                <span className="relative z-10">
                  <h3 className="font-display text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                    {piece.name}
                  </h3>
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted">
                    {piece.detail}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-foreground opacity-0 transition-all duration-500 group-hover:opacity-100">
                    View piece
                    <span className="transition-transform duration-500 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </span>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
