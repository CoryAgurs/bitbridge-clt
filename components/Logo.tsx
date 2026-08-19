import { site } from "@/lib/site";

type LogoProps = {
  inverted?: boolean;
  className?: string;
};

export function Logo({ inverted = false, className = "" }: LogoProps) {
  const mark = inverted ? "text-copper" : "text-copper";
  const word = inverted ? "text-paper" : "text-navy";

  return (
    <a href="#top" className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 32 32"
        className={`h-8 w-8 shrink-0 ${mark}`}
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="6" className={inverted ? "fill-navy-soft" : "fill-navy"} />
        <rect x="6" y="10" width="3.5" height="14" rx="1" fill="currentColor" />
        <rect x="22.5" y="10" width="3.5" height="14" rx="1" fill="currentColor" />
        <path
          d="M9.5 16c3.5-4 9.5-4 13 0"
          stroke={inverted ? "#F6F1E8" : "#F6F1E8"}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      <span className={`font-serif text-lg font-semibold tracking-tight ${word}`}>
        {site.name}
      </span>
    </a>
  );
}
