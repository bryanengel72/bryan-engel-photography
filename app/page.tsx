import Link from "next/link";
import { site } from "@/lib/site";
import { getPhotos } from "@/lib/getPhotos";
import Gallery from "@/components/Gallery";
import Reveal from "@/components/Reveal";
import FadeImage from "@/components/FadeImage";

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
    title: "Off-Stage Sessions",
    body: "No stage, no strict poses — just you, your physique, and clothes you'd actually wear. A relaxed shoot to show off the work outside of competition.",
  },
];

const testimonials = [
  {
    quote:
      "Bryan was very professional and his photos were so good. He captured my physique exactly how I wanted and made the whole experience easy.",
    name: "Michelle",
  },
  {
    quote:
      "I’ve shot with Bryan multiple times for a reason: he’s good, artistic, and knows how to bring out the best angles and lighting.",
    name: "Jill",
  },
  {
    quote:
      "I call Bryan every year to do photos because I really enjoy working with him. The sessions are relaxed, and the images always come out sharp and polished.",
    name: "Kat",
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
        <FadeImage
          src={heroSrc}
          alt={`${site.name} — fitness and physique competition photography in ${site.location.city}`}
          fill
          priority
          sizes="100vw"
          className="animate-kenburns object-cover object-center"
        />
        <div className="absolute inset-0 vignette" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/40 to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pt-24 lg:px-10">
          <p
            className="eyebrow animate-hero-in mb-5"
            style={{ animationDelay: "0ms" }}
          >
            {site.location.city} · {site.location.regionFull}
          </p>
          <h1
            className="font-display animate-hero-in max-w-3xl text-6xl text-bone drop-shadow-[0_4px_18px_rgba(0,0,0,0.55)] sm:text-7xl lg:text-8xl"
            style={{ letterSpacing: "-0.02em", animationDelay: "80ms" }}
          >
            Built for the athletes
            <br />
            <span className="text-amber">who step on stage.</span>
          </h1>
          <p
            className="animate-hero-in mt-6 max-w-xl text-lg leading-relaxed text-bone/80"
            style={{ animationDelay: "180ms" }}
          >
            {site.description}
          </p>
          <div
            className="animate-hero-in mt-9 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "280ms" }}
          >
            <Link
              href="/contact"
              className="rounded-full bg-amber px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-bright hover:shadow-lg hover:shadow-amber/20 active:translate-y-0"
            >
              Book Your Shoot
            </Link>
            <Link
              href="/portfolio"
              className="rounded-full border border-bone/25 px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-bone transition-all duration-300 hover:-translate-y-0.5 hover:border-bone hover:bg-bone/5 active:translate-y-0"
            >
              View Portfolio
            </Link>
          </div>
          <p
            className="animate-hero-in mt-6 text-xs font-semibold uppercase tracking-widest text-bone/50"
            style={{ animationDelay: "360ms" }}
          >
            12 years photographing competitors
          </p>
        </div>

        <div className="absolute inset-x-0 bottom-8 hidden justify-center sm:flex">
          <div className="animate-scroll-cue flex flex-col items-center gap-2 text-bone/50">
            <span className="text-[10px] font-semibold uppercase tracking-widest">
              Scroll
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 5L8 11L14 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <Reveal as="section" className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-10">
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
      </Reveal>

      {/* FEATURED GALLERY */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <Reveal className="mb-10 flex items-end justify-between">
          <div>
            <p className="eyebrow">Selected Work</p>
            <h2 className="font-display mt-2 text-4xl text-bone sm:text-5xl">Recent shoots</h2>
          </div>
          <Link
            href="/portfolio"
            className="group hidden text-sm font-semibold uppercase tracking-widest text-amber transition-colors hover:text-amber-bright sm:block"
          >
            See all{" "}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
        <Gallery photos={featured} />
        <div className="mt-10 text-center sm:hidden">
          <Link href="/portfolio" className="group text-sm font-semibold uppercase tracking-widest text-amber">
            See full portfolio{" "}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS — placeholder copy, swap in real client quotes */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <Reveal>
          <p className="eyebrow text-center">What Athletes Say</p>
          <h2 className="font-display mt-2 text-center text-4xl text-bone sm:text-5xl">
            Trusted by competitors
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 100} className="rounded-2xl border border-white/5 bg-stone p-8">
              <p className="leading-relaxed text-bone/80">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-amber">
                {t.name}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-y border-white/5 bg-charcoal">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <Reveal>
            <p className="eyebrow text-center">What I Shoot</p>
            <h2 className="font-display mt-2 text-center text-4xl text-bone sm:text-5xl">
              Built for competitors
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 100} className="rounded-2xl border border-white/5 bg-stone p-8">
                <h3 className="font-display text-2xl text-amber">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <Link
              href="/services"
              className="rounded-full border border-bone/25 px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-bone transition-all duration-300 hover:-translate-y-0.5 hover:border-bone hover:bg-bone/5 active:translate-y-0"
            >
              Explore Services & Pricing
            </Link>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <Reveal>
          <p className="eyebrow text-center">How It Works</p>
          <h2 className="font-display mt-2 text-center text-4xl text-bone sm:text-5xl">
            Simple from consult to gallery
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100} className="text-center">
              <p className="font-display text-6xl text-white/10">{s.n}</p>
              <h3 className="font-display -mt-6 text-2xl text-bone">{s.t}</h3>
              <p className="mt-3 leading-relaxed text-muted">{s.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 bg-charcoal">
        <Reveal className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-10">
          <h2 className="font-display text-5xl text-bone sm:text-6xl">
            Stepping on stage soon?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
            Peak-week dates fill fast. Let&apos;s lock in your shoot and make sure your best
            condition is documented at its sharpest.
          </p>
          <Link
            href="/contact"
            className="mt-9 inline-block rounded-full bg-amber px-10 py-4 text-sm font-semibold uppercase tracking-widest text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-bright hover:shadow-lg hover:shadow-amber/20 active:translate-y-0"
          >
            Get in Touch
          </Link>
        </Reveal>
      </section>
    </>
  );
}
