import type { Metadata } from "next";
import { site } from "@/lib/site";
import { getPhotos } from "@/lib/getPhotos";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Portfolio",
  description: `Fitness and physique photography portfolio by ${site.name} — bodybuilding, bikini, figure, and men's physique competitors photographed on stage, on location, and in studio.`,
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  const photos = getPhotos();
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-36 lg:px-10">
      <header className="mb-12 max-w-3xl">
        <p className="eyebrow">Portfolio</p>
        <h1 className="font-display mt-3 text-5xl text-bone sm:text-6xl">
          Athletes at their sharpest
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          A selection of competition, posing, and physique work shot across {site.location.city}{" "}
          and the surrounding area. Tap any image to view it full screen.
        </p>
      </header>
      <Gallery photos={photos} />
    </section>
  );
}
