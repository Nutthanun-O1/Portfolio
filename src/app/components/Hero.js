"use client";
import { useState, useEffect, useMemo } from "react";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";

// Simple seeded pseudo-random to avoid hydration mismatches
function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function Particles() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const particles = useMemo(() => {
    const rand = seededRandom(42);
    const colors = [
      "rgba(255, 255, 255, 0.15)",
      "rgba(240, 240, 240, 0.1)",
      "rgba(200, 200, 200, 0.1)",
    ];
    return Array.from({ length: 25 }).map((_, index) => ({
      left: `${rand() * 100}%`,
      top: `${rand() * 100}%`,
      "--tx": `${(rand() - 0.5) * 200}px`,
      "--ty": `${(rand() - 0.5) * 200}px`,
      "--duration": `${8 + rand() * 12}s`,
      "--delay": `${rand() * 8}s`,
      width: `${2 + rand() * 4}px`,
      height: `${2 + rand() * 4}px`,
      background: colors[index % 3],
    }));
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((style, i) => (
        <div key={i} className="particle" style={style} />
      ))}
    </div>
  );
}

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "AI & Full-Stack Developer";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dots"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zinc-800/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-zinc-900/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Particles */}
      <Particles />

      {/* Content */}
      <div className="relative z-10 section-container text-center flex flex-col items-center gap-8">
        {/* Profile Photo */}
        <div
          className="profile-ring"
          style={{
            animation: "glow-pulse 3s ease-in-out infinite, scale-in 0.8s ease-out",
          }}
        >
          <img
            src="/profile.jpg"
            alt="Nutthanun Noothong"
            width={160}
            height={160}
            className="w-40 h-40 object-cover"
            style={{ borderRadius: "50%" }}
          />
        </div>

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-white/5 border border-white/10 text-slate-300"
          style={{
            animation: "fade-in 1s ease-out 0.2s both",
          }}
        >
          <span
            className="w-2 h-2 rounded-full bg-indigo-500"
            style={{ boxShadow: "0 0 8px var(--indigo-500-override)" }}
          />
          Available for opportunities
        </div>

        {/* Name */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight"
          style={{ animation: "slide-up 0.8s ease-out 0.3s both" }}
        >
          <span className="text-white">NUTTHANUN</span>
          <br />
          <span className="gradient-text">NOOTHONG</span>
        </h1>

        {/* Typing Subtitle */}
        <div
          className="flex items-center justify-center gap-1 text-xl sm:text-2xl font-mono"
          style={{ animation: "fade-in 1s ease-out 0.6s both" }}
        >
          <span className="text-slate-400">&gt;</span>
          <span className="text-white">{typedText}</span>
          <span
            className="inline-block w-0.5 h-6 bg-zinc-400 ml-0.5"
            style={{ animation: "blink-caret 0.8s step-end infinite" }}
          />
        </div>

        {/* Description */}
        <p
          className="text-slate-400 max-w-lg text-base sm:text-lg leading-relaxed"
          style={{ animation: "slide-up 0.8s ease-out 0.8s both" }}
        >
          Computer Science student at Prince of Songkla University, passionate
          about building intelligent systems and beautiful web experiences.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 mt-2"
          style={{ animation: "slide-up 0.8s ease-out 1s both" }}
        >
          <a
            href="#experience"
            className="btn btn-lg bg-white text-zinc-950 hover:bg-zinc-200 border-0 rounded-full px-8 shadow-xl shadow-white/5 group font-semibold"
          >
            View My Work
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="btn btn-lg btn-outline border-white/20 text-slate-300 hover:bg-white/5 hover:border-white hover:text-white rounded-full px-8"
          >
            <FaEnvelope className="mr-2" />
            Contact Me
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          style={{ animation: "fade-in 1s ease-out 1.5s both" }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-zinc-700 flex items-start justify-center p-1.5">
            <div
              className="w-1.5 h-3 rounded-full bg-zinc-400"
              style={{
                animation: "float 2s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
