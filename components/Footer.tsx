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
            {/* NAP block: keep name, locality, and phone character-identical to the schema and llms.txt. */}
            <address className="mt-4 text-sm not-italic leading-6 text-paper/80">
              <span className="font-semibold text-paper">{site.name}</span>
              {" · "}
              {site.city}
              {site.phone.display ? (
                <>
                  {" · "}
                  <a
                    href={`tel:${site.phone.tel}`}
                    className="underline-offset-4 hover:underline"
                  >
                    {site.phone.display}
                  </a>
                </>
              ) : null}
              {" · "}
              <a
                href={`mailto:${site.email}`}
                className="underline-offset-4 hover:underline"
              >
                {site.email}
              </a>
            </address>
            <p className="mt-2 text-sm text-paper/80">
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="BitBridge CLT on Instagram"
                className="underline-offset-4 hover:underline"
              >
                Instagram {site.instagram.handle}
              </a>
              {" · "}
              <a
                href={site.googleBusinessProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:underline"
              >
                Google Business Profile
              </a>
            </p>
            <p className="mt-2 text-sm text-paper/60">
              {site.founder.name}:{" "}
              {site.founder.profiles.slice(0, 2).map((profile, index) => (
                <span key={profile.label}>
                  {index > 0 ? " · " : null}
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-paper/80 underline-offset-4 hover:underline"
                  >
                    {profile.label}
                  </a>
                </span>
              ))}
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
