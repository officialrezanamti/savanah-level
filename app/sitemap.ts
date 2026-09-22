import type { MetadataRoute } from "next";

import { services } from "@/data/services";

export const SITE_URL = "https://savlevel.com";

const routes: MetadataRoute.Sitemap = [
  { path: "/", priority: 1.0, changeFrequency: "yearly" as const },
  { path: "/services", priority: 0.9, changeFrequency: "yearly" as const },
  { path: "/gallery", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.6, changeFrequency: "yearly" as const },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" as const },
].map(({ path, ...metadata }) => ({
  url: new URL(path, SITE_URL).toString(),
  ...metadata,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceRoutes = services.map(({ slug }) => ({
    url: new URL(`/services/${slug}`, SITE_URL).toString(),
    priority: 0.8,
    changeFrequency: "yearly" as const,
  }));

  return [...routes, ...serviceRoutes];
}
