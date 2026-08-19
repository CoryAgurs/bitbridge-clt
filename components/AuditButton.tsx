import { auditMailto } from "@/lib/site";

type AuditButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "onDark" | "onCopper";
  className?: string;
};

const variants = {
  primary:
    "bg-copper text-white hover:bg-copper-hover focus-visible:outline-copper",
  onDark:
    "bg-copper text-white hover:bg-copper-hover focus-visible:outline-paper",
  onCopper:
    "bg-navy text-paper hover:bg-navy-deep focus-visible:outline-navy",
};

export function AuditButton({
  children,
  variant = "primary",
  className = "",
}: AuditButtonProps) {
  return (
    <a
      href={auditMailto}
      className={`inline-flex min-h-12 w-full items-center justify-center rounded-md px-6 text-base font-semibold tracking-tight transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 sm:w-auto ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
