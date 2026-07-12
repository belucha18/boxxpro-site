"use client";

import { motion } from "framer-motion";

const gallery = [
  {
    title: "Architectural Plans",
    subtitle: "Detailed project drawings and quantity take-offs.",
    icon: "📐",
  },
  {
    title: "Construction Phase",
    subtitle: "Real-world building progress and site coordination.",
    icon: "🏗",
  },
  {
    title: "Completed Project",
    subtitle: "The finished result delivered to the client.",
    icon: "🏡",
  },
  {
    title: "Sample Estimate",
    subtitle: "Professional labour, material and cost breakdowns.",
    icon: "📄",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-28 bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[4px] text-[#1F4733] font-semibold">
            From Drawings to Delivery
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-slate-900">
            How detailed estimating supports every stage
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Every successful project begins with careful planning. Our estimates
            support the process from the initial drawings through to the finished build.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {gallery.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl transition group"
            >

              <div className="h-56 bg-gray-200 flex items-center justify-center text-6xl group-hover:scale-105 transition duration-300">
                {item.icon}
              </div>

              <div className="p-8">

                <h3 className="text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7 mt-4">
                  {item.subtitle}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

        {/* Process Flow */}

        <div className="mt-20 bg-white rounded-[36px] p-12 shadow-lg">

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <div className="text-5xl">📐</div>
              <h4 className="font-bold text-xl mt-4">Plans</h4>
            </div>

            <div>
              <div className="text-5xl">🏗</div>
              <h4 className="font-bold text-xl mt-4">Construction</h4>
            </div>

            <div>
              <div className="text-5xl">🏡</div>
              <h4 className="font-bold text-xl mt-4">Completion</h4>
            </div>

            <div>
              <div className="text-5xl">📄</div>
              <h4 className="font-bold text-xl mt-4">Estimate</h4>
            </div>

          </div>

          <div className="mt-10 text-center">
            <p className="text-lg text-gray-600 leading-8 max-w-3xl mx-auto">
              BOXX PRO combines practical construction knowledge with professional
              estimating to help contractors plan accurately and submit competitive tenders.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}