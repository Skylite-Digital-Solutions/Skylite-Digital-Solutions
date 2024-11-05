import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ServicesStyles/ItConsultancy.css';

const ItConsultancy = () => {
    // Define the handleGetInTouch function
    const navigate = useNavigate();

      const handleGetInTouch = () => {
        navigate('/contact-us'); // Adjust the path to match your route for the Contact Us page
      };

  return (
    <div className="ItConsultancy" style={{ color: "black" }}>
      <h2>Our IT Consultancy Services</h2>
      <p>
        Our IT Consultancy services are designed to bring your ideas to life. We
        specialize in creating solutions that are responsive, user-friendly, and
        optimized for both desktop and mobile devices.
      </p>
      
      <h3>Technologies Used:</h3>
      <ul>
        <li><strong>Frontend</strong>: HTML5, CSS3, JavaScript, React.js, Angular, Vue.js</li>
        <li><strong>Backend</strong>: Node.js, Express.js, Django, Ruby on Rails</li>
        <li><strong>Database</strong>: MongoDB, PostgreSQL, MySQL, Firebase</li>
      </ul>
  
      <h4>Our Services:</h4>
      <ul>
        <li>Custom Website Design</li>
        <li>E-commerce Development</li>
        <li>Content Management Systems (CMS): WordPress, Joomla, and custom CMS solutions</li>
      </ul>

      {/* Button container for centering */}
      <div className="button-container">
        <button onClick={handleGetInTouch} className="get-in-touch-button">
          Get in Touch
        </button>
      </div>
      
    </div>
  );
};

export default ItConsultancy;
