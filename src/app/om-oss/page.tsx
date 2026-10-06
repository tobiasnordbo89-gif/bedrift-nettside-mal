import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { Section, SectionHeading } from "@/components/Section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Om oss",
  description: siteConfig.about.mission,
};

export default function OmOssPage() {
  const { about, name } = siteConfig;

  return (
    <>
      <Section className="pb-10 pt-16 sm:pt-20">
        <SectionHeading eyebrow="Om oss" title={about.title} />
        <div className="mx-auto mt-10 max-w-3xl space-y-5 text-base leading-relaxed text-muted">
          <p>{about.history}</p>
          <p className="rounded-xl border border-border bg-accent-soft px-5 py-4 text-foreground">
            <span className="font-medium">{name}: </span>
            {about.mission}
          </p>
        </div>
      </Section>

      <Section className="bg-surface pt-12">
        <SectionHeading
          title="Verdier"
          subtitle="Prinsippene som styrer hvordan vi jobber med kunder."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {about.values.map((value) => (
            <article
              key={value.title}
              className="rounded-2xl border border-border bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {value.text}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
