import { Container } from "@/components/Container";
import { site } from "@/lib/site";

const { certification } = site.founder;

const practices = [
  {
    title: "Least-privilege access",
    body: "We ask only for the permissions a workflow actually needs, on named accounts. No shared logins, no admin access \"just in case.\"",
  },
  {
    title: "Your accounts, your keys",
    body: "AI and integration services run under accounts your business owns. Credentials live in a password manager or secrets vault, never in email or chat.",
  },
  {
    title: "Your data isn't training data",
    body: "We build on the business and API plans of AI providers, which don't train models on your data by default. We'll show you the terms.",
  },
  {
    title: "Logged and reversible",
    body: "Automations keep a record of what they did and when. When an engagement ends, our access is removed and everything is handed back to you.",
  },
];

export function Security() {
  return (
    <section
      id="security"
      className="scroll-mt-20 bg-navy-deep py-16 text-paper sm:py-20"
    >
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-copper">
          {certification.name} certified · {certification.year}
        </p>
        <h2 className="mt-3 max-w-3xl font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          AI that touches your business data has to be built securely
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-paper/75 sm:text-lg sm:leading-8">
          Connecting AI to your CRM, inbox, and books means handling customer
          information. Here&apos;s how we protect it on every project. An NDA is
          available on request.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {practices.map((practice) => (
            <li
              key={practice.title}
              className="rounded-xl border border-white/10 bg-navy-soft/60 p-5 sm:p-6"
            >
              <h3 className="font-serif text-xl font-semibold">
                {practice.title}
              </h3>
              <p className="mt-2 text-base leading-7 text-paper/75">
                {practice.body}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
