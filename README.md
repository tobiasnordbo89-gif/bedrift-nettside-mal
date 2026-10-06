# Bedrift-nettside-mal

Gjenbrukbar **Next.js + Tailwind**-mal for bedriftsnettsider (norsk marked).

## Formål

Startmal du kan klone og tilpasse til ulike bedriftskunder. Fire sider (hjem, tjenester, om oss, kontakt) med felles header/footer og sentral konfigurasjon.

## Stack

- [Next.js](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- Norsk språk (`lang="nb"`)

## Kom i gang

```bash
npm install
npm run dev
```

Åpne [http://localhost:3000](http://localhost:3000).

## Tilpasning

1. Oppdater `src/config/site.ts` (navn, slagord, kontakt, tjenester, verdier).
2. Juster farger i `src/app/globals.css` (`--accent` m.m.).
3. Bytt ut demo-innhold og koble kontaktskjema til e-post/CRM.

## Sider

| Rute | Innhold |
|------|---------|
| `/` | Hero, tjenestekort, tillit, CTA |
| `/tjenester` | Tjenesteliste med beskrivelser |
| `/om-oss` | Historie og verdier |
| `/kontakt` | Skjema + adresse/telefon/e-post |

## Status

**Steg 1–2 ferdig:** repo, grunnstruktur, layout og fire sider.  
Deploy kommer i et senere steg.

## Lisens

Mal for Tobias Nordbø / egne prosjekter — tilpass etter behov.
