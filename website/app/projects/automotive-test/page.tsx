import type { Metadata } from "next";
import ComingSoonPage from "@/components/common/ComingSoonPage";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

const path = "/projects/automotive-test";

export const metadata: Metadata = createMetadata({
  title: "Automotive Test Systems",
  description:
    "Embedded data acquisition systems for automobile durability testing and structural analysis.",
  path,
  type: "article",
  noIndex: true,
});

export default function AutomotiveTestPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
          { name: "Automotive Test Systems", path },
        ])}
      />
      <ComingSoonPage
        eyebrow="Precise Technology"
        title="Automotive Test Systems"
        subtitle="Embedded data acquisition systems for automobile durability testing and structural analysis."
        backHref="/projects"
        backLabel="← Back to Projects"
      />
    </>
  );
}
