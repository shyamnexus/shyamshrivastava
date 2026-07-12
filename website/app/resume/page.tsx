import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-20">

        <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
          Resume
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          Shyam Shrivastava
        </h1>

        <p className="mt-4 max-w-3xl text-xl text-slate-300">
          Engineering Leader specializing in Embedded Systems,
          Embedded Linux, IoT, Medical Devices, AI Surveillance,
          Fire Safety and Product Development.
        </p>

        <div className="mt-8 flex gap-4">

          <a
            href="/resume/Shyam-Shrivastava-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>
              Download PDF
            </Button>
          </a>

          <Link href="/">
<Button
  variant="outline"
  className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white"
>
  Back to Home
</Button>
          </Link>

        </div>

        <section className="mt-16">

          <h2 className="text-3xl font-bold">
            Executive Summary
          </h2>

          <p className="mt-6 leading-8 text-slate-400">
            Engineering Leader with more than 20 years of experience
            building intelligent embedded products across Industrial
            Automation, Medical Devices, AI Surveillance, Fire Safety,
            IoT and Embedded Linux platforms.

            Experienced in leading multidisciplinary engineering teams,
            product architecture, firmware development, certification,
            manufacturing and end-to-end product delivery.
          </p>

        </section>

        <section className="mt-16">

          <h2 className="text-3xl font-bold">
            Career Highlights
          </h2>

          <div className="mt-8 space-y-8">

            <div>
              <h3 className="text-xl font-semibold">
                Honeywell Technologies
              </h3>

              <p className="text-blue-400">
                Project Lead (2024 – Present)
              </p>

              <p className="mt-2 text-slate-400">
                Leading Embedded Linux, AI Surveillance,
                Smart Medical Devices, Fire Safety and
                Connected IoT product development.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                SaiAgrotel
              </h3>

              <p className="text-blue-400">
                Technical Manager (2018 – 2024)
              </p>

              <p className="mt-2 text-slate-400">
                Built industrial IoT platforms and led firmware,
                hardware and cloud engineering teams.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                NESD Labs
              </h3>

              <p className="text-blue-400">
                Founder & Embedded Consultant
              </p>

            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Precise Technology
              </h3>

              <p className="text-blue-400">
                Founder & Embedded Consultant
              </p>

            </div>

          </div>

        </section>

      </div>
    </main>
  );
}