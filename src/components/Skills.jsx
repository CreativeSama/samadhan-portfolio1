import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills fade-in">

      <h2>Skills</h2>

      <div className="skills-container">

        <div className="skill-box">
          <h3>Frontend</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Context API</li>
            <li>Bootstrap</li>
          </ul>
        </div>

        <div className="skill-box">
          <h3>Backend (Basic)</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>REST APIs</li>
            <li>JWT Authentication</li>
          </ul>
        </div>

        <div className="skill-box">
          <h3>Tools</h3>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>Netlify</li>
            <li>VS Code</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Skills;
