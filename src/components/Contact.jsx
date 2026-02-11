import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact fade-in">
      <h2>Contact Me</h2>

      <div className="contact-container">
        <p>
          I'm currently open to frontend internships and
          entry-level developer roles.
        </p>

        <div className="contact-info">
          <p><strong>Email:</strong> samadhanghalake4301@gmail.com</p>
          <p><strong>Location:</strong> Pune, India</p>
        </div>

        <div className="contact-links">
          <a
            href="https://github.com/CreativeSama"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/samadhan-ghalake-79366728a"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
