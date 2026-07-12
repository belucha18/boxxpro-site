"use client";

import { motion } from "framer-motion";
import {
  Calculator,
  Ruler,
  FileText,
  ClipboardCheck,
} from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Construction Estimating",
    text: "Detailed residential and commercial construction estimates prepared with practical industry knowledge.",
  },
  {
    icon: Ruler,
    title: "Quantity Take-Offs",
    text: "Accurate measurements and material quantities extracted directly from project drawings.",
  },
  {
    icon: FileText,
    title: "Tender Preparation",
    text: "Professional tender documentation designed to help contractors submit competitive proposals.",
  },
  {
    icon: ClipboardCheck,
    title: "Project Cost Planning",
    text: "Early-stage budgeting and cost planning to support informed project decisions.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[4px] text-[#1F4733] font-semibold">
            Our Services
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-slate-900">
            Professional estimating solutions
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            BOXX PRO provides accurate and detailed estimating services for
            builders, contractors and developers throughout the UK.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#F8FAF9] rounded-[28px] p-10 hover:shadow-xl transition"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#1F4733] flex items-center justify-center">
                  <Icon size={30} className="text-white" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mt-8">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-8 mt-5">
                  {service.text}
                </p>
              </motion.div>
            );
          })}

        </div>

        {/* Why our estimates stand out */}

        <div className="mt-20 bg-[#1F4733] rounded-[36px] p-12 text-white">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <span className="uppercase tracking-[4px] text-white/70 font-semibold">
                Why Our Estimates Stand Out
              </span>

              <h3 className="text-4xl font-bold mt-4 leading-tight">
                Built from real construction industry experience
              </h3>

              <p className="text-white/80 leading-8 mt-6">
                Every estimate is prepared with practical construction
                knowledge gained through more than 25 years in the industry.
                This allows us to consider labour efficiency, build sequencing,
                site logistics and other details that are often overlooked.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">

              <div className="bg-white/10 rounded-2xl p-6">
                <h4 className="font-bold text-xl">Labour Costs</h4>
                <p className="text-white/75 mt-3 leading-7">
                  Clear breakdowns of labour requirements.
                </p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6">
                <h4 className="font-bold text-xl">Material Costs</h4>
                <p className="text-white/75 mt-3 leading-7">
                  Detailed quantities and pricing analysis.
                </p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6">
                <h4 className="font-bold text-xl">Time Allocation</h4>
                <p className="text-white/75 mt-3 leading-7">
                  Estimated durations for better planning.
                </p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6">
                <h4 className="font-bold text-xl">Builder’s Perspective</h4>
                <p className="text-white/75 mt-3 leading-7">
                  Practical industry insight behind every estimate.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}