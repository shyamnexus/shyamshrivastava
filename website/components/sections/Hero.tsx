import Image from "next/image";
import ButtonLink from "@/components/common/ButtonLink";

const metrics = [
  { value: "20+", label: "Years Experience" },
  { value: "40+", label: "Products" },
  { value: "12+", label: "Engineers Led" },
  { value: "4", label: "Industry Domains" },
];

const techStack = [
  "Embedded Linux",
  "ESP32",
  "Yocto",
  "Buildroot",
  "IoT",
  "AI",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950"
      />

      <div
        aria-hidden="true"
        className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 pb-28 lg:min-h-[90vh] lg:grid-cols-2">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
            Engineering Leader
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-7xl">
            Building
            <br />
            Intelligent
            <br />
            Embedded Products
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
            I help organizations build secure, scalable embedded products—
            from firmware and Linux BSPs to cloud-connected IoT platforms—
            while leading engineering teams that deliver reliable,
            production-ready solutions.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink
              href="#projects"
              size="lg"
              className="min-h-11 bg-blue-600 px-5 text-white hover:bg-blue-700"
            >
              Explore Projects
            </ButtonLink>

            <ButtonLink
              href="/resume"
              size="lg"
              variant="outline"
              className="min-h-11 border-blue-500 px-5 text-blue-400 hover:bg-blue-600 hover:text-white"
            >
              View Resume
            </ButtonLink>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-slate-800 bg-slate-900/60 p-5"
              >
                <p className="text-3xl font-bold text-blue-400">
                  {metric.value}
                </p>

                <p className="mt-2 text-sm text-slate-400">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center pb-10">
          <div
            aria-hidden="true"
            className="absolute h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"
          />

          <Image
            src="/images/professional-headshot.jpg"
            alt="Shyam Shrivastava"
            width={272}
            height={354}
            priority
            sizes="(max-width: 640px) 80vw, 400px"
            className="relative w-full max-w-[400px] rounded-3xl border border-slate-700 object-cover shadow-2xl"
          />

          <div className="absolute bottom-0 flex flex-wrap justify-center gap-3 px-4">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm text-slate-300 backdrop-blur"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
