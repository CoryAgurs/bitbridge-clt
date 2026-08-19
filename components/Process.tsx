import { Container } from "@/components/Container";

const steps = [
  {
    title: "Free Workflow Audit",
    body: "We spend 20–30 minutes mapping where your team is losing time. You get the findings either way.",
  },
  {
    title: "The Plan",
    body: "We show you exactly what we'd build, what it costs, and how many hours it saves. No surprises.",
  },
  {
    title: "Build & Integrate",
    body: "We build the system inside your existing tools and test it against real work, not a demo.",
  },
  {
    title: "Support & Iterate",
    body: "We stay on to monitor performance and adjust as your business grows.",
  },
];

export function Process() {
  return (
    <section id="process" className="scroll-mt-20 bg-paper py-16 sm:py-20">
      <Container>
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
          How it works
        </h2>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="relative">
              <p className="font-serif text-4xl font-semibold text-copper/80">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-serif text-xl font-semibold text-navy">
                {step.title}
              </h3>
              <p className="mt-2 text-base leading-7 text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
