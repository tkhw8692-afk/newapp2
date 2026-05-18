import { Nav } from "./nav";
import { Hero } from "./hero";
import { Marquee } from "./marquee";
import { Statement } from "./statement";
import { Collection } from "./collection";
import { Campaign } from "./campaign";
import { Footer } from "./footer";

export function LandingPage() {
  return (
    <span className="grain snap-container block">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Statement />
        <Collection />
        <Campaign />
        <Footer />
      </main>
    </span>
  );
}
