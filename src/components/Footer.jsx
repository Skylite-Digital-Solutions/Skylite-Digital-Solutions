import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2 className="footer-heading">Company</h2>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
            <li><a href="/blogs">Blogs</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h2 className="footer-heading">Contact Us</h2>
          <p>B2 Pune, Pune, India</p>
          <p>Phone: +91 (812) 036-3091</p>
          <p>Email: skylitedigitalsolutions@gmail.com</p>
        </div>

        <div className="footer-section">
          <h2 className="footer-heading">Follow Us</h2>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Skylite Digital Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
