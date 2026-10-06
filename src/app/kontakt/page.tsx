import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Section, SectionHeading } from "@/components/Section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Kontakt ${siteConfig.name} — ${siteConfig.contact.email}`,
};

export default function KontaktPage() {
  const { contact, name } = siteConfig;

  return (
    <Section className="pt-16 sm:pt-20">
      <SectionHeading
        eyebrow="Kontakt"
        title="Ta kontakt"
        subtitle="Fyll ut skjemaet, eller bruk e-post og telefon direkte."
      />
      <div className="mx-auto mt-10 grid max-w-4xl gap-8 lg:grid-cols-5">
        <div className="rounded-2xl border border-border bg-white p-6 shadow-sm lg:col-span-3">
          <h2 className="text-lg font-semibold text-foreground">Send melding</h2>
          <p className="mt-1 mb-6 text-sm text-muted">
            Alle felter merket som påkrevd må fylles ut.
          </p>
          <ContactForm />
        </div>
        <aside className="space-y-5 lg:col-span-2">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h2 className="text-lg font-semibold text-foreground">{name}</h2>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="font-medium text-foreground">Adresse</dt>
                <dd className="mt-1 text-muted">{contact.address}</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Telefon</dt>
                <dd className="mt-1">
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="text-accent hover:text-accent-hover"
                  >
                    {contact.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">E-post</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-accent hover:text-accent-hover"
                  >
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Åpningstider</dt>
                <dd className="mt-1 text-muted">{contact.openingHours}</dd>
              </div>
            </dl>
          </div>
          <p className="text-xs leading-relaxed text-muted">
            Demomal: skjemaet sender ikke e-post. Koble til valgfri tjeneste
            (f.eks. Resend, Formspree) når du tar malen i bruk.
          </p>
        </aside>
      </div>
    </Section>
  );
}
