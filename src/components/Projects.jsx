import React, { useState } from "react";
import { Github, ExternalLink, Code2, Eye } from "lucide-react";
import flightBooking from "../assets/Images/flightBooking.png";
import Coffee from "../assets/Images/Coffee.png";
import vougeVoult from "../assets/Images/VougeVoult.png";
const projects = [
  {
    id: 1,
    title: "Flight Booking System",
    description:
      "A full-stack flight booking platform where users can search flights, book seats, manage bookings and admins can manage schedules and customers.",
    image: flightBooking,
    github: "https://github.com/gchaknalwar",
    demo: "#",
    tags: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    id: 2,
    title: "E-Commerce Website",
    description:
      "A complete e-commerce application with product listings, shopping cart, secure login and order management using Java backend.",
    image: vougeVoult,
    github: "https://github.com/gchaknalwar",
    demo: "#",
    tags: ["React", "Spring Boot", "MySQL"],
  },
  {
    id: 3,
    title: "Coffee Website",
    description:
      "A modern coffee website featuring hero section, member login, menu, reviews and contact form built with HTML, CSS & JavaScript.",
    image: Coffee, // yaha tu coffee site ka screenshot ya hero image daal de
    github: "https://github.com/gchaknalwar",
    demo: "#",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0b0b0b] to-[#0f0a08] px-6 md:px-20 py-32 overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-orange-500/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-amber-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
            <Code2 className="text-orange-400" size={18} />
            <span className="text-orange-300 text-sm font-semibold">
              My Projects
            </span>
          </div>

          <h2 className="text-6xl font-black mb-6 bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 text-transparent bg-clip-text">
            Featured Work
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Real-world projects built using MERN Stack and Java Full Stack,
            focusing on performance, security and clean UI.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-black/70 flex items-center justify-center transition-opacity ${
                      hoveredProject === project.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    <div className="text-center">
                      <Eye className="text-orange-400 mx-auto mb-2" size={36} />
                      <p className="text-white font-semibold">View Project</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm">{project.description}</p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl text-white font-bold hover:scale-105 transition"
                    >
                      <Github size={18} /> GitHub
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-3 border border-white/20 rounded-xl text-white hover:border-orange-400 transition"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/gchaknalwar"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-white/10 rounded-2xl text-white font-bold hover:border-orange-400 transition"
          >
            <Github size={22} /> View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
