import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 bg-navy-deep py-12 text-paper">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Logo inverted />
            <p className="mt-3 max-w-xs text-sm leading-6 text-paper/70">
              {site.tagline}
            </p>
            <p className="mt-4 text-sm text-paper/80">
              <a
                href={`mailto:${site.email}`}
                className="underline-offset-4 hover:underline"
              >
                {site.email}
              </a>
              {" · "}
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="BitBridge CLT on Instagram"
                className="underline-offset-4 hover:underline"
              >
                {site.instagram.handle}
              </a>
              {" · "}
              {site.city}
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-col gap-3 sm:items-end">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-paper/80 hover:text-paper"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-10 border-t border-white/10 pt-6 text-sm text-paper/50">
          © {site.year} {site.legalName}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
