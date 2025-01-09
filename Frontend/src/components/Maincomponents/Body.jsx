import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Mainstyles/Body.css';
import AboutUs from './AboutUs';
import Services from '../Maincomponents/Services'; // Corrected to uppercase for React component
import ContactUs from './ContactUs';
import '../../styles/color.css';

const images = [
  {
    url: 'https://media.istockphoto.com/id/2031594195/photo/devops-the-synchronization-concept-on-the-virtual-screen.webp?a=1&b=1&s=612x612&w=0&k=20&c=5V-JxYyyohyV0OBxF_83cF5ikDs1GvXn50axHhUNWfQ=',
    text: 'Welcome to Our Service',
    route: '/our-services',
  },
  {
    url: 'https://media.istockphoto.com/id/1158174820/photo/qa-quality-assurance-and-quality-control-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=g7fBIcIyBfRYdATMR2ugjWL5K8iE6-6nA7_1F9hWHIs=',
    text: 'Quality Assurance Guaranteed',
    route: '/quality',
  },
  {
    url: 'https://media.istockphoto.com/id/1983429400/photo/businessman-touching-standard-quality-control-certification-assurance-guarantee-for.webp?a=1&b=1&s=612x612&w=0&k=20&c=J6BODNPm4p8uBjUboGtMFytgcutfFwJOOeo_S3BYn5A=',
    text: 'Your Success is Our Priority',
    route: '/success',
  },
];

const leadership = [
  {
    name: 'Shalini Saurabh',
    title: 'CEO',
    image: 'https://via.placeholder.com/150',
    description: 'Shalini Saurabh is the visionary leader of Skylite Digital, ensuring that the company stays ahead of industry trends and always strives for excellence.',
  },
  {
    name: 'A D Saurabh',
    title: 'CTO',
    image: 'https://via.placeholder.com/150',
    description: 'A D Saurabh leads our tech team, driving innovation and ensuring that we always deliver cutting-edge technology solutions to our clients.',
  },
  {
    name: 'Rahul Kumar',
    title: 'Technical Lead',
    image: 'https://via.placeholder.com/150',
    description: 'Rahul is responsible for managing Skylite Digital’s day-to-day operations, ensuring smooth execution across all departments.',
  },
  {
    name: 'Nikhlesh Singh',
    title: 'Technical Lead',
    image: 'https://via.placeholder.com/150',
    description: 'Nikhlesh is responsible for managing Skylite Digital’s day-to-day operations, ensuring smooth execution across all departments.',
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

      <section className="leadership-container">
        <h2>Meet Our Leadership Team</h2>
        <div className="leadership">
          {leadership.map((member, index) => (
            <div key={index} className="leadership-member">
              <img src={member.image} alt={member.name} className="leadership-image" />
              <div className="leadership-info">
                <h2>{member.name}</h2>
                <h3>{member.title}</h3>
                <p>{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section>
        <AboutUs />
      </section>

      <section>
        <h2>Our Clients</h2>
        <p>We proudly serve a diverse range of clients across various industries.</p>
      </section>

      <section>
        <Services /> {/* Corrected component usage */}
      </section>

      {/* <section>
        <h2>Our Partners</h2>
        <p>We collaborate with leading partners to deliver exceptional value to our clients.</p>
      </section> */}

      <section>
        <h2>And Our Clients Absolutely Love Us!</h2>
        <p>Don't just take our word for it—hear what our clients have to say about us!</p>
      </section>
    </div>
  );
};

export default Body;
