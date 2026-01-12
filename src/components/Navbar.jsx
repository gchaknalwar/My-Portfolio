import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Sparkles, Zap, Code2, Rocket } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const go = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/95 backdrop-blur-2xl border-b border-orange-500/30 shadow-2xl shadow-orange-500/10"
          : "bg-gradient-to-b from-black/80 to-transparent backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <button
          onClick={() => go("/")}
          className="group flex items-center gap-3"
        >
          <div className="relative">
            <div className="absolute inset-0 w-12 h-12 border-2 border-orange-500/30 rounded-xl rotate-45 group-hover:rotate-[225deg] transition-all duration-700"></div>

            <div className="relative w-12 h-12 bg-gradient-to-br from-orange-500 via-amber-400 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/50 group-hover:scale-110 transition">
              <Code2 className="text-white" />
              <Sparkles
                className="absolute -top-1 -right-1 text-yellow-300 animate-pulse"
                size={12}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                GOVIND
              </span>
              <Zap className="text-orange-400 animate-pulse" size={16} />
            </div>
            <p className="text-[11px] tracking-widest text-orange-400/60 uppercase -mt-1">
              Chaknalwar • Full Stack Dev
            </p>
          </div>
        </button>

        {/* Desktop Links */}
        <ul className="hidden lg:flex gap-10">
          <Nav
            text="Home"
            active={location.pathname === "/"}
            onClick={() => go("/")}
          />
          <Nav
            text="About"
            active={location.pathname === "/About"}
            onClick={() => go("/About")}
          />
          <Nav
            text="Projects"
            active={location.pathname === "/Projects"}
            onClick={() => go("/Projects")}
          />
          <Nav
            text="Contact"
            active={location.pathname === "/Contact"}
            onClick={() => go("/Contact")}
          />
        </ul>

        {/* CTA */}
        <button
          onClick={() => go("/Contact")}
          className="hidden lg:flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-2xl shadow-lg shadow-orange-500/50 hover:scale-105 transition"
        >
          <Rocket size={18} />
          Hire Me
        </button>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-500 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-black/95 backdrop-blur-xl`}
      >
        <div className="px-6 py-8 space-y-4">
          <Mobile
            text="Home"
            active={location.pathname === "/"}
            onClick={() => go("/")}
          />
          <Mobile
            text="About"
            active={location.pathname === "/About"}
            onClick={() => go("/About")}
          />
          <Mobile
            text="Projects"
            active={location.pathname === "/Projects"}
            onClick={() => go("/Projects")}
          />
          <Mobile
            text="Contact"
            active={location.pathname === "/Contact"}
            onClick={() => go("/Contact")}
          />

          <button
            onClick={() => go("/Contact")}
            className="w-full py-4 mt-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-xl"
          >
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
};

const Nav = ({ text, active, onClick }) => (
  <button
    onClick={onClick}
    className={`relative font-bold uppercase tracking-wide transition ${
      active ? "text-orange-400" : "text-white/80 hover:text-white"
    }`}
  >
    {text}
    <span
      className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 transition-all ${
        active ? "w-full" : "w-0 group-hover:w-full"
      }`}
    />
  </button>
);

const Mobile = ({ text, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full py-4 px-6 rounded-xl font-bold ${
      active
        ? "bg-orange-500/20 text-orange-400 border border-orange-500/40"
        : "text-white/80 hover:bg-white/5"
    }`}
  >
    {text}
  </button>
);

export default Navbar;
