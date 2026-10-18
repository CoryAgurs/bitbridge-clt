function normalizeSiteUrl(value: string) {
  const url = new URL(value.includes("://") ? value : `https://${value}`);
  if (url.protocol !== "http:" && url.protocol !== "https:") {
    throw new Error("Invalid site URL protocol");
  }
  return url.origin;
}

function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    try {
      return normalizeSiteUrl(explicit);
    } catch {
      // Fall through to known defaults.
    }
  }

  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }

  return "https://www.bitbridgeclt.com";
}

export const siteUrl = resolveSiteUrl();

export const site = {
  name: "BitBridge CLT",
  legalName: "BBC LLC",
  tagline: "AI systems integration for Charlotte businesses",
  city: "Charlotte, NC",
  email: "bitbridgeco@gmail.com",
  // Business line. Leave display empty to hide it everywhere.
  // e.g. { display: "(704) 555-0123", tel: "+17045550123" }
  phone: { display: "(980) 277-1970", tel: "+19802771970" },
  instagram: {
    handle: "@bit.bridge",
    url: "https://www.instagram.com/bit.bridge/",
  },
  founder: {
    name: "Cory Agurs",
    role: "Founder",
    photo: "/cory-agurs.jpg",
    certification: { name: "CompTIA Security+", year: 2021 },
    book: {
      title: "My Journey with AI",
      year: 2023,
      url: "https://www.amazon.com/dp/B0CP9B8WVZ",
    },
    profiles: [
      {
        label: "LinkedIn",
        handle: "cory-agurs-corycodes",
        url: "https://www.linkedin.com/in/cory-agurs-corycodes",
      },
      {
        label: "GitHub",
        handle: "CoryAgurs",
        url: "https://github.com/CoryAgurs",
      },
      { label: "X", handle: "@CoryCodes", url: "https://x.com/CoryCodes" },
      {
        label: "Hugging Face",
        handle: "CoryCodes",
        url: "https://huggingface.co/CoryCodes",
      },
    ],
    sideProject: {
      label: "Cory Prints",
      description: "aerial photo & video",
      url: "https://coryagurs.github.io/cory-prints/",
    },
  },
  year: 2026,
  pitch:
    "BitBridge CLT integrates AI directly into the systems small businesses already run on, so your team spends less time on repetitive work and more time on the work that actually grows the business.",
  auditSubject: "Free Workflow Audit",
  auditBody: `Hi BitBridge CLT,

I'd like to book a free 20-minute workflow audit.

Name:
Company:
What kind of busywork is eating your team's time:
`,
} as const;

export const auditMailto = `mailto:${site.email}?subject=${encodeURIComponent(site.auditSubject)}&body=${encodeURIComponent(site.auditBody)}`;

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#security", label: "Security" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;
