import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2 className="footer-heading">Company</h2>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h2 className="footer-heading">Contact Us</h2>
          <p>B2 Pune, Pune, India</p>
          <p>Phone: <a href="tel:+918120363091" className="contact-link">+91 (812) 036-3091</a></p>
          <p>Email: <a href="mailto:skylitedigitalsolutions@gmail.com" className="contact-link">skylitedigitalsolutions@gmail.com</a></p>

        </div>

        <div className="footer-section">
          <h2 className="footer-heading">Follow Us</h2>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.linkedin.com/company/skylite-digital-solutions/?viewAsMember=true" target="_blank" rel="noopener noreferrer">LinkedIn</a>
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
