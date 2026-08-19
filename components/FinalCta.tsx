import { AuditButton } from "@/components/AuditButton";
import { Container } from "@/components/Container";

export function FinalCta() {
  return (
    <section className="bg-navy py-16 text-paper sm:py-20">
      <Container className="max-w-3xl text-center">
        <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-5xl">
          Stop paying the copy-paste tax.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-paper/80 sm:text-lg sm:leading-8">
          Book a free 20-minute workflow audit. No obligation, no sales pitch —
          just a clear look at where AI could save you time.
        </p>
        <div className="mt-8 flex justify-center">
          <AuditButton variant="onDark">Get My Free Audit</AuditButton>
        </div>
      </Container>
    </section>
  );
}
