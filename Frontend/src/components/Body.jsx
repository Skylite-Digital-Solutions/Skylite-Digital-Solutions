import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/Body.css';

const images = [
  {
    url: 'https://media.istockphoto.com/id/2031594195/photo/devops-the-synchronization-concept-on-the-virtual-screen.webp?a=1&b=1&s=612x612&w=0&k=20&c=5V-JxYyyohyV0OBxF_83cF5ikDs1GvXn50axHhUNWfQ=',
    text: 'Welcome to Our Service',
  },
  {
    url: 'https://media.istockphoto.com/id/1158174820/photo/qa-quality-assurance-and-quality-control-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=g7fBIcIyBfRYdATMR2ugjWL5K8iE6-6nA7_1F9hWHIs=',
    text: 'Quality Assurance Guaranteed',
  },
  {
    url: 'https://media.istockphoto.com/id/1983429400/photo/businessman-touching-standard-quality-control-certification-assurance-guarantee-for.webp?a=1&b=1&s=612x612&w=0&k=20&c=J6BODNPm4p8uBjUboGtMFytgcutfFwJOOeo_S3BYn5A=',
    text: 'Your Success is Our Priority',
  },
];

const Body = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Function to handle the Schedule Call button click
  const handleScheduleCallClick = () => {
    navigate('/contact-us'); // Navigate to the contact us page
  };

  return (
    <div className="slider-container">
      <div className="slide">
        <img
          src={images[currentSlide].url}
          alt={`Slide ${currentSlide + 1}`}
          className="slide-image"
        />
        <div className="slide-text">
          <h2>{images[currentSlide].text}</h2>
          <div className="slider-buttons">
            <button className="know-more-button">Know More</button>
            <button className="schedule-call-button" onClick={handleScheduleCallClick}>
              Schedule Call
            </button>
          </div>
        </div>
      </div>

      <div className="slide-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Body;
