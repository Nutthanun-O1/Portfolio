"use client";
import { useState, useMemo } from "react";
import { FaGlobe, FaBrain, FaAward, FaExternalLinkAlt, FaTag } from "react-icons/fa";
import { SiGoogleearth, SiDialogflow, SiPython, SiReact } from "react-icons/si";

const projectsList = [
  {
    id: 1,
    title: "Google Earth Engine Platform",
    subtitle: "Faculty of Environmental Management, PSU",
    category: "geospatial",
    icon: <SiGoogleearth className="text-emerald-400 text-3xl" />,
    description: "Engineered an interactive web application that integrates Google Earth Engine. Computes and visualizes LULC (Land Use & Land Cover), NDVI vegetation indices, and atmospheric metrics dynamically to aid environmental researches.",
    tags: ["Google Earth Engine", "React", "Next.js", "LULC & NDVI", "Chart.js"],
    gridClass: "md:col-span-4",
    link: null,
    badge: "Web App"
  },
  {
    id: 2,
    title: "AI Deepblue Chatbot",
    subtitle: "Prince of Songkla University",
    category: "ai",
    icon: <SiDialogflow className="text-indigo-400 text-3xl" />,
    description: "Developed a campus-wide NLP chatbot system leveraging Google Dialogflow. Optimized intent matching to streamline student support and digital communication.",
    tags: ["Dialogflow", "NLP", "Node.js", "Firebase"],
    gridClass: "md:col-span-2",
    link: null,
    badge: "AI & NLP"
  },
  {
    id: 3,
    title: "International AI Competition Entry",
    subtitle: "China, 2024",
    category: "ai",
    icon: <FaAward className="text-amber-400 text-3xl" />,
    description: "Represented the university globally in a high-stakes AI challenge in China. Engineered deep learning models, solved complex algorithms under intense constraints, and collaborated in cross-cultural developer environments.",
    tags: ["Python", "Machine Learning", "PyTorch", "Teamwork"],
    gridClass: "md:col-span-6",
    link: null,
    badge: "Competition"
  }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projectsList;
    return projectsList.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="relative bg-grid scroll-mt-20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="section-container">
        {/* Header */}
        <div className="reveal text-center mb-10">
          <h2 className="section-title gradient-text mx-auto">Featured Work</h2>
          <div className="flex justify-center mt-4">
            <p className="section-subtitle text-center">
              A showcase of AI chatbots, environmental web portals, and international competitions.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {[
            { id: "all", label: "All Works" },
            { id: "ai", label: "AI & NLP" },
            { id: "geospatial", label: "Web & Geospatial" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeFilter === tab.id
                  ? "bg-gradient-to-r from-indigo-500 to-violet-500 border-transparent text-[#ffffff] shadow-lg shadow-indigo-500/20"
                  : "bg-white/5 border-white/10 text-slate-400 hover:text-slate-200 hover:border-slate-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="bento-grid transition-all duration-500">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`bento-card p-6 md:p-8 flex flex-col justify-between ${project.gridClass} group`}
            >
              {/* Card top */}
              <div>
                <div className="flex items-start justify-between gap-4 mb-6">
                  {/* Icon with gradient ring */}
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  
                  {/* Badge */}
                  <span className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-medium">
                    {project.badge}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300 flex items-center gap-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-mono">{project.subtitle}</p>
                </div>

                <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Card bottom: tags */}
              <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-slate-400 border border-white/5 flex items-center gap-1.5"
                  >
                    <FaTag className="text-indigo-400/70 text-[10px]" />
                    {tag}
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
