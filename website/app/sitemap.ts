import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { getSiteUrl } from "@/lib/seo";

const staticRoutes = [
  "/",
  "/resume",
  "/playbook",
  "/projects",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  const projectRoutes = projects.map((project) => `/projects/${project.slug}`);

  return [...staticRoutes, ...projectRoutes].map((path) => ({
    url: path === "/" ? siteUrl : `${siteUrl}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
