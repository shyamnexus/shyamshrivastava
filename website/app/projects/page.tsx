import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/common/PageHero";
import Section from "@/components/common/Section";
import JsonLd from "@/components/seo/JsonLd";
import { projects } from "@/data/projects";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Projects",
  description:
    "Featured embedded products and platforms spanning AI surveillance, medical wearables, fire safety, industrial IoT, and automotive test systems.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <main id="main-content">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ])}
      />

      <PageHero
        eyebrow="Projects"
        title="Featured Products & Platforms"
        subtitle="Products and platforms I've architected, developed, or led throughout my engineering career."
        titleClassName="text-4xl md:text-5xl lg:text-5xl"
        subtitleClassName="text-lg leading-8 text-slate-400"
      />

      <Section bordered={false} spacing="md" className="pt-0">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => {
            const card = (
              <>
                <span aria-hidden="true" className="text-3xl">
                  {project.emoji}
                </span>
                <p className="mt-4 text-sm text-blue-400">{project.company}</p>
                <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-slate-400">{project.summary}</p>
              </>
            );

            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                {card}
              </Link>
            );
          })}
        </div>
      </Section>
    </main>
  );
}
