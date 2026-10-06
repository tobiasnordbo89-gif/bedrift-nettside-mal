import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span
            aria-hidden
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-sm font-bold text-white"
          >
            {siteConfig.name.charAt(0)}
          </span>
          <span className="hidden sm:inline">{siteConfig.name}</span>
        </Link>
        <nav aria-label="Hovedmeny" className="flex items-center gap-1 sm:gap-2">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-2.5 py-1.5 text-sm text-zinc-600 transition hover:bg-surface hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
