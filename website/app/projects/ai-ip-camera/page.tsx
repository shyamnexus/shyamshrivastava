import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AICameraPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}

      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-20">

          <p className="uppercase tracking-[0.3em] text-blue-400">
            Honeywell Technologies
          </p>

          <h1 className="mt-4 text-6xl font-bold">
            AI Surveillance
            <br />
            Camera Platform
          </h1>

          <p className="mt-8 max-w-4xl text-xl leading-9 text-slate-300">
            Development of a secure Embedded Linux surveillance platform
            supporting ONVIF interoperability, AI capabilities,
            remote management and regulatory certification.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">

            {[
              "Embedded Linux",
              "ONVIF",
              "AI",
              "RTSP",
              "Secure Boot",
              "OTA",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-blue-500 px-4 py-2 text-blue-300"
              >
                {tech}
              </span>
            ))}

          </div>

          <div className="mt-10">

            <Link href="/projects">
              <Button variant="outline">
                ← Back to Projects
              </Button>
            </Link>

          </div>

        </div>
      </section>

      {/* Challenge */}

      <section className="mx-auto max-w-6xl px-6 py-20">

        <h2 className="text-4xl font-bold">
          The Challenge
        </h2>

        <p className="mt-8 leading-9 text-slate-400">
          Develop a modern AI-enabled surveillance platform capable of
          supporting multiple camera variants while meeting
          performance, cybersecurity, certification and manufacturing
          requirements.
        </p>

      </section>

      {/* Role */}

      <section className="mx-auto max-w-6xl px-6 py-20 border-t border-slate-800">

        <h2 className="text-4xl font-bold">
          My Role
        </h2>

        <ul className="mt-8 space-y-4 text-slate-400">

          <li>• Cross-functional engineering leadership</li>

          <li>• Embedded Linux architecture</li>

          <li>• Firmware planning and reviews</li>

          <li>• Product roadmap execution</li>

          <li>• STQC & BIS certification support</li>

          <li>• Manufacturing readiness</li>

        </ul>

      </section>

      {/* Technology */}

      <section className="mx-auto max-w-6xl px-6 py-20 border-t border-slate-800">

        <SectionHeader
			eyebrow="Technology"
			title="Technology Stack"
			subtitle="Core technologies used throughout the platform."
		/>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">

          {[
            "Linux",
            "Buildroot",
            "ONVIF",
            "RTSP",
            "H.265",
            "Secure Boot",
            "HTTPS",
            "OTA",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-slate-800 bg-slate-900 p-5 text-center"
            >
              {item}
            </div>
          ))}

        </div>

      </section>

    </main>
  );
}