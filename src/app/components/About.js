"use client";
import { FaCode, FaGraduationCap, FaRocket } from "react-icons/fa";

const stats = [
  { icon: <FaCode />, value: "3+", label: "Projects Built" },
  { icon: <FaRocket />, value: "5+", label: "Technologies" },
  { icon: <FaGraduationCap />, value: "3+", label: "Years Coding" },
];

export default function About() {
  return (
    <section id="about" className="relative bg-grid">
      <div className="section-container">
        {/* Header */}
        <div className="reveal mb-12">
          <p className="text-indigo-400 font-mono text-sm mb-2 tracking-wider">
            // WHO I AM
          </p>
          <h2 className="section-title gradient-text">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Text */}
          <div className="lg:col-span-3 reveal-left">
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              I am an English-proficient{" "}
              <span className="text-indigo-400 font-semibold">
                Computer Science student
              </span>{" "}
              at Prince of Songkla University, equipped with strong
              conversational skills and technical expertise in{" "}
              <span className="text-cyan-400">
                Next.js, React, Supabase, and Firebase
              </span>
              .
            </p>
            <p className="text-slate-400 leading-relaxed mb-6">
              My hands-on experience spans developing the &apos;AIDeepblue&apos;
              chatbot for PSU (2024), competing in an international AI contest
              in China, and engineering a Google Earth Engine web platform for
              LULC, NDVI, and atmospheric analysis.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Fascinated by cutting-edge AI, I am eager to leverage my technical
              background to contribute to innovative teams and drive future
              success through technology.
            </p>
          </div>

          {/* Stats */}
          <div className="lg:col-span-2 stagger-children">
            <div className="grid gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass-card p-5 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 flex items-center justify-center text-indigo-400 text-xl">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold gradient-text">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
