import Section from "@/components/common/Section";

const companies = [
  "Honeywell",
  "SaiAgrotel",
  "NESD Labs",
  "Precise Technology",
  "Transworld",
];

export default function CompanyLogos() {
  return (
    <Section
      bordered="y"
      spacing="sm"
      className="bg-slate-900"
    >
      <p className="mb-8 text-center text-sm uppercase tracking-[0.3em] text-slate-400">
        Trusted Experience
      </p>

      <ul
        aria-label="Companies where Shyam has worked"
        className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 sm:gap-x-12"
      >
        {companies.map((company) => (
          <li
            key={company}
            className="min-w-32 text-center text-base font-semibold tracking-wide text-slate-400 transition-colors hover:text-white"
          >
            {company}
          </li>
        ))}
      </ul>
    </Section>
  );
}
