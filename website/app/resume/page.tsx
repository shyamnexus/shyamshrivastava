import type { Metadata } from "next";
import ButtonLink from "@/components/common/ButtonLink";
import PageHero from "@/components/common/PageHero";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import JsonLd from "@/components/seo/JsonLd";
import { site } from "@/config/site";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

const highlights = [
  {
    company: "Honeywell Technologies",
    role: "Project Lead (2024 – Present)",
    description:
      "Leading Embedded Linux, AI Surveillance, Smart Medical Devices, Fire Safety and Connected IoT product development.",
  },
  {
    company: "SaiAgrotel",
    role: "Technical Manager (2018 – 2024)",
    description:
      "Built industrial IoT platforms and led firmware, hardware and cloud engineering teams.",
  },
  {
    company: "NESD Labs",
    role: "Founder & Embedded Consultant",
  },
  {
    company: "Precise Technology",
    role: "Founder & Embedded Consultant",
  },
];

export const metadata: Metadata = createMetadata({
  title: "Resume",
  description: `Resume of ${site.name} — ${site.title} specializing in Embedded Systems, Embedded Linux, IoT, and product development.`,
  path: "/resume",
  type: "profile",
});

export default function ResumePage() {
  return (
    <main id="main-content">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Resume", path: "/resume" },
        ])}
      />

      <PageHero
        eyebrow="Resume"
        title={site.name}
        subtitle={site.description}
        maxWidth="5xl"
        bordered={false}
        titleClassName="text-5xl md:text-5xl lg:text-5xl"
        subtitleClassName="mt-4"
      >
        <div className="flex flex-wrap gap-4">
          <ButtonLink
            href={site.resumePdfPath}
            external
            className="min-h-11 bg-blue-600 px-5 text-white hover:bg-blue-700"
          >
            Download PDF
          </ButtonLink>

          <ButtonLink
            href="/"
            variant="outline"
            className="min-h-11 border-blue-500 px-5 text-blue-400 hover:bg-blue-600 hover:text-white"
          >
            Back to Home
          </ButtonLink>
        </div>
      </PageHero>

      <Section maxWidth="5xl" bordered={false} spacing="none" className="pb-20">
        <div className="space-y-16">
          <div>
            <SectionHeader
              title="Executive Summary"
              className="mb-6"
              titleClassName="text-3xl md:text-3xl"
            />

            <p className="leading-8 text-slate-400">
              Engineering Leader with more than 20 years of experience building
              intelligent embedded products across Industrial Automation,
              Medical Devices, AI Surveillance, Fire Safety, IoT and Embedded
              Linux platforms. Experienced in leading multidisciplinary
              engineering teams, product architecture, firmware development,
              certification, manufacturing and end-to-end product delivery.
            </p>
          </div>

          <div>
            <SectionHeader
              title="Career Highlights"
              className="mb-8"
              titleClassName="text-3xl md:text-3xl"
            />

            <div className="space-y-8">
              {highlights.map((item) => (
                <div key={item.company}>
                  <h3 className="text-xl font-semibold">{item.company}</h3>
                  <p className="text-blue-400">{item.role}</p>
                  {item.description && (
                    <p className="mt-2 text-slate-400">{item.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
