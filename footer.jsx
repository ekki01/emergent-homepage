import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="footer-container">
        <div className="footer-content">
          <p className="footer-text">
            © {new Date().getFullYear()} Cloud Consulting - AWS. Alle Rechte vorbehalten.
          </p>
          <Link to="/impressum" className="footer-link">
            Impressum
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
