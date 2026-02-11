import React from "react";
import { Link } from "react-router-dom";
import "../components/Projects.css"; // reuse project card styling

function OtherProjects() {
  return (
    <section className="projects" style={{ paddingTop: "100px" }}>
      <h2>Other Projects</h2>

      <div className="project-container">

        {/* Tic Tac Toe */}
        <div className="project-card">
          <h3>Tic Tac Toe Game</h3>
          <p>
            Classic JavaScript logic-based game with dynamic turn handling
            and win condition detection.
          </p>
          <span>HTML | CSS | JavaScript</span>

          <div className="project-links">
            <a
              href="https://sam-tic-tac-toe-game.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>

            <a
              href="YOUR_GITHUB_LINK"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Amazon Clone */}
        <div className="project-card">
          <h3>Amazon UI Clone</h3>
          <p>
            Frontend layout clone replicating Amazon homepage design
            using pure HTML & CSS.
          </p>
          <span>HTML | CSS</span>

          <div className="project-links">
            <a
              href="https://creativesama.github.io/Amazon-clone/"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>

            <a
              href="https://github.com/CreativeSama/Amazon-clone"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

      </div>

      <div style={{ marginTop: "60px" }}>
        <Link to="/" className="more-btn">
          ← Back to Home
        </Link>
      </div>
    </section>
  );
}

export default OtherProjects;
