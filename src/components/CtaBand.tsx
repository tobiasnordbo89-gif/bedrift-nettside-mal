import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/Section";

export function CtaBand() {
  const { cta } = siteConfig;
  return (
    <Section className="bg-accent-soft">
      <div className="rounded-2xl border border-teal-100 bg-white px-6 py-10 text-center shadow-sm sm:px-10">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {cta.title}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted">{cta.text}</p>
        <Link
          href={cta.button.href}
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition hover:bg-accent-hover"
        >
          {cta.button.label}
        </Link>
      </div>
    </Section>
  );
}
