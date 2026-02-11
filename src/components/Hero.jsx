import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero fade-in">

      <div className="floating-shape shape1"></div>
      <div className="floating-shape shape2"></div>
      <div className="floating-shape shape3"></div>

      <h1>
        Hi, I'm Samadhan Ghalake <span className="wave">👋</span>
      </h1>

      <h2>Frontend Developer | React.js</h2>

      <p>
        I build responsive, user-focused web applications using
        React, JavaScript, HTML, and CSS.
      </p>

      <div className="hero-buttons">
        <a href="/#projects" className="btn primary">
          View Projects
        </a>

        <a href="/Samadhan-Resume.pdf" download className="btn outline">
          Download Resume
        </a>
      </div>

    </section>
  );
};

export default Hero;
