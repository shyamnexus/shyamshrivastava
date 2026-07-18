import type { Metadata } from "next";
import ComingSoonPage from "@/components/common/ComingSoonPage";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

const path = "/playbook/firmware-code-review";

export const metadata: Metadata = createMetadata({
  title: "Firmware Code Review",
  description:
    "Checklist for reviewing embedded firmware before release — practical engineering playbook guidance.",
  path,
  type: "article",
  noIndex: true,
});

export default function FirmwareCodeReviewPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Playbook", path: "/playbook" },
          { name: "Firmware Code Review", path },
        ])}
      />
      <ComingSoonPage
        eyebrow="Engineering Playbook"
        title="Firmware Code Review"
        subtitle="My checklist for reviewing embedded firmware before release."
        backHref="/playbook"
        backLabel="← Back to Playbook"
      />
    </>
  );
}
