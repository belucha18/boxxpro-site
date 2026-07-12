"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-24 bg-white overflow-hidden flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
  "linear-gradient(rgba(255,255,255,0.92), rgba(255,255,255,0.92)), repeating-linear-gradient(90deg, #d1d5db 0px, #d1d5db 1px, transparent 1px, transparent 60px), repeating-linear-gradient(0deg, #d1d5db 0px, #d1d5db 1px, transparent 1px, transparent 60px)",
        }}
      />

      {/* Left Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="uppercase tracking-[4px] text-[#1F4733] font-semibold">
            Construction Estimating Specialists
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mt-6 text-slate-900">
            Accurate Estimates.
            <br />
            Better Planning.
            <br />
            Stronger Projects.
          </h1>

          <p className="mt-10 text-lg text-gray-600 leading-8 max-w-xl">
            BProfessional construction estimating and project management support
backed by over 25 years of real construction industry experience.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">
            <a
              href="#contact"
              className="bg-[#1F4733] text-white px-8 py-4 rounded-xl hover:bg-[#163526] transition"
            >
              Contact Us
            </a>

            <a
              href="#services"
              className="border border-[#1F4733] text-[#1F4733] px-8 py-4 rounded-xl hover:bg-[#1F4733] hover:text-white transition"
            >
              Our Services
            </a>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="rounded-[35px] overflow-hidden shadow-2xl">

          <div className="w-full h-[650px] rounded-[35px] bg-gradient-to-br from-[#E9F0EC] to-[#DCE7E1] flex flex-col items-center justify-center text-center shadow-inner">
  <div className="w-24 h-24 rounded-full bg-[#1F4733] text-white flex items-center justify-center text-3xl font-bold mb-6">
    S
  </div>

  <h3 className="text-2xl font-bold text-slate-800">
    Stephen Palfrey
  </h3>

  <p className="text-[#1F4733] font-semibold mt-2">
    Construction Estimating Specialist
  </p>

  <p className="text-gray-600 mt-6 max-w-sm leading-7 px-6">
    Photo will appear here once uploaded to the project.
  </p>
</div>

          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-10 left-8 bg-white rounded-2xl shadow-2xl p-8">

            <h3 className="text-2xl font-bold text-slate-900">
              Stephen Palfrey
            </h3>

            <p className="text-[#1F4733] mt-2">
              Construction Estimating Specialist
            </p>

            <div className="grid grid-cols-3 gap-8 mt-6">

              <div>
                <h4 className="text-3xl font-bold text-[#1F4733]">25+</h4>
                <p className="text-sm text-gray-500">Years</p>
              </div>

              <div>
                <h4 className="text-3xl font-bold text-[#1F4733]">UK</h4>
                <p className="text-sm text-gray-500">Coverage</p>
              </div>

              <div>
                <h4 className="text-3xl font-bold text-[#1F4733]">100%</h4>
                <p className="text-sm text-gray-500">Detailed</p>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}