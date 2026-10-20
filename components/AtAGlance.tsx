import { Container } from "@/components/Container";
import { atAGlance } from "@/lib/facts";
import { site } from "@/lib/site";

export function AtAGlance() {
  return (
    <section id="at-a-glance" className="scroll-mt-20 bg-paper py-16 sm:py-20">
      <Container className="max-w-3xl">
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
          {site.name} at a glance
        </h2>
        <dl className="mt-8 divide-y divide-line border-y border-line">
          {atAGlance.map((fact) => (
            <div
              key={fact.label}
              className="grid gap-1 py-4 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-6"
            >
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-copper sm:pt-1">
                {fact.label}
              </dt>
              <dd className="text-base leading-7 text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
