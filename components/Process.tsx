"use client";

import { motion } from "framer-motion";
import { Upload, Search, Calculator, FileCheck } from "lucide-react";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Send Your Drawings",
    text: "Upload your architectural drawings, specifications and project information.",
  },
  {
    icon: Search,
    number: "02",
    title: "Project Review",
    text: "We carefully analyse the scope, quantities and construction requirements.",
  },
  {
    icon: Calculator,
    number: "03",
    title: "Estimate Preparation",
    text: "A detailed estimate is prepared using practical construction industry knowledge.",
  },
  {
    icon: FileCheck,
    number: "04",
    title: "Tender Ready",
    text: "Receive a professional estimate ready to support your tender submission.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[4px] text-[#1F4733] font-semibold">
            Our Process
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-slate-900">
            Simple, efficient and professional
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            From the first set of drawings to the final estimate, our process is designed
            to save time and provide accurate information for confident tendering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative bg-[#F8FAF9] rounded-[28px] p-10 text-center hover:shadow-xl transition"
              >
                {/* Step Number */}
                <div className="absolute top-6 right-6 text-sm font-bold text-[#1F4733]/20">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 mx-auto rounded-2xl bg-[#1F4733] flex items-center justify-center">
                  <Icon size={30} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-900 mt-8">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-7 mt-5">
                  {step.text}
                </p>
              </motion.div>
            );
          })}

        </div>

        {/* Bottom Message */}

        <div className="mt-20 bg-[#1F4733] rounded-[36px] p-12 text-center text-white">

          <h3 className="text-3xl font-bold">
            Fast turnaround with professional detail
          </h3>

          <p className="text-white/80 leading-8 mt-6 max-w-3xl mx-auto">
            Most estimates are completed within approximately three working days,
            depending on the size and complexity of the project.
          </p>

        </div>

      </div>
    </section>
  );
}