import type { MetadataRoute } from "next";
import { navigation, collections } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL || "https://maison-elara.example";
  return [
    ...navigation.map(([, p]) => p),
    ...collections.map((c) => `/collections/${c.slug}`),
  ].map((p) => ({
    url: `${base}${p}`,
    changeFrequency: "monthly" as const,
    priority: p === "/" ? 1 : 0.7,
  }));
}
