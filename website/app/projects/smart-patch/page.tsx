import type { Metadata } from "next";
import ComingSoonPage from "@/components/common/ComingSoonPage";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

const path = "/projects/smart-patch";

export const metadata: Metadata = createMetadata({
  title: "Wearable Smart Patch",
  description:
    "Connected medical wearable for continuous monitoring using embedded firmware, cloud connectivity, and secure communication.",
  path,
  type: "article",
  noIndex: true,
});

export default function SmartPatchPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
          { name: "Wearable Smart Patch", path },
        ])}
      />
      <ComingSoonPage
        eyebrow="Honeywell Technologies"
        title="Wearable Smart Patch"
        subtitle="Connected medical wearable for continuous monitoring using embedded firmware, cloud connectivity and secure communication."
        backHref="/projects"
        backLabel="← Back to Projects"
      />
    </>
  );
}
