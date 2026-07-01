import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${site.name} — how site and contact form information is collected, used, and shared.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-24 pt-36 lg:px-10">
      <p className="eyebrow">Legal</p>
      <h1 className="font-display mt-3 text-5xl text-bone sm:text-6xl">Privacy Policy</h1>
      <p className="mt-4 text-sm text-muted">Last updated: June 30, 2026</p>

      <div className="mt-10 space-y-8 text-lg leading-relaxed text-muted">
        <div>
          <h2 className="font-display text-2xl text-bone">Overview</h2>
          <p className="mt-3">
            This Privacy Policy describes how {site.name} collects, uses, and shares information
            when you use this website, submit a contact form, or otherwise get in touch with us.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-bone">Information We Collect</h2>
          <p className="mt-3">
            We collect information you choose to provide through this website, such as your name,
            email address, phone number, and the contents of your message or shoot inquiry. We may
            also collect basic technical information automatically, such as browser type, device
            information, IP address, and pages visited, depending on the tools used on this site.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-bone">How We Use Information</h2>
          <p className="mt-3">
            We use information to respond to inquiries, communicate about photography services,
            schedule or coordinate sessions, improve the website, and maintain site security. We do
            not sell your personal information.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-bone">How Information Is Shared</h2>
          <p className="mt-3">
            We may share information with service providers that help us operate the website or
            communicate with you, such as email delivery or website hosting providers. We do not
            share your information with third parties for their own direct marketing purposes.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-bone">Third-Party Services</h2>
          <p className="mt-3">
            This site uses Resend to transmit contact form submissions by email. We may also use
            hosting, analytics, scheduling, gallery, or other website service providers if they are
            added to the site. Their handling of data is governed by their own privacy policies.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-bone">Cookies and Tracking</h2>
          <p className="mt-3">
            This site may use cookies or similar technologies for basic website functionality,
            analytics, or performance monitoring. If third-party analytics or advertising tools are
            used, those providers may collect information about your activity on this site as
            described in their own policies.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-bone">Do Not Track</h2>
          <p className="mt-3">
            Some web browsers offer a “Do Not Track” signal. Because there is not a single
            consistent industry standard for responding to these signals, this site does not
            currently respond differently to them. If third-party tools such as analytics providers
            are used on this site, they may collect information about your online activities over
            time and across different websites.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-bone">Data Retention</h2>
          <p className="mt-3">
            We retain contact form submissions and related communications for as long as reasonably
            necessary to respond to your inquiry, provide services, maintain business records, and
            comply with legal obligations.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-bone">Your Choices</h2>
          <p className="mt-3">
            If you would like to request access to, correction of, or deletion of information you
            previously submitted to us, contact us at {site.contact.email}. We will review requests
            and respond as required by applicable law.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-bone">Changes to This Policy</h2>
          <p className="mt-3">
            We may update this Privacy Policy from time to time. Any changes will be posted on this
            page, and the “Last updated” date will be revised when changes become effective.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-bone">Contact</h2>
          <p className="mt-3">
            Questions about this policy? Email{" "}
            <a href={`mailto:${site.contact.email}`} className="text-amber hover:underline">
              {site.contact.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}