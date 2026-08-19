import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0F1F33",
          padding: 72,
          color: "#F6F1E8",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#C45C26",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          Charlotte, NC · AI Systems Integration
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 58,
            fontWeight: 600,
            lineHeight: 1.15,
            maxWidth: 980,
          }}
        >
          Your business is drowning in busywork. We teach it to swim.
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#C45C26" }}>
          {site.name}
        </div>
      </div>
    ),
    size,
  );
}
