import { siteConfig } from "@/config/site";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-sm font-medium tracking-wide text-zinc-500 uppercase">
          Bedrift-nettside-mal
        </p>
        <h1 className="mb-4 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          {siteConfig.name}
        </h1>
        <p className="mb-6 text-lg text-zinc-600 dark:text-zinc-400">
          {siteConfig.tagline}
        </p>
        <p className="rounded-xl border border-zinc-200 bg-zinc-50 px-5 py-4 text-left text-sm leading-relaxed text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
          Dette er en gjenbrukbar Next.js + Tailwind-mal for
          bedriftsnettsider (norsk marked). Grunnstrukturen er på plass —
          sider for hjem, tjenester, om oss og kontakt kommer i neste steg.
          Oppdater <code className="font-mono text-xs">src/config/site.ts</code>{" "}
          med bedriftens navn, slagord og kontaktinfo.
        </p>
      </div>
    </main>
  );
}
