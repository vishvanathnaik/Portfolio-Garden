import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const routes = ["", "/about", "/projects", "/projects/last-mile-delivery", "/projects/guyana-economic-transformation", "/writing", "/notes", "/reading", "/now", "/resume", "/contact", "/mind-map"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `https://vishvanathnaik.com${route}`, lastModified: new Date(), changeFrequency: route === "" ? "monthly" : "yearly", priority: route === "" ? 1 : 0.7 }));
}
