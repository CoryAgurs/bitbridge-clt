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

  return "https://bitbridgeclt.com";
}

export const siteUrl = resolveSiteUrl();

export const site = {
  name: "BitBridge CLT",
  legalName: "BBC LLC",
  tagline: "AI systems integration for Charlotte businesses",
  city: "Charlotte, NC",
  email: "bitbridgeco@gmail.com",
  instagram: {
    handle: "@bit.bridge",
    url: "https://www.instagram.com/bit.bridge/",
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
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;
