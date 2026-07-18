import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Network } from "lucide-react";
import ButtonLink from "@/components/common/ButtonLink";
import PageHero from "@/components/common/PageHero";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import TechBadge from "@/components/common/TechBadge";
import { getProjectBySlug } from "@/data/projects";
import type { ProjectCaseStudy as ProjectCaseStudyData } from "@/types/project";

interface ProjectCaseStudyProps {
  project: ProjectCaseStudyData;
}

interface CaseStudySectionProps {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

function CaseStudySection({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: CaseStudySectionProps) {
  return (
    <Section id={id} maxWidth="6xl" spacing="md">
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        className="mb-8"
      />
      {children}
    </Section>
  );
}

function TextBlocks({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="max-w-4xl space-y-5 text-lg leading-8 text-slate-400">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 rounded-xl border border-slate-800 bg-slate-900 p-5 leading-7 text-slate-300"
        >
          <span aria-hidden="true" className="mt-2 size-2 shrink-0 rounded-full bg-blue-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function DetailGrid({
  items,
}: {
  items: ProjectCaseStudyData["engineeringChallenges"];
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.title}
          className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
        >
          <h3 className="text-xl font-semibold text-white">{item.title}</h3>
          <p className="mt-3 leading-7 text-slate-400">{item.description}</p>
        </article>
      ))}
    </div>
  );
}

export default function ProjectCaseStudy({
  project,
}: ProjectCaseStudyProps) {
  const relatedProjects = project.relatedProjects
    .map(getProjectBySlug)
    .filter((related) => related !== undefined);

  return (
    <main id="main-content">
      <PageHero
        eyebrow={project.company}
        title={project.title}
        subtitle={project.summary}
        subtitleClassName="max-w-4xl leading-9"
      >
        <div className="flex flex-wrap gap-3">
          {project.technologies.slice(0, 6).map((technology) => (
            <TechBadge key={technology} text={technology} />
          ))}
        </div>

        <div className="mt-10">
          <ButtonLink
            href="/projects"
            variant="outline"
            className="min-h-11 px-5"
          >
            ← Back to Projects
          </ButtonLink>
        </div>
      </PageHero>

      <Section
        id="overview"
        maxWidth="6xl"
        bordered={false}
        spacing="md"
      >
        <SectionHeader eyebrow="Case Study" title="Overview" className="mb-8" />
        <TextBlocks paragraphs={project.overview} />

        <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {project.facts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-xl border border-slate-800 bg-slate-900 p-5"
            >
              <dt className="text-sm uppercase tracking-wider text-blue-400">
                {fact.label}
              </dt>
              <dd className="mt-2 font-semibold text-white">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <CaseStudySection
        id="problem"
        eyebrow="Context"
        title="Problem Statement"
      >
        <TextBlocks paragraphs={project.problemStatement} />
      </CaseStudySection>

      <CaseStudySection
        id="role"
        eyebrow="Leadership"
        title="My Role"
      >
        <BulletList items={project.role} />
      </CaseStudySection>

      <CaseStudySection
        id="technology"
        eyebrow="Platform"
        title="Technology Stack"
        subtitle="Core technologies and engineering disciplines used across the product."
      >
        <ul className="flex flex-wrap gap-3" aria-label="Technology stack">
          {project.technologies.map((technology) => (
            <li key={technology}>
              <TechBadge text={technology} />
            </li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection
        id="architecture"
        eyebrow="System Design"
        title="Architecture"
        subtitle={project.architecture.description}
      >
        <figure className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/60 p-6 sm:p-8">
          <div className="mb-6 flex items-center gap-3 text-blue-400">
            <Network aria-hidden="true" className="size-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Architecture overview
            </span>
          </div>

          <ol className="flex flex-col gap-3 lg:flex-row lg:items-stretch">
            {project.architecture.components.map((component, index) => (
              <li
                key={component}
                className="flex min-w-0 flex-1 flex-col items-center gap-3 lg:flex-row lg:gap-4"
              >
                <div className="flex min-h-20 w-full flex-1 items-center justify-center rounded-xl border border-slate-700 bg-slate-950 p-4 text-center font-medium text-slate-200">
                  {component}
                </div>
                {index < project.architecture.components.length - 1 && (
                  <ArrowRight
                    aria-hidden="true"
                    className="size-5 shrink-0 rotate-90 text-slate-500 lg:rotate-0"
                  />
                )}
              </li>
            ))}
          </ol>

          <figcaption className="mt-6 text-sm leading-6 text-slate-400">
            Conceptual subsystem flow. Detailed diagrams can be added here
            without changing the case-study layout.
          </figcaption>
        </figure>
      </CaseStudySection>

      <CaseStudySection
        id="challenges"
        eyebrow="Execution"
        title="Engineering Challenges"
      >
        <DetailGrid items={project.engineeringChallenges} />
      </CaseStudySection>

      <CaseStudySection
        id="decisions"
        eyebrow="Trade-offs"
        title="Key Decisions"
      >
        <DetailGrid items={project.keyDecisions} />
      </CaseStudySection>

      <CaseStudySection
        id="results"
        eyebrow="Impact"
        title="Results"
      >
        <BulletList items={project.results} />
      </CaseStudySection>

      <CaseStudySection
        id="lessons"
        eyebrow="Reflection"
        title="Lessons Learned"
      >
        <BulletList items={project.lessonsLearned} />
      </CaseStudySection>

      <Section id="related-projects" maxWidth="6xl" spacing="md">
        <SectionHeader
          eyebrow="Explore More"
          title="Related Projects"
          subtitle="Other products and platforms with related engineering challenges."
          className="mb-8"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {relatedProjects.map((related) => (
            <Link
              key={related.slug}
              href={`/projects/${related.slug}`}
              className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <span aria-hidden="true" className="text-3xl">
                {related.emoji}
              </span>
              <p className="mt-4 text-sm text-blue-400">{related.company}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">
                {related.title}
              </h3>
              <span className="mt-5 inline-flex items-center gap-2 text-sm text-slate-400 transition group-hover:text-white">
                View case study
                <ArrowRight aria-hidden="true" className="size-4" />
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </main>
  );
}
