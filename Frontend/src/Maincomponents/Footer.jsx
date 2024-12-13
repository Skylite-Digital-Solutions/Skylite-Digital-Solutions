import React from 'react';
import '../styles/Mainstyles/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* First Footer Section */}
        <div className="footer-section">
          <h2 className="footer-heading">Skylite Digital Solutions</h2>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
          </ul>
        </div>

        {/* Second Footer Section */}
        <div className="footer-section">
          <h2 className="footer-heading">Contact Us</h2>
          <p>B2 Pune, Pune, India</p>
          <p>Phone: <a href="tel:+918120363091" className="contact-link">+91 (812) 036-3091</a></p>
          <p>Email: <a href="mailto:skylitedigitalsolutions@gmail.com" className="contact-link">skylitedigitalsolutions@gmail.com</a></p>
        </div>

        {/* Social and Logo Section */}
        <div className="social-logo">
          {/* Social Links */}
          <div className="social-column">
            <h2 className="footer-heading">Follow Us</h2>
            <div className="social-icons">
              <a href="https://www.facebook.com/profile.php?id=61568246071759" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://www.linkedin.com/company/skylite-digital-solutions/?viewAsMember=true" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>

          {/* Logo */}
          <div className="social-column">
            <Link to="/" className="footer-logo">
              <img src="/footerlogo.svg" alt="Company Logo" className="logo-image" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 Skylite Digital Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;