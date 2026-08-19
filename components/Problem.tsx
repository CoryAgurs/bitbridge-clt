import { AuditButton } from "@/components/AuditButton";
import { Container } from "@/components/Container";

const pains = [
  {
    title: "The copy-paste tax",
    body: "Someone on your team retypes the same data into three different systems, every single day.",
    icon: ClipboardIcon,
  },
  {
    title: "The follow-up that never happens",
    body: "Leads and quotes go cold because nobody has time to send the fifth follow-up email.",
    icon: MailIcon,
  },
  {
    title: "The report nobody has time to build",
    body: "You know the numbers exist somewhere. Pulling them together takes an afternoon you don't have.",
    icon: ChartIcon,
  },
];

export function Problem() {
  return (
    <section className="bg-paper py-16 sm:py-20">
      <Container>
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
          Sound familiar?
        </h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pains.map((pain) => (
            <li
              key={pain.title}
              className="rounded-xl border border-line bg-cream p-5 sm:p-6"
            >
              <pain.icon />
              <h3 className="mt-4 font-serif text-xl font-semibold text-navy">
                {pain.title}
              </h3>
              <p className="mt-2 text-base leading-7 text-muted">{pain.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-2xl font-serif text-2xl font-medium tracking-tight text-navy sm:text-3xl">
          None of this needs a new hire. It needs the right system.
        </p>
        <div className="mt-8">
          <AuditButton>Get a Free Workflow Audit</AuditButton>
        </div>
      </Container>
    </section>
  );
}

function ClipboardIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8 text-copper" fill="none" aria-hidden="true">
      <rect x="8" y="7" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M12 7.5h8v3h-8z" fill="currentColor" />
      <path d="M12 15h8M12 19h8M12 23h5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8 text-copper" fill="none" aria-hidden="true">
      <rect x="5" y="8" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M6 10l10 8 10-8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8 text-copper" fill="none" aria-hidden="true">
      <path d="M6 26h20" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <rect x="8" y="16" width="4" height="8" rx="0.5" fill="currentColor" />
      <rect x="14" y="11" width="4" height="13" rx="0.5" fill="currentColor" />
      <rect x="20" y="7" width="4" height="17" rx="0.5" fill="currentColor" />
    </svg>
  );
}
