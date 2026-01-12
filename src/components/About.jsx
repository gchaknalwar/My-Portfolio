import React, { useState } from "react";
import {
  Code2,
  Database,
  Server,
  Sparkles,
  Target,
  Zap,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    {
      name: "React.js",
      level: 85,
      color: "from-cyan-500 to-blue-500",
      icon: <Code2 size={18} />,
    },
    {
      name: "Node.js",
      level: 80,
      color: "from-green-500 to-emerald-500",
      icon: <Server size={18} />,
    },
    {
      name: "MongoDB",
      level: 75,
      color: "from-green-600 to-green-700",
      icon: <Database size={18} />,
    },
    {
      name: "Java (Spring Boot)",
      level: 80,
      color: "from-orange-500 to-red-500",
      icon: <Code2 size={18} />,
    },
    {
      name: "MySQL",
      level: 78,
      color: "from-blue-500 to-indigo-500",
      icon: <Database size={18} />,
    },
    {
      name: "Express.js",
      level: 82,
      color: "from-gray-600 to-gray-700",
      icon: <Server size={18} />,
    },
  ];

  const highlights = [
    {
      icon: <GraduationCap size={22} />,
      text: "Computer Engineering Graduate",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Briefcase size={22} />,
      text: "Hands-on Internship Experience",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Code2 size={22} />,
      text: "MERN & Java Full Stack Projects",
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: <Target size={22} />,
      text: "Career-Focused Developer",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0b0b0b] to-[#0f0a08] px-6 md:px-20 py-32 overflow-hidden">
      {/* Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
            <Sparkles size={16} className="text-orange-400" />
            <span className="text-orange-300 text-sm font-semibold">
              About Me
            </span>
          </div>

          <h2 className="text-6xl font-black mb-6 bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 text-transparent bg-clip-text">
            Who I Am
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A passionate Full Stack Web Developer focused on building modern,
            scalable and user-friendly web applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Hi, I'm{" "}
                <span className="text-orange-400">Govind Chaknalwar</span>
              </h3>

              <p className="text-gray-300 leading-relaxed mb-4">
                I am a{" "}
                <span className="text-orange-400 font-semibold">
                  Full Stack Web Developer
                </span>{" "}
                from Rajura, Chandrapur, Maharashtra. I have completed my
                Computer Engineering and developed multiple real-world projects
                using <span className="text-orange-400">MERN Stack</span> and{" "}
                <span className="text-amber-400">Java Spring Boot</span>.
              </p>

              <p className="text-gray-300 leading-relaxed">
                I enjoy building clean UI, secure backend systems and responsive
                applications that solve real business problems. I am constantly
                learning and improving to grow as a professional software
                developer.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 hover:scale-105 transition"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-3`}
                  >
                    <span className="text-white">{item.icon}</span>
                  </div>
                  <p className="text-white font-semibold text-sm">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT – Skills */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white flex items-center gap-3">
              <Zap className="text-orange-400" /> Technical Skills
            </h3>

            {skills.map((skill, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="flex justify-between mb-2 text-white">
                  <span>{skill.name}</span>
                  <span className="text-orange-400">{skill.level}%</span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-700`}
                    style={{
                      width: hoveredSkill === index ? `${skill.level}%` : "0%",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
