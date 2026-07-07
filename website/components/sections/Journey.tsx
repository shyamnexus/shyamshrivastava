"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2006",
    company: "Transworld Compressor Technology Ltd.",
    title: "R&D Engineer",
    description:
      "Started my engineering career designing embedded electronics and developing a strong foundation in product design, hardware, and firmware engineering.",
  },
  {
    year: "2010",
    company: "NESD Labs",
    title: "Founder & Embedded Consultant",
    description:
      "Established NESD Labs, delivering embedded system design, product prototyping, and engineering consulting for startups and industrial clients.",
  },
  {
    year: "2012",
    company: "Precise Technology",
    title: "Founder & Embedded Consultant",
    description:
      "Designed and developed embedded systems for automobile durability testing and structural analysis. Delivered custom data acquisition, sensing, and embedded control solutions for automotive engineering applications.",
  },
  {
    year: "2016",
    company: "SaiAgrotel",
    title: "Senior Firmware Engineer",
    description:
      "Developed embedded firmware and IoT solutions for industrial automation and connected devices, contributing to multiple commercial products.",
  },
  {
    year: "2018",
    company: "SaiAgrotel",
    title: "Technical Manager",
    description:
      "Led multidisciplinary engineering teams, driving product architecture, firmware development, hardware integration, and successful product delivery from concept to production.",
  },
  {
    year: "2024",
    company: "Honeywell",
    title: "Project Lead",
    description:
      "Leading cross-functional engineering teams developing Embedded Linux platforms, AI surveillance cameras, fire safety systems, wearable medical devices, and connected IoT solutions while driving product architecture and technical strategy.",
  },
];
export default function Journey() {
  return (
    <section
      id="journey"
      className="mx-auto max-w-6xl px-6 py-28"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-16 text-center text-5xl font-bold text-white"
      >
        Engineering Journey
      </motion.h2>

      <div className="relative border-l border-slate-700">

        {timeline.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative mb-14 ml-8"
          >
            <div className="absolute -left-11 top-2 h-5 w-5 rounded-full bg-blue-500 shadow-lg shadow-blue-500/40" />

            <p className="text-sm uppercase tracking-widest text-blue-400">
              {item.year}
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white">
              {item.title}
            </h3>

            <h4 className="mt-1 text-lg text-slate-300">
              {item.company}
            </h4>

            <p className="mt-4 max-w-3xl leading-8 text-slate-400">
              {item.description}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}