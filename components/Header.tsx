"use client";

import { useEffect, useState } from "react";
import { AuditButton } from "@/components/AuditButton";
import { PhoneIcon, phoneHref } from "@/components/CallLink";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { navLinks, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  function close() {
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 text-paper backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-paper focus:px-3 focus:py-2 focus:text-navy"
      >
        Skip to content
      </a>
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo inverted />
        <nav className="hidden items-center gap-6 lg:flex xl:gap-8" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-paper/80 transition-colors hover:text-paper"
            >
              {link.label}
            </a>
          ))}
          {phoneHref ? (
            <a
              href={phoneHref}
              aria-label={`Call ${site.name} at ${site.phone.display}`}
              className="inline-flex min-h-11 items-center gap-2 whitespace-nowrap text-sm font-semibold text-paper transition-colors hover:text-copper"
            >
              <PhoneIcon className="h-5 w-5 text-copper xl:h-4 xl:w-4" />
              <span className="hidden xl:inline">{site.phone.display}</span>
            </a>
          ) : null}
          <AuditButton variant="onDark" className="w-auto whitespace-nowrap">
            Get a Free Workflow Audit
          </AuditButton>
        </nav>
        <div className="flex items-center gap-1 lg:hidden">
          {phoneHref ? (
            <a
              href={phoneHref}
              aria-label={`Call ${site.name} at ${site.phone.display}`}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-copper"
            >
              <PhoneIcon className="h-6 w-6" />
            </a>
          ) : null}
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-paper lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </Container>
      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-white/10 bg-navy lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="flex min-h-11 items-center text-base font-medium text-paper/90"
              >
                {link.label}
              </a>
            ))}
            {phoneHref ? (
              <a
                href={phoneHref}
                onClick={close}
                className="flex min-h-11 items-center gap-2 text-base font-semibold text-paper"
              >
                <PhoneIcon className="h-5 w-5 text-copper" />
                Call {site.phone.display}
              </a>
            ) : null}
            <AuditButton variant="onDark" className="mt-3 w-full">
              Get a Free Workflow Audit
            </AuditButton>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
