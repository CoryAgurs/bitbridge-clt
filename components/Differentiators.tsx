import { Container } from "@/components/Container";

const points = [
  "30+ years of combined hands-on tech experience — not a six-month-old startup guessing",
  "Based in Charlotte. We show up, we don't just Zoom in",
  "We integrate into what you already use — no forced platform switch",
  'Flat, transparent pricing. No "it depends" quotes',
  "Built for businesses with 10–200 employees, not Fortune 500 procurement cycles",
];

export function Differentiators() {
  return (
    <section className="bg-navy py-16 text-paper sm:py-20">
      <Container>
        <h2 className="max-w-3xl font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Why business owners work with us instead of a big agency
        </h2>
        <ul className="mt-10 max-w-3xl space-y-4">
          {points.map((point) => (
            <li key={point} className="flex gap-3 text-base leading-7 sm:text-lg">
              <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-copper text-white">
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                  <path
                    d="M3 8.5l3.2 3.2L13 4.8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-paper/90">{point}</span>
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-3xl border-t border-white/10 pt-8 text-base leading-7 text-paper/75">
          Led by Cory Agurs — 20+ years in customer service and operations
          leadership, full-stack developer, and early AI practitioner
          (co-authored a book on applied AI in 2023).
        </p>
      </Container>
    </section>
  );
}
