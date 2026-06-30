import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description: `Fitness photography services from ${site.name}: editorial athlete portraits, physique sessions, and brand content for bodybuilding, bikini, figure, and men's physique athletes in ${site.location.city}.`,
  alternates: { canonical: "/services" },
};

const packages = [
  {
    name: "The Portrait",
    price: "Starting at $250",
    summary: "One hour, one location, one look. A focused session that captures where you are right now.",
    features: [
      "60-minute session",
      "1 location, 1 outfit",
      "5+ hand-edited high-res images",
      "Online gallery + social-ready crops",
    ],
  },
  {
    name: "The Session",
    price: "Starting at $450",
    summary: "The full picture. Multiple looks and locations that show the real work behind the physique.",
    features: [
      "2–3 hour session",
      "1–2 locations, multiple outfit changes",
      "10+ hand-edited high-res images",
      "Print release for personal use",
      "48-hour preview turnaround",
    ],
    featured: true,
  },
  {
    name: "The Campaign",
    price: "Let's talk",
    summary: "A half or full-day shoot built for coaches, personal trainers, and athletes with a brand to grow.",
    features: [
      "Half or full-day shoot",
      "Multiple locations and looks",
      "50+ hand-edited high-res images",
      "Usage licensing for brands & sponsors",
      "Optional short-form video clips",
    ],
  },
];

const faqs = [
  {
    q: "Do I need to be stage-ready to shoot?",
    a: "No — and that's kind of the point. These sessions are about documenting the real you: the athlete who shows up to the gym every day, not just the version that steps on stage. You can shoot mid-prep, off-season, or right around a show. The physique you've built tells a story at any point in the year.",
  },
  {
    q: "What do I wear?",
    a: "Your own clothes — whatever you'd actually train or live in. Joggers, a fitted hoodie, a sports bra, jeans. We're not working with competition suits or mandatories here. The goal is to show your conditioning through clothing and environment, not in spite of it.",
  },
  {
    q: "Where do we shoot?",
    a: "Studio, urban, industrial, outdoor — wherever fits your personality. San Diego has great variety: concrete and architecture downtown, natural light along the coast, gyms if that's your world. We'll figure out what works for your look before the shoot.",
  },
  {
    q: "When should we schedule relative to my show?",
    a: "Two weeks out or a couple of days after are both great windows if you want peak conditioning. But you don't have to be show-ready — these sessions work year-round. Reach out whenever feels right and we'll find a date.",
  },
];

export default function ServicesPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-36 lg:px-10">
        <header className="mb-14 max-w-3xl">
          <p className="eyebrow">Services</p>
          <h1 className="font-display mt-3 text-5xl text-bone sm:text-6xl">
            Sessions for athletes who put in the work
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            No stage suits, no mandatory poses. Just you, your own clothes, and the
            physique you&apos;ve earned. Pricing below is a starting point — reach out
            and I&apos;ll put together something that fits.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col rounded-2xl border p-8 ${
                p.featured
                  ? "border-amber/50 bg-stone ring-1 ring-amber/30"
                  : "border-white/5 bg-charcoal"
              }`}
            >
              {p.featured && (
                <span className="mb-4 inline-block w-fit rounded-full bg-amber px-3 py-1 text-xs font-semibold uppercase tracking-widest text-ink">
                  Most popular
                </span>
              )}
              <h2 className="font-display text-3xl text-bone">{p.name}</h2>
              <p className="mt-1 text-lg font-semibold text-amber">{p.price}</p>
              <p className="mt-4 text-muted">{p.summary}</p>
              <ul className="mt-6 space-y-3 text-sm text-bone/80">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span className="mt-1 text-amber">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`mt-8 rounded-full px-6 py-3 text-center text-sm font-semibold uppercase tracking-widest transition-colors ${
                  p.featured
                    ? "bg-amber text-ink hover:bg-amber-bright"
                    : "border border-bone/25 text-bone hover:border-bone hover:bg-bone/5"
                }`}
              >
                Inquire
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted">
          Pricing shown is illustrative — edit it in <code>app/services/page.tsx</code>.
        </p>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/5 bg-charcoal">
        <div className="mx-auto max-w-3xl px-6 py-24 lg:px-10">
          <p className="eyebrow text-center">FAQ</p>
          <h2 className="font-display mt-2 text-center text-4xl text-bone sm:text-5xl">
            Good to know
          </h2>
          <dl className="mt-12 divide-y divide-white/5">
            {faqs.map((f) => (
              <div key={f.q} className="py-6">
                <dt className="font-display text-xl text-bone">{f.q}</dt>
                <dd className="mt-2 leading-relaxed text-muted">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
