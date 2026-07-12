"use client";

import { motion } from "framer-motion";

export default function Team() {
  return (
    <section id="team" className="py-28 bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[4px] text-[#1F4733] font-semibold">
            Meet the Team
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-slate-900">
            The people behind BOXX PRO
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Behind every estimate is a team committed to accuracy,
            professionalism and outstanding client service.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-20">

          {/* Stephen */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-[32px] overflow-hidden shadow-xl"
          >
            <div className="bg-gray-200 h-[360px] flex items-center justify-center">
              <span className="text-gray-500 text-lg">
                Stephen Photo
              </span>
            </div>

            <div className="p-10">
              <h3 className="text-3xl font-bold text-slate-900">
                Stephen Palfrey
              </h3>

              <p className="text-[#1F4733] font-semibold mt-3">
                Construction Estimating Specialist
              </p>

              <p className="text-sm uppercase tracking-[3px] text-gray-500 mt-3">
                25+ Years of Construction Industry Experience
              </p>

              <p className="mt-8 text-gray-600 leading-8">
                Stephen brings more than 25 years of hands-on construction
                experience to every estimate prepared by BOXX PRO.
              </p>

              <p className="mt-5 text-gray-600 leading-8">
                His practical understanding of building methods, sequencing,
                labour requirements and site operations allows clients to
                submit more accurate and competitive tenders.
              </p>

              <p className="mt-5 text-gray-600 leading-8">
                Estimates are prepared with the insight of someone who has
                spent decades working within the construction industry.
              </p>
            </div>
          </motion.div>

          {/* Belén */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-white rounded-[32px] overflow-hidden shadow-xl"
          >
            <div className="bg-gray-200 h-[360px] flex items-center justify-center">
              <span className="text-gray-500 text-lg">
                Belén Photo
              </span>
            </div>

            <div className="p-10">
              <h3 className="text-3xl font-bold text-slate-900">
                Belén
              </h3>

              <p className="text-[#1F4733] font-semibold mt-3">
                Administration & Office Manager
              </p>

              <p className="text-sm uppercase tracking-[3px] text-gray-500 mt-3">
                Business Administration & Client Support
              </p>

              <p className="mt-8 text-gray-600 leading-8">
                Belén oversees the administration, documentation,
                communications and financial management of BOXX PRO.
              </p>

              <p className="mt-5 text-gray-600 leading-8">
                Her organised and detail-oriented approach ensures that every
                enquiry is handled professionally and every project progresses
                smoothly from first contact to final delivery.
              </p>

              <p className="mt-5 text-gray-600 leading-8">
                She plays a key role in maintaining the high level of service
                and efficiency that clients expect from BOXX PRO.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}