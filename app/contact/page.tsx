import type { Metadata } from "next";
import { site } from "@/lib/site";
import { breadcrumbLd } from "@/lib/breadcrumb";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Book a fitness or competition photography shoot with ${site.name} in ${site.location.city}. Tell me your division and show date and let's plan it.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24 pt-36 lg:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd("/contact", "Contact")) }}
      />
      <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="font-display mt-3 text-5xl text-bone sm:text-6xl">
            Let&apos;s plan your shoot
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Ready to document the work you&apos;ve put in? Pick a time below, or send a
            few details and I&apos;ll get back to you.
          </p>

          <div className="mt-8 space-y-3 text-sm">
            <p className="text-muted">
              Email{" "}
              <a href={`mailto:${site.contact.email}`} className="text-amber hover:underline">
                {site.contact.email}
              </a>
            </p>
            {site.contact.phone && (
              <p className="text-muted">
                Call/text{" "}
                <a href={`tel:${site.contact.phone}`} className="text-amber hover:underline">
                  {site.contact.phone}
                </a>
              </p>
            )}
            <p className="text-muted">
              Based in {site.location.city}, {site.location.regionFull} · serving{" "}
              {site.location.serviceAreas.slice(0, 5).join(", ")} & beyond.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/5 bg-charcoal p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
