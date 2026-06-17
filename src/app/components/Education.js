"use client";
import { FaGraduationCap, FaCalendar, FaUniversity } from "react-icons/fa";

export default function Education() {
  return (
    <section id="education" className="relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="section-container">
        {/* Header */}
        <div className="reveal text-center mb-14">
          <p className="text-indigo-400 font-mono text-sm mb-2 tracking-wider">
            // MY EDUCATION
          </p>
          <h2 className="section-title gradient-text mx-auto">Education</h2>
        </div>

        {/* Card */}
        <div className="max-w-2xl mx-auto reveal-scale">
          <div className="glass-card p-8 relative overflow-hidden">
            {/* Gradient accent top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500" />

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-2xl shadow-xl shadow-indigo-500/20 shrink-0">
                <FaGraduationCap />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                    2023 — Present
                  </span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/25">
                    Expected 2027
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mt-2">
                  Bachelor of Science
                </h3>
                <p className="text-indigo-400 font-semibold text-lg">
                  Major in Computer Science
                </p>

                <div className="flex items-center gap-2 mt-3 text-slate-400 text-sm">
                  <FaUniversity className="text-violet-400" />
                  <span>Prince of Songkla University</span>
                </div>

                <div className="mt-4 flex items-center gap-4">
                  <div className="glass-card px-4 py-2 !rounded-lg">
                    <span className="text-xs text-slate-500 uppercase tracking-wider">
                      GPAX
                    </span>
                    <div className="text-xl font-bold gradient-text">2.86</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
