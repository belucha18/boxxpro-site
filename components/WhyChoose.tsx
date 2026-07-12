"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const points = [
  "25+ years of construction industry experience",
  "Fast turnaround times",
  "Accurate quantity take-offs",
  "Competitive tender support",
  "Professional communication",
  "Reliable estimating partner",
];

export default function WhyChoose() {
  return (
    <section className="py-28 bg-[#123B2D] text-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[4px] text-[#2D5B45] font-semibold">
            WHY CHOOSE US
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Experience You Can Trust
          </h2>

          <p className="mt-8 text-lg text-gray-300 leading-8">
            BOXX PRO combines practical construction knowledge with
            professional estimating services, helping contractors
            submit competitive and accurate tenders across the UK.
          </p>

          <div className="mt-10 space-y-5">

            {points.map((item) => (

              <div
                key={item}
                className="flex items-center gap-4"
              >

                <CheckCircle2
                  className="text-[#1F4733]"
                  size={26}
                />

                <span className="text-lg">
                  {item}
                </span>

              </div>

            ))}

          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-[#1B4A39] rounded-3xl p-10 shadow-xl text-center">
              <h3 className="text-5xl font-bold text-[#1F4733]">
                25+
              </h3>
              <p className="mt-3 text-gray-500">
                Years Experience
              </p>
            </div>

            <div className="bg-[#1B4A39] rounded-3xl p-10 shadow-xl text-center">
              <h3 className="text-5xl font-bold text-[#1F4733]">
                UK
              </h3>
              <p className="mt-3 text-gray-500">
                Nationwide
              </p>
            </div>

            <div className="bg-[#1B4A39] rounded-3xl p-10 shadow-xl text-center">
              <h3 className="text-5xl font-bold text-[#1F4733]">
                100%
              </h3>
              <p className="mt-3 text-gray-500">
                Dedicated Service
              </p>
            </div>

            <div className="bg-[#1B4A39] rounded-3xl p-10 shadow-xl text-center">
              <h3 className="text-5xl font-bold text-[#1F4733]">
                Fast
              </h3>
              <p className="mt-3 text-gray-500">
                Response Time
              </p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}