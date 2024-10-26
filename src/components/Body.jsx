import React, { useState } from 'react';
import '../styles/Body.css'; // Updated CSS file

const images = [
  {
    url: 'https://via.placeholder.com/800x400.png?text=Slide+1',
    text: 'Welcome to Our Service',
  },
  {
    url: 'https://via.placeholder.com/800x400.png?text=Slide+2',
    text: 'Quality Assurance Guaranteed',
  },
  {
    url: 'https://via.placeholder.com/800x400.png?text=Slide+3',
    text: 'Your Success is Our Priority',
  },
];

const Body = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      <div className="slide">
        <img src={images[currentSlide].url} alt={`Slide ${currentSlide + 1}`} className="slide-image" />
        <div className="slide-text">
          <h2>{images[currentSlide].text}</h2>
          <div className="slider-buttons">
            <button className="know-more-button">Know More</button>
            <button className="schedule-call-button">Schedule Call</button>
          </div>
        </div>
      </div>
      <div className="slider-controls">
        <button className="slider-button" onClick={prevSlide}>Previous</button>
        <button className="slider-button" onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
};

export default Body;
