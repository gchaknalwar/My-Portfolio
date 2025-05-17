import React from 'react'
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-left">
          <p className="intro">Hi I am</p>
          <h1 className="name">Govind Chaknalwar</h1>
          <h2 className="title">Full Stack Web Developer</h2>


          <div className="services-section">
            <div className="service-container">

              <div class="service-icon">
                <a href="https://www.instagram.com/255_boss/" target="_blank" rel="noopener noreferrer">
                  <img src="instagram.png" alt="Instagram" class="social-img" />
                </a>
              </div>

              <div className="service-icon">
                <a href="https://www.linkedin.com/in/govind-chaknalwar-b35278215/" target="_blank" rel="noopener noreferrer">
                  <img src="linkedin.png" alt="Linkedin" />
                </a>
              </div>

              <div className="service-icon">
                <a href="https://github.com/gchaknalwar" target="_blank" rel="noopener noreferrer">
                  <img src="github.png" alt="GitHub" />
                </a>
              </div>
              <div className="service-icon">
                <a href="https://x.com/255_Boss" target="_blank" rel="noopener noreferrer">
                  <img src="twitter.png" alt="Twitter" />
                </a>
              </div>
            </div>
          </div>



          <div className="buttons">
            <button className="btn-orange">Hire Me</button>
            <button className="btn-outline">Download CV</button>
          </div>

          <div className="stats">
            <div className="stat-box">
              <h3>5+</h3>
              <p>Experiences</p>
            </div>
            <div className="stat-box">
              <h3>20+</h3>
              <p>Project done</p>
            </div>
            <div className="stat-box">
              <h3>80+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="image-circle">
            <img src="profileimage.png" alt="Profile Image" />
          </div>
        </div>
      </section>

    </div>
  )
}

export default Hero
