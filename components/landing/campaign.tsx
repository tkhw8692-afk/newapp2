import { Reveal } from "./reveal";

export function Campaign() {
  return (
    <section
      id="campaign"
      className="snap-section relative flex min-h-dvh items-center justify-center overflow-hidden"
    >
      <span
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04)_0%,transparent_55%),linear-gradient(180deg,#0a0a0a,#000)]"
        aria-hidden
      />

      <span className="absolute inset-0 opacity-[0.12] [background-image:repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.03)_2px,rgba(255,255,255,0.03)_3px)]" />

      <Reveal className="relative z-10 px-6 text-center md:px-12">
        <p className="text-[11px] uppercase tracking-[0.35em] text-muted">
          Film 04 — Night Sequence
        </p>
        <h2 className="mt-8 font-display text-[clamp(3rem,12vw,10rem)] font-medium leading-[0.88] tracking-[-0.04em] text-foreground">
          After
          <br />
          midnight
        </h2>
        <p className="mx-auto mt-8 max-w-lg text-sm leading-relaxed text-muted">
          Shot on 35mm across empty boulevards. Movement slowed to the rhythm of
          breath. Watch the full campaign.
        </p>
        <button
          type="button"
          className="group mt-12 inline-flex h-14 items-center gap-4 border border-foreground/20 px-10 text-[11px] uppercase tracking-[0.28em] text-foreground transition-all duration-500 hover:border-foreground hover:bg-foreground hover:text-black"
        >
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-current">
            <svg
              viewBox="0 0 24 24"
              className="ml-0.5 h-2.5 w-2.5 fill-current transition-transform duration-500 group-hover:scale-110"
              aria-hidden
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          Play film
        </button>
      </Reveal>
    </section>
  );
}
