"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" />

      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto grid min-h-[90vh] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">

        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
            Engineering Leader
          </p>

          <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">
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
            <Button
				asChild
			  size="lg"
			  variant="outline"
			  className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white"
			>
			  <a
				href="/resume/Shyam-Shrivastava-Resume.pdf"
				target="_blank"
				rel="noopener noreferrer"
			  >
				View Resume
			  </a>
			</Button>
          </div>

          {/* Metrics */}

          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">

            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-slate-800 bg-slate-900/60 p-5"
              >
                <h3 className="text-3xl font-bold text-blue-400">
                  {metric.value}
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  {metric.label}
                </p>
              </div>
            ))}

          </div>
        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="absolute h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

          <Image
            src="/images/professional-headshot.jpg"
            alt="Shyam Shrivastava"
            width={450}
            height={450}
            priority
            className="relative rounded-3xl border border-slate-700 shadow-2xl"
          />

          {/* Floating Tech Badges */}

          <div className="absolute -bottom-8 flex flex-wrap justify-center gap-3">

            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm text-slate-300 backdrop-blur"
              >
                {tech}
              </span>
            ))}

          </div>
        </motion.div>

      </div>
    </section>
  );
}