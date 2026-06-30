import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { getPhotos } from "@/lib/getPhotos";
import Gallery from "@/components/Gallery";

const services = [
  {
    title: "Competition Prep",
    body: "Document your conditioning through peak week — the proof of every 5am session and weighed meal.",
  },
  {
    title: "Stage-Ready Portfolio",
    body: "Polished images for your coach, your sponsors, and your athlete profile across socials.",
  },
  {
    title: "Posing Sessions",
    body: "Lighting that reveals your lines. I shoot the poses you compete in, so you see exactly what the judges will.",
  },
];

const steps = [
  { n: "01", t: "Consult", d: "We talk goals, division, and the look you're after." },
  { n: "02", t: "Shoot", d: "On location or in studio, timed around your peak." },
  { n: "03", t: "Deliver", d: "Hand-edited, high-resolution galleries ready to post." },
];

export default function Home() {
  const photos = getPhotos();
  const featured = photos.slice(0, 6);
  const heroSrc = photos[0]?.src ?? "/images/portfolio/photo-01.jpg";

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <Image
          src={heroSrc}
          alt={`${site.name} — fitness and physique competition photography in ${site.location.city}`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 vignette" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/40 to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pt-24 lg:px-10">
          <p className="eyebrow mb-5">{site.location.city} · {site.location.regionFull}</p>
          <h1 className="font-display max-w-3xl text-6xl text-bone sm:text-7xl lg:text-8xl">
            Photography for athletes
            <br />
            <span className="text-amber">who step on stage.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-bone/80">
            {site.description}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-amber px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-ink transition-colors hover:bg-amber-bright"
            >
              Book Your Shoot
            </Link>
            <Link
              href="/portfolio"
              className="rounded-full border border-bone/25 px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-bone transition-colors hover:border-bone hover:bg-bone/5"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-10">
        <p className="eyebrow">Bryan Engel Photography</p>
        <h2 className="font-display mt-4 text-4xl text-bone sm:text-5xl">
          The conditioning is the hard part.
          <br />
          Capturing it shouldn&apos;t be.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          You spent months dieting, training, and dialing in your posing for a few minutes
          under the lights. I make sure that work lives on in images worthy of it — whether
          you compete in bodybuilding, bikini, figure, wellness, or men&apos;s physique.
        </p>
      </section>

      {/* FEATURED GALLERY */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="eyebrow">Selected Work</p>
            <h2 className="font-display mt-2 text-4xl text-bone sm:text-5xl">Recent shoots</h2>
          </div>
          <Link
            href="/portfolio"
            className="hidden text-sm font-semibold uppercase tracking-widest text-amber transition-colors hover:text-amber-bright sm:block"
          >
            See all →
          </Link>
        </div>
        <Gallery photos={featured} />
        <div className="mt-10 text-center sm:hidden">
          <Link href="/portfolio" className="text-sm font-semibold uppercase tracking-widest text-amber">
            See full portfolio →
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-y border-white/5 bg-charcoal">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <p className="eyebrow text-center">What I Shoot</p>
          <h2 className="font-display mt-2 text-center text-4xl text-bone sm:text-5xl">
            Built for competitors
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl border border-white/5 bg-stone p-8">
                <h3 className="font-display text-2xl text-amber">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="rounded-full border border-bone/25 px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-bone transition-colors hover:border-bone hover:bg-bone/5"
            >
              Explore Services & Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <p className="eyebrow text-center">How It Works</p>
        <h2 className="font-display mt-2 text-center text-4xl text-bone sm:text-5xl">
          Simple from consult to gallery
        </h2>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="text-center">
              <p className="font-display text-6xl text-white/10">{s.n}</p>
              <h3 className="font-display -mt-6 text-2xl text-bone">{s.t}</h3>
              <p className="mt-3 leading-relaxed text-muted">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 bg-charcoal">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-10">
          <h2 className="font-display text-5xl text-bone sm:text-6xl">
            Stepping on stage soon?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
            Peak-week dates fill fast. Let&apos;s lock in your shoot and make sure your best
            condition is documented at its sharpest.
          </p>
          <Link
            href="/contact"
            className="mt-9 inline-block rounded-full bg-amber px-10 py-4 text-sm font-semibold uppercase tracking-widest text-ink transition-colors hover:bg-amber-bright"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
