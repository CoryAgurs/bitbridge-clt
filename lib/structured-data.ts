import { site, siteUrl } from "@/lib/site";

const ids = {
  organization: `${siteUrl}/#organization`,
  localBusiness: `${siteUrl}/#localbusiness`,
  founder: `${siteUrl}/#cory-agurs`,
  website: `${siteUrl}/#website`,
  webpage: `${siteUrl}/#webpage`,
};

const homeUrl = `${siteUrl}/`;
const logoUrl = `${siteUrl}/logo.png`;

// Service-area business: city-level address only, never a street address.
const address = {
  "@type": "PostalAddress",
  addressLocality: "Charlotte",
  addressRegion: "NC",
  addressCountry: "US",
};

const contact = {
  ...(site.phone.tel ? { telephone: site.phone.tel } : {}),
  email: site.email,
};

export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ids.organization,
      name: site.name,
      legalName: site.legalName,
      url: homeUrl,
      logo: logoUrl,
      description: site.summary,
      ...contact,
      sameAs: [site.instagram.url],
    },
    {
      "@type": "ProfessionalService",
      "@id": ids.localBusiness,
      name: site.name,
      url: homeUrl,
      image: logoUrl,
      description: site.summary,
      ...contact,
      // Coarse signal only; the exact figures live in the page copy and llms.txt.
      priceRange: "$$",
      parentOrganization: { "@id": ids.organization },
      founder: { "@id": ids.founder },
      address,
      areaServed: [
        { "@type": "City", name: site.city },
        { "@type": "AdministrativeArea", name: "Charlotte metro area" },
      ],
    },
    {
      "@type": "Person",
      "@id": ids.founder,
      name: site.founder.name,
      jobTitle: `${site.founder.role}, ${site.name}`,
      worksFor: { "@id": ids.organization },
      image: `${siteUrl}${site.founder.photo}`,
      ...contact,
      address,
      sameAs: site.founder.profiles.map((profile) => profile.url),
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: site.founder.certification.name,
        recognizedBy: { "@type": "Organization", name: "CompTIA" },
      },
    },
    {
      "@type": "WebSite",
      "@id": ids.website,
      url: homeUrl,
      name: site.name,
      publisher: { "@id": ids.organization },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": ids.webpage,
      url: homeUrl,
      name: site.title,
      description: site.description,
      isPartOf: { "@id": ids.website },
      about: { "@id": ids.localBusiness },
      inLanguage: "en-US",
    },
  ],
};

// JSON.stringify does not escape "<", so a "</script>" in any string would end the tag early.
export function serializeJsonLd(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
