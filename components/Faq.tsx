"use client";

import { useState } from "react";
import { Container } from "@/components/Container";

const faqs = [
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

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 bg-cream py-16 sm:py-20">
      <Container className="max-w-3xl">
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
          FAQ
        </h2>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  className="flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : index)}
                >
                  <span className="text-base font-semibold text-navy sm:text-lg">
                    {faq.question}
                  </span>
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-navy"
                    aria-hidden="true"
                  >
                    {open ? "–" : "+"}
                  </span>
                </button>
                {open ? (
                  <p className="pb-5 text-base leading-7 text-muted">{faq.answer}</p>
                ) : null}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
