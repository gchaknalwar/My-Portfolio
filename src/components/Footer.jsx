import React from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Mail,
  ArrowUpRight,
  Code2,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#0a0a0a] text-white overflow-hidden">
      {/* Soft Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-[-200px] bottom-[-200px] w-[500px] h-[500px] bg-orange-500/20 blur-[160px] rounded-full" />
        <div className="absolute right-[-200px] top-[-200px] w-[500px] h-[500px] bg-amber-500/20 blur-[160px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Top CTA */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_0_60px_rgba(255,120,0,0.25)]">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Ready to work with{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Govind?
              </span>
            </h2>
            <p className="text-gray-400 mt-3 max-w-xl">
              Open to Full-Time, Internships & Freelance opportunities. Let’s
              build modern, scalable and beautiful web applications together.
            </p>
          </div>

          <a
            href="mailto:gchaknalwar@gmail.com"
            className="px-10 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl text-white font-bold shadow-lg shadow-orange-500/40 hover:shadow-orange-500/60 hover:scale-105 transition"
          >
            Contact Me
          </a>
        </div>

        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-3 gap-12 mt-20">
          {/* Branding */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Code2 className="text-orange-400" />
              <h3 className="text-2xl font-black">
                Govind{" "}
                <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  Chaknalwar
                </span>
              </h3>
            </div>
            <p className="text-gray-400 max-w-sm">
              Full Stack Web Developer (MERN & Java). I build fast, modern and
              scalable web applications with clean UI and powerful backend
              architecture.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Navigation</h4>
            <div className="space-y-3 text-gray-400">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`/${item === "Home" ? "" : item}`}
                  className="block hover:text-orange-400 transition"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-lg font-bold mb-4">Connect with me</h4>
            <div className="flex gap-4">
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
              <Social icon={<Mail />} link="mailto:gchaknalwar@gmail.com" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-orange-400 font-semibold">
              Govind Chaknalwar
            </span>{" "}
            — All rights reserved.
          </p>

          <a
            href="#top"
            className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition"
          >
            Back to top <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

const Social = ({ icon, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-orange-400 hover:bg-orange-500/10 hover:scale-110 transition"
  >
    {icon}
  </a>
);

export default Footer;
