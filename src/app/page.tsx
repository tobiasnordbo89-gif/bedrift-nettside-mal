import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Section, SectionHeading } from "@/components/Section";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  const { hero, services, trust } = siteConfig;

  return (
    <>
      <Section className="bg-gradient-to-b from-accent-soft to-background pb-20 pt-16 sm:pb-28 sm:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium tracking-wide text-accent uppercase">
            {hero.eyebrow}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {hero.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={hero.primaryCta.href}
              className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition hover:bg-accent-hover"
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-lg border border-border bg-white px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-surface"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Tjenester"
          title="Hva vi kan hjelpe med"
          subtitle="Fire områder vi typisk jobber med — tilpass innholdet i site.ts."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.slug}
              className="rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:border-teal-200"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {service.short}
              </p>
              <Link
                href="/tjenester"
                className="mt-4 inline-block text-sm font-medium text-accent hover:text-accent-hover"
              >
                Les mer →
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading eyebrow="Tillit" title={trust.title} />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {trust.items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-white p-6"
            >
              <div
                aria-hidden
                className="mb-4 h-1.5 w-8 rounded-full bg-accent"
              />
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
