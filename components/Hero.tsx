import { AuditButton } from "@/components/AuditButton";
import { Container } from "@/components/Container";
import { HeroDiagram } from "@/components/HeroDiagram";

export function Hero() {
  return (
    <section className="bg-navy text-paper" id="top">
      <Container className="grid gap-10 py-12 sm:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-12 lg:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper sm:text-sm">
            Charlotte, NC · AI Systems Integration
          </p>
          <h1 className="mt-4 font-serif text-[2.15rem] leading-[1.15] font-semibold tracking-tight text-paper sm:text-5xl sm:leading-[1.12] lg:text-[3.35rem]">
            Your business is drowning in busywork. We teach it to swim.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-paper/80 sm:text-lg sm:leading-8">
            BitBridge CLT builds AI-powered systems into the tools your team
            already uses — no rip-and-replace, no six-month rollout, no jargon.
            Just fewer hours lost to copy-paste work.
          </p>
          <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
            <AuditButton variant="onDark">Get a Free Workflow Audit</AuditButton>
            <a
              href="#process"
              className="inline-flex min-h-12 items-center justify-center text-base font-medium text-paper/80 underline-offset-4 hover:text-paper hover:underline"
            >
              See how it works ↓
            </a>
          </div>
        </div>
        <HeroDiagram />
      </Container>
    </section>
  );
}
