"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-xl border border-teal-200 bg-accent-soft px-5 py-6 text-sm text-foreground"
      >
        Takk for henvendelsen. Dette er en demomal — koble til e-post eller
        CRM når du tar malen i bruk. Vi ville normalt svart innen 1–2
        virkedager.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
          Navn
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm outline-none ring-accent focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
          E-post
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm outline-none ring-accent focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
          Telefon <span className="font-normal text-muted">(valgfritt)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm outline-none ring-accent focus:ring-2"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Melding
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-y rounded-lg border border-border bg-white px-3 py-2 text-sm outline-none ring-accent focus:ring-2"
        />
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition hover:bg-accent-hover sm:w-auto"
      >
        Send melding
      </button>
    </form>
  );
}
