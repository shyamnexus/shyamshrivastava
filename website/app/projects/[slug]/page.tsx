import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectCaseStudy from "@/components/projects/ProjectCaseStudy";
import JsonLd from "@/components/seo/JsonLd";
import { getProjectBySlug, projects } from "@/data/projects";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  createMetadata,
} from "@/lib/seo";
import { site } from "@/config/site";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return createMetadata({
    title: project.title,
    description: project.seoDescription,
    path: `/projects/${project.slug}`,
    type: "article",
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const path = `/projects/${project.slug}`;
  const structuredData = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Projects", path: "/projects" },
      { name: project.title, path },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: project.title,
      headline: project.title,
      description: project.seoDescription,
      url: absoluteUrl(path),
      author: {
        "@type": "Person",
        name: site.name,
        url: absoluteUrl("/"),
      },
      about: project.technologies,
      isPartOf: {
        "@type": "CollectionPage",
        name: "Projects",
        url: absoluteUrl("/projects"),
      },
    },
  ];

  return (
    <>
      <JsonLd data={structuredData} />
      <ProjectCaseStudy project={project} />
    </>
  );
}
