import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <h1 className="aboutus-heading">About Us</h1>
      <div className="accent-line"></div>
      <p className="aboutus-content">
        Welcome to our organization! We are committed to providing top-notch services in web development, quality assurance,
        IT consultancy, and digital marketing. Our team of experts is dedicated to helping your business thrive in the digital
        landscape, with solutions tailored to your unique needs.
      </p>
      <button className="aboutus-button">Learn More</button>
    </div>
  );
};

export default AboutUs;
