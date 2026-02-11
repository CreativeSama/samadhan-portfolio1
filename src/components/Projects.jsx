import React from "react";
import "./Projects.css";

import inotebook from "../assets/inotebook.png";
import newswave from "../assets/newswave.png";
import currency from "../assets/currency.png";
import calculator from "../assets/calculator.png";

const Projects = () => {
  return (
    <section id="projects" className="projects fade-in">

      <h2>Projects</h2>

      <div className="project-container">

        {/* iNotebook */}
        <div className="project-card">
          <img src={inotebook} alt="iNotebook" />
          <h3>iNotebook – MERN Notes App</h3>
          <p>
            Full-stack notes application with authentication,
            CRUD operations and protected routes using JWT.
          </p>
          <span>React | Node | Express | MongoDB | JWT</span>

          <div className="project-links">
            <a href="https://sam-inotebook.netlify.app" target="_blank" rel="noreferrer">Live</a>
            <a href="https://github.com/CreativeSama/inotebook" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        {/* NewsWave */}
        <div className="project-card">
          <img src={newswave} alt="NewsWave" />
          <h3>NewsWave – React News App</h3>
          <p>
            Real-time news application built using React and News API
            with dynamic rendering and category filtering.
          </p>
          <span>React | JavaScript | API Integration</span>

          <div className="project-links">
            <a href="https://stalwart-dodol-12205d.netlify.app/" target="_blank" rel="noreferrer">Live</a>
            <a href="https://github.com/CreativeSama/NewsWave" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        {/* Currency Converter */}
        <div className="project-card">
          <img src={currency} alt="Currency Converter" />
          <h3>Currency Converter</h3>
          <p>
            Real-time currency conversion using exchange rate API.
            Clean UI with responsive design.
          </p>
          <span>HTML | CSS | JavaScript | API</span>

          <div className="project-links">
            <a href="https://samcurrencyconverter.netlify.app/" target="_blank" rel="noreferrer">Live</a>
            <a href="https://github.com/CreativeSama/Currency-Converter" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        {/* Calculator */}
        <div className="project-card">
          <img src={calculator} alt="Calculator App" />
          <h3>Calculator Web App</h3>
          <p>
            Functional calculator performing arithmetic operations
            with clean and responsive UI.
          </p>
          <span>HTML | CSS | JavaScript</span>

          <div className="project-links">
            <a href="https://creativesama.github.io/calculator-app/" target="_blank" rel="noreferrer">Live</a>
            <a href="https://github.com/CreativeSama/calculator-app" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
