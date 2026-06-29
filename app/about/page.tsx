import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Meet ${site.name} — a ${site.location.city} fitness and physique photographer specializing in competition and stage athletes.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-36 lg:px-10">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl img-fallback">
          {/* Swap this for a portrait of yourself: drop it in public/images/ and update the src */}
          <Image
            src="/images/portfolio/photo-04.jpg"
            alt={`${site.name} — fitness photographer in ${site.location.city}`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="eyebrow">About</p>
          <h1 className="font-display mt-3 text-5xl text-bone sm:text-6xl">
            I photograph the payoff
          </h1>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
            <p>
              I&apos;m Bryan Engel, an experienced fitness and physique photographer now based
              in {site.location.city}, {site.location.regionFull}. I work with the athletes most
              photographers overlook — the ones who diet for sixteen weeks, train before
              sunrise, and walk on stage to be judged on every detail.
            </p>
            <p>
              My job is to light and frame that conditioning so it reads the way it does
              under the stage lights: the separation, the lines, the symmetry you earned.
              Whether you compete in bodybuilding, bikini, figure, wellness, or men&apos;s
              physique, I shoot the poses you actually present, so the images mean something
              to you and to the judges, coaches, and sponsors who see them.
            </p>
            <p>
              Shoots are relaxed but purposeful — I&apos;ll coach you through posing and
              timing, and you&apos;ll leave with a gallery that does your prep justice.
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-9 inline-block rounded-full bg-amber px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-ink transition-colors hover:bg-amber-bright"
          >
            Work With Me
          </Link>
        </div>
      </div>
    </section>
  );
}
