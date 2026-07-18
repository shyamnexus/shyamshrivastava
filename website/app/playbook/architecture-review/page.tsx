import type { Metadata } from "next";
import ComingSoonPage from "@/components/common/ComingSoonPage";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

const path = "/playbook/architecture-review";

export const metadata: Metadata = createMetadata({
  title: "Architecture Review",
  description:
    "Questions to ask before approving a product architecture — engineering playbook for embedded platforms.",
  path,
  type: "article",
  noIndex: true,
});

export default function ArchitectureReviewPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Playbook", path: "/playbook" },
          { name: "Architecture Review", path },
        ])}
      />
      <ComingSoonPage
        eyebrow="Engineering Playbook"
        title="Architecture Review"
        subtitle="Questions I ask before approving a product architecture."
        backHref="/playbook"
        backLabel="← Back to Playbook"
      />
    </>
  );
}
