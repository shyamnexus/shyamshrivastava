import type { Metadata } from "next";
import ComingSoonPage from "@/components/common/ComingSoonPage";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

const path = "/projects/industrial-iot";

export const metadata: Metadata = createMetadata({
  title: "Industrial IoT",
  description:
    "Industrial automation solutions integrating embedded controllers, gateways, and cloud platforms.",
  path,
  type: "article",
  noIndex: true,
});

export default function IndustrialIotPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
          { name: "Industrial IoT", path },
        ])}
      />
      <ComingSoonPage
        eyebrow="SaiAgrotel"
        title="Industrial IoT"
        subtitle="Industrial automation solutions integrating embedded controllers, gateways and cloud platforms."
        backHref="/projects"
        backLabel="← Back to Projects"
      />
    </>
  );
}
