import React from "react";
import "./Project.css";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "A full-stack e-commerce platform...",
    image: "flightBooking.png",
    github: "https://github.com/gchaknalwar/LandingPage",
  },
  {
    id: 2,
    title: "Social Media App",
    description: "A real-time chat and social sharing app built with MERN stack.",
    image: "VougeVoult.png",
    github: "https://github.com/govindchaknalwar/social-media-app",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "My personal portfolio website showcasing skills, projects, and blog.",
    image: "Balajicollection.png",
    github: "https://github.com/govindchaknalwar/portfolio",
  },
];


const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="section-title">My Projects</h2>
      <p className="project-para">I have worked on a variety of projects that demonstrate my skills as a Full Stack Web Developer. From building scalable e-commerce platforms to real-time social media applications, each project reflects my dedication to writing clean, efficient code and creating user-friendly experiences. I focus on combining modern technologies like React, Node.js, and MongoDB with responsive design and performance optimization. These projects not only showcase my technical expertise but also my passion for solving real-world problems through innovative solutions. Feel free to explore more of my work on my GitHub profile linked below!</p>
      <div className="projects-grid">
        {projects.map(({ id, title, description, image, github }) => (
          <div key={id} className="project-card">
            <div className="project-image-wrapper">
              <img src={image} alt={title} className="project-image" />
            </div>
            <div className="project-content">
              <h3>{title}</h3>
              <p>{description}</p>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
