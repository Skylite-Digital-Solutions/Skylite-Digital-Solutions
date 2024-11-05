import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/Body.css';

const images = [
  {
    url: 'https://cdn.dribbble.com/userupload/3175370/file/original-9560edf6d021a75f7e780df9ff20a4e8.png?resize=1024x768',
    text: 'Welcome to Our Service',
  },
  {
    url: 'https://cdn.dribbble.com/userupload/14973980/file/original-7d9c829d6f4fc38e06650144b2226184.png?resize=1024x768',
    text: 'Quality Assurance Guaranteed',
  },
  {
    url: 'https://cdn.dribbble.com/userupload/10453555/file/original-96da84ad4ba17c8eb72b22f35f519dea.png?resize=1600x1200',
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
