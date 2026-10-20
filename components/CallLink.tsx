import { site } from "@/lib/site";

export const phoneHref = site.phone.tel ? `tel:${site.phone.tel}` : null;

export function PhoneIcon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M5 4h3.5l1.6 4.2-2.1 1.4a11 11 0 005.4 5.4l1.4-2.1L19 14.5V18a2 2 0 01-2 2A14 14 0 013 6a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type CallLinkProps = {
  variant?: "onLight" | "onDark";
};

const variants = {
  onLight: "text-navy hover:text-copper",
  onDark: "text-paper hover:text-copper",
};

// Tappable phone link that sits next to an audit CTA. Renders nothing when no phone is set.
export function CallLink({ variant = "onLight" }: CallLinkProps) {
  if (!phoneHref) return null;

  return (
    <a
      href={phoneHref}
      className={`inline-flex min-h-12 items-center justify-center gap-2 text-base font-semibold transition-colors ${variants[variant]}`}
    >
      <PhoneIcon className="h-5 w-5 text-copper" />
      Call {site.phone.display}
    </a>
  );
}
