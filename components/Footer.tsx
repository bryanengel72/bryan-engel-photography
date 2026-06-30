import Link from "next/link";
import { site, navLinks } from "@/lib/site";

export default function Footer() {
  const year = 2026;
  const socials = Object.entries(site.social).filter(([, url]) => url);

  return (
    <footer className="border-t border-white/5 bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt={site.name} className="h-12 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {site.tagline} based in {site.location.city}, {site.location.region}.
              Serving competitors across {site.location.serviceAreas.slice(0, 4).join(", ")} and beyond.
            </p>
          </div>

          <div>
            <p className="eyebrow">Explore</p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-muted transition-colors hover:text-bone">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Get in touch</p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>
                <a href={`mailto:${site.contact.email}`} className="transition-colors hover:text-bone">
                  {site.contact.email}
                </a>
              </li>
              {site.contact.phone && (
                <li>
                  <a href={`tel:${site.contact.phone}`} className="transition-colors hover:text-bone">
                    {site.contact.phone}
                  </a>
                </li>
              )}
            </ul>
            {socials.length > 0 && (
              <ul className="mt-4 flex gap-4">
                {socials.map(([name, url]) => (
                  <li key={name}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold uppercase tracking-widest text-muted transition-colors hover:text-amber"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/5 pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
