"use client";

import Link from "next/link";
import { site } from "@/lib/site";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-paper px-5 py-20 text-center">
      <h1 className="font-serif text-3xl font-semibold tracking-tight text-navy">
        Something went wrong.
      </h1>
      <p className="mt-4 max-w-md text-base leading-7 text-muted">
        Refresh the page or head back to the homepage. If it keeps happening,
        email us at {site.email}.
      </p>
      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
        <button
          type="button"
          onClick={reset}
          className="inline-flex min-h-12 items-center justify-center rounded-md bg-copper px-6 text-base font-semibold text-white hover:bg-copper-hover"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex min-h-12 items-center justify-center rounded-md bg-navy px-6 text-base font-semibold text-paper hover:bg-navy-soft"
        >
          Back to homepage
        </Link>
      </div>
    </main>
  );
}
