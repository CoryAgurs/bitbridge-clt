import { Container } from "@/components/Container";

export function Onboarding() {
  return (
    <section className="bg-cream py-10 sm:py-12">
      <Container>
        <div className="rounded-2xl bg-copper px-6 py-8 text-center text-white sm:px-10 sm:py-10">
          <p className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
            Currently onboarding our first Charlotte clients — early partners
            get founder-level pricing.
          </p>
        </div>
      </Container>
    </section>
  );
}
