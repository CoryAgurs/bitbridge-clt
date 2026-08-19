export function HeroDiagram() {
  return (
    <div
      className="grid w-full gap-4 rounded-2xl border border-white/10 bg-navy-soft/60 p-4 sm:p-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-5"
      aria-hidden="true"
    >
      <div className="relative min-h-[13.5rem] sm:min-h-[14.5rem]">
        <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-paper/50">
          Messy manual process
        </p>
        <div className="hero-messy-card absolute left-2 top-9 w-[72%] rounded-md border border-white/10 bg-[#3a2a24] px-3 py-2.5 text-sm text-paper/90 shadow-lg [--tilt:-7deg] rotate-[-7deg]">
          Copy-paste between tools
        </div>
        <div className="hero-messy-card absolute left-[18%] top-[5.4rem] w-[74%] rounded-md border border-white/10 bg-[#2d3340] px-3 py-2.5 text-sm text-paper/90 shadow-lg [--tilt:5deg] rotate-[5deg]">
          Follow-ups that stall
        </div>
        <div className="hero-messy-card absolute left-6 top-[8.8rem] w-[70%] rounded-md border border-white/10 bg-[#3a3328] px-3 py-2.5 text-sm text-paper/90 shadow-lg [--tilt:-3deg] rotate-[-3deg]">
          Reports from scratch
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-3 py-2 lg:flex-row lg:gap-4">
        <span className="text-paper/40 lg:hidden" aria-hidden="true">
          <ArrowDown />
        </span>
        <span className="hidden text-paper/40 lg:block" aria-hidden="true">
          <ArrowRight />
        </span>
        <div className="hero-bridge-pulse flex items-center gap-2 rounded-full border border-copper/40 bg-navy px-3 py-2">
          <svg viewBox="0 0 32 32" className="h-6 w-6 text-copper" aria-hidden="true">
            <rect x="6" y="10" width="3.5" height="14" rx="1" fill="currentColor" />
            <rect x="22.5" y="10" width="3.5" height="14" rx="1" fill="currentColor" />
            <path
              d="M9.5 16c3.5-4 9.5-4 13 0"
              stroke="#F6F1E8"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
          <span className="font-serif text-sm font-semibold text-paper">BitBridge</span>
        </div>
        <span className="text-paper/40 lg:hidden" aria-hidden="true">
          <ArrowDown />
        </span>
        <span className="hidden text-paper/40 lg:block" aria-hidden="true">
          <ArrowRight />
        </span>
      </div>

      <div>
        <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-paper/50">
          Clean automated process
        </p>
        <div className="flex flex-col items-stretch gap-0 rounded-xl border border-white/10 bg-navy-deep/70 p-3">
          <div className="hero-clean-step rounded-md bg-paper px-3 py-2.5 text-sm font-medium text-navy">
            Data captured once
          </div>
          <div className="flex justify-center py-1 text-copper">
            <ArrowDown />
          </div>
          <div className="hero-clean-step rounded-md bg-paper px-3 py-2.5 text-sm font-medium text-navy">
            Follow-up sent on time
          </div>
          <div className="flex justify-center py-1 text-copper">
            <ArrowDown />
          </div>
          <div className="hero-clean-step rounded-md bg-paper px-3 py-2.5 text-sm font-medium text-navy">
            Report ready
          </div>
        </div>
      </div>
    </div>
  );
}

function ArrowDown() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden="true">
      <path
        d="M8 2v10M4 8l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden="true">
      <path
        d="M2 8h10M8 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
