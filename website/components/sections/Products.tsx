"use client";

import { motion } from "framer-motion";

const products = [
  {
    emoji: "📷",
    title: "AI IP Camera Platform",
    company: "Honeywell",
    description:
      "Embedded Linux surveillance platform with AI capabilities, ONVIF support, cloud connectivity and STQC compliance.",
    technologies: ["Linux", "ONVIF", "H.265", "AI", "Yocto"],
  },
  {
    emoji: "❤️",
    title: "Wearable Smart Patch",
    company: "Honeywell",
    description:
      "Connected medical wearable for continuous monitoring using embedded firmware, cloud connectivity and secure communication.",
    technologies: ["ESP32", "BLE", "IoT", "Firmware"],
  },
  {
    emoji: "🔥",
    title: "Fire Alarm Panel",
    company: "Honeywell",
    description:
      "Cost-optimized intelligent fire panel designed for certification, reliability and manufacturing scalability.",
    technologies: ["Embedded C", "RTOS", "DFMEA"],
  },
  {
    emoji: "🏭",
    title: "Industrial IoT",
    company: "SaiAgrotel",
    description:
      "Industrial automation solutions integrating embedded controllers, gateways and cloud platforms.",
    technologies: ["MQTT", "ESP32", "Linux"],
  },
  {
    emoji: "🚗",
    title: "Automotive Test Systems",
    company: "Precise Technology",
    description:
      "Embedded data acquisition systems for automobile durability testing and structural analysis.",
    technologies: ["CAN", "Sensors", "Data Logger"],
  },
  {
    emoji: "⚙️",
    title: "Custom Embedded Systems",
    company: "NESD Labs",
    description:
      "Designed custom electronics and firmware solutions for startups and industrial customers.",
    technologies: ["Embedded C", "ARM", "PCB"],
  },
];

export default function Products() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <h2 className="mb-4 text-center text-5xl font-bold">
        Featured Products
      </h2>

      <p className="mx-auto mb-16 max-w-3xl text-center text-slate-400">
        Products and platforms I've architected, developed, or led throughout my engineering career.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <motion.div
            key={product.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 hover:border-blue-500 transition-all"
          >
            <div className="text-5xl">{product.emoji}</div>

            <h3 className="mt-4 text-2xl font-bold">
              {product.title}
            </h3>

            <p className="mt-2 text-blue-400">
              {product.company}
            </p>

            <p className="mt-4 text-slate-400">
              {product.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {product.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}