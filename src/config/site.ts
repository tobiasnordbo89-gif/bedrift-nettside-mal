/**
 * Sentralt sted for bedriftsinformasjon.
 * Oppdater disse feltene når du tilpasser malen til en ny kunde.
 */
export const siteConfig = {
  name: "Bedriftsnavn AS",
  tagline: "Kort slagord som beskriver hva bedriften gjør",
  description:
    "Kort beskrivelse av bedriften. Brukes blant annet til metadata og SEO.",
  contact: {
    email: "post@eksempel.no",
    phone: "+47 00 00 00 00",
    address: "Gateadresse 1, 0000 Oslo",
  },
  /** Planlagte sider i den ferdige malen */
  nav: [
    { href: "/", label: "Hjem" },
    { href: "/tjenester", label: "Tjenester" },
    { href: "/om-oss", label: "Om oss" },
    { href: "/kontakt", label: "Kontakt" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
