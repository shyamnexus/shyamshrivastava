import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/common/PageHero";
import Section from "@/components/common/Section";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

const playbooks = [
  {
    title: "Firmware Code Review",
    description: "My checklist for reviewing embedded firmware before release.",
    href: "/playbook/firmware-code-review",
  },
  {
    title: "Architecture Review",
    description: "Questions I ask before approving a product architecture.",
    href: "/playbook/architecture-review",
  },
  {
    title: "DFMEA",
    description: "A practical approach to Design Failure Mode and Effects Analysis.",
    href: "/playbook/dfmea",
  },
  {
    title: "Hiring Embedded Engineers",
    description: "How I evaluate firmware, Linux and hardware candidates.",
    href: "/playbook/hiring",
  },
  {
    title: "Embedded Linux Bring-up",
    description: "My checklist for BSP and Linux platform development.",
    href: "/playbook/embedded-linux",
  },
];

export const metadata: Metadata = createMetadata({
  title: "Engineering Playbook",
  description:
    "Practical checklists, frameworks, and engineering principles for firmware reviews, architecture, DFMEA, hiring, and Embedded Linux bring-up.",
  path: "/playbook",
});

export default function PlaybookPage() {
  return (
    <main id="main-content">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Playbook", path: "/playbook" },
        ])}
      />

      <PageHero
        eyebrow="Engineering Playbook"
        title="How I Build Engineering Teams & Products"
        subtitle="Practical checklists, frameworks, and engineering principles I've developed through 20+ years of product development."
        titleClassName="text-4xl md:text-5xl lg:text-5xl"
        subtitleClassName="text-lg leading-8 text-slate-400"
      />

      <Section bordered={false} spacing="md" className="pt-0">
        <div className="grid gap-6 md:grid-cols-2">
          {playbooks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500"
            >
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-slate-400">{item.description}</p>
            </Link>
          ))}
        </div>
      </Section>
    </main>
  );
}
