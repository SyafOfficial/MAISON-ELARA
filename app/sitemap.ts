import type { MetadataRoute } from "next";
import { navigation, collections, site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  return [
    ...navigation.map(([, p]) => p),
    ...collections.map((c) => `/collections/${c.slug}`),
  ].map((p) => ({
    url: `${base}${p}`,
    changeFrequency: "monthly" as const,
    priority: p === "/" ? 1 : 0.7,
  }));
}
