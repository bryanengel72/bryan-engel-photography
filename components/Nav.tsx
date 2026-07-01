"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { site, navLinks } from "@/lib/site";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoOk, setLogoOk] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-ink/90 backdrop-blur-md border-b border-white/5"
          : "bg-gradient-to-b from-black/60 to-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* LOGO — drop a file at public/logo.png to replace this wordmark */}
        <Link href="/" className="flex items-center" aria-label={site.name}>
          {logoOk ? (
            /* White signature logo (public/logo.png). Falls back to the text
               wordmark automatically if the image is ever missing. */
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src="/logo.png"
              alt={site.name}
              className="h-10 w-auto sm:h-11"
              onError={() => setLogoOk(false)}
            />
          ) : (
            <span className="font-display text-2xl tracking-wide text-bone">
              {site.shortName}
              <span className="text-amber">.</span>
            </span>
          )}
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="relative text-sm font-medium uppercase tracking-widest text-muted transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-amber after:transition-all after:duration-300 hover:text-bone hover:after:w-full"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={site.bookingUrl || "/contact"}
              {...(site.bookingUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="rounded-full bg-amber px-5 py-2 text-sm font-semibold uppercase tracking-widest text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-bright hover:shadow-lg hover:shadow-amber/20 active:translate-y-0"
            >
              Book a Shoot
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-bone transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-bone transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-bone transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <ul
          className={`flex min-h-0 flex-col gap-1 overflow-hidden border-t px-6 pb-6 pt-2 transition-[opacity,border-color] duration-200 ${
            open ? "border-white/5 opacity-100" : "border-transparent opacity-0"
          }`}
        >
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-lg font-medium uppercase tracking-widest text-muted hover:text-bone"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={site.bookingUrl || "/contact"}
              {...(site.bookingUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              onClick={() => setOpen(false)}
              className="block rounded-full bg-amber px-5 py-3 text-center text-sm font-semibold uppercase tracking-widest text-ink"
            >
              Book a Shoot
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
