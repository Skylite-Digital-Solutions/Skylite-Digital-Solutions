import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Mainstyles/Body.css';
import AboutUs from './AboutUs';
import Services from '../Maincomponents/Services'; // Corrected to uppercase for React component
import '../../styles/color.css';
import Leadership from './Leadership';
import OurClient from './OurClients';

const images = [
  {
    url: '/Partners.png',
    text: 'Welcome to Our Service',
    route: '/our-services',
  },
  {
    url: '/Qualities.png',
    text: 'Quality Assurance Guaranteed',
    route: '/quality',
  },
  {
    url: '/Software.png',
    text: 'Your Success is Our Priority',
    route: '/success',
  },
];

const Body = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleScheduleCallClick = () => {
    navigate('/contact-us');
  };

  const handleKnowMoreClick = () => {
    navigate(images[currentSlide].route);
  };

  return (
    <div className="body-container">
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
              <button className="know-more-button" onClick={handleKnowMoreClick}>Know More</button>
              <button className="schedule-call-button" onClick={handleScheduleCallClick}>Schedule Call</button>
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

      {/* About Us Section */}
      <section>
        <AboutUs />
      </section>

      <section>
        <h2>Our Leader</h2>
        <p>We proudly serve a diverse range of clients across various industries.</p>
        <Leadership />
      </section>

      <section>
        <Services /> {/* Corrected component usage */}
      </section>

      <section>
        <h2>Our Clients</h2>
        <p>We collaborate with leading partners to deliver exceptional value to our clients.</p>
        <OurClient />
      </section>

      <section>
        <h2>And Our Clients Absolutely Love Us!</h2>
        <p>Don't just take our word for it—hear what our clients have to say about us!</p>
      </section>
    </div>
  );
};

export default Body;
