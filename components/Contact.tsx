"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Upload } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[4px] text-[#1F4733] font-semibold">
            Contact Us
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-slate-900">
            Let&apos;s discuss your next project
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Whether you&apos;re pricing a residential extension or a large commercial
            development, BOXX PRO is ready to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-16">

          {/* Contact Form */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-[32px] p-10 shadow-xl"
          >

            <form className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#1F4733]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Company Name
                  </label>

                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#1F4733]"
                    placeholder="Company name"
                  />
                </div>

              </div>

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    className="w-full border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#1F4733]"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Telephone Number
                  </label>

                  <input
                    type="tel"
                    className="w-full border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#1F4733]"
                    placeholder="Your phone number"
                  />
                </div>

              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Project Type
                </label>

                <select className="w-full border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#1F4733]">
                  <option>Residential Extension</option>
                  <option>New Build</option>
                  <option>Commercial Project</option>
                  <option>Renovation</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Message
                </label>

                <textarea
                  rows={6}
                  className="w-full border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#1F4733]"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Upload Box */}

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Upload Your Drawings
                </label>

                <div className="border-2 border-dashed border-gray-300 rounded-2xl p-10 text-center">

                  <Upload size={42} className="mx-auto text-[#1F4733]" />

                  <h3 className="font-semibold text-slate-900 mt-4">
                    Upload project files
                  </h3>

                  <p className="text-gray-500 mt-2">
                    PDF, DWG, JPG or PNG files
                  </p>

                  <button
                    type="button"
                    className="mt-6 bg-[#1F4733] text-white px-6 py-3 rounded-xl hover:bg-[#163526] transition"
                  >
                    Select Files
                  </button>

                </div>

                <p className="text-sm text-gray-500 mt-3">
                  Your project information and drawings will always be treated confidentially.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1F4733] text-white py-4 rounded-xl font-semibold hover:bg-[#163526] transition"
              >
                Send Enquiry
              </button>

            </form>

          </motion.div>

          {/* Contact Information */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >

            <div className="bg-white rounded-[32px] p-10 shadow-xl">

              <h3 className="text-2xl font-bold text-slate-900">
                Contact Information
              </h3>

              <div className="space-y-6 mt-8">

                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-xl bg-[#1F4733] flex items-center justify-center">
                    <Mail size={22} className="text-white" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">Email</h4>
                    <a
                      href="mailto:stephenboxxpro@gmail.com"
                      className="text-gray-600 hover:text-[#1F4733]"
                    >
                      stephenboxxpro@gmail.com
                    </a>
                  </div>

                </div>

                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-xl bg-[#1F4733] flex items-center justify-center">
                    <Phone size={22} className="text-white" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">Telephone</h4>
                    <a
                      href="tel:07399386925"
                      className="text-gray-600 hover:text-[#1F4733]"
                    >
                      07399 386925
                    </a>
                  </div>

                </div>

                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-xl bg-[#1F4733] flex items-center justify-center">
                    <MapPin size={22} className="text-white" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">Location</h4>
                    <p className="text-gray-600">
                      Bury St Edmunds, Suffolk, United Kingdom
                    </p>
                  </div>

                </div>

              </div>

            </div>

            <div className="bg-[#1F4733] rounded-[32px] p-10 text-white">

              <h3 className="text-3xl font-bold">
                Ready to discuss your project?
              </h3>

              <p className="text-white/80 leading-8 mt-6">
                Send us your drawings and project details and we&apos;ll be happy
                to provide a professional estimate tailored to your requirements.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <a
                  href="mailto:stephenboxxpro@gmail.com"
                  className="bg-white text-[#1F4733] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
                >
                  Email Us
                </a>

                <a
                  href="tel:07399386925"
                  className="border border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#1F4733] transition"
                >
                  Call Us
                </a>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}