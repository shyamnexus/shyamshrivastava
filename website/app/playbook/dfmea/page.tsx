import type { Metadata } from "next";
import ComingSoonPage from "@/components/common/ComingSoonPage";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

const path = "/playbook/dfmea";

export const metadata: Metadata = createMetadata({
  title: "DFMEA",
  description:
    "A practical approach to Design Failure Mode and Effects Analysis for embedded product development.",
  path,
  type: "article",
  noIndex: true,
});

export default function DfmeaPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Playbook", path: "/playbook" },
          { name: "DFMEA", path },
        ])}
      />
      <ComingSoonPage
        eyebrow="Engineering Playbook"
        title="DFMEA"
        subtitle="A practical approach to Design Failure Mode and Effects Analysis."
        backHref="/playbook"
        backLabel="← Back to Playbook"
      />
    </>
  );
}
