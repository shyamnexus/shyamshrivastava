import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/seo";

const staticRoutes = [
  "/",
  "/resume",
  "/playbook",
  "/projects",
  "/projects/ai-ip-camera",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  return staticRoutes.map((path) => ({
    url: path === "/" ? siteUrl : `${siteUrl}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
