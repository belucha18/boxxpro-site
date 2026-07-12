import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#10271E] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-8">

        {/* Main Footer */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-3">

            <div className="h-12 w-12 rounded-xl bg-[#1F4733] flex items-center justify-center text-white font-bold">
  B
</div>

              <div>

                <h2 className="font-bold text-2xl">
                  BOXX PRO
                </h2>

                <p className="text-white/60 text-sm">
                  Construction Estimating
                </p>

              </div>

            </div>

            <p className="text-white/70 leading-7 mt-6">
              Professional estimating and project management support
              backed by over 25 years of construction industry experience.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="font-bold text-lg mb-6">
              Quick Links
            </h3>

            <div className="space-y-3">

              <a href="#about" className="block text-white/70 hover:text-white transition">
                About
              </a>

              <a href="#services" className="block text-white/70 hover:text-white transition">
                Services
              </a>

              <a href="#gallery" className="block text-white/70 hover:text-white transition">
                Gallery
              </a>

              <a href="#team" className="block text-white/70 hover:text-white transition">
                Meet the Team
              </a>

              <a href="#contact" className="block text-white/70 hover:text-white transition">
                Contact
              </a>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="font-bold text-lg mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-start gap-3">

                <Mail size={20} className="text-white/70 mt-1" />

                <a
                  href="mailto:stephenboxxpro@gmail.com"
                  className="text-white/70 hover:text-white transition"
                >
                  stephenboxxpro@gmail.com
                </a>

              </div>

              <div className="flex items-start gap-3">

                <Phone size={20} className="text-white/70 mt-1" />

                <a
                  href="tel:07399386925"
                  className="text-white/70 hover:text-white transition"
                >
                  07399 386925
                </a>

              </div>

              <div className="flex items-start gap-3">

                <MapPin size={20} className="text-white/70 mt-1" />

                <p className="text-white/70">
                  Bury St Edmunds, Suffolk
                </p>

              </div>

            </div>

          </div>

          {/* Coverage */}

          <div>

            <h3 className="font-bold text-lg mb-6">
              Areas We Cover
            </h3>

            <div className="space-y-3 text-white/70">

              <p>Bury St Edmunds</p>

              <p>Cambridge</p>

              <p>London</p>

              <p>Across the UK</p>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-white/10 mt-16 pt-8">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} BOXX PRO. All rights reserved.
            </p>

            <p className="text-white/70 font-semibold">
              Built on Experience. Delivered with Precision.
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}