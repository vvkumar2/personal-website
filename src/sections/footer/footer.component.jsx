import React from "react";
import './footer.styles.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <p className="footer-text">
          <a className="footer-link" href="https://github.com/vvkumar2" rel="noreferrer" target="_blank">GitHub</a> • <a className="footer-link" href="https://www.linkedin.com/in/varunkumar5/" rel="noreferrer" target="_blank">LinkedIn</a> • <a className="footer-link" href="mailto:vvkumar1@g.ucla.edu">Email</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;

