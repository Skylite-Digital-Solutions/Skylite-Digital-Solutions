import React from 'react';
import { useNavigate } from 'react-router-dom';
import ContactUs from './ContactUs';
import '../styles/AboutUs.css';
import '../styles/color.css';

const AboutUs = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/contact-us'); // Adjust the path to match your route for the Contact Us page
  };

  return (
    <div className="aboutus-page">
      {/* Container 1: About Us */}
      <div className="aboutus-container">
        <h1 className="aboutus-heading">About Us</h1>
        <div className="accent-line"></div>
        <p className="aboutus-content">
          Welcome to our organization! We are committed to providing top-notch services in web development, quality assurance,
          IT consultancy, and digital marketing. Our team of experts is dedicated to helping your business thrive in the digital
          landscape, with solutions tailored to your unique needs.
        </p>
        {/* <button className="aboutus-button" onClick={handleLearnMoreClick}>Get In Touch</button> */}
      </div>
      
      <div className="vision-mission-container">
        <div className="vision">
          <h2 className="our-vision-heading">Our Vision</h2>
          <p className="our-vision">
            To position ourselves as a global partner and preferred choice for customers by delivering leading expertise that drives value creation in specific domains.
          </p>
      </div>
      <div className="mission">
        <h2 className="our-mission-heading">Our Mission</h2>
        <p className="our-mission">
          To carve out a unique position by delivering innovative, integrated technology services supported by world-class processes and top-tier technology.
        </p>
      </div>
    </div>
    {/* Contact Us Section */}
    <section>
      <ContactUs />
    </section>
  </div>
  );
};

export default AboutUs;
