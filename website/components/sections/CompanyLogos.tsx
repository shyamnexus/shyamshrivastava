import Image from "next/image";

const companies = [
  {
    name: "Honeywell",
    logo: "/logos/honeywell.svg",
  },
  {
    name: "SaiAgrotel",
    logo: "/logos/saiagrotel.png",
  },
  {
    name: "NESD Labs",
    logo: "/logos/nesdlabs.png",
  },
  {
    name: "Precise Technology",
    logo: "/logos/precise.png",
  },
  {
    name: "Transworld",
    logo: "/logos/transworld.png",
  },
];

export default function CompanyLogos() {
  return (
    <section className="border-y border-slate-800 bg-slate-900 py-10">
      <div className="mx-auto max-w-7xl px-6">

        <p className="mb-8 text-center text-sm uppercase tracking-[0.3em] text-slate-500">
          Trusted Experience
        </p>

        <div className="flex flex-wrap items-center justify-center gap-12">
          {companies.map((company) => (
            <div
              key={company.name}
              className="opacity-60 transition duration-300 hover:opacity-100"
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={140}
                height={60}
                className="grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}