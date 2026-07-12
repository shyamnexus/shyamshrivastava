import SectionHeader from "@/components/common/SectionHeader";
import Section from "@/components/common/Section";

const playbooks = [
  {
    title: "Firmware Code Review",
    description: "My checklist for reviewing embedded firmware before release.",
    href: "/playbook/firmware-code-review",
  },
  {
    title: "Architecture Review",
    description: "Questions I ask before approving a product architecture.",
    href: "/playbook/architecture-review",
  },
  {
    title: "DFMEA",
    description: "A practical approach to Design Failure Mode and Effects Analysis.",
    href: "/playbook/dfmea",
  },
  {
    title: "Hiring Embedded Engineers",
    description: "How I evaluate firmware, Linux and hardware candidates.",
    href: "/playbook/hiring",
  },
  {
    title: "Embedded Linux Bring-up",
    description: "My checklist for BSP and Linux platform development.",
    href: "/playbook/embedded-linux",
  },
];

export default function PlaybookPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Section>
        <SectionHeader
          eyebrow="Engineering Playbook"
          title="How I Build Engineering Teams & Products"
          subtitle="Practical checklists, frameworks, and engineering principles I've developed through 20+ years of product development."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {playbooks.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500"
            >
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-slate-400">{item.description}</p>
            </a>
          ))}
        </div>
      </Section>
    </main>
  );
}