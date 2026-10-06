/**
 * Sentralt sted for bedriftsinformasjon og sideinnhold.
 * Oppdater disse feltene når du tilpasser malen til en ny kunde.
 */
export const siteConfig = {
  name: "Nordlys Rådgivning AS",
  tagline: "Strategi, vekst og tydelig kommunikasjon for norske bedrifter",
  description:
    "Nordlys Rådgivning hjelper små og mellomstore bedrifter med strategi, digital synlighet og praktisk rådgivning.",
  contact: {
    email: "post@nordlys-radgivning.no",
    phone: "+47 22 00 11 22",
    address: "Storgata 15, 0155 Oslo",
    openingHours: "Man–fre 09:00–16:00",
  },
  nav: [
    { href: "/", label: "Hjem" },
    { href: "/tjenester", label: "Tjenester" },
    { href: "/om-oss", label: "Om oss" },
    { href: "/kontakt", label: "Kontakt" },
  ],
  hero: {
    eyebrow: "Rådgivning for vekst",
    title: "Vi hjelper bedriften din å vokse med tydelig retning",
    subtitle:
      "Fra strategi til gjennomføring — vi leverer konkrete råd tilpasset norske SMB-er.",
    primaryCta: { href: "/kontakt", label: "Book en prat" },
    secondaryCta: { href: "/tjenester", label: "Se tjenester" },
  },
  services: [
    {
      slug: "strategi",
      title: "Strategi og forretningsutvikling",
      short:
        "Klare mål, prioriteringer og en plan som faktisk blir fulgt opp.",
      description:
        "Vi kartlegger marked, kunder og interne ressurser, og lager en handlingsplan med konkrete milepæler. Passer for bedrifter som trenger retning uten tung byråkrati.",
    },
    {
      slug: "digital",
      title: "Digital synlighet",
      short:
        "Nettside, innhold og kanaler som gjør det enklere å bli funnet.",
      description:
        "Vi hjelper deg med budskap, struktur på nettsiden og en enkel plan for synlighet — slik at potensielle kunder forstår hva du tilbyr.",
    },
    {
      slug: "leder",
      title: "Ledelsesstøtte",
      short:
        "Sparring for ledere som vil ta bedre beslutninger i hverdagen.",
      description:
        "Kortfattet rådgivning rundt prioritering, team og endring. Vi fungerer som en sparringspartner når du trenger et ærlig blikk utenfra.",
    },
    {
      slug: "workshop",
      title: "Workshops og fasilitiering",
      short:
        "Strukturerte samlinger som gir enighet og fremdrift i teamet.",
      description:
        "Vi planlegger og leder workshops for strategi, posisjonering eller kundereise — med tydelig agenda og konkrete leveranser etterpå.",
    },
  ],
  trust: {
    title: "Hvorfor velge oss",
    items: [
      {
        title: "Praktisk og jordnært",
        text: "Vi fokuserer på det som gir effekt — ikke PowerPoint for PowerPointens skyld.",
      },
      {
        title: "Norsk SMB-erfaring",
        text: "Vi kjenner hverdagen til norske bedrifter, med begrensede ressurser og høye krav.",
      },
      {
        title: "Tydelig oppfølging",
        text: "Du får konkrete neste steg, ansvar og milepæler — ikke vage anbefalinger.",
      },
    ],
  },
  about: {
    title: "Om Nordlys Rådgivning",
    history:
      "Nordlys Rådgivning ble startet for å gi små og mellomstore bedrifter tilgang til samme type strategisk støtte som større selskaper tar for gitt. Vi kombinerer forretningsforståelse med klar kommunikasjon — og holder oss til det som er nyttig i praksis.",
    mission:
      "Vårt mål er å gjøre strategi og vekst forståelig, gjennomførbart og målbart for norske bedrifter.",
    values: [
      {
        title: "Ærlighet",
        text: "Vi sier det som er, også når det er ubehagelig — alltid med respekt.",
      },
      {
        title: "Enkelhet",
        text: "Komplekse spørsmål fortjener enkle svar og tydelige prioriteringer.",
      },
      {
        title: "Ansvar",
        text: "Vi følger opp det vi lover, og måler fremgang sammen med kunden.",
      },
    ],
  },
  cta: {
    title: "Klar for en uforpliktende prat?",
    text: "Fortell oss litt om bedriften din, så tar vi kontakt innen 1–2 virkedager.",
    button: { href: "/kontakt", label: "Gå til kontaktsiden" },
  },
} as const;

export type SiteConfig = typeof siteConfig;
