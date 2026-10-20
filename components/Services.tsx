import { Container } from "@/components/Container";
import { securityLine } from "@/lib/facts";

const services = [
  {
    title: "Workflow Automation",
    body: "We identify the repetitive tasks eating your team's time and build AI-driven systems that handle them — missed-call capture, quote follow-ups, data entry, appointment scheduling, document generation.",
  },
  {
    title: "System Integration",
    body: "Already using QuickBooks, HubSpot, Salesforce, or a custom tool? We connect AI directly into what you have. No forcing your business onto new software.",
  },
  {
    title: "Custom AI Tools",
    body: "When off-the-shelf doesn't fit, we build something that does — internal tools, dashboards, and assistants shaped around how your team actually works.",
  },
  {
    title: "Ongoing Support & Optimization",
    body: "Systems drift. We monitor, adjust, and improve what we build so it keeps saving you time as your business changes.",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-cream py-16 sm:py-20">
      <Container>
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
          What BitBridge CLT actually does
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
          We plug AI into the workflows you already run — your CRM, your inbox,
          your scheduling tool, your intake forms — so the tedious parts happen
          automatically.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {services.map((service, index) => (
            <li
              key={service.title}
              className="rounded-xl border border-line bg-paper p-5 sm:p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-copper">
                0{index + 1}
              </p>
              <h3 className="mt-3 font-serif text-xl font-semibold text-navy">
                {service.title}
              </h3>
              <p className="mt-2 text-base leading-7 text-muted">{service.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 flex max-w-3xl items-start gap-3 text-base leading-7 font-medium text-navy sm:text-lg sm:leading-8">
          <svg viewBox="0 0 16 16" className="mt-1.5 h-5 w-5 shrink-0 text-copper" fill="none" aria-hidden="true">
            <path
              d="M8 1.5l5 2v4c0 3.2-2.1 5.9-5 7-2.9-1.1-5-3.8-5-7v-4l5-2z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M5.5 8l1.8 1.8L10.8 6.3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {securityLine}
        </p>
      </Container>
    </section>
  );
}
