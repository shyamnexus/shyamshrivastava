import type { Metadata } from "next";
import ComingSoonPage from "@/components/common/ComingSoonPage";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

const path = "/projects/fire-alarm-panel";

export const metadata: Metadata = createMetadata({
  title: "Fire Alarm Panel",
  description:
    "Cost-optimized intelligent fire panel designed for certification, reliability, and manufacturing scalability.",
  path,
  type: "article",
  noIndex: true,
});

export default function FireAlarmPanelPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
          { name: "Fire Alarm Panel", path },
        ])}
      />
      <ComingSoonPage
        eyebrow="Honeywell Technologies"
        title="Fire Alarm Panel"
        subtitle="Cost-optimized intelligent fire panel designed for certification, reliability and manufacturing scalability."
        backHref="/projects"
        backLabel="← Back to Projects"
      />
    </>
  );
}
