"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const divisions = [
  "Bikini",
  "Figure",
  "Wellness",
  "Women's Physique",
  "Women's Bodybuilding",
  "Men's Physique",
  "Classic Physique",
  "Men's Bodybuilding",
  "Not competing / other",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = `Shoot inquiry — ${f.get("name") || "New lead"}`;
    const body = [
      `Name: ${f.get("name")}`,
      `Email: ${f.get("email")}`,
      `Division: ${f.get("division")}`,
      `Show / shoot date: ${f.get("date")}`,
      "",
      `${f.get("message")}`,
    ].join("\n");
    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "mt-2 w-full rounded-lg border border-white/10 bg-stone px-4 py-3 text-bone placeholder-muted/60 focus:border-amber focus:outline-none focus:ring-1 focus:ring-amber";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-bone/80">
          Name
          <input name="name" required className={field} placeholder="Your name" />
        </label>
        <label className="block text-sm font-medium text-bone/80">
          Email
          <input name="email" type="email" required className={field} placeholder="you@email.com" />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-bone/80">
          Division
          <select name="division" className={field} defaultValue="">
            <option value="" disabled>
              Select…
            </option>
            {divisions.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-bone/80">
          Show / shoot date
          <input name="date" type="text" className={field} placeholder="e.g. Aug 2026, or flexible" />
        </label>
      </div>
      <label className="block text-sm font-medium text-bone/80">
        Tell me about your shoot
        <textarea
          name="message"
          rows={5}
          required
          className={field}
          placeholder="Where you're at in prep, the look you're after, location ideas…"
        />
      </label>

      <button
        type="submit"
        className="w-full rounded-full bg-amber px-8 py-4 text-sm font-semibold uppercase tracking-widest text-ink transition-colors hover:bg-amber-bright sm:w-auto"
      >
        Send Inquiry
      </button>

      {sent && (
        <p className="text-sm text-amber">
          Your email app should have opened with the message ready to send. If it didn&apos;t,
          email me directly at{" "}
          <a href={`mailto:${site.contact.email}`} className="underline">
            {site.contact.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
