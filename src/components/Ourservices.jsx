// KnowMore.jsx
import React from 'react';
import '../styles/Ourservices.css'; // Import styles for the Know More page
import '../styles/color.css';
import { FaCode, FaMobileAlt, FaShieldAlt, FaChartLine, FaPlug } from 'react-icons/fa'; // Example icons
import { Link } from 'react-router-dom';

const Ourservices = () => {
  const services = [
    {
      title: 'Custom Development',
      description:
        'We craft tailored software solutions to meet your unique business requirements, ensuring scalability and innovation.',
      icon: <FaCode />,
    },
    {
      title: 'Responsive Design',
      description:
        'Delivering seamless user experiences across devices with modern, adaptive designs that enhance engagement.',
      icon: <FaMobileAlt />,
    },
    {
      title: 'Quality Assurance',
      description:
        'Ensuring flawless functionality and reliability with rigorous testing methodologies for your software solutions.',
      icon: <FaShieldAlt />,
    },
    {
      title: 'Digital Marketing & SEO',
      description:
        'Boost your online presence with our strategic marketing and SEO services to drive growth and visibility.',
      icon: <FaChartLine />,
    },
    {
      title: 'API Integration',
      description:
        'Streamline your operations with efficient API integrations that connect your systems and applications.',
      icon: <FaPlug />,
    },
  ];

  return (
    <div className="Background-container-services">
      <div className="Our-services-container">
        <h2>Know More About Our Services</h2>
        <p>
          Our services are designed to empower your business in the digital era. From development to deployment, we ensure excellence at every step, leveraging the latest technologies to deliver innovative and tailored solutions.
        </p>
        <h3>Our Key Areas of Expertise</h3>
        <div className="services-list">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-icon">{service.icon}</div>
              <div className="service-content">
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p>
          Partner with us to transform your business and achieve your goals.{' '}
          <Link to="/contact-us">Contact Us</Link>
          {' '}
          today for more information!
        </p>
      </div>
    </div>
  );
};

export default Ourservices;
