import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import { principles } from "@/data/leadership";

export default function Leadership() {
  return (
    <Section
      id="leadership"
      bordered={false}
      spacing="xl"
      className="bg-slate-900"
    >
      <div>
        <SectionHeader
          align="center"
          title="Leadership Philosophy"
          subtitle="My approach to engineering leadership is rooted in building high-performing teams, designing scalable systems, and delivering products that create lasting value."
          className="mb-16"
          titleClassName="text-5xl text-white"
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {principles.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-slate-800 bg-slate-950 p-8 transition hover:border-blue-500"
          >
            <h3 className="text-2xl font-semibold text-white">{item.title}</h3>

            <p className="mt-4 leading-7 text-slate-400">{item.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
