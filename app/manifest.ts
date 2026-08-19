import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "BitBridge",
    description: site.tagline,
    start_url: "/",
    display: "browser",
    background_color: "#F6F1E8",
    theme_color: "#0F1F33",
  };
}
