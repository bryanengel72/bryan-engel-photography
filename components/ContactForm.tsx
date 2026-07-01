"use client";

import { useState } from "react";

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
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const f = new FormData(e.currentTarget);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: f.get("name"),
        email: f.get("email"),
        division: f.get("division"),
        date: f.get("date"),
        message: f.get("message"),
      }),
    });

    setStatus(res.ok ? "sent" : "error");
  }

  const field =
    "mt-2 w-full rounded-lg border border-white/10 bg-stone px-4 py-3 text-bone placeholder-muted/60 focus:border-amber focus:outline-none focus:ring-1 focus:ring-amber";

  if (status === "sent") {
    return (
      <div className="animate-hero-in flex h-full flex-col items-center justify-center py-16 text-center">
        <p className="font-display text-4xl text-bone">Got it.</p>
        <p className="mt-3 text-muted">
          I&apos;ll be in touch soon. Keep doing the work.
        </p>
      </div>
    );
  }

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
            <option value="" disabled>Select…</option>
            {divisions.map((d) => (
              <option key={d} value={d}>{d}</option>
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

      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong — email me directly at{" "}
          <a href="mailto:thebryanengel@gmail.com" className="underline">
            thebryanengel@gmail.com
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-amber px-8 py-4 text-sm font-semibold uppercase tracking-widest text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-bright hover:shadow-lg hover:shadow-amber/20 active:translate-y-0 disabled:pointer-events-none disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send Inquiry"}
      </button>
    </form>
  );
}
