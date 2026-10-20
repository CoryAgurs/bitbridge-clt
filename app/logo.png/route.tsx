import { ImageResponse } from "next/og";

export const dynamic = "force-static";

const size = 512;

// Raster copy of app/icon.svg for the structured-data logo (Google needs at least 112x112).
export function GET() {
  return new ImageResponse(
    (
      <svg width={size} height={size} viewBox="0 0 32 32">
        <rect width="32" height="32" rx="6" fill="#0F1F33" />
        <rect x="6" y="10" width="3.5" height="14" rx="1" fill="#C45C26" />
        <rect x="22.5" y="10" width="3.5" height="14" rx="1" fill="#C45C26" />
        <path
          d="M9.5 16c3.5-4 9.5-4 13 0"
          stroke="#F6F1E8"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    ),
    { width: size, height: size },
  );
}
