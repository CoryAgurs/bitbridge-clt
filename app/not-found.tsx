import { AuditButton } from "@/components/AuditButton";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="flex flex-1 flex-col justify-center bg-paper py-20">
        <Container className="max-w-xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
            404
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-navy">
            That page is not on this site.
          </h1>
          <p className="mt-4 text-base leading-7 text-muted">
            The homepage is a single page. If you followed an old link, start
            there.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-navy px-6 text-base font-semibold text-paper hover:bg-navy-soft"
            >
              Back to homepage
            </Link>
            <AuditButton>Get a Free Workflow Audit</AuditButton>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
