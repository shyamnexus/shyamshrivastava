import type { Metadata } from "next";
import ComingSoonPage from "@/components/common/ComingSoonPage";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

const path = "/playbook/hiring";

export const metadata: Metadata = createMetadata({
  title: "Hiring Embedded Engineers",
  description:
    "How to evaluate firmware, Linux, and hardware candidates — hiring playbook for embedded engineering teams.",
  path,
  type: "article",
  noIndex: true,
});

export default function HiringPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Playbook", path: "/playbook" },
          { name: "Hiring Embedded Engineers", path },
        ])}
      />
      <ComingSoonPage
        eyebrow="Engineering Playbook"
        title="Hiring Embedded Engineers"
        subtitle="How I evaluate firmware, Linux and hardware candidates."
        backHref="/playbook"
        backLabel="← Back to Playbook"
      />
    </>
  );
}
