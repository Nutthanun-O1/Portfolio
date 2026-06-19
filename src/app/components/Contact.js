"use client";
import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaPaperPlane,
  FaMapMarkerAlt,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaPhone />,
    label: "Phone",
    value: "096-776-3228",
    href: "tel:0967763228",
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "Nutthanun-O1",
    href: "https://github.com/Nutthanun-O1",
    color: "from-slate-500 to-gray-500",
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "Nutthanun.no@gmail.com",
    href: "mailto:Nutthanun.no@gmail.com",
    color: "from-indigo-500 to-violet-500",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "Songkhla, Thailand",
    href: null,
    color: "from-amber-500 to-orange-500",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:Nutthanun.no@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
    window.open(mailto, "_blank");
  };

  return (
    <section id="contact" className="relative bg-grid">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="section-container">
        {/* Header */}
        <div className="reveal text-center mb-14">
          <h2 className="section-title gradient-text mx-auto">Contact Me</h2>
          <div className="flex justify-center mt-4">
            <p className="section-subtitle text-center">
              Have a project in mind or want to collaborate? I&apos;d love to
              hear from you.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Info Cards */}
          <div className="stagger-children space-y-4">
            {contactInfo.map((info, i) => (
              <a
                key={i}
                href={info.href || "#"}
                target={info.href?.startsWith("http") ? "_blank" : undefined}
                rel={
                  info.href?.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`glass-card p-5 flex items-center gap-4 ${info.href
                  ? "cursor-pointer"
                  : "cursor-default pointer-events-none"
                  }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center text-white text-lg shadow-lg`}
                >
                  {info.icon}
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">
                    {info.label}
                  </div>
                  <div className="text-white font-medium">{info.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="reveal-right">
            <form onSubmit={handleSubmit} className="glass-card p-6 space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="text-sm font-medium text-slate-400 mb-1.5 block"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="John Doe"
                  className="input input-bordered w-full bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus:border-indigo-500 focus:outline-none"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="text-sm font-medium text-slate-400 mb-1.5 block"
                >
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="john@example.com"
                  className="input input-bordered w-full bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus:border-indigo-500 focus:outline-none"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="text-sm font-medium text-slate-400 mb-1.5 block"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="textarea textarea-bordered w-full bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus:border-indigo-500 focus:outline-none resize-none"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>
              <button
                type="submit"
                className="btn w-full bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white border-0 rounded-xl shadow-lg shadow-indigo-500/20 group"
              >
                <FaPaperPlane className="mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
