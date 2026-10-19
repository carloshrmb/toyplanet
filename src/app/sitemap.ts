import type { MetadataRoute } from "next";
import { business } from "@/data/site";

// Sitio de una sola página (one-page); se lista la URL principal.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: business.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
