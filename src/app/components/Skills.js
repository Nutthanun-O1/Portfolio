"use client";
import {
  FaReact,
  FaPython,
  FaGlobe,
  FaLightbulb,
  FaLanguage,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiSupabase,
  SiFirebase,
  SiDialogflow,
  SiGoogleearth,
} from "react-icons/si";

const categories = [
  {
    title: "Web Development",
    icon: <FaReact />,
    color: "from-indigo-500 to-blue-500",
    colorLight: "text-indigo-400",
    bgLight: "bg-indigo-500/10 border-indigo-500/20",
    skills: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React", icon: <FaReact /> },
      { name: "Supabase", icon: <SiSupabase /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
  {
    title: "AI & Data Science",
    icon: <FaPython />,
    color: "from-violet-500 to-purple-500",
    colorLight: "text-violet-400",
    bgLight: "bg-violet-500/10 border-violet-500/20",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "Machine Learning" },
      { name: "Decision Trees" },
      { name: "Linear Regression" },
      { name: "K-Means Clustering" },
      { name: "Dialogflow", icon: <SiDialogflow /> },
    ],
  },
  {
    title: "Geospatial Tech",
    icon: <FaGlobe />,
    color: "from-cyan-500 to-teal-500",
    colorLight: "text-cyan-400",
    bgLight: "bg-cyan-500/10 border-cyan-500/20",
    skills: [
      { name: "Google Earth Engine", icon: <SiGoogleearth /> },
      { name: "LULC Analysis" },
      { name: "NDVI" },
      { name: "Atmosphere Calc." },
    ],
  },
  {
    title: "Business & Innovation",
    icon: <FaLightbulb />,
    color: "from-amber-500 to-orange-500",
    colorLight: "text-amber-400",
    bgLight: "bg-amber-500/10 border-amber-500/20",
    skills: [
      { name: "Lean Canvas" },
      { name: "Competitor Research" },
      { name: "IoT Prototyping" },
    ],
  },
  {
    title: "Languages",
    icon: <FaLanguage />,
    color: "from-emerald-500 to-green-500",
    colorLight: "text-emerald-400",
    bgLight: "bg-emerald-500/10 border-emerald-500/20",
    skills: [
      { name: "Thai (Native)" },
      { name: "English (Conversational)" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative">
      {/* Decorative top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="section-container">
        {/* Header */}
        <div className="reveal text-center mb-14">
          <p className="text-indigo-400 font-mono text-sm mb-2 tracking-wider">
            // WHAT I DO
          </p>
          <h2 className="section-title gradient-text mx-auto">
            Skills & Technologies
          </h2>
          <div className="flex justify-center mt-4">
            <p className="section-subtitle text-center">
              A diverse toolkit spanning web development, AI, geospatial
              analysis, and beyond.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {categories.map((cat, i) => (
            <div key={i} className="glass-card p-6 group">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-white text-lg shadow-lg`}
                >
                  {cat.icon}
                </div>
                <h3 className="font-bold text-lg text-white">{cat.title}</h3>
              </div>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <span key={j} className={`skill-badge ${cat.bgLight}`}>
                    {skill.icon && (
                      <span className={cat.colorLight}>{skill.icon}</span>
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
