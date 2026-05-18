"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Collection", href: "#collection" },
  { label: "Campaign", href: "#campaign" },
  { label: "Atelier", href: "#atelier" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-6 transition-all duration-700 md:px-12 ${
        scrolled
          ? "border-b border-border bg-black/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <a
        href="#"
        className="font-display text-sm font-medium tracking-[0.35em] text-foreground"
      >
        NOIR
      </a>

      <nav className="hidden items-center gap-10 md:flex">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover-line text-[11px] uppercase tracking-[0.22em] text-muted transition-colors duration-500 hover:text-foreground"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a
        href="#newsletter"
        className="text-[11px] uppercase tracking-[0.22em] text-foreground transition-opacity duration-500 hover:opacity-60"
      >
        Enter
      </a>
    </header>
  );
}
