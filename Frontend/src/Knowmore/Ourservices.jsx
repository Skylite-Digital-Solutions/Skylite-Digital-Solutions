// KnowMore.jsx
import React from 'react';
import '../styles/Knowmorestyles/Ourservices.css'; // Import styles for the Know More page
import '../styles/color.css';

const Ourservices = () => {
  return (
    <div className='Background-container'>
        <div className="Our-services-container">
          <h2>Know More About Our Services</h2>
          <p>
            Our services are designed to help you succeed in the digital landscape. 
            From Web Development to Quality Assurance, we ensure that every aspect of 
            your project is handled with care and expertise. We utilize the latest technologies 
            and methodologies to deliver exceptional results tailored to your business needs.
          </p>
      <h3>Our Key Areas of Expertise:</h3>
      <ul>
        <li>Custom Development</li>
        <li>Responsive Design</li>
        <li>Quality Assurance</li>
        <li>Digital Marketing & SEO</li>
        <li>API Integration</li>
      </ul>
      <p>
        Partner with us to elevate your business and achieve your goals. 
        Contact us today for more information!
      </p>
    </div>
    </div>
  );
};

export default Ourservices;