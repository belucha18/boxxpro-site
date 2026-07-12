"use client";

import { motion } from "framer-motion";
import { MapPin, Building2, Landmark, Globe } from "lucide-react";

const locations = [
  {
    icon: Building2,
    title: "Bury St Edmunds",
    text: "Home base and local estimating support",
  },
  {
    icon: Landmark,
    title: "Cambridge",
    text: "Residential and commercial projects",
  },
  {
    icon: MapPin,
    title: "London",
    text: "Tender and estimating services",
  },
  {
    icon: Globe,
    title: "Across the UK",
    text: "Nationwide contractor support",
  },
];

export default function Areas() {
  return (
    <section id="areas" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[4px] text-[#1F4733] font-semibold">
            Areas We Cover
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-slate-900">
            Supporting contractors across the UK
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            BOXX PRO provides professional estimating and tender preparation
            services from our base in Suffolk while supporting projects
            throughout the United Kingdom.
          </p>
        </div>

        {/* Map Placeholder */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >
          <div className="bg-[#F8FAF9] rounded-[36px] p-12 shadow-lg">

            <div className="h-[380px] rounded-[28px] bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="mx-auto text-[#1F4733]" />
                <p className="text-gray-600 mt-4 text-lg">
                  UK Coverage Map
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Locations Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {locations.map((location, index) => {
            const Icon = location.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#F8FAF9] rounded-[28px] p-8 text-center hover:shadow-xl transition"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-[#1F4733] flex items-center justify-center">
                  <Icon size={30} className="text-white" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mt-6">
                  {location.title}
                </h3>

                <p className="text-gray-600 leading-7 mt-4">
                  {location.text}
                </p>
              </motion.div>
            );
          })}

        </div>

        {/* Bottom Message */}

        <div className="mt-20 bg-[#1F4733] rounded-[36px] p-12 text-center text-white">

          <h3 className="text-3xl font-bold">
            Local knowledge with nationwide support
          </h3>

          <p className="text-white/80 leading-8 mt-6 max-w-3xl mx-auto">
            Whether you&apos;re pricing a residential extension in Suffolk,
            a commercial project in Cambridge or a development in London,
            BOXX PRO provides the same level of accuracy, detail and
            professional service.
          </p>

        </div>

      </div>
    </section>
  );
}