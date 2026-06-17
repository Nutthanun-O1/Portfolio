"use client";
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
  {
    title: "Web Developer (Google Earth Engine)",
    company: "Faculty of Environmental Management, PSU",
    period: "2025",
    type: "Work",
    description: [
      "Engineered a specialized web application utilizing Google Earth Engine to calculate and visualize critical environmental data.",
      "Analyzed LULC (Land Use and Land Cover), NDVI, and atmospheric conditions, delivering actionable insights for environmental research.",
    ],
    tags: ["Google Earth Engine", "Web App", "LULC", "NDVI"],
  },
  {
    title: 'AI Developer — "AI Deepblue"',
    company: "Prince of Songkla University",
    period: "2024",
    type: "Project",
    description: [
      'Developed and deployed the "AI Deepblue" chatbot system to enhance university operations and student interactions.',
      "Optimized the AI model to accurately respond to user queries, streamlining digital communication processes within the campus.",
    ],
    tags: ["AI", "Chatbot", "Dialogflow", "NLP"],
  },
  {
    title: "International AI Competitor",
    company: "China, 2024",
    period: "2024",
    type: "Competition",
    description: [
      "Collaborated with international peers in a high-stakes AI competition, demonstrating adaptability, cross-cultural communication in English, and advanced problem-solving skills under pressure.",
    ],
    tags: ["AI Competition", "International", "Problem Solving"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative bg-grid">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="section-container">
        {/* Header */}
        <div className="reveal text-center mb-14">
          <p className="text-zinc-400 font-mono text-sm mb-2 tracking-wider">
            // WHERE I&apos;VE BEEN
          </p>
          <h2 className="section-title gradient-text mx-auto">
            Work Experience
          </h2>
          <div className="flex justify-center mt-4">
            <p className="section-subtitle text-center">
              Building real-world applications and competing on the global
              stage.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="timeline-line" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-16 reveal">
                {/* Dot */}
                <div className="timeline-dot" style={{ top: "1.5rem" }} />

                {/* Card */}
                <div className="glass-card p-6">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-slate-400">
                        <span className="flex items-center gap-1">
                          <FaBriefcase className="text-zinc-400" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaCalendar className="text-zinc-400" />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        exp.type === "Work"
                          ? "bg-zinc-800/50 text-zinc-300 border border-zinc-700/50"
                          : exp.type === "Project"
                          ? "bg-zinc-800/40 text-zinc-300 border border-zinc-700/50"
                          : "bg-zinc-900/60 text-zinc-300 border border-zinc-700/50"
                      }`}
                    >
                      {exp.type}
                    </span>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((desc, j) => (
                      <li
                        key={j}
                        className="text-slate-400 text-sm leading-relaxed flex gap-2"
                      >
                        <span className="text-zinc-400 mt-1.5 shrink-0">
                          ▸
                        </span>
                        {desc}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-slate-400 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
