"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="uppercase tracking-[4px] text-[#1F4733] font-semibold">
            About BOXX PRO
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-slate-900 leading-tight">
            Construction knowledge behind every estimate.
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-8">
            BOXX PRO combines over 25 years of construction experience with
            professional estimating expertise to help contractors and developers
            prepare accurate, detailed and competitive tenders.
          </p>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Unlike a traditional estimating company, our estimates are prepared
            from a builder’s perspective, considering practical construction
            methods, sequencing, labour efficiency and real-world site
            requirements.
          </p>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            This approach gives our clients greater confidence when submitting
            tenders and helps them present stronger, more reliable proposals.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-6">

            <div className="p-6 rounded-2xl bg-[#F5F7F6]">
              <h3 className="font-bold text-2xl text-[#1F4733]">25+</h3>
              <p className="text-gray-600 mt-2">Years in construction</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F7F6]">
              <h3 className="font-bold text-2xl text-[#1F4733]">UK</h3>
              <p className="text-gray-600 mt-2">Nationwide estimating support</p>
            </div>

          </div>
        </motion.div>

        {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="bg-gray-200 rounded-[35px] h-[600px] flex items-center justify-center shadow-2xl">
            <span className="text-gray-500 text-lg">
              Team Working Photo
            </span>
          </div>

          <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
            <h3 className="font-bold text-slate-900">Builder’s Perspective</h3>
            <p className="text-sm text-gray-600 mt-2 leading-6">
              Practical construction knowledge applied to every tender and
              estimate prepared.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}