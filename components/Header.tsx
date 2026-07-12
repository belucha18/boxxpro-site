"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm">

      <div className="max-w-7xl mx-auto px-8">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}

          <Link href="/" className="flex items-center gap-3">

          <div className="h-12 w-12 rounded-xl bg-[#1F4733] flex items-center justify-center text-white font-bold text-xl shadow-lg">
  B
</div>

            <div>

              <h2 className="font-bold text-xl tracking-wide text-[#1F4733]">
                BOXX PRO
              </h2>

              <p className="text-xs text-gray-500">
                Construction Estimating
              </p>

            </div>

          </Link>

          {/* Navigation */}

          <nav className="hidden lg:flex gap-10 font-medium text-slate-700">

            <a href="#about" className="hover:text-[#1F4733] transition">
              About
            </a>

            <a href="#services" className="hover:text-[#1F4733] transition">
              Services
            </a>

            <a href="#gallery" className="hover:text-[#1F4733] transition">
              Gallery
            </a>

            <a href="#team" className="hover:text-[#1F4733] transition">
              Meet the Team
            </a>

            <a href="#contact" className="hover:text-[#1F4733] transition">
              Contact
            </a>

          </nav>

          {/* Button */}

          <a
  href="#contact"
  className="hidden lg:flex bg-[#1F4733] text-white px-6 py-3 rounded-xl shadow-lg hover:bg-[#173426] hover:-translate-y-0.5 transition-all"
>
            Contact Us
          </a>

        </div>

      </div>

    </header>
  );
}