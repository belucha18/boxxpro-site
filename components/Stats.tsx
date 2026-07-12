"use client";

import { motion } from "framer-motion";
import { Clock3, FileText, MapPinned, Hammer } from "lucide-react";

const stats = [
  {
    icon: Hammer,
    value: "25+",
    title: "Years Experience",
    text: "Extensive construction knowledge behind every estimate.",
  },
  {
    icon: Clock3,
    value: "3 Days",
    title: "Average Turnaround",
    text: "Fast, reliable estimating to keep projects moving.",
  },
  {
    icon: FileText,
    value: "100%",
    title: "Detailed Breakdown",
    text: "Clear labour, materials and plant cost analysis.",
  },
  {
    icon: MapPinned,
    value: "UK",
    title: "Nationwide Coverage",
    text: "Supporting contractors and developers across the UK.",
  },
];

export default function Stats() {
  return (
    <section className="py-24 bg-[#1F4733] text-white">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center"
              >
                <Icon
                  size={50}
                  className="mx-auto mb-6 text-white"
                />

                <h2 className="text-4xl font-bold">
                  {item.value}
                </h2>

                <h3 className="text-xl mt-3 font-semibold">
                  {item.title}
                </h3>

                <p className="text-white/80 mt-4 leading-7">
                  {item.text}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}