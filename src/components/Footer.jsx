import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Samadhan Ghalake</p>
      <p>Frontend Developer | React.js</p>
    </footer>
  );
};

export default Footer;
