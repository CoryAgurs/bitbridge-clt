import { site, siteUrl } from "@/lib/site";

// Single source for the visible FAQ and its FAQPage schema, so the two always match word for word.
export const faqs = [
  {
    question: "How does the free workflow audit work?",
    answer: `We spend 20 minutes mapping where your team loses time — missed calls, quote follow-up, scheduling — and you keep the findings either way. Call ${site.phone.display} to book.`,
  },
  {
    question: "Do I need to already have AI tools or infrastructure?",
    answer:
      "No. Most of our clients start with none. We handle the technical setup end to end.",
  },
  {
    question: "Will this replace my team?",
    answer:
      "No — it removes the tedious parts of their job so they can focus on higher-value work, not replace them.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Most integrations are live within 2–4 weeks, depending on complexity.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work primarily with SMBs in Charlotte — contractors, professional services, real estate, and local retail — but the systems apply broadly.",
  },
  {
    question: "What if I already use HubSpot, QuickBooks, or Salesforce?",
    answer:
      "Good — we build into what you have rather than asking you to switch.",
  },
];

export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${siteUrl}/#faq`,
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};
