import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-semibold text-foreground">{siteConfig.name}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {siteConfig.tagline}
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Sider</p>
          <ul className="mt-3 space-y-2">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted transition hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Kontakt</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-accent"
              >
                {siteConfig.contact.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                className="hover:text-accent"
              >
                {siteConfig.contact.phone}
              </a>
            </li>
            <li>{siteConfig.contact.address}</li>
            <li>{siteConfig.contact.openingHours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-5xl px-4 py-4 text-xs text-muted sm:px-6">
          © {year} {siteConfig.name}. Alle rettigheter forbeholdt.
        </p>
      </div>
    </footer>
  );
}
