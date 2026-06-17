"use client";
import { useState, useEffect } from "react";
import { FaGraduationCap, FaSearchPlus, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const certificatesList = [
  {
    id: "psu-young-entrepreneur",
    title: "PSU Young Entrepreneur Boot Camp",
    date: "2024",
    issuer: "Prince of Songkla University",
    description: "Participated in an intensive entrepreneurship bootcamp. Worked in teams to design, prototype, and pitch web applications and business models to industry panels.",
    mainImage: "/Certificate/Psu-young-Entrepreneur.jpg",
    images: [
      { url: "/Certificate/Psu-young-Entrepreneur.jpg", label: "Certificate of Participation" },
      { url: "/Certificate/Psu-young-Entrepreneur-group.jpg", label: "Group photo with bootcamp participants" },
      { url: "/Certificate/Psu-young-Entrepreneur-me.jpg", label: "Posed with team at the event" },
      { url: "/Certificate/Psu-young-Entrepreneur-My-website.jpg", label: "Project prototype preview" }
    ]
  },
  {
    id: "yicgg-2024",
    title: "Youth Innovation Competition on Global Governance",
    date: "2024",
    issuer: "Fudan University",
    description: "Selected as a global competitor. Formulated innovative public policy proposals, designed governance frameworks, and collaborated with international delegates to solve global challenges.",
    mainImage: "/Certificate/2024-Youth-Innovation-Competition-on-Global-Governance.jpg",
    images: [
      { url: "/Certificate/2024-Youth-Innovation-Competition-on-Global-Governance.jpg", label: "YICGG 2024 Participation Certificate" }
    ]
  },
  {
    id: "startup-thailand-league",
    title: "Startup Thailand League Competitor",
    date: "2024",
    issuer: "National Innovation Agency (NIA)",
    description: "Qualified and competed in the Startup Thailand League, presenting scalable tech product concepts and pitching business models to national venture judges.",
    mainImage: "/Certificate/startup-Thailand-league.jpg",
    images: [
      { url: "/Certificate/startup-Thailand-league.jpg", label: "Certificate of Pitching" }
    ]
  },
  {
    id: "python-camp",
    title: "Python Programming Bootcamp",
    date: "2023",
    issuer: "Computer Engineering, PSU",
    description: "Completed intensive Python software engineering program. Mastered language fundamentals, algorithmic problem solving, and hands-on application prototyping.",
    mainImage: "/Certificate/Pythoncamp.jpg",
    images: [
      { url: "/Certificate/Pythoncamp.jpg", label: "Certificate of Completion" }
    ]
  },
  {
    id: "wittayaphakphum",
    title: "Wittayaphakphum Academic Showcase",
    date: "2023",
    issuer: "Science Association & PSU",
    description: "Awarded recognition for academic excellence, technical achievements, and science/technology projects presentation at the regional academic convention.",
    mainImage: "/Certificate/วิทย์ภาคภูมิ.jpg",
    images: [
      { url: "/Certificate/วิทย์ภาคภูมิ.jpg", label: "Certificate of Pride" }
    ]
  }
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  // Close modal on escape keypress
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedCert(null);
      }
    };
    if (selectedCert) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedCert]);

  const openModal = (cert) => {
    setSelectedCert(cert);
    setActiveImageIdx(0);
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    if (!selectedCert) return;
    setActiveImageIdx((prev) => (prev + 1) % selectedCert.images.length);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    if (!selectedCert) return;
    setActiveImageIdx((prev) => (prev - 1 + selectedCert.images.length) % selectedCert.images.length);
  };

  return (
    <section id="certificates" className="relative scroll-mt-20">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="section-container">
        {/* Header */}
        <div className="reveal text-center mb-14">
          <p className="text-zinc-400 font-mono text-sm mb-2 tracking-wider">
            // ACHIEVEMENTS
          </p>
          <h2 className="section-title gradient-text mx-auto">Certificates & Awards</h2>
          <div className="flex justify-center mt-4">
            <p className="section-subtitle text-center">
              Selected certifications, event participations, and academic showcase recognitions.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          {certificatesList.map((cert) => (
            <div
              key={cert.id}
              className="glass-card overflow-hidden flex flex-col group cursor-pointer"
              onClick={() => openModal(cert)}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] bg-zinc-950 overflow-hidden border-b border-white/5">
                <img
                  src={cert.mainImage}
                  alt={cert.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-zinc-950/80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 backdrop-blur-[2px]">
                  <div className="w-12 h-12 rounded-full bg-white text-zinc-950 flex items-center justify-center text-lg shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-zinc-200">
                    <FaSearchPlus />
                  </div>
                </div>

                {/* Additional Photos Count Badge */}
                {cert.images.length > 1 && (
                  <span className="absolute bottom-3 right-3 text-xs bg-zinc-900/90 backdrop-blur px-2.5 py-1 rounded-full text-zinc-300 border border-white/10 font-medium">
                    +{cert.images.length - 1} More Photos
                  </span>
                )}
              </div>

              {/* Info Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start gap-3 mb-2">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-zinc-800/50 text-zinc-300 border border-zinc-700/50">
                      {cert.date}
                    </span>
                    <span className="text-xs text-zinc-500 font-mono">{cert.issuer}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-zinc-200 transition-colors duration-300 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-zinc-400 text-xs font-semibold group-hover:text-zinc-200">
                  <FaGraduationCap className="text-sm" />
                  <span>View Credentials & Photos</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Dialog */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-zinc-950/90 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left: Image Carousel */}
            <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] md:min-h-0">
              <img
                src={selectedCert.images[activeImageIdx].url}
                alt={selectedCert.images[activeImageIdx].label}
                className="w-full h-full max-h-[50vh] md:max-h-[80vh] object-contain"
              />

              {/* Carousel Controls */}
              {selectedCert.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 w-10 h-10 rounded-full bg-zinc-900/90 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
                    aria-label="Previous image"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 w-10 h-10 rounded-full bg-zinc-900/90 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
                    aria-label="Next image"
                  >
                    <FaChevronRight />
                  </button>
                </>
              )}

              {/* Active Image Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-zinc-950/80 px-4 py-2 text-center text-xs text-zinc-300 border-t border-white/5">
                {selectedCert.images[activeImageIdx].label} ({activeImageIdx + 1}/{selectedCert.images.length})
              </div>
            </div>

            {/* Right: Info panel inside modal */}
            <div className="w-full md:w-[320px] p-6 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10 bg-zinc-900/60 max-h-[40vh] md:max-h-none overflow-y-auto">
              <div>
                <div className="flex justify-between items-center gap-3 mb-3">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-zinc-800/50 text-zinc-300 border border-zinc-700/50">
                    {selectedCert.date}
                  </span>
                  <span className="text-xs text-zinc-500">{selectedCert.issuer}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{selectedCert.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {selectedCert.description}
                </p>
              </div>

              {/* Thumbnails if multiple images exist */}
              {selectedCert.images.length > 1 && (
                <div className="mt-4 pt-4 border-t border-white/5">
                  <span className="text-xs text-zinc-500 block mb-2 font-medium">Event Photos:</span>
                  <div className="flex gap-2">
                    {selectedCert.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIdx(idx)}
                        className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                          activeImageIdx === idx ? "border-white scale-95" : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                      >
                        <img src={img.url} alt={img.label} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="btn btn-sm btn-outline border-white/10 text-slate-400 hover:bg-white/5 w-full rounded-lg"
                >
                  Close View
                </button>
              </div>
            </div>

            {/* Absolute close button on top-right for mobile */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-zinc-950/90 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white z-10"
              aria-label="Close modal"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
