import { site } from "@/lib/site";

// Citable facts shown in the "At a glance" section and repeated in llms.txt.
// Only add verified facts here; never testimonials, results, or logos that weren't earned.
export const pricing = {
  coverage: "$500–$2,000/month",
  hire: "$5,000+/month",
};

export const securityLine =
  "Every system BitBridge builds is security-tested before launch — we attack our own builds to prove they are secure.";

export const atAGlance = [
  {
    label: "Based in",
    value: `${site.city}; serves the Charlotte metro area`,
  },
  {
    label: "Founder",
    value: `${site.founder.name}, ${site.founder.certification.name} certified`,
  },
  {
    label: "Services",
    value:
      "Free 20-minute workflow audits, secure automation builds, and ongoing support retainers",
  },
  {
    label: "Focus",
    value:
      "Missed-call capture, quote follow-up, and scheduling for small businesses, including contractors and home-services trades",
  },
  {
    label: "Pricing",
    value: `Secure agent coverage runs ${pricing.coverage}, versus ${pricing.hire} for one additional hire`,
  },
  {
    label: "Contact",
    value: [site.phone.display, site.email].filter(Boolean).join(" · "),
  },
];
