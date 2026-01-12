import React, { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Sparkles,
  Download,
  ArrowRight,
} from "lucide-react";
import profile from "../assets/MainImages/profile.png";

const Hero = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/public/Govind Chaknalwar Resume (Full Stack Developer).pdf"; // public folder
    link.download = "Govind_Chaknalwar_Resume.pdf";
    link.click();
  };

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] flex items-center px-6 overflow-hidden">
      {/* Glows */}
      <div className="absolute w-[600px] h-[600px] bg-orange-500/20 blur-[160px] rounded-full -top-40 -left-40" />
      <div className="absolute w-[600px] h-[600px] bg-amber-500/20 blur-[160px] rounded-full -bottom-40 -right-40" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur">
            <Sparkles className="text-orange-400" size={16} />
            <span className="text-orange-300 text-sm">
              Full Stack Web Developer
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black text-white leading-tight">
            Govind{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Chaknalwar
            </span>
          </h1>

          <h2 className="text-3xl md:text-4xl font-bold text-white/90">
            MERN & Java Full Stack Developer
          </h2>

          <p className="text-gray-400 max-w-xl text-lg">
            I build fast, scalable and modern web applications using{" "}
            <span className="text-orange-400 font-semibold">React</span>,{" "}
            <span className="text-orange-400 font-semibold">Node.js</span>,{" "}
            <span className="text-orange-400 font-semibold">MongoDB</span> and{" "}
            <span className="text-orange-400 font-semibold">Spring Boot</span>.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:gchaknalwar@gmail.com"
              className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl text-white font-bold shadow-lg shadow-orange-500/40 hover:scale-105 transition"
            >
              Hire Me <ArrowRight size={18} />
            </a>

            <button
              onClick={downloadCV}
              className="flex items-center gap-2 px-8 py-4 border border-white/20 rounded-xl text-white backdrop-blur hover:border-orange-400 transition"
            >
              <Download size={18} />
              Download CV
            </button>
          </div>

          {/* Resume-safe Stats */}
          <div className="flex gap-10 pt-6">
            <Stat title="10+" label="Projects" />
            <Stat title="MERN" label="Stack" />
            <Stat title="Java" label="Backend" />
          </div>

          {/* Socials */}
          <div className="flex gap-4 pt-4">
            <Social icon={<Github />} link="https://github.com/gchaknalwar" />
            <Social
              icon={<Linkedin />}
              link="https://www.linkedin.com/in/govind-chaknalwar-b35278215/"
            />
            <Social
              icon={<Instagram />}
              link="https://www.instagram.com/255_boss/"
            />
            <Social icon={<Twitter />} link="https://x.com/255_Boss" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center">
          <div
            className="absolute w-[420px] h-[420px] bg-gradient-to-br from-orange-500/40 to-amber-500/30 blur-[120px] rounded-full"
            style={{
              transform: `translate(${mouse.x}px, ${mouse.y}px)`,
            }}
          />

          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-3 rounded-[32px] shadow-[0_0_80px_rgba(255,120,0,0.4)]">
            <img
              src={profile}
              alt="Govind Chaknalwar"
              className="w-[420px] rounded-[28px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/* Components */
const Stat = ({ title, label }) => (
  <div className="text-center">
    <p className="text-orange-400 text-3xl font-bold">{title}</p>
    <p className="text-gray-400 text-sm">{label}</p>
  </div>
);

const Social = ({ icon, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-xl text-white hover:border-orange-400 hover:scale-110 transition"
  >
    {icon}
  </a>
);

export default Hero;
