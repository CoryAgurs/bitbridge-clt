import { Container } from "@/components/Container";
import { faqPageSchema, faqs } from "@/lib/faq";
import { serializeJsonLd } from "@/lib/structured-data";

// Native <details> keeps every answer in the server-rendered HTML while still collapsing visually.
export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-cream py-16 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqPageSchema) }}
      />
      <Container className="max-w-3xl">
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
          FAQ
        </h2>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {faqs.map((faq, index) => (
            <details key={faq.question} className="group" open={index === 0}>
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-left [&::-webkit-details-marker]:hidden">
                <span className="text-base font-semibold text-navy sm:text-lg">
                  {faq.question}
                </span>
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-navy"
                  aria-hidden="true"
                >
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">–</span>
                </span>
              </summary>
              <p className="pb-5 text-base leading-7 text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
