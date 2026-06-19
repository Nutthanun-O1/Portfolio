"use client";
import { FaGithub, FaEnvelope, FaPhone, FaHeart } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center font-bold text-white text-xs">
              NN
            </div>
            <div>
              <span className="font-semibold text-white">
                Nutthanun Noothong
              </span>
              <p className="text-xs text-slate-500">
                AI & Full-Stack Developer
              </p>
            </div>
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Nutthanun-O1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:Nutthanun.no@gmail.com"
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="tel:0967763228"
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
              aria-label="Phone"
            >
              <FaPhone />
            </a>
          </div>


          {/* Right: Copyright */}
          <p className="text-sm text-slate-500">
            © {year} Nutthanun Noothong. Built with{" "}
            <FaHeart className="inline text-zinc-500 text-xs mx-0.5" />{" "}
            using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
