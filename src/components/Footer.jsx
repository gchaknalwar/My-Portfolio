import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">Devlorex</div>
        <p className="footer-text">
          Made by <span className="highlight">Govind Chaknalwar</span> — Full
          Stack Web Developer.
        </p>

        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/gchaknalwar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/govind-chaknalwar-b35278215/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/govindchaknalwar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>

        {/* <div className="footer-copy">
          © {new Date().getFullYear()} Govind Chaknalwar | All rights reserved.
        </div> */}
      </div>
      <div className="footer-black">
        <div className="footer-bottom">
          © 2025 <span className="highlight">Govind Chaknalwar</span> | All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
