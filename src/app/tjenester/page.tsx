import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Section, SectionHeading } from "@/components/Section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Tjenester",
  description: `Se tjenestene til ${siteConfig.name}.`,
};

export default function TjenesterPage() {
  return (
    <>
      <Section className="pb-10 pt-16 sm:pt-20">
        <SectionHeading
          eyebrow="Tjenester"
          title="Det vi leverer"
          subtitle="Velg det området som passer best — eller ta kontakt for en skreddersydd pakke."
        />
        <div className="mt-10 space-y-5">
          {siteConfig.services.map((service, index) => (
            <article
              key={service.slug}
              id={service.slug}
              className="rounded-2xl border border-border bg-white p-6 sm:p-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                <span
                  aria-hidden
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-sm font-semibold text-accent"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">
                    {service.title}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {service.short}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted">
          Usikker på hva du trenger?{" "}
          <Link href="/kontakt" className="font-medium text-accent hover:text-accent-hover">
            Send oss en melding
          </Link>
          .
        </p>
      </Section>

      <CtaBand />
    </>
  );
}
