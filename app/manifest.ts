import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return {
    name: "Vishvanath Naik — Portfolio & Field Notes",
    short_name: "Vishvanath Naik",
    description: "Projects, essays, and field notes across systems, operations, markets, and energy.",
    start_url: `${basePath}/`,
    display: "standalone",
    background_color: "#111310",
    theme_color: "#111310",
    icons: [{ src: `${basePath}/icon.svg`, sizes: "any", type: "image/svg+xml" }],
  };
}
