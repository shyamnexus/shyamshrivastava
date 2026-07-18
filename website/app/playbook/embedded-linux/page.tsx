import type { Metadata } from "next";
import ComingSoonPage from "@/components/common/ComingSoonPage";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

const path = "/playbook/embedded-linux";

export const metadata: Metadata = createMetadata({
  title: "Embedded Linux Bring-up",
  description:
    "Checklist for BSP and Linux platform development — practical Embedded Linux bring-up guidance.",
  path,
  type: "article",
  noIndex: true,
});

export default function EmbeddedLinuxPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Playbook", path: "/playbook" },
          { name: "Embedded Linux Bring-up", path },
        ])}
      />
      <ComingSoonPage
        eyebrow="Engineering Playbook"
        title="Embedded Linux Bring-up"
        subtitle="My checklist for BSP and Linux platform development."
        backHref="/playbook"
        backLabel="← Back to Playbook"
      />
    </>
  );
}
