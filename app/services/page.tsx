import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description: `Fitness photography services from ${site.name}: competition prep shoots, stage-ready portfolios, and posing sessions for bodybuilding, bikini, figure, and men's physique competitors in ${site.location.city}.`,
  alternates: { canonical: "/services" },
};

const packages = [
  {
    name: "Posing Session",
    price: "Starting at $250",
    summary: "A focused studio or outdoor session built around your competition poses.",
    features: [
      "60–90 minute session",
      "All mandatory poses for your division",
      "15+ hand-edited high-res images",
      "Online gallery + social-ready crops",
    ],
  },
  {
    name: "Competition Prep",
    price: "Starting at $450",
    summary: "The full peak-week story — your conditioning documented at its best.",
    features: [
      "2-hour session, studio or on location",
      "Multiple looks & outfit changes",
      "30+ hand-edited high-res images",
      "Print release for personal use",
      "48-hour preview turnaround",
    ],
    featured: true,
  },
  {
    name: "Brand & Sponsor",
    price: "Let's talk",
    summary: "Content built for sponsors, supplement brands, and athlete profiles.",
    features: [
      "Half or full-day shoot",
      "Lifestyle, gym, and physique sets",
      "Usage licensing for brands",
      "Optional short-form video clips",
    ],
  },
];

const faqs = [
  {
    q: "When should we schedule relative to my show?",
    a: "Most competitors book within the final week before their show, when conditioning peaks. We can also shoot the morning of or after the event. Reach out early — peak-week dates are limited.",
  },
  {
    q: "Which divisions do you photograph?",
    a: "All of them — men's and women's bodybuilding, classic physique, men's physique, bikini, figure, wellness, and fitness. If you compete, I can shoot it.",
  },
  {
    q: "Do I need to be 'stage ready' to shoot?",
    a: "Not at all. Plenty of athletes shoot in off-season or mid-prep for progress and content. That said, peak-week sessions produce the most dramatic conditioning shots.",
  },
  {
    q: "Studio or outdoors?",
    a: "Both are available. Studio gives controlled, dramatic lighting; outdoor and industrial locations add mood and texture. Many packages include a mix.",
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
            Shoots built around your prep
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Every package is tailored to your division and timeline. Pricing below is a
            starting point — message me with your show date and I&apos;ll put together a
            quote that fits.
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
