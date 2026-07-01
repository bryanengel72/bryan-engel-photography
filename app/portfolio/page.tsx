import type { Metadata } from "next";
import { site } from "@/lib/site";
import { getPhotos } from "@/lib/getPhotos";
import { breadcrumbLd } from "@/lib/breadcrumb";
import Gallery from "@/components/Gallery";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Portfolio",
  description: `Fitness and physique photography portfolio by ${site.name} — bodybuilding, bikini, figure, and men's physique competitors photographed on stage, on location, and in studio.`,
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  const photos = getPhotos();
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-36 lg:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd("/portfolio", "Portfolio")) }}
      />
      <Reveal as="header" className="mb-12 max-w-3xl">
        <p className="eyebrow">Portfolio</p>
        <h1 className="font-display mt-3 text-5xl text-bone sm:text-6xl">
          Athletes at their sharpest
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          A selection of competition, posing, and physique work from my portfolio —
          bodybuilding, bikini, figure, and men&apos;s physique athletes at their sharpest.
          Now based in {site.location.city}, booking local competitors. Tap any image to
          view it full screen.
        </p>
      </Reveal>
      <Gallery photos={photos} />
    </section>
  );
}
