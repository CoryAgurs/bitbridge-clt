import Image from "next/image";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

const { founder } = site;

const points = [
  "30+ years of combined hands-on tech experience — not a six-month-old startup guessing",
  "Based in Charlotte. We show up, we don't just Zoom in",
  "We integrate into what you already use — no forced platform switch",
  'Flat, transparent pricing. No "it depends" quotes',
  "Built for businesses with 10–200 employees, not Fortune 500 procurement cycles",
];

export function Differentiators() {
  return (
    <section className="bg-navy py-16 text-paper sm:py-20">
      <Container>
        <h2 className="max-w-3xl font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Why business owners work with us instead of a big agency
        </h2>
        <ul className="mt-10 max-w-3xl space-y-4">
          {points.map((point) => (
            <li key={point} className="flex gap-3 text-base leading-7 sm:text-lg">
              <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-copper text-white">
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                  <path
                    d="M3 8.5l3.2 3.2L13 4.8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-paper/90">{point}</span>
            </li>
          ))}
        </ul>
        <div className="mt-12 max-w-3xl border-t border-white/10 pt-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
            <Image
              src={founder.photo}
              alt={`${founder.name}, ${founder.role} of ${site.name}`}
              width={160}
              height={160}
              className="h-28 w-28 shrink-0 rounded-2xl object-cover ring-1 ring-white/15 sm:h-40 sm:w-40"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-copper">
                Who you&apos;ll work with
              </p>
              <h3 className="mt-2 font-serif text-2xl font-semibold">
                {founder.name}, {founder.role}
              </h3>
              <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-copper/60 bg-copper/15 px-3 py-1 text-sm font-medium text-paper">
                <svg viewBox="0 0 16 16" className="h-4 w-4 text-copper" fill="none" aria-hidden="true">
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
                {founder.certification.name} · Certified {founder.certification.year}
              </p>
              <div className="mt-5 space-y-4 text-base leading-7 text-paper/80">
                <p>
                  I spent 20+ years in customer service and operations
                  leadership, so I know exactly what busywork costs a team.
                  Today I&apos;m a full-stack developer and an early AI
                  practitioner. I co-authored a book on applied AI in 2023.
                </p>
                <p>
                  I earned my {founder.certification.name} certification in{" "}
                  {founder.certification.year}, and it shapes how I build.
                  Every system starts with security: least-privilege access,
                  credentials that stay in your accounts, and a clear record of
                  who can touch your data.
                </p>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${founder.name} online`}>
                {founder.profiles.map((profile) => (
                  <li key={profile.label}>
                    <a
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-4 text-sm text-paper/85 transition-colors hover:border-white/40 hover:text-paper"
                    >
                      <span className="font-semibold">{profile.label}</span>
                      <span className="text-paper/60">{profile.handle}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-paper/60">
                Also behind{" "}
                <a
                  href={founder.sideProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-paper/85 underline underline-offset-4 hover:text-paper"
                >
                  {founder.sideProject.label}
                </a>{" "}
                — {founder.sideProject.description} around Charlotte.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
