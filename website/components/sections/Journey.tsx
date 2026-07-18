import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import { journey } from "@/data/journey";

export default function Journey() {
  return (
    <Section id="journey" bordered={false} spacing="xl" maxWidth="6xl">
      <div>
        <SectionHeader
          align="center"
          title="Engineering Journey"
          className="mb-16"
          titleClassName="text-5xl text-white"
        />
      </div>

      <div className="relative border-l border-slate-700">
        {journey.map((item) => (
          <article
            key={`${item.year}-${item.title}`}
            className="relative mb-14 ml-8"
          >
            <div className="absolute -left-11 top-2 h-5 w-5 rounded-full bg-blue-500 shadow-lg shadow-blue-500/40" />

            <p className="text-sm uppercase tracking-widest text-blue-400">
              {item.year}
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white">{item.title}</h3>

            <p className="mt-1 text-lg text-slate-300">{item.company}</p>

            <p className="mt-4 max-w-3xl leading-8 text-slate-400">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
