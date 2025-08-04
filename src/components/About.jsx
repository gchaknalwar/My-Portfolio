import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="gradient-text animate-flicker">About Me</h1>
      <p className="about-description">
        Hello! I'm <span className="highlight">Govind Chaknalwar</span>, a dedicated and enthusiastic <span className="highlight">Full Stack Web Developer</span> from Rajura, Chandrapur, Maharashtra. I specialize in building modern, scalable web applications using both the <strong>MERN Stack (MongoDB, Express, React, Node.js)</strong> and <strong>Java Full Stack technologies (Java, Spring Boot, Hibernate, JSP/Servlets)</strong>.

        <br /><br />
        With a strong foundation in both JavaScript-based and Java-based architectures, I craft responsive front-end interfaces and robust backend systems that are secure, maintainable, and high-performing. Whether it’s developing RESTful APIs, integrating databases, or deploying full-stack applications — I bring precision and creativity to every project.

        <br /><br />
        I’m passionate about building user-centric digital experiences, solving real-world problems, and continuously expanding my skill set. I love exploring design trends, staying updated with new tech, and contributing to clean, elegant codebases.

        <br /><br />
        My goal is to create seamless, impactful, and visually engaging digital solutions that not only meet business objectives but also delight users.
      </p>


      <div className="stats1">
        <div className="stat1-box">
          <h3>5+</h3>
          <p>Years of Experience</p>
        </div>
        <div className="stat1-box">
          <h3>20+</h3>
          <p>Projects Completed</p>
        </div>
        <div className="stat1-box">
          <h3>80+</h3>
          <p>Satisfied Clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;
