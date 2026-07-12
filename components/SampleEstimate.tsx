"use client";

import { motion } from "framer-motion";
import { Download, ShieldCheck } from "lucide-react";

export default function SampleEstimate() {
  return (
    <section id="sample-estimate" className="py-28 bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side - Image Placeholder */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="bg-white rounded-[32px] overflow-hidden shadow-2xl">

              <div className="h-[520px] bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-lg">
                  Sample Estimate Preview
                </span>
              </div>

            </div>

            <div className="absolute -bottom-8 -right-8 bg-[#1F4733] text-white rounded-2xl p-6 shadow-xl">

              <div className="flex items-center gap-3">

                <ShieldCheck size={32} />

                <div>

                  <h4 className="font-bold">
                    Client Privacy Protected
                  </h4>

                  <p className="text-sm text-white/80">
                    All personal information removed
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

          {/* Right Side - Content */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <span className="uppercase tracking-[4px] text-[#1F4733] font-semibold">
              Sample Estimate
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-slate-900 leading-tight">
              See the level of detail we provide
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-8">
              We believe our estimates speak for themselves.
            </p>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Every estimate prepared by BOXX PRO includes detailed labour,
              material and cost breakdowns designed to help contractors price
              projects accurately and submit competitive tenders.
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-[#1F4733] mt-3"></div>
                <p className="text-gray-700 text-lg">
                  Labour cost breakdowns
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-[#1F4733] mt-3"></div>
                <p className="text-gray-700 text-lg">
                  Material quantities and pricing
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-[#1F4733] mt-3"></div>
                <p className="text-gray-700 text-lg">
                  Construction sequencing considerations
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 rounded-full bg-[#1F4733] mt-3"></div>
                <p className="text-gray-700 text-lg">
                  Time allocation and planning support
                </p>
              </div>

            </div>

            <a
              href="#"
              className="inline-flex items-center gap-3 mt-12 bg-[#1F4733] text-white px-8 py-4 rounded-xl hover:bg-[#163526] transition"
            >

              <Download size={22} />

              View Sample Estimate

            </a>

            <p className="text-sm text-gray-500 mt-6 leading-7">
              Every sample estimate displayed has been carefully anonymised to
              protect our clients&apos; privacy while demonstrating the level of
              detail we provide.
            </p>

          </motion.div>

        </div>

      </div>
    </section>
  );
}