"use client";

import { motion } from "framer-motion";

const principles = [
  {
    title: "Build Platforms",
    description:
      "Create reusable platforms instead of one-off products. Great engineering compounds over time.",
  },
  {
    title: "Architecture First",
    description:
      "Good architecture enables teams to move faster, scale better, and reduce long-term technical debt.",
  },
  {
    title: "Quality by Design",
    description:
      "Reliability, security, and maintainability are built into the design—not added at the end.",
  },
  {
    title: "Empower Engineers",
    description:
      "The best engineering leaders create an environment where talented people can do their best work.",
  },
  {
    title: "Customer Value",
    description:
      "Technology is successful only when it solves real customer problems and creates measurable value.",
  },
  {
    title: "Continuous Learning",
    description:
      "Technology evolves constantly. Great engineers stay curious and keep learning.",
  },
];

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="bg-slate-900 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-5xl font-bold text-white"
        >
          Leadership Philosophy
        </motion.h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-slate-400">
          My approach to engineering leadership is rooted in building
          high-performing teams, designing scalable systems, and delivering
          products that create lasting value.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {principles.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-8 transition hover:border-blue-500"
            >
              <h3 className="text-2xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}