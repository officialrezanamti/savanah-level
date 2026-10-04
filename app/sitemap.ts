import type { MetadataRoute } from "next";

import { services } from "@/data/services";
import { client } from "@/sanity/lib/client";
import { allPostSlugsQuery } from "@/sanity/lib/queries";
import { publicConfig } from "@/lib/public-config";

export const SITE_URL = publicConfig.siteUrl;

const routes: MetadataRoute.Sitemap = [
  { path: "/", priority: 1.0, changeFrequency: "yearly" as const },
  { path: "/services", priority: 0.9, changeFrequency: "yearly" as const },
  { path: "/gallery", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.6, changeFrequency: "yearly" as const },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" as const },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
].map(({ path, ...metadata }) => ({
  url: new URL(path, SITE_URL).toString(),
  ...metadata,
}));

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const serviceRoutes = services.map(({ slug }) => ({
    url: new URL(`/services/${slug}`, SITE_URL).toString(),
    priority: 0.8,
    changeFrequency: "yearly" as const,
  }));

  const postSlugs = await client
    .fetch<string[]>(allPostSlugsQuery)
    .catch(() => [] as string[]);

  const postRoutes = postSlugs.map((slug) => ({
    url: new URL(`/blog/${slug}`, SITE_URL).toString(),
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  return [...routes, ...serviceRoutes, ...postRoutes];
}
