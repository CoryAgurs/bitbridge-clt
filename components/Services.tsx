import { Container } from "@/components/Container";

const services = [
  {
    title: "Workflow Automation",
    body: "We identify the repetitive tasks eating your team's time and build AI-driven systems that handle them — quote follow-ups, data entry, appointment scheduling, document generation.",
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
      </Container>
    </section>
  );
}
