import { Differentiators } from "@/components/Differentiators";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Onboarding } from "@/components/Onboarding";
import { Pricing } from "@/components/Pricing";
import { Problem } from "@/components/Problem";
import { Process } from "@/components/Process";
import { Security } from "@/components/Security";
import { Services } from "@/components/Services";
import { site, siteUrl } from "@/lib/site";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  legalName: site.legalName,
  url: siteUrl,
  email: site.email,
  ...(site.phone.tel ? { telephone: site.phone.tel } : {}),
  areaServed: site.city,
  sameAs: [site.instagram.url],
  founder: {
    "@type": "Person",
    name: site.founder.name,
    jobTitle: site.founder.role,
    image: `${siteUrl}${site.founder.photo}`,
    sameAs: site.founder.profiles.map((profile) => profile.url),
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      name: site.founder.certification.name,
      credentialCategory: "certification",
      recognizedBy: { "@type": "Organization", name: "CompTIA" },
    },
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main id="main">
        <Hero />
        <Problem />
        <Services />
        <Differentiators />
        <Process />
        <Onboarding />
        <Security />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
