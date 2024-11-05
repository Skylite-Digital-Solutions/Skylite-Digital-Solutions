import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ServicesStyles/QualityAssurance.css';

const QualityAssurance = () => {
    // Define the handleGetInTouch function
    const navigate = useNavigate();

      const handleGetInTouch = () => {
        navigate('/contact-us'); // Adjust the path to match your route for the Contact Us page
      };
  
  return (
    <div className="QualityAssurance" style={{ color: "black" }}>
      <h2>Our Quality Assurance Services</h2>
      <p>
        Our Quality Assurance services ensure that your applications are
        thoroughly tested and optimized for a seamless user experience. We
        specialize in comprehensive testing for performance, security, and
        functionality.
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

export default QualityAssurance;
