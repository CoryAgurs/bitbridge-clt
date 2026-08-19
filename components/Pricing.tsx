import { AuditButton } from "@/components/AuditButton";
import { Container } from "@/components/Container";

export function Pricing() {
  return (
    <section className="bg-paper py-16 sm:py-20">
      <Container className="max-w-3xl">
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
          Simple, transparent pricing
        </h2>
        <p className="mt-5 text-base leading-7 text-muted sm:text-lg sm:leading-8">
          Every business is different, so every engagement starts with the free
          audit — not a generic package. After that, you&apos;ll get a flat quote
          before any work begins. No hourly billing surprises, no scope creep.
        </p>
        <div className="mt-8">
          <AuditButton>Book Your Free Audit</AuditButton>
        </div>
      </Container>
    </section>
  );
}
