import type { Metadata } from "next";
import ButtonLink from "@/components/common/ButtonLink";
import PageHero from "@/components/common/PageHero";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import TechBadge from "@/components/common/TechBadge";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

const heroTech = [
  "Embedded Linux",
  "ONVIF",
  "AI",
  "RTSP",
  "Secure Boot",
  "OTA",
];

const stack = [
  "Linux",
  "Buildroot",
  "ONVIF",
  "RTSP",
  "H.265",
  "Secure Boot",
  "HTTPS",
  "OTA",
];

const responsibilities = [
  "Cross-functional engineering leadership",
  "Embedded Linux architecture",
  "Firmware planning and reviews",
  "Product roadmap execution",
  "STQC & BIS certification support",
  "Manufacturing readiness",
];

export const metadata: Metadata = createMetadata({
  title: "AI Surveillance Camera Platform",
  description:
    "Secure Embedded Linux surveillance platform with ONVIF interoperability, AI capabilities, remote management, and regulatory certification.",
  path: "/projects/ai-ip-camera",
  type: "article",
});

export default function AICameraPage() {
  return (
    <main id="main-content">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
          {
            name: "AI Surveillance Camera Platform",
            path: "/projects/ai-ip-camera",
          },
        ])}
      />

      <PageHero
        eyebrow="Honeywell Technologies"
        title={
          <>
            AI Surveillance
            <br />
            Camera Platform
          </>
        }
        subtitle="Development of a secure Embedded Linux surveillance platform supporting ONVIF interoperability, AI capabilities, remote management and regulatory certification."
        subtitleClassName="mt-8 max-w-4xl leading-9"
      >
        <div className="flex flex-wrap gap-3">
          {heroTech.map((tech) => (
            <TechBadge key={tech} text={tech} />
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

      <Section maxWidth="6xl" bordered={false} spacing="md">
        <SectionHeader title="The Challenge" className="mb-8" />
        <p className="leading-9 text-slate-400">
          Develop a modern AI-enabled surveillance platform capable of
          supporting multiple camera variants while meeting performance,
          cybersecurity, certification and manufacturing requirements.
        </p>
      </Section>

      <Section maxWidth="6xl" spacing="md">
        <SectionHeader title="My Role" className="mb-8" />
        <ul className="space-y-4 text-slate-400">
          {responsibilities.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </Section>

      <Section maxWidth="6xl" spacing="md">
        <SectionHeader
          eyebrow="Technology"
          title="Technology Stack"
          subtitle="Core technologies used throughout the platform."
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stack.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-slate-800 bg-slate-900 p-5 text-center"
            >
              {item}
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
